<script>
	// @ts-nocheck
	import { storage, db } from '$lib/firebase';
	import { doc,setDoc } from 'firebase/firestore';
	import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
	import { deleteStuff, fetchDocumentsWhere } from '$lib/firebaseFuncs';
	import { notifications } from '$lib/stores/notifications.svelte';
	let { data } = $props();
	/** @type {import("$lib/customTypes").Product[]}*/
	let products = $state([]);
	/**
	 * @param {string} collectionString - collection.
	 * * @param {string} categoryString - category.
	 */
    let category = $state("")

	let formData = $state({
		id: 1,
		title: '',
		description: '',
		price: 0,
		discountPercentage: 0,
		rating: 0,
		stock: 0,
		brand: '',
		category: '',
		categoryID: 1,
		thumbnail: '',
		link:"",
		linkType:"",
		images: [""]
	});
	function updateItemFirst(obj) {
		formData = { ...obj };
		document.getElementById('my_modal_1').showModal();
	}
    async function updateSecondBtn(){
		const ref = doc(db, 'products', formData.id);
		await setDoc(ref, formData);
		notifications.success("edited succesfully",2000)
        document.getElementById('my_modal_1').close()
		setTimeout(async () => {
			products = await fetchDocumentsWhere('products','categoryID',category,100);
		}, 1000);
    }
    async function uploadUpdate(e) {
		try {
			const file = e.target.files[0];
			// @ts-ignore
            const idCrypt = window.crypto.randomUUID()
			const storageRef = ref(storage, `store/products/${idCrypt}.jpg`);
			const result = await uploadBytes(storageRef, file);
			formData.thumbnail = await getDownloadURL(result.ref);
		} catch (error) {
			console.error('An error occurred during the upload process:', error);
			// Handle the error appropriately, e.g., show an error message to the user
		}
	}
async function multipleUpload(e) {
  try {
    const files = e.target.files;
    const uploadPromises = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const idCrypt = window.crypto.randomUUID();
      const storageRef = ref(storage, `store/products/${idCrypt}.jpg`);
      const uploadPromise = uploadBytes(storageRef, file).then(async (result) => {
      const image = await getDownloadURL(result.ref);
      formData.images.push(image);
    });
      uploadPromises.push(uploadPromise);
    }

    await Promise.all(uploadPromises);
  } catch (error) {
    console.error('An error occurred during the upload process:', error);
    // Handle the error appropriately, e.g., show an error message to the user
  }
}
	/**
	 * @param {string | number} id
	 */
	 async function deleteLocal(id){
		await deleteStuff('products', id)
		setTimeout(async () => {
			// @ts-ignore
			products = await fetchDocumentsWhere('products','categoryID',category,100);
		}, 1000);
	}
	// @ts-ignore
	$effect(async () => {
        if(category){
            // @ts-ignore
            products = await fetchDocumentsWhere('products','categoryID', category,100);
        }
	});
</script>

<dialog id="my_modal_1" class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Press ESC key or X to close</h3>
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		</form>
		<form>
			<label for="title">Title:</label>
			<input type="text" id="title" bind:value={formData.title} />

			<label for="description">Description:</label>
			<textarea id="description" bind:value={formData.description}></textarea>

			<label for="price">Price:</label>
			<input type="number" id="price" bind:value={formData.price} />

			<label for="discountPercentage">Discount Percentage:</label>
			<input type="number" id="discountPercentage" bind:value={formData.discountPercentage} />

			<label for="rating">Rating:</label>
			<input type="number" id="rating" bind:value={formData.rating} />

			<label for="stock">Stock:</label>
			<input type="number" id="stock" bind:value={formData.stock} />

			<label for="brand">Brand:</label>
			<input type="text" id="brand" bind:value={formData.brand} />
            <label for="categoryID">Category: current:{formData.category}
                <select class="select w-full bg-base-300" bind:value={formData.categoryID}>
                    {#each data.categories as category}
                    <option value={category.id}>{category.name}</option>
                    {/each}
                </select>
            </label>

			<label>Thumbnail:
                <span>{formData.thumbnail}</span>
                <input
                onchange={uploadUpdate}
                id="thumbnail"
                name="thumbnail"
                type="file"
                class="file-input file-input-bordered w-full max-w-xs"
                accept="image/png, image/jpeg, image/gif, image/webp"
                />
            </label>
			{#each formData.images as img, i}
			<img src={img} alt="stuff" width="100px" height="100px">
			<button class="btn btn-warning" onclick={()=> formData.images.splice(i,1)}>remove</button>
			{/each}
			<label>
				Upload other images
				<input
				onchange={multipleUpload}
				id="photoURL"
				name="photoURL"
				type="file"
				class="file-input file-input-bordered w-full max-w-xs my-2"
				accept="image/png, image/jpeg, image/gif, image/webp"
				multiple
				/>
			</label>
			<label class="label">Linkin url jos on:
				<input class="input" type="text" id="rating" bind:value={formData.link} />
			</label>
			<label class="label">Mikä linkin tyyppi on. pdf/video:
				<input class="input" type="text" id="rating" bind:value={formData.linkType} />
			</label>
			<button class="btn w-full mt-2 btn-secondary" type="button" onclick={() => updateSecondBtn()}>Update</button>
		</form>
	</div>
</dialog>
<div class="grid items-center">
    <p class="text-center my-2">Select category to get</p>
    <select class="input select mx-4 bg-base-300" bind:value={category}>
        {#each data.categories as category}
        <option value={category.id}>{category.name}</option>
        {/each}
    </select>
    <div class="grid-container gap-2 m-3">
        {#if products.length > 0}
        {#each products as p}
		<div class="card bg-base-100 shadow-xl image-full">
            <figure><img src={p.thumbnail} alt={p.title} /></figure>
			<div class="card-body">
                <h2 class="card-title">{p.title}</h2>
				<div>
                    <p>Price: {p.price}€</p>
					{#if p.discountPercentage > 0}
                    <p>Discount {p.discountPercentage}%</p>
					{/if}
					<p>stock: {p.stock}</p>
					<p>Description: {p.description}</p>
				</div>
				<div class="card-actions justify-end">
                    <button class="btn btn-primary" onclick={() => updateItemFirst(p)}>Edit Now</button>
					<button class="btn bg-warning" onclick={() => deleteLocal(p.id)}>Delete</button>
				</div>
			</div>
		</div>
        {/each}
        {:else}
        <p>no products in this category</p>
        {/if}
    </div>
</div>
    
    <style>
        input[type='text'],
        input[type='number'],
        textarea {
            @apply block w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500;
        }
        
        label {
            @apply block text-sm font-medium text-gray-700;
        }
    </style>
