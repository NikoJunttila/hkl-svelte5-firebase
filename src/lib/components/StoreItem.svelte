<script>
	// @ts-nocheck
	let { categoryID, id, thumbnail, title, description, discountPercentage, price } = $props();
	const discountedPrice = discountPercentage
		? Math.ceil(price * ((100 - discountPercentage) / 100))
		: price;
</script>

<a href={`/store/${categoryID}/${id}`} class="product-card">
	<div class="card-image-container">
		<img class="card-image" src={thumbnail} alt={title} />
		{#if discountPercentage > 0}
			<div class="discount-badge">
				<span class="discount-percent">-{discountPercentage}%</span>
			</div>
		{/if}
	</div>

	<div class="card-body">
		<h3 class="card-title">{title}</h3>
		<p class="card-description">{description}</p>

		<div class="card-footer">
			<div class="price-section">
				{#if discountPercentage > 0}
					<span class="original-price">{price}€</span>
					<span class="sale-price">{discountedPrice}€</span>
				{:else}
					<span class="regular-price">{price}€</span>
				{/if}
			</div>

			<span class="buy-btn">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Zm3.35 7h7h-7Z"
					/>
				</svg>
				Osta
			</span>
		</div>
	</div>
</a>

<style>
	.product-card {
		display: flex;
		flex-direction: column;
		background: linear-gradient(
			145deg,
			rgba(255, 255, 255, 0.1) 0%,
			rgba(255, 255, 255, 0.05) 100%
		);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 16px;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
		height: 100%;
	}

	.product-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
		border-color: rgba(254, 240, 138, 0.4);
	}

	.product-card:active {
		transform: translateY(-2px) scale(0.99);
	}

	.card-image-container {
		position: relative;
		aspect-ratio: 4/3;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.1);
	}

	.card-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.4s ease;
	}

	.product-card:hover .card-image {
		transform: scale(1.08);
	}

	.discount-badge {
		position: absolute;
		top: 12px;
		left: 12px;
		background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
		border-radius: 8px;
		padding: 0.375rem 0.75rem;
		box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
	}

	.discount-percent {
		color: white;
		font-weight: 700;
		font-size: 0.9rem;
	}

	.card-body {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 1.25rem;
		gap: 0.5rem;
	}

	.card-title {
		font-size: 1.1rem;
		font-weight: 700;
		color: white;
		margin: 0;
		line-height: 1.3;
	}

	.card-description {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: auto;
		padding-top: 1rem;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.price-section {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.regular-price {
		font-size: 1.25rem;
		font-weight: 700;
		color: #fef08a;
	}

	.original-price {
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.5);
		text-decoration: line-through;
	}

	.sale-price {
		font-size: 1.25rem;
		font-weight: 700;
		color: #f87171;
	}

	.buy-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: linear-gradient(135deg, #fef08a 0%, #fde047 100%);
		color: #1e1b4b;
		font-weight: 600;
		font-size: 0.9rem;
		border-radius: 50px;
		transition: all 0.2s ease;
	}

	.product-card:hover .buy-btn {
		transform: scale(1.05);
		box-shadow: 0 4px 12px rgba(254, 240, 138, 0.4);
	}

	@media (max-width: 640px) {
		.card-body {
			padding: 1rem;
		}

		.card-title {
			font-size: 1rem;
		}

		.buy-btn {
			padding: 0.4rem 0.75rem;
			font-size: 0.85rem;
		}
	}
</style>
