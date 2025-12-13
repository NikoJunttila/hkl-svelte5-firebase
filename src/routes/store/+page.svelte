<script>
	// @ts-ignore
	let { data } = $props();
	/** @type {import("$lib/customTypes").Category[]}*/
	// @ts-ignore
	const categories = data.categories.sort((a, b) => a.sort - b.sort);
</script>

<svelte:head>
	<title>Kauppa - Kategoriat</title>
	<meta name="description" content="Selaa tuotekategorioita" />
</svelte:head>

<div class="categories-page">
	<h1 class="page-title">Tuotekategoriat</h1>
	<div class="categories-grid">
		{#each categories as c}
			<a href={`/store/${c.id}`} class="category-card">
				<div class="card-image-wrapper">
					<img src={c.thumbnail} alt={c.name} class="card-image" />
					<div class="card-overlay"></div>
				</div>
				<div class="card-content">
					<h2 class="card-title">{c.name}</h2>
					<span class="card-cta">
						Selaa tuotteita
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z"
							/>
						</svg>
					</span>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.categories-page {
		padding: 2rem 1.5rem 4rem;
		max-width: 1400px;
		margin: 0 auto;
	}

	.page-title {
		font-size: 2.25rem;
		font-weight: 700;
		color: white;
		text-align: center;
		margin-bottom: 2.5rem;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	}

	.categories-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1.5rem;
	}

	.category-card {
		position: relative;
		border-radius: 20px;
		overflow: hidden;
		text-decoration: none;
		aspect-ratio: 4/3;
		display: flex;
		flex-direction: column;
		box-shadow:
			0 10px 40px rgba(0, 0, 0, 0.2),
			0 2px 10px rgba(0, 0, 0, 0.1);
		transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	.category-card:hover {
		transform: translateY(-8px) scale(1.02);
		box-shadow:
			0 20px 50px rgba(0, 0, 0, 0.3),
			0 5px 15px rgba(0, 0, 0, 0.15);
	}

	.category-card:active {
		transform: scale(0.98);
	}

	.card-image-wrapper {
		position: absolute;
		inset: 0;
	}

	.card-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
	}

	.category-card:hover .card-image {
		transform: scale(1.1);
	}

	.card-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.1) 0%,
			rgba(0, 0, 0, 0.3) 50%,
			rgba(5, 150, 105, 0.85) 100%
		);
		transition: all 0.3s ease;
	}

	.category-card:hover .card-overlay {
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.15) 0%,
			rgba(0, 0, 0, 0.35) 50%,
			rgba(5, 150, 105, 0.92) 100%
		);
	}

	.card-content {
		position: relative;
		margin-top: auto;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		z-index: 2;
	}

	.card-title {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		margin: 0;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
	}

	.card-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: #fef08a;
		font-weight: 600;
		font-size: 0.95rem;
		opacity: 0;
		transform: translateY(10px);
		transition: all 0.3s ease;
	}

	.category-card:hover .card-cta {
		opacity: 1;
		transform: translateY(0);
	}

	.card-cta svg {
		transition: transform 0.2s ease;
	}

	.category-card:hover .card-cta svg {
		transform: translateX(4px);
	}

	@media (max-width: 768px) {
		.categories-page {
			padding: 1.5rem 1rem 3rem;
		}

		.page-title {
			font-size: 1.75rem;
			margin-bottom: 1.5rem;
		}

		.categories-grid {
			grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
			gap: 1rem;
		}

		.card-cta {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
