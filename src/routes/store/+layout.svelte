<script>
	import { goto } from '$app/navigation';
	// @ts-ignore
	import { productsStore } from '$lib/stores/products.svelte.js';
	import { timereserveURL } from '$lib/constants';

	let { children, data } = $props();
	let queryVal = $state('');
	/**
	 * @param {{ preventDefault: () => void; }} event
	 */
	function gotoFunc(event) {
		event.preventDefault();
		goto(`/store/search/${queryVal}`);
	}
</script>

<header class="store-header">
	<div class="header-content">
		<form onsubmit={gotoFunc} class="search-form">
			<div class="search-container">
				<svg
					class="search-icon"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
					/>
				</svg>
				<input
					required
					bind:value={queryVal}
					class="search-input"
					type="text"
					name="query"
					placeholder="Etsi tuotteita..."
				/>
				<button type="submit" class="search-btn">Etsi</button>
			</div>
		</form>

		<a class="cart-link" href="/store/cart">
			<div class="cart-icon-wrapper">
				<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Zm3.35 7h7h-7Z"
					/>
				</svg>
				{#if productsStore.products && productsStore.products.length > 0}
					<span class="cart-badge">{productsStore.products.length}</span>
				{/if}
			</div>
		</a>
	</div>
</header>

{#if data.text}
	<div class="promo-banner">
		<a class="promo-link" target="_blank" href={`${timereserveURL}book/4?lang=fi`}
			>Ajanvaraus linkki</a
		>
		<p class="promo-text">{data.text}</p>
	</div>
{/if}

<div class="store-content">
	{@render children()}
</div>

<style>
	.store-header {
		background: linear-gradient(135deg, rgba(5, 150, 105, 0.95) 0%, rgba(4, 120, 87, 0.98) 100%);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		padding: 1rem 1.5rem;
		box-shadow:
			0 4px 20px rgba(0, 0, 0, 0.15),
			0 1px 3px rgba(0, 0, 0, 0.1);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1400px;
		margin: 0 auto;
		gap: 1.5rem;
	}

	.search-form {
		flex: 1;
		max-width: 600px;
	}

	.search-container {
		display: flex;
		align-items: center;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 50px;
		padding: 0.5rem 0.5rem 0.5rem 1.25rem;
		transition: all 0.3s ease;
	}

	.search-container:focus-within {
		background: rgba(255, 255, 255, 0.25);
		border-color: rgba(255, 255, 255, 0.4);
		box-shadow: 0 0 20px rgba(254, 240, 138, 0.3);
	}

	.search-icon {
		color: rgba(255, 255, 255, 0.8);
		flex-shrink: 0;
	}

	.search-input {
		flex: 1;
		background: transparent;
		border: none;
		outline: none;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		color: white;
		min-width: 0;
	}

	.search-input::placeholder {
		color: rgba(255, 255, 255, 0.7);
		font-weight: 500;
	}

	.search-btn {
		background: linear-gradient(135deg, #fef08a 0%, #fde047 100%);
		color: #1e1b4b;
		border: none;
		border-radius: 50px;
		padding: 0.6rem 1.5rem;
		font-weight: 600;
		font-size: 0.95rem;
		cursor: pointer;
		transition: all 0.2s ease;
		white-space: nowrap;
	}

	.search-btn:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(254, 240, 138, 0.4);
	}

	.search-btn:active {
		transform: translateY(0);
	}

	.cart-link {
		display: flex;
		align-items: center;
		color: white;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.cart-icon-wrapper {
		position: relative;
		padding: 0.75rem;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 50%;
		transition: all 0.2s ease;
	}

	.cart-link:hover .cart-icon-wrapper {
		background: rgba(255, 255, 255, 0.2);
		transform: scale(1.05);
	}

	.cart-badge {
		position: absolute;
		top: 0;
		right: 0;
		background: linear-gradient(135deg, #fef08a 0%, #fde047 100%);
		color: #1e1b4b;
		font-size: 0.75rem;
		font-weight: 700;
		min-width: 20px;
		height: 20px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid rgba(5, 150, 105, 0.9);
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}

	.promo-banner {
		background: linear-gradient(135deg, rgba(5, 150, 105, 0.9) 0%, rgba(4, 120, 87, 0.95) 100%);
		padding: 1rem 1.5rem;
		text-align: center;
	}

	.promo-link {
		display: inline-block;
		color: #fef08a;
		font-weight: 700;
		font-size: 1.1rem;
		text-decoration: none;
		padding: 0.5rem 1.5rem;
		border: 2px solid #fef08a;
		border-radius: 50px;
		transition: all 0.2s ease;
		margin-bottom: 0.5rem;
	}

	.promo-link:hover {
		background: #fef08a;
		color: #1e1b4b;
	}

	.promo-text {
		color: white;
		font-weight: 600;
		font-size: 1.25rem;
		margin: 0.5rem 0 0;
	}

	.store-content {
		min-height: calc(100vh - 200px);
	}

	@media (max-width: 640px) {
		.store-header {
			padding: 0.75rem 1rem;
		}

		.header-content {
			gap: 0.75rem;
		}

		.search-container {
			padding: 0.375rem 0.375rem 0.375rem 1rem;
		}

		.search-btn {
			padding: 0.5rem 1rem;
			font-size: 0.85rem;
		}
	}
</style>
