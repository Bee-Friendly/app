<script>
    import { currentToast } from "$lib/toast";
</script>

<slot>

</slot>

{#if $currentToast != null}
    <p class="toast">{$currentToast}</p>
{/if}

<style>
    p {
        position: fixed;
        bottom: 0;
        left: 1em;
        right: 1em;
        background-color: black;
        color: white;
        line-height: 2em;
        padding: 5px;
        height: 2em;
    }
</style>