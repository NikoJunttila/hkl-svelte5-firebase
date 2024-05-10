<script>
	let { icon = 'default', url = 'foo', title = 'some cool title' } = $props();
</script>

<a
	href={url}
	class="stack w-full max-w-md text-center bg-base-300 flex justify-center items-center p-4 rounded-lg not-prose no-underline"
>
	<img src="https://png.pngtree.com/png-clipart/20220620/ourmid/pngtree-pink-cute-cat-icon-animal-png-yuri-png-image_5230763.png" alt={icon} width="32" height="32" class="w-8" />
	<span class="text-lg text-red-600 font-bold">{title}</span>
</a>
