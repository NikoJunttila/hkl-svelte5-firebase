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
	let validCoupon = '';
	let extratext = $state('');
	let couponCode = $state('');
	/**
	 * @param {{ preventDefault: () => void; }} e
	 */
	async function applyCoupon(e) {
		e.preventDefault();
		if (couponApplied) {
			notifications.error('Yksi kuponki lisätty jo', 3000);
			return;
		}
		/** @type {import("$lib/customTypes").Coupon[]}*/
		// @ts-ignore
		const found = await fetchDocumentsWhere(
			'coupons',
			'name',
			couponCode.trim().toLocaleLowerCase(),
			1
		);
		if (found.length === 0) {
			notifications.error('Ei kuponkia tällä koodilla', 5000);
			return;
		}
		const coupon = found[0];
		if (coupon.name !== couponCode.trim().toLocaleLowerCase()) {
			notifications.error('Ei kuponkia tällä koodilla', 5000);
			return;
		}
		if (coupon.minTotal > total) {
			notifications.error('Yhteishinta ei tarpeeks tätä varten', 5000);
			return;
		}
		if (coupon.type === 'fixed') {
			total -= coupon.amount;
			console.log(total);
			notifications.success(`Yhteishinta -${coupon.amount}`);
			couponApplied = true;
			validCoupon = coupon.id;
			return;
		}
		for (let i = 0; i < products.length; i++) {
			if (coupon.category !== 'kaikki') {
				// @ts-ignore
				if (coupon.categoryID != products[i].categoryID) {
					continue;
				}
			}
			if (!coupon.discount && products[i].discountPercentage > 0) {
				continue;
			}
			products[i].discountedPrice = naiveRound(
				products[i].discountedPrice * (1 - coupon.amount / 100)
			);
		}
		couponApplied = true;
		total = products.reduce((acc, product) => {
			return acc + product.discountedPrice;
		}, 0);
		notifications.success('Lisätty alennus', 5000);
	}

	/**
	 * @param {number} num
	 */
	function naiveRound(num) {
		var p = Math.pow(10, 2);
		const returning = Math.round(num * p) / p;
		return returning;
	}
	/**
	 * @param {number} index
	 */
	function removeItem(index) {
		productsStore.remove(index);
		products.splice(index, 1);
		total = products.reduce((acc, product) => {
			return acc + product.discountedPrice;
		}, 0);
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
				id: item.id,
				link: item.link,
				linkType: item.linkType
			};
		});
		const batch = writeBatch(db);
		try {
			const orderObj = {
				orderNumber: orderNumber,
				extra: extratext,
				total: total,
				payment: 'Ei vielä saatu',
				status: 'käsitellään',
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

<svelte:head>
	<title>Ostoskori - Kauppa</title>
</svelte:head>

<div class="cart-page">
	<nav class="breadcrumb">
		<a href="/store" class="breadcrumb-link">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
				<path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z" />
			</svg>
			Kauppa
		</a>
		<span class="breadcrumb-separator">›</span>
		<span class="breadcrumb-current">Ostoskori</span>
	</nav>

	<h1 class="page-title">Ostoskori</h1>

	{#if products.length === 0}
		<div class="empty-cart">
			<div class="empty-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						opacity="0.6"
						d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Zm3.35 7h7h-7Z"
					/>
				</svg>
			</div>
			<h2>Ostoskorisi on tyhjä</h2>
			<p>Lisää tuotteita ostoskoriin jatkaaksesi</p>
			<a href="/store" class="shop-link">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
					/>
				</svg>
				Selaa tuotteita
			</a>
		</div>
	{:else}
		<div class="cart-layout">
			<div class="cart-items">
				<div class="items-header">
					<span>{products.length} tuotetta</span>
				</div>

				{#each products as item, index (index)}
					<div out:fade={{ duration: 250 }} class="cart-item">
						<a href={`/store/${item.categoryID}/${item.id}`} class="item-image-link">
							<img class="item-image" src={item.thumbnail} alt={item.title} />
						</a>
						<div class="item-details">
							<a href={`/store/${item.categoryID}/${item.id}`} class="item-title">{item.title}</a>
							<div class="item-price">
								{#if item.price > item.discountedPrice}
									<span class="original-price">{item.price}€</span>
								{/if}
								<span class="current-price">{item.discountedPrice.toFixed(2)}€</span>
							</div>
						</div>
						<button class="remove-btn" onclick={() => removeItem(index)}>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
								/>
							</svg>
						</button>
					</div>
				{/each}
			</div>

			<div class="order-summary">
				<div class="summary-card">
					<h2 class="summary-title">Yhteenveto</h2>

					<div class="summary-row total-row">
						<span>Yhteensä</span>
						<span class="total-price">{total.toFixed(2)}€</span>
					</div>

					<div class="coupon-section">
						<label class="input-label">Kuponkikoodi</label>
						<div class="coupon-input-group">
							<input
								type="text"
								class="coupon-input"
								bind:value={couponCode}
								placeholder="Syötä koodi"
							/>
							<button class="apply-btn" onclick={applyCoupon} disabled={couponCode.length < 1}>
								Käytä
							</button>
						</div>
					</div>

					<div class="extra-section">
						<label class="input-label">
							Lisätiedot
							<span class="label-hint">(esim. puhelinnumero)</span>
						</label>
						<textarea
							class="extra-textarea"
							bind:value={extratext}
							placeholder="Kirjoita lisätietoja tilaukseen..."
						></textarea>
					</div>

					<button class="checkout-btn" onclick={checkout}>
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
							/>
						</svg>
						<span>Siirry maksamaan</span>
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.cart-page {
		padding: 1.5rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.breadcrumb-link {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.2s ease;
	}

	.breadcrumb-link:hover {
		color: white;
	}

	.breadcrumb-separator {
		color: rgba(255, 255, 255, 0.4);
	}

	.breadcrumb-current {
		color: #fef08a;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.page-title {
		font-size: 2rem;
		font-weight: 700;
		color: white;
		margin: 0 0 2rem;
	}

	.empty-cart {
		text-align: center;
		padding: 4rem 2rem;
	}

	.empty-icon {
		color: rgba(255, 255, 255, 0.3);
		margin-bottom: 1.5rem;
	}

	.empty-cart h2 {
		font-size: 1.5rem;
		color: white;
		margin: 0 0 0.5rem;
	}

	.empty-cart p {
		color: rgba(255, 255, 255, 0.6);
		margin: 0 0 2rem;
	}

	.shop-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.875rem 1.75rem;
		background: linear-gradient(135deg, #fef08a 0%, #fde047 100%);
		color: #1e1b4b;
		font-weight: 600;
		text-decoration: none;
		border-radius: 50px;
		transition: all 0.2s ease;
	}

	.shop-link:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(254, 240, 138, 0.4);
	}

	.cart-layout {
		display: grid;
		grid-template-columns: 1fr 380px;
		gap: 2rem;
		align-items: start;
	}

	.items-header {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.9rem;
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.cart-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		margin-bottom: 0.75rem;
		transition: background 0.2s ease;
	}

	.cart-item:hover {
		background: rgba(255, 255, 255, 0.12);
	}

	.item-image-link {
		flex-shrink: 0;
	}

	.item-image {
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 10px;
	}

	.item-details {
		flex: 1;
		min-width: 0;
	}

	.item-title {
		display: block;
		font-size: 1.1rem;
		font-weight: 600;
		color: white;
		text-decoration: none;
		margin-bottom: 0.5rem;
		transition: color 0.2s ease;
	}

	.item-title:hover {
		color: #fef08a;
	}

	.item-price {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
	}

	.original-price {
		color: rgba(255, 255, 255, 0.5);
		text-decoration: line-through;
		font-size: 0.9rem;
	}

	.current-price {
		font-size: 1.25rem;
		font-weight: 700;
		color: #fef08a;
	}

	.remove-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: rgba(239, 68, 68, 0.15);
		border: none;
		border-radius: 10px;
		color: #f87171;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.remove-btn:hover {
		background: rgba(239, 68, 68, 0.25);
	}

	.summary-card {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 16px;
		padding: 1.5rem;
		position: sticky;
		top: 100px;
	}

	.summary-title {
		font-size: 1.25rem;
		font-weight: 700;
		color: white;
		margin: 0 0 1.5rem;
	}

	.summary-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.total-row {
		font-size: 1.1rem;
		font-weight: 600;
		color: white;
	}

	.total-price {
		font-size: 1.5rem;
		font-weight: 800;
		color: #fef08a;
	}

	.coupon-section,
	.extra-section {
		margin-top: 1.5rem;
	}

	.input-label {
		display: block;
		font-size: 0.85rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.7);
		margin-bottom: 0.5rem;
	}

	.label-hint {
		font-weight: 400;
		opacity: 0.7;
	}

	.coupon-input-group {
		display: flex;
		gap: 0.5rem;
	}

	.coupon-input {
		flex: 1;
		padding: 0.75rem 1rem;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 10px;
		color: white;
		font-size: 0.95rem;
		outline: none;
		transition: all 0.2s ease;
	}

	.coupon-input:focus {
		border-color: rgba(254, 240, 138, 0.5);
		background: rgba(255, 255, 255, 0.15);
	}

	.coupon-input::placeholder {
		color: rgba(255, 255, 255, 0.4);
	}

	.apply-btn {
		padding: 0.75rem 1.25rem;
		background: rgba(255, 255, 255, 0.15);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 10px;
		color: white;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.apply-btn:hover:not(:disabled) {
		background: rgba(255, 255, 255, 0.25);
	}

	.apply-btn:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.extra-textarea {
		width: 100%;
		min-height: 80px;
		padding: 0.75rem 1rem;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 10px;
		color: white;
		font-size: 0.95rem;
		resize: vertical;
		outline: none;
		transition: all 0.2s ease;
	}

	.extra-textarea:focus {
		border-color: rgba(254, 240, 138, 0.5);
		background: rgba(255, 255, 255, 0.15);
	}

	.extra-textarea::placeholder {
		color: rgba(255, 255, 255, 0.4);
	}

	.checkout-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		width: 100%;
		padding: 1.125rem;
		margin-top: 1.5rem;
		background: linear-gradient(135deg, #fef08a 0%, #fde047 100%);
		color: #1e1b4b;
		font-size: 1.05rem;
		font-weight: 700;
		border: none;
		border-radius: 12px;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.checkout-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(254, 240, 138, 0.4);
	}

	@media (max-width: 900px) {
		.cart-layout {
			grid-template-columns: 1fr;
		}

		.summary-card {
			position: static;
		}
	}

	@media (max-width: 640px) {
		.cart-page {
			padding: 1rem;
		}

		.page-title {
			font-size: 1.5rem;
		}

		.cart-item {
			flex-wrap: wrap;
		}

		.item-image {
			width: 80px;
			height: 80px;
		}

		.remove-btn {
			width: 36px;
			height: 36px;
		}
	}
</style>
