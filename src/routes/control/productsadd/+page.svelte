<script>
	import { storage, db } from '$lib/firebase';
	import { doc,setDoc} from 'firebase/firestore';
	import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

	/**
	 * @typedef {Object} IdNameObject
	 * @property {number} id - The ID of the object.
	 * @property {string} name - The name of the object.
	 */
	let {data} = $props()
	/**
	 * @type {IdNameObject[]} categories.
	 */
	// @ts-ignore
	let categories = data.categories
	let previewURL = $state(null);
	let uploading = $state(false);
	// @ts-ignore
	async function upload(e) {
		try {
			uploading = true;
			const file = e.target.files[0];
			// @ts-ignore
			previewURL = URL.createObjectURL(file);
			const idCrypt = window.crypto.randomUUID();
			const storageRef = ref(storage, `store/products/${idCrypt}.jpg`);
			const result = await uploadBytes(storageRef, file);
			formData.thumbnail = await getDownloadURL(result.ref);
			uploading = false;
		} catch (error) {
			console.error('An error occurred during the upload process:', error);
			// Handle the error appropriately, e.g., show an error message to the user
			uploading = false; // Ensure uploading is set to false even if an error occurs
		}
	}
	// @ts-ignore
	async function multipleUpload(e) {
  try {
    uploading = true;
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
    uploading = false;
  } catch (error) {
    console.error('An error occurred during the upload process:', error);
    // Handle the error appropriately, e.g., show an error message to the user
    uploading = false; // Ensure uploading is set to false even if an error occurs
  }
}
	let formData = $state({
		id: 1,
		title: '',
		description: '',
		price: 0,
		discountPercentage: 0,
		discountPrice: 0,
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
	function createItem() {
		try {
			/**
			 * @type {string} .
			 */
			let name = "";
			categories.forEach((el) => {
				if (el.id == formData.categoryID) {
					name = el.name;
				}
			});
			formData.category = name;
			const idCrypt = window.crypto.randomUUID();
            // @ts-ignore
            formData.id = idCrypt
			const ref = doc(db, 'products', idCrypt);
			setDoc(ref, formData);
			console.log('succesfully set new category');
		} catch (err) {
			console.log(err);
		}
        formData = {
    id: 1,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
	discountPrice: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    categoryID: 1,
	link:"",
	linkType:"",
    thumbnail: "",
    images: [""]
  };
	}
	$effect(() => {
		console.log(categories)
	})
</script>

<div>
	<div class="flex flex-col gap-2 justify-center items-center">
		<div>Update products or create new ones!</div>
		<h2 class="card-title">Upload thumbnail for item</h2>

		<form class="max-w-screen-md w-full">
			<div class="form-control w-full max-w-xs my-10 mx-auto gap-3 text-center">
				{#if previewURL}
					<img src={previewURL} alt="photoURL" width="256" height="256" class="mx-auto" />
				{/if}
				<label for="photoURL" class="label text-center">
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
				<div class="grid place-items-center gap-2">
					<label>
						Title:
						<input required type="text" bind:value={formData.title} />
					</label>

					<label>
						Description:<br>
						<textarea class="p-3 rounded" required rows="4" bind:value={formData.description}></textarea>
					</label>

					<label>
						Price:
						<input type="number" step="0.01" bind:value={formData.price} />
					</label>

					<label>
						Discount Percentage:
						<input type="number" step="1" bind:value={formData.discountPercentage} />
					</label>
					<label>
						Stock:
						<input class="input input-bordered input-secondary w-full max-w-xs" type="number" step="1" bind:value={formData.stock} />
					</label>
					<label class="label">Linkin url jos on:
						<input class="input" type="text" id="rating" bind:value={formData.link} />
					</label>
					<label class="label">Mikä linkin tyyppi on. pdf/video:
						<input class="input" type="text" id="rating" bind:value={formData.linkType} />
					</label>
					<!--                     
                      <label>
                        Brand:
                        <input type="text" bind:value={formData.brand} />
                      </label> -->

					<label>
						Category:
						<select class="select w-full bg-base-300" required bind:value={formData.categoryID}>
							{#each categories as category}
								<option value={category.id}>{category.name}</option>
							{/each}
						</select>
					</label>
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
					</div>
				<button 
				type="button" 
				onclick={() => createItem()} 
				disabled={!formData.title || !formData.description || !formData.categoryID}
				class="btn btn-secondary disabled:btn-warning disabled:text-gray-500">
				Add</button>
			</div>
		</form>
	</div>
	<!--         <div class="grid-container mx-3 gap-2 place-items-center">
            {#if categories.length > 0}
            {#each categories as doc}
            <div class="grid gap-2 h-full">
                <p>{doc.name}</p>
                <img class="w-f" src={doc.thumbnail} width="200px" height="200px" alt={doc.name}>
                <p>sale: {doc.sale}</p>
                <button class="btn" onclick={()=> modalOpen(doc)}>edit</button>
            </div>
            {/each}
            {:else}
            <p>Loading...</p>
            {/if}
        </div> -->
</div>
<style>
/* 	input{
		width: 100%;
		padding: 10px;
		border-radius: 10px;
		@apply input input-bordered input-secondary w-full max-w-xs
	} */
	label{
		width: 100%;
	}
</style>