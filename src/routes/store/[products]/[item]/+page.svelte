<script>
	/** @type {import('./$types').PageData} */
	// @ts-ignore
	let { data } = $props();
	/** @type {import("$lib/customTypes").Product}*/
	const item = data.item;
	import { productsStore } from '$lib/stores/products.svelte.js';
    let focusImg = $state(item.thumbnail)
    /**
	 * @param {string} img
	 */
    function hoverImg(img){
        focusImg = img
    }
	let amount = $state(1)
</script>

<svelte:head>
	<title>{item.title}</title>
	<meta name="description" content={item.title} />
</svelte:head>
<ol class="flex gap-3 ml-5 mt-1">
	<li class="crumb"><a href="/store">Categories</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb"><a href={`/store/${item.categoryID}`}>{item.category}</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb">{item.title}</li>
</ol>
<div class="grid grid-cols-1 md:grid-cols-2 gap-2 my-2 mx-2 md:mx-10">
    <div class="relative">
        <img class="rounded h-full w-full max-h-[60vh]" src={focusImg} alt="product" />
		{#if item.images}
        <ul class="grid gap-1 pt-2" style="grid-template-columns: repeat({item.images.length}, 1fr)">
            {#each item.images as img}
            <li onmouseenter={() => hoverImg(img)}>
                <img class="w-full cursor-pointer h-full rounded" src={img} alt="product showcase">
            </li>
            {/each}
        </ul>
		{/if}
		{#if item.discountPercentage}
        <div class="absolute left-4 p-1 text-2xl top-4 font-extrabold titleBg text-red-500">
            Discount: {item.discountPercentage}%
        </div>
		{/if}
    </div>
	<div class="flex flex-col gap-3 mx-2 mt-5 sm:mt-0 text-center">
		<h1 class="text-2xl font-bold">{item.title}</h1>
		<span class={item.discountPercentage > 1 ? 'line-through' : 'font-extrabold text-2xl'}> price {item.price}€</span>
		{#if item.discountPercentage}
        <p>
            <span class="font-bold text-red-500">
                Discounted price: {Math.ceil(item.price * ((100 - item.discountPercentage) / 100))}€<br />
                  Saving: {Math.ceil(item.price * (item.discountPercentage / 100))}€
            </span>
        </p>
		{/if}
		{#if item.stock < 10}
			<h5 class="text-red-400">Items left in stock: {item.stock}</h5>
		{/if}
		<p class="mt-2">Item description: {item.description}</p>
		<div class="my-2">
			<p class="text-center">Amount:</p>
			<div class="flex gap-2 items-center justify-center">
				<button disabled={amount==1} onclick={() => amount--} class="btn text-3xl font-bold bg-secondary">-</button>
				<input type="number" min=1 class="input bg-base-300 w-20 text-center" name="amount" bind:value={amount}>
				<button onclick={() => amount++} class="btn text-3xl font-bold bg-secondary">+</button>
			</div>	
		</div>
		<button onclick={() => productsStore.newProduct(item,amount)}  class="btn p-9 bg-primary hover:bg-secondary duration-100">Add to shopping cart</button>
	</div>
</div>
<style>
.titleBg{
        background-color: rgba(0, 0, 0, 0.6)
    }
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

