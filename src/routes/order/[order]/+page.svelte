<script>
// @ts-nocheck
    import Order from '$lib/components/Order.svelte';
    import { doc, getDoc } from "firebase/firestore";
    import { db } from '$lib/firebase';
    import { page } from '$app/stores';
	import Contact from '$lib/components/Contact.svelte';
    /**
	 * @type {import("@firebase/firestore").DocumentData | null}
	 */
    let docData = $state(null)
    async function getDocBydoc(){
        console.log("running")
        const docRef = doc(db, "orders", $page.params.order);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            docData = docSnap.data()
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    $effect(() => {
        getDocBydoc()
        localStorage.removeItem("products")
    })
</script>
<h1 class="text-center py-3 text-2xl">Kiitos tilauksesta! Tilaus käsitellään mahdollisimman nopeasti.</h1>
{#if docData}
<Order {...docData}></Order>
{:else}
<p>Ladataan tilaus dataa...</p>
{/if}
<Contact></Contact>