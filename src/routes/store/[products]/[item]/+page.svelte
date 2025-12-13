<script>
	/** @type {import('./$types').PageData} */
	// @ts-ignore
	let { data } = $props();
	/** @type {import("$lib/customTypes").Product}*/
	const item = data.item;
	import { productsStore } from '$lib/stores/products.svelte.js';
	let amount = $state(1);
	const discountedPrice = item.discountPercentage
		? Math.ceil(item.price * ((100 - item.discountPercentage) / 100))
		: item.price;
</script>

<svelte:head>
	<title>{item.title}</title>
	<meta name="description" content={item.title} />
</svelte:head>

<div class="product-page">
	<nav class="breadcrumb">
		<a href="/store" class="breadcrumb-link">Kategoriat</a>
		<span class="breadcrumb-separator">›</span>
		<a href={`/store/${item.categoryID}`} class="breadcrumb-link">{item.category}</a>
		<span class="breadcrumb-separator">›</span>
		<span class="breadcrumb-current">{item.title}</span>
	</nav>

	<div class="product-container">
		<div class="image-section">
			<div class="image-wrapper">
				<img class="product-image" src={item.thumbnail} alt={item.title} />
				{#if item.discountPercentage}
					<div class="discount-badge">
						<span class="discount-value">-{item.discountPercentage}%</span>
						<span class="discount-label">Alennus</span>
					</div>
				{/if}
			</div>
		</div>

		<div class="info-section">
			<h1 class="product-title">{item.title}</h1>

			<div class="price-container">
				{#if item.discountPercentage > 0}
					<div class="sale-info">
						<span class="original-price">{item.price}€</span>
						<span class="sale-price">{discountedPrice}€</span>
					</div>
					<p class="savings">Säästät: {item.price - discountedPrice}€</p>
				{:else}
					<span class="regular-price">{item.price}€</span>
				{/if}
			</div>

			{#if item.stock < 10}
				<div class="stock-warning">
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
						<path fill="currentColor" d="M1 21h22L12 2L1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
					</svg>
					<span>Vain {item.stock} jäljellä varastossa</span>
				</div>
			{/if}

			<div class="description-section">
				<h3 class="section-label">Kuvaus</h3>
				<p class="description-text">{item.description}</p>
			</div>

			<div class="quantity-section">
				<h3 class="section-label">Määrä</h3>
				<div class="quantity-selector">
					<button class="qty-btn" disabled={amount === 1} onclick={() => amount--}>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
							<path fill="currentColor" d="M19 13H5v-2h14v2z" />
						</svg>
					</button>
					<input type="number" min="1" class="qty-input" name="amount" bind:value={amount} />
					<button class="qty-btn" onclick={() => amount++}>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
							<path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
						</svg>
					</button>
				</div>
			</div>

			<button class="add-to-cart-btn" onclick={() => productsStore.newProduct(item, amount)}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Zm3.35 7h7h-7Z"
					/>
				</svg>
				<span>Lisää ostoskoriin</span>
			</button>
		</div>
	</div>
</div>

<style>
	.product-page {
		padding: 1.5rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
		font-size: 0.9rem;
	}

	.breadcrumb-link {
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.breadcrumb-link:hover {
		color: #fef08a;
	}

	.breadcrumb-separator {
		color: rgba(255, 255, 255, 0.4);
	}

	.breadcrumb-current {
		color: white;
		font-weight: 500;
	}

	.product-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
	}

	.image-section {
		display: flex;
		flex-direction: column;
	}

	.image-wrapper {
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.2);
	}

	.product-image {
		width: 100%;
		max-height: 60vh;
		object-fit: cover;
		display: block;
	}

	.discount-badge {
		position: absolute;
		top: 1rem;
		left: 1rem;
		background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
		border-radius: 12px;
		padding: 0.75rem 1rem;
		text-align: center;
		box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
	}

	.discount-value {
		display: block;
		color: white;
		font-size: 1.5rem;
		font-weight: 800;
		line-height: 1;
	}

	.discount-label {
		display: block;
		color: rgba(255, 255, 255, 0.9);
		font-size: 0.75rem;
		font-weight: 600;
		margin-top: 0.25rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.info-section {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.product-title {
		font-size: 2rem;
		font-weight: 700;
		color: white;
		margin: 0;
		line-height: 1.2;
	}

	.price-container {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		padding: 1.25rem;
	}

	.sale-info {
		display: flex;
		align-items: baseline;
		gap: 1rem;
	}

	.original-price {
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.5);
		text-decoration: line-through;
	}

	.sale-price {
		font-size: 2rem;
		font-weight: 800;
		color: #f87171;
	}

	.savings {
		color: #4ade80;
		font-weight: 600;
		margin: 0.5rem 0 0;
		font-size: 0.95rem;
	}

	.regular-price {
		font-size: 2rem;
		font-weight: 800;
		color: #fef08a;
	}

	.stock-warning {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(239, 68, 68, 0.2);
		color: #fca5a5;
		padding: 0.75rem 1rem;
		border-radius: 10px;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.section-label {
		font-size: 0.85rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.6);
		margin: 0 0 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.description-text {
		color: rgba(255, 255, 255, 0.9);
		font-size: 1rem;
		line-height: 1.6;
		margin: 0;
	}

	.quantity-selector {
		display: inline-flex;
		align-items: center;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		overflow: hidden;
	}

	.qty-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		background: transparent;
		border: none;
		color: white;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.qty-btn:hover:not(:disabled) {
		background: rgba(255, 255, 255, 0.15);
	}

	.qty-btn:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.qty-input {
		width: 60px;
		height: 48px;
		background: transparent;
		border: none;
		color: white;
		font-size: 1.1rem;
		font-weight: 600;
		text-align: center;
		-moz-appearance: textfield;
	}

	.qty-input::-webkit-outer-spin-button,
	.qty-input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.add-to-cart-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		width: 100%;
		padding: 1.25rem 2rem;
		background: linear-gradient(135deg, #fef08a 0%, #fde047 100%);
		color: #1e1b4b;
		font-size: 1.1rem;
		font-weight: 700;
		border: none;
		border-radius: 14px;
		cursor: pointer;
		transition: all 0.3s ease;
		margin-top: auto;
	}

	.add-to-cart-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(254, 240, 138, 0.4);
	}

	.add-to-cart-btn:active {
		transform: translateY(0);
	}

	@media (max-width: 900px) {
		.product-container {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.product-title {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 640px) {
		.product-page {
			padding: 1rem;
		}
	}
</style>
