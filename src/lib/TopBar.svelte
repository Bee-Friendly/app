<script>
    export let text = 'no-title';
</script>

<header>
    <h1>{text}</h1>
</header>

<style>
    header {
        grid-row: header;
        height: 56px;
        padding-left: 1em;
        display: grid;
        align-items: center;
    }

    h1 {
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>