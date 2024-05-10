<script>
let { children,data } = $props();
</script>
<div class="flex bg-base-300 items-center justify-center flex-wrap gap-4 py-5">
    <span>Hello, {data.username}</span>
    <a href="/control/categoriesedit" class="btn">Categories</a>
    <a href="/control/productsadd" class="btn">Add products</a>
    <a href="/control/products" class="btn">Edit Products</a>
    <a href="/control/coupons" class="btn">Coupons</a>
    <a href="/control/kauppaviesti" class="btn">kauppa teksti</a>
</div>
<div>
	{@render children()}
</div>