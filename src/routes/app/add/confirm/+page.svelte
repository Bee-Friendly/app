<script>
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import { displayToast } from "$lib/toast";

    const src = sessionStorage.getItem('video-preview-url');

    async function postVideo() {
        const blob = await fetch(src).then(r => r.blob());

        console.log(blob);

        const data = new FormData();

        data.set('file', blob, 'uploaded-video.webm');

        try {
            console.log('uploading');
            await fetch('/app/add/confirm', { method: 'POST', body: data });
            console.log('uploaded');
            goto('/');
            displayToast('Video uploaded successfully');
        } catch(e) {
            console.error('Failed uploading', e);
        }
    }
</script>

<main>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video controls id="video" {src}>

    </video>
    <button on:click={postVideo}>
        Post
    </button>
</main>

<style>
    main {
        display: grid;
        grid-template-rows: 1fr auto;
        align-items: center;
        background-color: black;
        overflow: hidden;
    }
    video {
        width: 100%;
        object-fit: cover;
    }

    button {
        height: 56px;
        border-radius: 10px;
        font-size: 1.75em;
        font-weight: bold;
        background-color: #FFDF1E;
    }
</style>