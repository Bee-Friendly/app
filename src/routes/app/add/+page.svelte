<script>
    import { goto } from "$app/navigation";
    import { onDestroy, onMount } from "svelte";

    // verifying if today's video already exists
    onMount(async () => {
        const alreadyUploadedToday = await fetch('/api/verify-already-uploaded').then(r => r.text());

        console.log(alreadyUploadedToday);

        if(alreadyUploadedToday === 'true') {
            confirm('Warning : you already uploaded a video today !\nIf you upload another video, it will replace the current one.');
        }
    });

    /** @type {MediaStream} */
    let stream = null;
    /**
     * @type {MediaRecorder}
     */
    let recorder = null;

    let recording = false;

    let buttonElement;

    onDestroy(() => {
        stream?.getTracks().forEach(t => t.stop());
    });

    /**
     * 
     * @param {MediaStreamConstraints} constraints
     */
    async function getMedia(constraints) {
        try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
            console.log(stream);
            /* use the stream */

            recorder = new MediaRecorder(stream);
            return stream;
        } catch (err) {
            /* handle the error */
            console.error(err);
        }
    }

    const chunks = [];

    function startRecording() {
        recorder.ondataavailable = e => {
            chunks.push(e.data);
        }

        recorder.start();
        recording = true;
        console.log('recording !');

    }
    
    let debugElem;

    function stopRecording() {
        recorder.onstop = e => {
            const blob = new Blob(chunks, { type: "video/webm" });
            const url = URL.createObjectURL(blob);
            sessionStorage.setItem('video-preview-url', url);
            goto('add/confirm');
        }

        recorder.stop();
        recording = false;
    }
    
    function srcObject(node, stream) {
        node.srcObject = stream;
        return {
            update(newStream) {
                if (node.srcObject != newStream) {
                    node.srcObject = newStream
                }
            }
        }
    }

</script>

<main>
    <!-- svelte-ignore a11y-media-has-caption -->
    {#await getMedia({ video: { aspectRatio: 16/9, facingMode: 'environment', width: 1920, height: 1080 }, audio: true })}
        <h1>Chargement</h1>
    {:then stream}
        <video id="cam-stream" use:srcObject={stream} autoplay>
    
        </video>
    {:catch error}
        {error}
    {/await}
    
    <div id="controls">
        {#if recording}
            <button id="toggle-capture" class="stop" on:click={stopRecording} bind:this={buttonElement}></button>
        {:else}
            <button id="toggle-capture" class="start" on:click={startRecording} bind:this={buttonElement}></button>
        {/if}
    </div>

</main>

<style>
    main {
        display: grid;
        align-items: center;
        background-color: black;
        overflow: hidden;
        padding: 0;
    }
    #cam-stream {
        width: 100%;
        aspect-ratio: 9/16;
        object-fit: cover;
    }

    #controls {
        position: fixed;
        bottom: 56px;
        width: 100%;
        height: 112px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #toggle-capture {
        width: 56px;
        height: 56px;
        border-radius: 100%;
        background-color: white;
        border: 7px solid lightgray;
    }

    #toggle-capture:active {
        opacity: 0.9;
    }

    #toggle-capture.stop {
        background-color: red;
    }
</style>