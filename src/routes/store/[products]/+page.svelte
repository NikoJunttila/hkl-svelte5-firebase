<script>
    import StoreItem from "$lib/components/StoreItem.svelte";
    /** @type {import('./$types').PageData} */
    // @ts-ignore
    let {data} = $props();
    /** @type {import("$lib/customTypes").Product[]}*/
    const productsData = data.props.products

</script>
<div class="mx-3 lg:mx-8">
    <ol class="flex gap-3 ml-5 mt-1">
        <li class="crumb"><a href="/store">Kategoriat</a></li>
        <li class="crumb-separator" aria-hidden>&rsaquo;</li>
        <li class="crumb"><a href={`/store/${productsData[0].categoryID}`}>{productsData[0].category}</a></li>
      </ol>
    <div class="grid-container gap-3">
        {#each productsData as p}
        <StoreItem {...p}></StoreItem>
        {/each}
    </div>
</div>
