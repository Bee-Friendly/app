<script>
    export let label = '';
    export let path;

    import { page } from '$app/stores';

    $: current = $page.route.id == path;
</script>

<a href={path} class:current>
    <li>
        <slot>
            <!-- Icon sits here -->
        </slot>
        <span class="label">
            {label}
        </span>
    </li>
</a>

<style>
    a {
        text-decoration: none;
        color: black;
        transition: all .2s;
        /*background: radial-gradient(circle, transparent 1%, lightskyblue 1%) center/15000%;*/
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    a.current {
        color: lightskyblue;
    }

    li {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li .label {
        font-size: .6em;
    }

    a:active {
        background-size: 100%;
        transition: background 0s;
    }
</style>