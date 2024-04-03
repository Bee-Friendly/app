<script>
    import { page } from "$app/stores";

    const videoId = $page.url.searchParams.get('video');
</script>

<main>
    <div class="test-swipe">
        <div class="no"></div>
        <!-- svelte-ignore a11y-media-has-caption -->
        <video autoplay loop src={'/uploaded-videos/' + videoId}></video>
        <div class="yes"></div>
    </div>
</main>

<style>
    main {
        padding: 0;
        border-radius: 0;
        background-color: black;
        display: grid;
        align-content: center;
        overflow: hidden;
    }

    .yes {
        scroll-snap-align: start;
    }

    .test-swipe {
        overflow: scroll;
        display: grid;
        grid-template-columns: 30% 100% 30%;
        scroll-snap-type: x mandatory;
        scroll-snap-stop: always;
    }

    .test-swipe video {
        scroll-snap-align: end;
        scroll-snap-stop: always;
    }

    video {
        width: 100%;
        aspect-ratio: 9/16;
        object-fit: cover;
        border: 1px solid red;
    }
</style>