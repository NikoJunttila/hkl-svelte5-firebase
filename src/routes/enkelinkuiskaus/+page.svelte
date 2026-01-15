<script>
	//@ts-ignore
	let { data } = $props();
	let cards = $state(data.cards);
	let currentIndex = $state(0);
	function nextIndex() {
		if (currentIndex == cards.length - 1) {
			currentIndex = 0;
		} else {
			currentIndex++;
		}
	}
</script>

<div class="grid place-items-center my-4">
	<div class="max-w-[900px] mb-3 mx-1">
		<h1 class="font-bold text-2xl mb-3">ENKELIN KUISKAUS</h1>

		Ihania hetkiä ja energioita Sinulle Enkelin Kuiskaus viestien kanssa! 💗 Enkelin kuiskaus
		viestit on luonut: Susanna Höijer
	</div>
	{#if cards}
		<div>
			<figure>
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
				<img
					onclick={nextIndex}
					class="rounded cursor-pointer"
					src={cards[currentIndex].img}
					alt="kortti"
				/>
			</figure>
			<div class="mt-2 flex justify-center gap-4">
				<button disabled={currentIndex === 0} onclick={() => currentIndex--}
					>Aikaisempi kortti</button
				>
				<button onclick={nextIndex}>Seuraava kortti</button>
			</div>
		</div>
	{:else}
		<div>Ladataan kortteja...</div>
	{/if}
</div>
