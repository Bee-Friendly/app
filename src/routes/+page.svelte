<script>
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { ChevronsRight } from 'lucide-svelte';
    import TopBar from '$lib/TopBar.svelte';

    const amount = tweened(0, { duration: 1500, easing: cubicOut });
    $amount = 5142;
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
            <img src="https://picsum.photos/108/192?random=1" alt="some thumbnail">
            <img src="https://picsum.photos/108/192?random=2" alt="some thumbnail">
            <img src="https://picsum.photos/108/192?random=3" alt="some thumbnail">
            <img src="https://picsum.photos/108/192?random=4" alt="some thumbnail">
            <img src="https://picsum.photos/108/192?random=5" alt="some thumbnail">
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

    .video-carousel img {
        width: 100%;
    }
</style>