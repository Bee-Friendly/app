import { readdir } from 'fs/promises';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const allVideos = await readdir('static/uploaded-videos');
    const slicedVideosURL = allVideos.slice(-4).map(name => {
        return {
            id: name,
            url: '/uploaded-videos/' + name,
            author: name.split('_')[1].split('-')[0],
            date: name.split('_')[0]
    
        }
    });

    console.log(slicedVideosURL);

	return {
		latestVideos: slicedVideosURL
	};
}