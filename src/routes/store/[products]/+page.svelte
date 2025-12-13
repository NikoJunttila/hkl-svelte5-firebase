<script>
	// import { fetchDocumentsWhere } from "$lib/firebaseFuncs";
	import StoreItem from '$lib/components/StoreItem.svelte';
	/** @type {import('./$types').PageData} */
	// @ts-ignore
	let { data } = $props();
	/** @type {import("$lib/customTypes").Product[]}*/
	const productsData = $state(data.props.products);
</script>

<svelte:head>
	<title>{productsData?.[0]?.category || 'Tuotteet'} - Kauppa</title>
	<meta name="description" content="Selaa tuotteita" />
</svelte:head>

<div class="products-page">
	{#if data.props.products}
		<nav class="breadcrumb">
			<a href="/store" class="breadcrumb-link">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
					<path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z" />
				</svg>
				Kategoriat
			</a>
			<span class="breadcrumb-separator">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
					<path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z" />
				</svg>
			</span>
			<span class="breadcrumb-current">{productsData[0].category}</span>
		</nav>

		<h1 class="page-title">{productsData[0].category}</h1>
		<p class="product-count">{productsData.length} tuotetta</p>

		<div class="products-grid">
			{#each productsData as p}
				<StoreItem {...p}></StoreItem>
			{/each}
		</div>
	{:else}
		<nav class="breadcrumb">
			<a href="/store" class="breadcrumb-link">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
					<path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z" />
				</svg>
				Kategoriat
			</a>
		</nav>
		<div class="empty-state">
			<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
				<path
					fill="currentColor"
					opacity="0.5"
					d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10z"
				/>
			</svg>
			<p>Ei tuotteita tässä kategoriassa.</p>
			<a href="/store" class="back-link">Palaa kategorioihin</a>
		</div>
	{/if}
</div>

<style>
	.products-page {
		padding: 1.5rem;
		max-width: 1400px;
		margin: 0 auto;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
		flex-wrap: wrap;
	}

	.breadcrumb-link {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		font-size: 0.95rem;
		padding: 0.375rem 0.75rem;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		transition: all 0.2s ease;
	}

	.breadcrumb-link:hover {
		color: white;
		background: rgba(255, 255, 255, 0.2);
	}

	.breadcrumb-separator {
		color: rgba(255, 255, 255, 0.4);
		display: flex;
		align-items: center;
	}

	.breadcrumb-current {
		color: #fef08a;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.page-title {
		font-size: 2rem;
		font-weight: 700;
		color: white;
		margin: 0 0 0.5rem;
	}

	.product-count {
		color: rgba(255, 255, 255, 0.6);
		font-size: 1rem;
		margin: 0 0 2rem;
	}

	.products-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	.empty-state {
		text-align: center;
		padding: 4rem 2rem;
		color: rgba(255, 255, 255, 0.6);
	}

	.empty-state svg {
		margin-bottom: 1rem;
	}

	.empty-state p {
		font-size: 1.1rem;
		margin-bottom: 1.5rem;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background: linear-gradient(135deg, #fef08a 0%, #fde047 100%);
		color: #1e1b4b;
		font-weight: 600;
		text-decoration: none;
		border-radius: 50px;
		transition: all 0.2s ease;
	}

	.back-link:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(254, 240, 138, 0.4);
	}

	@media (max-width: 768px) {
		.products-page {
			padding: 1rem;
		}

		.page-title {
			font-size: 1.5rem;
		}

		.products-grid {
			grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
			gap: 1rem;
		}
	}
</style>
