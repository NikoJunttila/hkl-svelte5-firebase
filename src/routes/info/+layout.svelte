<script>
    import Contact from "$lib/components/Contact.svelte";
    let {children} = $props()
</script>

<div class="px-1 pt-5 flex flex-col justify-center align-middle">
    <div class="grid place-items-center pb-5 min-h-[50vh]">
        {@render children()}
    </div>
    <div>
        <Contact />
    </div>
</div>