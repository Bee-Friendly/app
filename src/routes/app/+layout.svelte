<script>
    import {
        Home, CalendarDays, PlusCircle, Gift, Settings
    } from 'lucide-svelte';

    import NavElement from './NavElement.svelte';
</script>

<div id="main-layout-wrapper">
    <slot>
        
    </slot>

    <nav>
        <ul>
            <NavElement path="home" label="Home">
                <Home />
            </NavElement>

            <NavElement path="calendar" label="Calendar">
                <CalendarDays />
            </NavElement>

            <NavElement path="add">
                <PlusCircle size={32} />
            </NavElement>

            <NavElement path="gifts" label="Rewards">
                <Gift />
            </NavElement>

            <NavElement path="settings" label="Settings">
                <Settings />
            </NavElement>
        </ul>
    </nav>
</div>

<style>
    /*
        I should probably add a shadow on the top later
    */
    #main-layout-wrapper {
        display: grid;
        grid-template-rows: [header-start] auto [header-end main-start] 1fr [main-end bottom-start] 56px [bottom-end];
        height: 100vh;
        background-color: #FFDF1E;
    }

    nav {
        grid-row: bottom;
        border-top: 1px solid lightgray;
        background-color: white;
        grid-row: bottom;
    }

    nav ul {
        height: 100%;
        padding: 0;
        margin: 0;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        align-items: center;
    }
</style>