<script>
let { children,data } = $props();
</script>
<div class="flex bg-base-300 items-center justify-center flex-wrap gap-4 py-4">
    <span>Hei, {data.username}</span>
    <a href="/control/categoriesedit" class="btn">Categoriat</a>
    <a href="/control/productsadd" class="btn">Lisää tuote</a>
    <a href="/control/products" class="btn">Muokkaa tuotteita</a>
    <a href="/control/coupons" class="btn">Kuponkit</a>
    <a href="/control/orders" class="btn">Tilaukset</a>
</div>
<div class="py-5">
	{@render children()}
</div>