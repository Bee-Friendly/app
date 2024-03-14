<script>
    import TopBar from '$lib/TopBar.svelte';
import {
        User, Settings2, FileText, Info
    } from 'lucide-svelte';
</script>

<TopBar text="Settings" />

<main>
    <ul>
        <li><a href="/app/settings/profile"><User /> <span>Profile</span></a></li>
        <li><a href="/app/settings/preferences"><Settings2 /> <span>Preferences</span></a></li>
        <li><a href="/app/settings/tos"><FileText /> <span>Terms of Service</span></a></li>
        <li><a href="/app/settings/about"><Info /> <span>About</span></a></li>
    </ul>
</main>

<style>
    main {
        grid-row: main;
        padding: 1em;
    }

    ul {
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: .75em;
    }

    li {
        height: 3.5em;
        border: 1px solid lightgray;
        border-radius: 10px;
    }

    li a {
        height: 100%;
        display: grid;
        grid-template-columns: 48px 1fr;
        align-items: center;
        justify-items: center;
        
        color: black;
        text-decoration: none;
    }

    li a span {
        width: 100%;
    }

    a::after {
        content: '>';
        height: 3em;
        display: grid;
        align-items: center;
        position: absolute;
        right: 2em;
    }
</style>