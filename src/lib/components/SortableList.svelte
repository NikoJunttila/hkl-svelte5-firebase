<script>
	import { flip } from 'svelte/animate';
	import UserLink from '$lib/components/UserLink.svelte';
   /**
	 * @type {any}
	 */
	let { list, onSend, onDelete } = $props();
	let isOver = $state(false);
	/**
	 * @param {any} node
	 */
	function getDraggedParent(node) {
		if (!node.dataset.index) {
			return getDraggedParent(node.parentNode);
		} else {
			return { ...node.dataset };
		}
	}

	/**
	 * @param {DragEvent} e
	 */
	function onDragStart(e) {
		const dragged = getDraggedParent(e.target);
		// Check if dragged is defined and has an index property
		if (dragged) {
			// @ts-ignore
			e.dataTransfer.setData('source', dragged.index.toString());
		} else {
			console.error('Failed to get dragged parent or index is missing.');
		}
	}

	/**
	 * @param {DragEvent} e
	 */
	function onDragOver(e) {
		e.preventDefault();
		// @ts-ignore
		const id = e.target.dataset.id;
		const dragged = getDraggedParent(e.target);
		isOver = dragged.id ?? false;
	}
	/**
	 * @param {DragEvent} e
	 */
	function onDragLeave(e) {
		const dragged = getDraggedParent(e.target);
		isOver === dragged.id && (isOver = false);
	}
	/**
	 * @param {DragEvent} e
	 */
	function onDrop(e) {
		e.preventDefault();
		isOver = false;
		const dragged = getDraggedParent(e.target);
		reorder({
			from: e.dataTransfer?.getData('source'),
			to: dragged.index
		});
	}

		/**
	 * @param {any} from
	 */
	const reorder = ({ from, to }) => {
		const newList = [...list];
		newList[from] = [newList[to], (newList[to] = newList[from])][0];

		onSend(newList);
	};
</script>

{#if list.length}
	<ul class="list-none p-0 flex flex-col items-center">
		{#each list as item, index (item.id)}
			<li
				class="border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full"
				class:over={item.id === isOver}
				data-index={index}
				data-id={item.id}
				draggable="true"
				ondragstart={onDragStart}
				ondragover={onDragOver}
				ondragleave={onDragLeave}
				ondrop={onDrop}
				animate:flip={{ duration: 300 }}
			>
			<!-- replace with a slot or render() children to make this reusable component -->
			<div class="group relative">
					<UserLink {...item} />
					<button
						onclick={() => onDelete(item)}
						class="btn btn-xs btn-error invisible group-hover:visible transition-all absolute -right-6 bottom-10"
						>Delete</button
					>
			</div>
			<!-- replace with a slot or render() children to make this reusable component -->
		</li>
		{/each}
	</ul>
{:else}
	<p class="text-center my-12 text-lg font-bold">No items</p>
{/if}

<style>
	.over {
		border: solid 1px gray;
		scale: 1.05;
	}
</style>
