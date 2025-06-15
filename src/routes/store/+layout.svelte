<script>
	import { goto } from '$app/navigation';
	// @ts-ignore
	import { productsStore } from '$lib/stores/products.svelte.js';
  import { timereserveURL } from "$lib/constants";
	
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
<header class="flex bg-secondary py-4 -translate-y-1">
	<form onsubmit={gotoFunc} class="mx-auto">
		<div>
			<div class="flex gap-2 justify-center items-center">
				<label class="bg-base-200 flex justify-center items-center py-1 px-4 rounded" for="query"
					><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
						/></svg
					>
					<input
						required
						bind:value={queryVal}
						class="input w-full bg-base-300"
						type="text"
						name="query"
						placeholder="Etsi tuotteita"
					/>
				</label>
				<button type="submit" class="btn bg-base-100 p-5 h-full">Etsi</button>
			</div>
		</div>
	</form>
	<div class="relative mr-6 py-2 hover:scale-105 duration-100">
		<a class="pointer-events-auto" href="/store/cart"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Zm3.35 7h7h-7Z"/></svg>
		</a>
		{#if productsStore.products}
			<span class="absolute rounded-full top-0 px-1 bg-white text-black translate-x-2 right-0">{productsStore.products.length}</span>
		{/if}
		</div>
</header>
{#if data.text}
<div class="bg-secondary py-4 text-center text-wrap -translate-y-1">
<a class="font-bold mb-4 text-white underline text-2xl" target="_blank" href="https://hyvinvointikeskusluxus.sendsmaily.net/landing-pages/02e9c8ce-8acf-49ec-b808-2f5c8880a528/html/">Tilaa uutiskirje</a><br>
<a class="font-bold mb-4 mt-2 text-white underline text-2xl" target="_blank" href="{`${timereserveURL}book/4?lang=fi`}">Ajanvaraus linkki</a>
<p class="font-bold mt-2 text-2xl">{data.text}</p>
</div>
{/if}
<div>
	{@render children()}
</div>

<style>
	input::placeholder {
  font-weight: bold;
  opacity: 0.7;
  color: white;
}
</style>
