<script>
let { children,data } = $props();
</script>
<div class="flex bg-base-300 items-center justify-center flex-wrap gap-4 py-5">
    <span>Hello, {data.username}</span>
    <a href="/control/categoriesedit" class="btn btn-secondary">Categories</a>
    <a href="/control/productsadd" class="btn btn-secondary">Add products</a>
    <a href="/control/products" class="btn btn-secondary">Edit Products</a>
    <a href="/control/coupons" class="btn btn-secondary">Coupons</a>
    <a href="/control/viesti" class="btn btn-secondary">kauppa teksti</a>
</div>
<div>
	{@render children()}
</div>