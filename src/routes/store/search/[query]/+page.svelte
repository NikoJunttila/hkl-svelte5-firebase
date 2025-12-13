<script>
	import StoreItem from '$lib/components/StoreItem.svelte';
	import { page } from '$app/stores';
	/** @type {import('./$types').PageData} data */
	// @ts-ignore
	let { data } = $props();
	const items = data.props.items;
</script>

<svelte:head>
	<title>Hakutulokset: {$page.params.query}</title>
</svelte:head>

<div class="search-page">
	<div class="search-header">
		<nav class="breadcrumb">
			<a href="/store" class="breadcrumb-link">Kauppa</a>
			<span class="breadcrumb-separator">›</span>
			<span class="breadcrumb-current">Haku</span>
		</nav>

		<h1 class="page-title">Hakutulokset</h1>
		<p class="search-query">
			Hakusana: <span class="query-text">"{$page.params.query}"</span>
		</p>
		<p class="result-count">{items.length} tulosta</p>
	</div>

	{#if items.length === 0}
		<div class="empty-results">
			<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
				<path
					fill="currentColor"
					opacity="0.5"
					d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
				/>
			</svg>
			<h2>Ei tuloksia</h2>
			<p>Kokeile eri hakusanoja</p>
			<a href="/store" class="back-link">Selaa kategorioita</a>
		</div>
	{:else}
		<div class="results-grid">
			{#each items as i}
				<StoreItem {...i}></StoreItem>
			{/each}
		</div>
	{/if}
</div>

<style>
	.search-page {
		padding: 1.5rem;
		max-width: 1400px;
		margin: 0 auto;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.breadcrumb-link {
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

	.search-header {
		margin-bottom: 2rem;
	}

	.page-title {
		font-size: 2rem;
		font-weight: 700;
		color: white;
		margin: 0 0 0.5rem;
	}

	.search-query {
		color: rgba(255, 255, 255, 0.7);
		font-size: 1rem;
		margin: 0 0 0.25rem;
	}

	.query-text {
		color: #fef08a;
		font-weight: 600;
	}

	.result-count {
		color: rgba(255, 255, 255, 0.5);
		font-size: 0.9rem;
		margin: 0;
	}

	.results-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	.empty-results {
		text-align: center;
		padding: 4rem 2rem;
		color: rgba(255, 255, 255, 0.6);
	}

	.empty-results svg {
		margin-bottom: 1rem;
	}

	.empty-results h2 {
		font-size: 1.5rem;
		color: white;
		margin: 0 0 0.5rem;
	}

	.empty-results p {
		margin: 0 0 1.5rem;
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
		.search-page {
			padding: 1rem;
		}

		.page-title {
			font-size: 1.5rem;
		}

		.results-grid {
			grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
			gap: 1rem;
		}
	}
</style>
