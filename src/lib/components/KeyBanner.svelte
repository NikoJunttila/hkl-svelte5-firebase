<script>
	export let title;
	export let subtitle = '';
	/** "hero" | "card" */
	export let variant = 'hero';
</script>

<div class="key-banner kb-{variant}">
	<img class="key" src="/key-bg.png" alt="" aria-hidden="true" />
	<div class="text">
		<p class="title">{title}</p>
		{#if subtitle}
			<p class="subtitle">{subtitle}</p>
		{/if}
	</div>
</div>

<style>
	.key-banner {
		display: flex;
		align-items: center;
		gap: clamp(0.75rem, 2.5vw, 2rem);
	}

	.key {
		flex-shrink: 0;
		height: auto;
		display: block;
	}

	.text {
		flex: 1;
		min-width: 0;
	}

	.title {
		margin: 0;
		font-weight: 700;
		color: #1f2937;
	}

	.subtitle {
		margin: 0.5rem 0 0 0;
		color: #6b7280;
	}

	/* ---------- HERO variant (decorative, big key) ---------- */
	.key-banner.kb-hero {
		max-width: 640px;
		margin: 0 auto;
		padding: clamp(1rem, 3vw, 2rem);
	}
	.key-banner.kb-hero .key {
		width: clamp(90px, 18vw, 170px);
	}
	.key-banner.kb-hero .title {
		font-size: clamp(1.75rem, 4.2vw, 2.75rem);
		line-height: 1.15;
	}
	.key-banner.kb-hero .subtitle {
		font-size: clamp(0.95rem, 1.4vw, 1.15rem);
		line-height: 1.5;
	}

	/* ---------- CARD variant (key on the left, text on the right) ---------- */
	.key-banner.kb-card {
		align-items: flex-start;
		gap: 1rem;
		text-align: left;
	}
	.key-banner.kb-card .key {
		width: clamp(70px, 14vw, 96px);
		margin-top: 0.15rem;
	}
	.key-banner.kb-card .title {
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.45;
		color: #374151;
	}
	.key-banner.kb-card .subtitle {
		font-size: 0.9rem;
		line-height: 1.55;
		color: #6b7280;
		margin-top: 0.4rem;
	}
</style>
