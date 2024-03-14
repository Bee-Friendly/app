// src/lib/server/auth.ts
import { Lucia } from "lucia";
import { dev } from "$app/environment";

import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";

import { db } from '$lib/server/db';

const adapter = new BetterSqlite3Adapter(db, {
	user: "user",
	session: "session"
});

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			username: attributes.username
		};
	}
});
