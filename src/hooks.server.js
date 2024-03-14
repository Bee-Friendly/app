// src/hooks.server.ts
import { lucia } from "$lib/server/auth";

/**
 * 
 * @param {import("@sveltejs/kit").Handle} param0 
 * @returns 
 */
export const handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get(lucia.sessionCookieName);
	console.log('Handle executed !');
	if (!sessionId) {
		event.locals.user = null;
		event.locals.session = null;
		console.log('NULL !');
		return resolve(event);
	}

	const { session, user } = await lucia.validateSession(sessionId);
	if (session && session.fresh) {
		const sessionCookie = lucia.createSessionCookie(session.id);
		// sveltekit types deviates from the de-facto standard
		// you can use 'as any' too
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes
		});
	}
	if (!session) {
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes
		});
	}

	console.log('user', user);

	event.locals.user = user;
	event.locals.session = session;
	return resolve(event);
};
