<script>
// @ts-nocheck

    import { db } from '$lib/firebase';
    import { doc, writeBatch, getDoc } from 'firebase/firestore';
    import AdminOrder from "$lib/components/AdminOrder.svelte";
    import { page } from '$app/stores';
	import { notifications } from '$lib/stores/notifications.svelte';
    /**
	 * @type {import("@firebase/firestore").DocumentData | null}
	 */
     let docData = $state(null)
    async function getDocBydoc(){
        const docRef = doc(db, "ordersAdmin", $page.params.slug);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            docData = docSnap.data()
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }
   async function updateData(){
    try{
        const batch = writeBatch(db);
        const orderRef = doc(db, 'orders', $page.params.slug);
        const orderAdminRef = doc(db, 'ordersAdmin', $page.params.slug);
        batch.update(orderRef, {
            status: 'done'
        });
        batch.update(orderAdminRef, {
            status: 'done'
        });
        await batch.commit();
        docData.status = "done"
        notifications.success("updated order",3000)
    } catch (e){
        notifications.error(`error:${e}`,3000)
    }
    }
    $effect(() => {
        getDocBydoc()
    })
</script>
<div class="flex items-center justify-center flex-col">
    {#if docData}
    <div class="m-3">
        <AdminOrder {...docData}></AdminOrder>
    </div>
    {/if}
    <button onclick={updateData}>Mark as Done</button>
</div>


