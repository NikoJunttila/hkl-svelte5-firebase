<script>
    import StoreItem from "$lib/components/StoreItem.svelte";
    import { page } from "$app/stores";
    /** @type {import('./$types').PageData} data */
    // @ts-ignore
    let {data} = $props();
    const items = data.props.items
</script>
<p class="text-center my-2">
    Results for search term: {$page.params.query}
</p>
<div class="grid-container mx-5 gap-3">
    {#each items as i}
    <StoreItem {...i}></StoreItem>
    {/each}
</div>