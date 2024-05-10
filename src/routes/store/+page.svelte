<script>
     // @ts-ignore
     let {data} = $props(); 
     /** @type {import("$lib/customTypes").Category[]}*/
    // @ts-ignore
    const categories = data.categories
</script>

<div class="grid-container gap-2 mx-5">
    {#each categories as c}
    <a href={`/store/${c.id}`}>
      <div class="card bg-base-100 h-full shadow-xl image-full !opacity-100 ">
        <figure><img src={c.thumbnail} alt={c.name} /></figure>
        <div class="card-body items-center">
          <h2 class="card-title text-white text-2xl">{c.name}</h2>
        </div>
      </div>
    </a>
    {/each}
</div>
<style>    

.card:hover {
  border: 1px solid black;
  transform: scale(1.03);
}

.card:active {
  transform: scale(0.95) rotateZ(1.7deg);
}
</style>