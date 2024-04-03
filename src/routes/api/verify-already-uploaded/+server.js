import { formatFileName } from '$lib/server/utils';
import { access } from 'fs/promises';

/** @type {import("@sveltejs/kit").RequestHandler} */
export async function GET({ locals }) {
    const date = new Date();
    const { username, id } = locals.user;

    try {
        console.log(`static/uploaded-videos/${formatFileName(date, username, id)}`);
        await access(`static/uploaded-videos/${formatFileName(date, username, id)}`);
        return new Response('true');
    }
    catch(e) {
        return new Response('false');
    }
}