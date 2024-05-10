<script>
// @ts-nocheck
let { categoryID, id, thumbnail, title,description,discountPercentage,price} = $props();
</script>
<a href={`/store/${categoryID}/${id}`}>
    <div class="relative h-full bg-primary rounded-md hover:drop-shadow-md hover:-translate-y-1 duration-100  card2 ">
        <img class="h-[50%] w-full rounded" src={thumbnail} alt={title}>
        <div class="flex flex-col items-center gap-1 h-[50%]">
            <p class="text-2xl font-bold mt-2">{title}</p>
            <p class="line-clamp-2">{description}</p>
            <span class="{discountPercentage > 1 ? "line-through" : ""}"> price {price}€</span>
            {#if discountPercentage}
            <div class="absolute left-4 p-1 text-xl top-4 font-bold titleBg text-red-500">
                Discount: {discountPercentage}%
            </div>
            <p><span class="font-bold text-red-500">
                New price: {Math.ceil(price * ((100 - discountPercentage)/100))}€<br>
                <!--   Saving: {Math.ceil(p.price * (p.discountPercentage / 100))}€ -->
            </span>
        </p>
        {/if}
    </div>
    <span class="btn">Buy now</span>
</div>
</a>
    
<style>
    .titleBg{
        background-color: rgba(0, 0, 0, 0.6)
    }
    .card2 {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  border-radius: 17px;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  user-select: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  object-fit: cover;
  height: 40vh; 
  padding: 0.5rem;
  text-align: center;
  border-radius:10px;
  overflow:hidden;
}
.card2:active {
  transform: scale(0.95) rotateZ(1.7deg);
}
</style>