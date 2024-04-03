<script>
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { ChevronsRight } from 'lucide-svelte';
    import TopBar from '$lib/TopBar.svelte';

    const amount = tweened(0, { duration: 1500, easing: cubicOut });
    $amount = 5142;

    /** @type {import('./$types').PageData} */
    export let data;

    console.log(data);
</script>

<TopBar text='Home' />

<main>
    <a href="./gifts">
        <header class="points-box">
            <p>
                Vous avez <span id="amount">{Math.round($amount)}</span> points
            </p>
            <div class="icon">
                <ChevronsRight />
            </div>
        </header>
    </a>

    <section>
        <h2>Dernières vidéos</h2>

        <div class="video-carousel">
            {#each data.latestVideos as videoData}
                <a href="./player?video={videoData.id}">
                    <figure>
                        <video src={videoData.url}></video>
                        <figcaption>
                            <span class="author">
                                {videoData.author}
                            </span>
                            <p class="title">
                                {videoData.date}
                            </p>
                        </figcaption>
                    </figure>
                </a>
            {/each}
        </div>
    </section>
</main>

<style>
    a {
        color: white;
        text-decoration: none;
        display: block;
    }

    header.points-box {
        height: 5em;
        background: linear-gradient(145deg, rgba(195,34,191,1) 0%, rgba(253,45,45,1) 100%);
        border-radius: 15px;
        display: grid;
        grid-template-columns: auto 3em;
        align-items: center;
        justify-items: center;
        color: white;
    }

    .video-carousel {
        overflow: scroll;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: .5em;
    }

    .video-carousel figure {
        margin: 0;
        display: grid;
        grid-template-rows: 1fr 4em;
        border: 1px solid black;
        overflow: hidden;
    }

    .video-carousel figure video {
        width: 100%;
        aspect-ratio: 4/6;
        background-color: black;
        object-fit: cover;
        grid-row: 1 / 3;
        grid-column: 1;
    }

    .video-carousel figure figcaption {
        grid-row: 2;
        grid-column: 1;
        color: white;
        background: linear-gradient(transparent, black);
    }

    .video-carousel figcaption .title, .video-carousel .author {
        margin: 0;
        margin-inline: 5px;
        text-align: justify;
    }
</style>