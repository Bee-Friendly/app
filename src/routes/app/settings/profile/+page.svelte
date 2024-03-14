<script>
    import TopBar from '$lib/TopBar.svelte';

    /** @type {import('./$types').PageData} */
	export let data;
</script>

<TopBar text="Settings > Profile" />

<main>
    Logged in as <strong>{ data.user.username }</strong>

    <form method="POST">
        <button>Log out</button>
    </form>
</main>