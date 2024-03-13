<script>
    import TopBar from '$lib/TopBar.svelte';
    import { Datepicker, InlineCalendar } from 'svelte-calendar';

    let store;
    $: birthday = $store?.selected.toDateString() == "Sat Mar 16 2024";
</script>

<TopBar text="Calendar" />

<main>
    <section>
        {#if !birthday}
            <p>
                En gros sur cette page on peut voir pour chaque jour quel était le défi du jour et la vidéo qu'on a faite.
            </p>
        {:else}
            <p>
                Si vous voyez ce message, vous savez quand me souhaiter mon anniv 👀
            </p>
        {/if}
    </section>

    <InlineCalendar bind:store />
</main>

<style>
    main {
        padding: 0;
        display: grid;
        grid-template-rows: fill 1fr;
    }
</style>