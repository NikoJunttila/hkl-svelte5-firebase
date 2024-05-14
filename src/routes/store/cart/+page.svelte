<script>
	import { fade } from 'svelte/transition';
	import { notifications } from '$lib/stores/notifications.svelte';
	import { fetchDocumentsWhere } from '$lib/firebaseFuncs';
	import { db } from '$lib/firebase';
	import { doc, writeBatch } from 'firebase/firestore';
	import { productsStore } from '$lib/stores/products.svelte.js';

	/** @type {import("$lib/customTypes").Product[]}*/
	let products = $state(JSON.parse(JSON.stringify(productsStore.products)));
	let total = $state(JSON.parse(JSON.stringify(productsStore.total)));
	let couponApplied = false;
	let validCoupon = ""
	let extratext = $state('');
	let couponCode = $state("");
	async function applyCoupon() {
		if (couponApplied) {
			notifications.error('One coupon already applied', 3000);
			return;
		}
		console.log('trying to add coupon');
		/** @type {import("$lib/customTypes").Coupon[]}*/
		// @ts-ignore
		const found = await fetchDocumentsWhere('coupons', 'name', couponCode, 1);
		if (found.length === 0) {
			notifications.error('no coupon found with that value', 5000);
			return;
		}
		const coupon = found[0];
		console.log(coupon);
		if (coupon.name !== couponCode.trim().toLocaleLowerCase()) {
			notifications.error('no coupon found with this code', 5000);
			return;
		}
		if (coupon.minTotal > total) {
			notifications.error('Total value not enough for this coupon', 5000);
			return;
		}
		if (coupon.type === 'fixed') {
			total -= coupon.amount;
			console.log(total);
			notifications.success(`total price -${coupon.amount}`);
			couponApplied = true;
			validCoupon = coupon.id
			return;
		}
		for (let i = 0; i < products.length; i++) {
			if (coupon.category !== 'any') {
				// @ts-ignore
				if (coupon.categoryID != products[i].categoryID) {
					console.log('category stuff');
					continue;
				}
			}
			if (!coupon.discount && products[i].discountPercentage > 0) {
				console.log('discount stuff');
				continue;
			}
			products[i].discountedPrice = products[i].discountedPrice * (1 - coupon.amount / 100);
		}
		couponApplied = true;
		total = products.reduce((acc, product) => {return acc + product.discountedPrice;}, 0)
		notifications.success('Added coupon', 5000);
	}
	/**
	 * @param {number} index
	 */
	function removeItem(index) {
		productsStore.remove(index);
		products.splice(index, 1);
		total = products.reduce((acc, product) => {return acc + product.discountedPrice;}, 0)
	}

	async function checkout() {
		const orderNumber = window.crypto.randomUUID();
		sessionStorage.setItem('order', JSON.stringify(orderNumber));
		const d = new Date();
		const saveItems = products.map((item) => {
			return {
				item: item.title,
				price: item.discountedPrice,
				thumbnail: item.thumbnail,
				id: item.id
			};
		});
		const batch = writeBatch(db);
		try {
			const orderObj = {
				orderNumber: orderNumber,
				extra: extratext,
				total:total,
				payment: 'processing',
				status: 'processing',
				date: d,
				name: '',
				items: saveItems
			};
			const adminOrder = {
				...orderObj,
				email: '',
				stripeSessionId: '',
				address: {
					city: '',
					country: '',
					line1: '',
					line2: '',
					postal_code: '',
					state: ''
				}
			};
			batch.set(doc(db, 'orders', orderNumber), orderObj);
			batch.set(doc(db, 'ordersAdmin', orderNumber), adminOrder);
			await batch.commit();
			const data = await fetch('/api/checkout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					items: products,
					orderNum: orderNumber,
					couponCode: validCoupon
				})
			}).then((data) => data.json());
			console.log(data);
			window.location = data.url;
		} catch (e) {
			console.log(e);
		}
	}
</script>

<div class="mx-4">
	<div>
		<ol class="flex gap-3 ml-5 mt-1">
			<li class="crumb"><a href="/store">Kauppa</a></li>
			<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		</ol>
	</div>
	{#if products.length === 0}
		<h2 class="text-center mt-4">Lisää tuotteita ensin</h2>
	{:else}
		<h2 class="text-center font-bold text-2xl py-4">Yhteishinta: {total.toFixed(2)}€</h2>
		<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
			{#each products as item, index (index)}
				<div out:fade={{ duration: 250 }} class="grid gap-1 h-full">
					<span class="text-2xl font-bold"
						><a class="underline" href={`/store/${item.categoryID}/${item.id}`}>{item.title}</a>: {#if item.price > item.discountedPrice}
							<span class="line-through text-base">{item.price}€</span>
						{/if}
						{item.discountedPrice.toFixed(2)}€</span
					>
					<img class="rounded w-full h-full" src={item.thumbnail} alt={item.thumbnail} />
					<button class="btn mt-auto" onclick={() => removeItem(index)}>Remove</button>
				</div>
			{/each}
		</div>
		<div class="flex justify-center items-center pt-5">
			<form class="form-control grid gap-2 pb-5">
				<label
					>Extra info:
					<textarea bind:value={extratext} id="extratext"></textarea>
				</label>
				<label
					>Kuponki:
					<input bind:value={couponCode} type="text" name="coupon" id="coupon" />
				</label>
				<button onclick={applyCoupon} disabled={couponCode.length < 1}>Lisää kuponki</button>
				<button onclick={checkout} type="button" class="disabled:btn-disabled mb-10 mt-3"
					>Siirry maksamaan</button
				>
			</form>
		</div>
	{/if}
</div>
