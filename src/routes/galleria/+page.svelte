<script>
	import { db } from '$lib/firebase';
	import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

	let galleria = $state([]);
	let lightboxOpen = $state(false);
	let currentPhoto = $state(null);

	$effect(() => {
		const q = query(collection(db, 'gallery'), orderBy('sortOrder', 'asc'));
		const unsubscribe = onSnapshot(q, (snapshot) => {
			galleria = snapshot.docs.map((doc) => doc.data());
		});
		return () => unsubscribe();
	});

	function openLightbox(photo) {
		currentPhoto = photo;
		lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
		currentPhoto = null;
	}

	function handleKey(e) {
		if (e.key === 'Escape') closeLightbox();
	}
</script>

<div class="grid grid-cols-1 place-items-center my-2">
	{#if galleria.length === 0}
		<div class="text-center my-10">
			<p>Ladataan galleriaa tai kuvia ei löytynyt...</p>
		</div>
	{/if}
	{#each galleria as photo}
		<figure
			class="flex flex-col justify-center items-center my-2 cursor-pointer"
			onclick={() => openLightbox(photo)}
		>
			<img loading="lazy" class="rounded mx-1" src={photo.img} alt="kuva" />
			<figcaption class="my-2 text-xl max-w-[70ch] text-center">
				{photo.text}
			</figcaption>
		</figure>
	{/each}
</div>

{#if lightboxOpen}
	<div
		class="lightbox-bg animate-fade-in"
		onclick={closeLightbox}
		onkeydown={handleKey}
		tabindex="0"
		role="button"
		aria-label="lightbox"
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img
			class="lightbox-img"
			src={currentPhoto.img}
			alt={currentPhoto.text}
			onclick={(e) => e.stopPropagation()}
		/>
	</div>
{/if}

<svelte:head>
	<title>Galleria</title>
</svelte:head>

<style>
	.lightbox-bg {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.85);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
	}
	.lightbox-img {
		max-width: 95vw;
		max-height: 95vh;
		border-radius: 1rem;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
	}
</style>
