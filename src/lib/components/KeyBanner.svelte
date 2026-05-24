<script>
	export let title;
	export let subtitle = '';
</script>

<div class="key-banner">
	<img class="key" src="/key-bg.png" alt="" aria-hidden="true" />
	<div class="text">
		<h2 class="title">{title}</h2>
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
		max-width: 640px;
		margin: 0 auto;
		padding: clamp(1rem, 3vw, 2rem);
	}

	.key {
		flex-shrink: 0;
		width: clamp(90px, 18vw, 170px);
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
		font-size: clamp(1.75rem, 4.2vw, 2.75rem);
		line-height: 1.15;
		color: #1f2937;
	}

	.subtitle {
		margin: 0.6rem 0 0 0;
		font-size: clamp(0.95rem, 1.4vw, 1.15rem);
		line-height: 1.5;
		color: #6b7280;
	}
</style>
