// +page.server.ts
import { lucia } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";

export const load = async (event) => {
	if (!event.locals.user) {
		redirect(302, "/login");
	} else {
		console.log('I was there');
	}
	// ...
};