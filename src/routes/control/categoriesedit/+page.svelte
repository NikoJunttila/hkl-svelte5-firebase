<script>
	import { storage, db } from '$lib/firebase';
	import { doc, setDoc } from 'firebase/firestore';
	import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
	import { fetchDocuments, deleteStuff, createSomething, uploadImage } from '$lib/firebaseFuncs.js';
	import { notifications } from '$lib/stores/notifications.svelte';
	/** @type {import("$lib/customTypes").Category[]}*/
	let categories = $state([]);

	let previewURL = $state("");
	let previewURL2 = $state("");
	let urlForImg = $state('');
	let uploading = $state(false);
	let category = $state('');
	// @ts-ignore
	async function upload(e) {
		try {
			uploading = true;
			const resultUrls = await uploadImage(e)
			previewURL = resultUrls.preview
			urlForImg = resultUrls.img
			uploading = false;
		} catch (error) {
			console.error('An error occurred during the upload process:', error);
			// Handle the error appropriately, e.g., show an error message to the user
			uploading = false;
		}
	}
	// @ts-ignore
	async function uploadUpdate(e) {
		try {
			uploading = true;
			const file = e.target.files[0];
			// @ts-ignore
			previewURL2 = URL.createObjectURL(file);
			const idCrypt = window.crypto.randomUUID();
			const storageRef = ref(storage, `store/categories/${idCrypt}.jpg`);
			const result = await uploadBytes(storageRef, file);
			dialogVals.thumbnail = await getDownloadURL(result.ref);
			uploading = false;
		} catch (error) {
			console.error('An error occurred during the upload process:', error);
			// Handle the error appropriately, e.g., show an error message to the user
			uploading = false; // Ensure uploading is set to false even if an error occurs
		}
	}
	function createCategory() {
		const idCrypt = window.crypto.randomUUID();
		const categoryObj = {
				id: idCrypt,
				name: category.trim(),
				sale: false,
				thumbnail: urlForImg,
				subcategories: [
					{
						id: 101,
						name: 'placeholder',
						img: 'no'
					}
				]
			};
			createSomething("categories",categoryObj,idCrypt)
		category = '';
		previewURL = ""
		notifications.success("New category added",5000)
		setTimeout(async () => {
			// @ts-ignore
			categories = await fetchDocuments('categories');
		}, 1000);
	}
	// @ts-ignore
	$effect(async () => {
		// @ts-ignore
		categories = await fetchDocuments('categories');
		console.log(categories);
	});
	/**
	 * @param {import("$lib/customTypes").Category} obj
	 */
	function modalOpen(obj) {
		// @ts-ignore
		document.getElementById('my_modal_1').showModal();
		dialogVals = { ...obj };
	}
	async function updateCategory() {
		const ref = doc(db, 'categories', `${dialogVals.id}`);
		await setDoc(ref, {
			name: dialogVals.name,
			thumbnail: dialogVals.thumbnail,
			sale: saleValue,
			id: dialogVals.id
		});
		notifications.success("category updated",5000)
		setTimeout(async () => {
			// @ts-ignore
			categories = await fetchDocuments('categories');
		}, 1000);
	}
	/**
	 * @param {string | number} id
	 */
	async function deleteLocal(id){
		await deleteStuff('categories', id)
		setTimeout(async () => {
			// @ts-ignore
			categories = await fetchDocuments('categories');
		}, 1000);
	}
	let saleValue = $state(false);
	let dialogVals = $state({ id: 0, name: '', thumbnail: '' });
</script>

<div>
	<dialog id="my_modal_1" class="modal">
		<div class="modal-box">
			<h3 class="font-bold text-lg">Close with esc or X</h3>
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
			</form>
			<div class="modal-action">
				<form>
					{#if previewURL2}
						<img src={previewURL2} alt="photoURL" width="256" height="256" class="mx-auto" />
					{/if}
					<label for="photoURL2" class="label">
						<span class="label-text">Pick a file</span>
					</label>
					<input
						onchange={uploadUpdate}
						id="photoURL2"
						name="photoURL2"
						type="file"
						class="file-input file-input-bordered w-full max-w-xs"
						accept="image/png, image/jpeg, image/gif, image/webp"
					/>
					<label for="sale">Sale:</label><input
						type="checkbox"
						id="sale"
						name="sale"
						bind:checked={saleValue}
					/>
					<input type="text" name="dialogValsname" bind:value={dialogVals.name} />
					<!-- if there is a button in form, it will close the modal -->
					<button onclick={updateCategory} class="btn">Update</button>
				</form>
			</div>
		</div>
	</dialog>
	<div class="flex flex-col gap-2 justify-center items-center">
		<div>Update categories or create new ones!</div>
		<h2 class="card-title">Upload image for category</h2>

		<form class="max-w-screen-md w-full">
			<div class="form-control w-full max-w-xs my-10 mx-auto gap-3 text-center">
				{#if previewURL}
					<img src={previewURL} alt="photoURL" width="256" height="256" class="mx-auto" />
				{/if}
				<label for="photoURL" class="label">
					<span class="label-text">Pick a file</span>
				</label>
				<input
					onchange={upload}
					id="photoURL"
					name="photoURL"
					type="file"
					class="file-input file-input-bordered w-full max-w-xs"
					accept="image/png, image/jpeg, image/gif, image/webp"
				/>
				{#if uploading}
					<p>Uploading...</p>
					<progress class="progress progress-info w-56 mt-6"></progress>
				{/if}
				<div class="flex gap-2 justify-center items-center">
					<label for="category">Category:</label>
					<input class="p-2 input input-bordered input-secondary" name="category" type="text" bind:value={category} />
				</div>
				<button type="button" onclick={() => createCategory()} class="btn">Add</button>
			</div>
		</form>
	</div>
	<div class="grid-container mx-3 gap-2 place-items-center">
		{#if categories.length > 0}
			{#each categories as doc}
				<div class="grid gap-2 h-full">
					<p>{doc.name}</p>
					<img class="w-f" src={doc.thumbnail} width="200px" height="200px" alt={doc.name} />
					<p>sale: {doc.sale}</p>
					<button class="btn" onclick={() => modalOpen(doc)}>edit</button>
					<button class="btn" onclick={() => deleteLocal(doc.id)}>Delete</button>
				</div>
			{/each}
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</div>