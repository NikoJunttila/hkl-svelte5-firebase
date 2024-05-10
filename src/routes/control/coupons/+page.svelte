<script>
	import { fetchDocuments, createSomething, deleteStuff } from '$lib/firebaseFuncs';
    import { notifications } from '$lib/stores/notifications.svelte';
	/** @type {import('./$types').PageData} */
	// @ts-ignore
	let { data } = $props();
	/** @type {import("$lib/customTypes").Coupon[]}*/
	let coupons = $state([]);
	async function createCoupon() {
		// @ts-ignore
		const foundItem = data.categories.find(item => item.id === idToFind);
		if (foundItem){
			coupon.category = foundItem.name
		} else{
			coupon.category = "idk"
		}
        coupon.name.trim().toLowerCase()
		coupon.id = window.crypto.randomUUID();
		createSomething('coupons', coupon, coupon.id);
        notifications.success("New coupon added",5000)
		coupon = {
		name: '',
		type: '',
		amount: 0,
        category: "",
		categoryID: "",
        id: "",
		discount:false,
		minTotal:0
		};
		// @ts-ignore
        coupons = await fetchDocuments('coupons');
	}

	let coupon = $state({
		name: '',
		type: '',
		amount: 0,
        category: "",
		categoryID: "",
        id: "",
		discount:false,
		minTotal:0
	});
    	/**
	 * @param {string | number} id
     * @param {number} i
	 */
    async function deleteLocal(id,i){
		await deleteStuff('coupons', id)
        coupons.splice(i,1)
	}
	// @ts-ignore
	$effect(async () => {
		// @ts-ignore
		coupons = await fetchDocuments('coupons');

	});
</script>

<div class="grid place-items-center">
	<form onsubmit={createCoupon} class="grid gap-3 max-w-80">
		<label class="label">
			name:
			<input class="input bg-base-300" type="text" bind:value={coupon.name} />
		</label>
		<label class="label"
			>Category:
			<select class="select w-full bg-base-300" bind:value={coupon.categoryID}>
				<option value="any">any</option>
				{#each data.categories as category}
					<option value={category.id}>{category.name}</option>
				{/each}
			</select>
        </label>
			<label class="label">
				type:
				<select class="select w-full bg-base-300" bind:value={coupon.type}>
					<option value="fixed">fixed</option>
					<option value="percentage">percentage</option>
				</select>
			</label>
			<label class="label">
				amount:
				<input class="input bg-base-300" type="number" bind:value={coupon.amount} />
			</label>
			<label class="label">
				minium total for it to work:
				<input class="input bg-base-300" type="number" bind:value={coupon.minTotal} />
			</label>
			<label>check this if coupon should work with already discounted items
				<input class="checkbox-primary" type="checkbox" bind:checked={coupon.discount}> 
			</label>
			<button class="btn" type="submit">Create</button>
		
	</form>
</div>
<div class="grid-container mt-5">
    {#each coupons as c, index}
    <div class="grid grid-cols-1 place-items-center text-2xl bg-base-300">
        <p>name: {c.name}</p>
        <p>type: {c.type}</p>
        <p>amount: {c.amount}</p>
        <p>category: {c.category}</p>
		<p>Apply to already discounted: {c.discount}</p>
        <button class="btn my-2 bg-secondary" onclick={() => deleteLocal(c.id,index)}>Delete</button>
    </div>
    {/each}
</div>
<style>
    input{
        margin-left: 5px;
        padding: 10px;
    }
</style>