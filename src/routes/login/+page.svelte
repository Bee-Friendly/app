<script>
    import { enhance } from "$app/forms";
    import { displayToast } from "$lib/toast";

    /**
     * @type {import("./$types").ActionData}
     */
    export let form;
    $: if(form?.message != undefined) {
        displayToast(form?.message);
    }
</script>

<main>
    <form method="POST" use:enhance>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Login" />
    </form>
    
</main>

<style>
    main {
        height: 100%;
        display: grid;
        grid-template-rows: 20%;
        align-content: center;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    form input {
        height: 2.5em;
        border-radius: 8px;
        border: 1px solid grey;
    }

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
