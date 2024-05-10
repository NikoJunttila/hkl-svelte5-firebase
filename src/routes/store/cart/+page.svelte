<script>
	import { fade } from 'svelte/transition';
	import {notifications} from "$lib/stores/notifications.svelte"
	import { fetchDocumentsWhere } from '$lib/firebaseFuncs';
	import { productsStore } from '$lib/stores/products.svelte.js';
	
	let products = $state(JSON.parse(JSON.stringify(productsStore.products)));
	let total = $state(JSON.parse(JSON.stringify(productsStore.total)));
	let couponApplied = false
	async function applyCoupon(){
		if (couponApplied){
			notifications.error("One coupon already applied",3000)
			return
		}
	console.log("trying to add coupon")
	/** @type {import("$lib/customTypes").Coupon[]}*/
	// @ts-ignore
	const found = await fetchDocumentsWhere("coupons","name",couponCode,1)
	if (found.length === 0){
		notifications.error("no coupon found with that value",5000)
		return
	}
	const coupon = found[0]
	console.log(coupon)
	if(coupon.name !== couponCode.trim().toLocaleLowerCase()){
		notifications.error("no coupon found with this code",5000)
		return
	}
	if (coupon.minTotal > total) {
		notifications.error("Total value not enough for this coupon", 5000)
		return
	}
	if (coupon.type === "fixed"){
	total -= coupon.amount
	console.log(total)
	notifications.success(`total price -${coupon.amount}`)
	couponApplied = true
	return		
	}
	console.log("before looper")
	for(let i=0;i<products.length;i++){
		if(coupon.category !== "any") {
			if(coupon.categoryID !== products[i].categoryID){
				console.log("category stuff")
				continue
			}
		}
		if(!coupon.discount && products[i].discountPercentage > 0){
			console.log("discount stuff")
			continue
		}
		products[i].discountedPrice = products[i].discountedPrice * (1-coupon.amount /100)
	}
	couponApplied = true
	notifications.success("Added coupon",5000)
}
	/**
	 * @param {number} index
	 */
function removeItem(index){
	productsStore.remove(index)
	products.splice(index,1)
}
	let email = $state('');
	let name = $state('');
	let address = $state('');
	let phoneNum = $state('');
	let extratext = $state('');
	let isFormValid = $derived(email !== '' && name !== '' && address !== '' && phoneNum !== '');

	let couponCode = $state('');

</script>
<div class="mx-4">
    <div>
        <ol class="flex gap-3 ml-5 mt-1">
            <li class="crumb"><a href="/store">Store</a></li>
            <li class="crumb-separator" aria-hidden>&rsaquo;</li>
        </ol>
    </div>
    {#if products.length === 0}
	<h2 class="text-center mt-4">Add products first</h2>
    {:else}
	<h2 class="text-center font-bold text-2xl">Total: {total.toFixed(2)}€</h2>
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
        {#each products as item, index (index)}
		<div out:fade={{duration: 250 }} class="grid gap-1 h-full">
                <span  class="text-2xl font-bold"><a class="underline" href={`/store/${item.categoryID}/${item.id}`}>{item.title}</a>: {#if item.price > item.discountedPrice} 
                    <span class="line-through text-base">{item.price}€</span>
                    {/if}
                {item.discountedPrice.toFixed(2)}€</span>
                    <img class="rounded w-full h-full" src={item.thumbnail} alt={item.thumbnail} />
                    <button class="btn mt-auto" onclick={()=> removeItem(index)}>Remove</button>
                </div>
                {/each}
	</div>
	<form class="grid gap-2">
        <label
        >Name:
        <input class="input" bind:value={name} type="text" name="name" required />
    </label>
    <label for="email"
    >Email:
    <input class="input" bind:value={email} type="text" name="email" id="email" required />
</label>
<label for="address"
>Address:

<input class="input" bind:value={address} type="text" name="address" id="address" required />
</label>
<label for="phone"
>Phone num:
<input class="input" bind:value={phoneNum} type="number" name="phone" id="phone" required />
</label>
<label for="extratext"
>Extra info:
<textarea class="textarea outline outline-1 outline-secondary" bind:value={extratext} id="extratext"></textarea>
</label>
<label for="alennus"
>Coupon:
<input class="input outline outline-1 outline-secondary" bind:value={couponCode} type="text" name="coupon" id="coupon" />
</label>
<button type="button" onclick={applyCoupon}>Add coupon</button>
<button type="button" disabled={!isFormValid} class=" mb-10 mt-3">Check out</button>
</form>
{/if}
</div>

<style>
    button:disabled {
        background-color: rgb(170, 12, 12);
	}
	input:invalid {
		border: 1px solid rgb(170, 12, 12);
	}
    input,textarea{
        width: 100%;
    }

	button {
		appearance: none;
		border: 0.125em solid #1a1a1a;
		border-radius: 0.9375em;
		box-sizing: border-box;
		cursor: pointer;
		display: inline-block;
		font-size: 16px;
		font-weight: 600;
		line-height: normal;
		min-height: 3.75em;
		min-width: 0;
		outline: none;
		padding: 1em 2.3em;
		text-align: center;
		text-decoration: none;
		transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		will-change: transform;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	button:disabled {
		pointer-events: none;
	}

	button:hover {
		box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
		transform: translateY(-2px);
	}

	button:active {
		box-shadow: none;
		transform: translateY(0);
	}
</style>
