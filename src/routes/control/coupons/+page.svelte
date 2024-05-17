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
		const foundItem = data.categories.find(item => item.id === coupon.categoryID);
		if (foundItem){
			coupon.category = foundItem.name
		} else{
			coupon.category = "kaikki"
		}
        coupon.name.trim().toLowerCase()
		if (!coupon.id){
			coupon.id = window.crypto.randomUUID();
		}
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
		setTimeout(async() => {
			// @ts-ignore
			coupons = await fetchDocuments('coupons');
		},300);
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
			Nimi:
			<input class="input bg-base-300" type="text" bind:value={coupon.name} />
		</label>
		<label class="label"
			>Jos haluat vain yhdelle kategorialle toimivan:
			<select class="select w-full bg-base-300" bind:value={coupon.categoryID}>
				<option selected value="any">Kaikki</option>
				{#each data.categories as category}
					<option value={category.id}>{category.name}</option>
				{/each}
			</select>
        </label>
			<label class="label">
				type:
				<select class="select w-full bg-base-300" bind:value={coupon.type}>
					<option value="fixed">Kiinteä</option>
					<option value="percentage">Prosentti</option>
				</select>
			</label>
			<label class="label">
				määrä:
				<input class="input bg-base-300" type="number" bind:value={coupon.amount} />
			</label>
			<label class="label">
				minimi yhteishinta että toimii
				<input class="input bg-base-300" type="number" bind:value={coupon.minTotal} />
			</label>
			<label>Paina jos alennus kuponki pitää toimia valmiiksi alennettuihin tuotteisiin
				<input class="checkbox-primary" type="checkbox" bind:checked={coupon.discount}> 
			</label>
			<label>STRIPE ID jos käytät siellä luotua koodia muuten tyhjä
				<input class="checkbox-primary" type="text" bind:value={coupon.id}> 
			</label>
			<button class="btn btn-secondary" type="submit">Lisää</button>
		
	</form>
</div>
<div class="grid-container gap-2 mt-5 mx-3">
    {#each coupons as c, index}
    <div class="grid rounded-md grid-cols-1 place-items-center text-2xl bg-secondary">
        <p>Nimi: {c.name}</p>
        <p>tyyppi: {c.type}</p>
        <p>määrä: {c.amount}</p>
        <p>Kategoria: {c.category}</p>
		<p>Toimii valmiiks alennettuihin tuotteisiin: {c.discount}</p>
		<p>minimi arvo: {c.minTotal}</p>
        <button class="btn my-2 bg-primary" onclick={() => deleteLocal(c.id,index)}>Poista</button>
    </div>
    {/each}
</div>
<style>
    input{
        margin-left: 5px;
        padding: 10px;
    }
</style>