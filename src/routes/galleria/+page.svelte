<script>
    /**
	 * @type {any[]}
	 */
    let galleria = $state([])

    // @ts-ignore
    $effect(async () => {
		const res = await fetch(`https://hkl.fly.dev/api/galleria`);
		galleria = await res.json();
	});
</script>
<style>
  
</style>
<div class="grid grid-cols-1 place-items-center my-2">
	{#each galleria as photo}
		<figure class="flex flex-col justify-center items-center my-2">
			<img loading="lazy" class="rounded mx-1" src={photo.img} alt="kuva">
			<figcaption class="my-2 text-xl max-w-[70ch] text-center">{photo.text}</figcaption>
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>ladataan...</p>
	{/each}
</div>
<svelte:head>
	<title>Galleria</title>
</svelte:head>