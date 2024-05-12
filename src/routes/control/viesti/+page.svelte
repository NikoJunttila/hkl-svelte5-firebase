<script>
	import { doc, updateDoc } from 'firebase/firestore';
    import {db} from "$lib/firebase"
	import { fetchDocuments, createSomething } from '$lib/firebaseFuncs.js';
	import { notifications } from '$lib/stores/notifications.svelte';

    let textCurrent = $state("")
    let text = $state("")

    // @ts-ignore
    $effect(async()=> {
        const full = await fetchDocuments("storetext")
        // @ts-ignore
        textCurrent = full[0].text
    })
   async function updateText(){
        const ref = doc(db,"storetext","e468b4cb-bc79-44c4-a3b9-6a286b4f6cb4")
        await updateDoc(ref,{text:text})
        notifications.success("kauppa teksti päivitetty",4000)
        textCurrent = text
        text = ""
    }
/*     let textObj = $state({
        text:"",
        id:""
    })
    function create(){
        const idCrypt = window.crypto.randomUUID();
        createSomething("storetext",textObj,idCrypt)
        notifications.success("lisätty uusi",4000)
    } */
</script>
<div class="flex justify-center items-center flex-col">
    <h1 class="my-2 font-bold text-2xl">kaupan teksti: {textCurrent}</h1>
    <form class="form-control">
        <label class="label">
            uusi teksti kauppaa varten:
            <textarea class="textarea textarea-accent p-2 m-2 bg-base-200" rows="4" bind:value={text}></textarea>
            <button class="btn btn-secondary" onclick={() => updateText()}>päivitä</button>
        </label>
    </form>
</div>
