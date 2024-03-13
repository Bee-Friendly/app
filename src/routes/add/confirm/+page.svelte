<script>
    const src = sessionStorage.getItem('video-preview-url');
</script>

<main>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video controls id="video" {src}>

    </video>
    <button>
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