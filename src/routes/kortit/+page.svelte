<script>
     //@ts-ignore
    let {data} = $props(); 
    let cards = $state(data.cards)
    let currentIndex = $state(0)
    function nextIndex(){
       if(currentIndex == cards.length-1){
         currentIndex = 0
       }else{
         currentIndex++
       }
    }
</script>
<div class="grid place-items-center my-4">
  {#if cards}
    <div>
    <figure>
      <img onclick={nextIndex} class="rounded cursor-pointer" src={cards[currentIndex].img} alt="kortti">
    </figure>
    <div class="mt-2 flex justify-center gap-4">
        <button disabled={currentIndex === 0} onclick={() => currentIndex--}>Aikaisempi kortti</button>
        <button onclick={nextIndex}>Seuraava kortti</button>
      </div>
    </div>
  {:else}
    <div>
      Ladataan kortteja...
    </div>
  {/if}
</div>
