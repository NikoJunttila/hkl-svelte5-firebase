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
    const q = query(collectionRef, where("payment", '==', "maksettu"),where("status","==",processing));
    try {
        const snapshot = await getDocs(q);
        const returnVal = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return returnVal
    } catch (error) {
        console.error('Error fetching documents:', error);
    }
    return [];
}
let orderStatus = $state("käsitellään")
// @ts-ignore
$effect(async()=> {
    orders = await fetchOrders(orderStatus)
})
</script>
<div class="flex flex-col justify-center pb-5 items-center">
    <select bind:value={orderStatus}>
        <option value="käsitellään">Uudet tilaukset</option>
        <option value="done">Käsitellyt tilaukset</option>
    </select>
    <div class="grid-container py-4 gap-3">
        {#each orders as order}
        <div class={order.status == "käsitellään" ? 'bg-red-500' : 'bg-green-400'}>
            <div class="card text-black p-5 ">
                <a href="/control/orders/{order.orderNumber}">
                    <p>Tilaus#{order.orderNumber}</p>
                    <p>Nimi: {order.name}</p>
                    <p>Maksu: {order.payment}</p>
                    <p>Tilanne: {order.status}</p>
                </a>
            </div>
        </div>
        {/each}
    </div>

</div>