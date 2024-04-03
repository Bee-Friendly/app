import { formatFileName } from '$lib/server/utils';
import { writeFile } from 'fs/promises';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function POST({ cookies, request, locals }) {
    const { username, id } = locals.user;
    console.log('uploaded file from ', locals.user.username)
    
    const data = await request.formData();

    /** @type {File} */
    const file = data.get('file');

    try {
        console.log('writing file to disc');
        const date = new Date();

        await writeFile(`static/uploaded-videos/${formatFileName(date, username, id)}`, new Uint8Array(await file.arrayBuffer()));
        console.log('file written successfully');
    } catch(e) {
        console.error('error writing file', e);
    }

    //HOW CAN I GET and save the file locally with writeFileSync?

    return new Response({
        success: true
    });
}