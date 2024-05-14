<script>
// @ts-nocheck
	import { db } from '$lib/firebase';
	import {
		collection,
		getDocs,
		query,
		where,
	} from 'firebase/firestore';
    /**
	 * @type {import("@firebase/firestore").DocumentData}
	 */
	let orders = $state([]);
    /**
	 * @param {string} processing
	 */
    async function fetchOrders(processing) {
    const collectionRef = collection(db, "ordersAdmin");
    const q = query(collectionRef, where("payment", '==', "paid"),where("status","==",processing));
    try {
        const snapshot = await getDocs(q);
        const returnVal = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return returnVal
    } catch (error) {
        console.error('Error fetching documents:', error);
    }
    return [];
}
let orderStatus = $state("processing")
// @ts-ignore
$effect(async()=> {
    orders = await fetchOrders(orderStatus)
})
</script>
<div class="flex flex-col justify-center pb-5 items-center">
    <select bind:value={orderStatus}>
        <option value="processing">New payments</option>
        <option value="done">Processed payments</option>
    </select>
    <div class="grid-container py-4 gap-3">
        {#each orders as order}
        <div class={order.status == "processing" ? 'bg-red-500' : 'bg-green-400'}>
            <div class="card text-black p-5 ">
                <a href="/control/orders/{order.orderNumber}">
                    <p>order#{order.orderNumber}</p>
                    <p>name: {order.name}</p>
                    <p>payment: {order.payment}</p>
                    <p>status: {order.status}</p>
                </a>
            </div>
        </div>
        {/each}
    </div>

</div>