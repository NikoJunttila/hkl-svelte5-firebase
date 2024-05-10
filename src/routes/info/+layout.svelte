<script>
    import Contact from "$lib/contact.svelte";
    let {children} = $props()
</script>

<div class="ml-2 py-10 flex flex-col justify-center align-middle">
    <div class="grid place-items-center pb-5">
        {@render children()}
    </div>
    <div>
        <Contact />
    </div>
</div>