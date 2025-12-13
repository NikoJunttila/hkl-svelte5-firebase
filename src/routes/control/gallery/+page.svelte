<script>
	import { storage, db } from '$lib/firebase';
	import {
		doc,
		setDoc,
		deleteDoc,
		updateDoc,
		collection,
		onSnapshot,
		query,
		orderBy,
		serverTimestamp
	} from 'firebase/firestore';
	import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage';

	let previewURL = $state(null);
	let uploading = $state(false);
	let formData = $state({
		text: '',
		img: '',
		sortOrder: 0
	});

	let galleryItems = $state([]);

	// Subscribe to gallery items for the list
	$effect(() => {
		const q = query(collection(db, 'gallery'), orderBy('sortOrder', 'asc'));
		const unsubscribe = onSnapshot(q, (snapshot) => {
			galleryItems = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		});
		return () => unsubscribe();
	});

	async function upload(e) {
		try {
			uploading = true;
			const file = e.target.files[0];
			previewURL = URL.createObjectURL(file);
			const idCrypt = window.crypto.randomUUID();
			const storageRef = ref(storage, `gallery/${idCrypt}`);
			const result = await uploadBytes(storageRef, file);
			formData.img = await getDownloadURL(result.ref);
			uploading = false;
		} catch (error) {
			console.error('An error occurred during the upload process:', error);
			uploading = false;
		}
	}

	async function createItem() {
		try {
			if (!formData.img) {
				alert('Lataa kuva ensin');
				return;
			}

			const id = crypto.randomUUID();
			await setDoc(doc(db, 'gallery', id), {
				...formData,
				id,
				createdAt: serverTimestamp()
			});

			console.log('Successfully added new gallery item');
			alert('Kuva lisätty onnistuneesti!');

			// Reset form
			formData = {
				text: '',
				img: '',
				sortOrder: 0
			};
			previewURL = null;
		} catch (err) {
			console.error('Error adding document: ', err);
			alert('Virhe lisättäessä: ' + err.message);
		}
	}

	async function updateItem(item) {
		try {
			const itemRef = doc(db, 'gallery', item.id);
			await updateDoc(itemRef, {
				text: item.text,
				sortOrder: item.sortOrder
			});
			alert('Kohde päivitetty!');
		} catch (err) {
			console.error('Error updating document: ', err);
			alert('Virhe päivitettäessä: ' + err.message);
		}
	}

	async function deleteItem(item) {
		if (!confirm('Haluatko varmasti poistaa tämän kohteen?')) return;

		try {
			// Delete from Firestore
			await deleteDoc(doc(db, 'gallery', item.id));

			// Delete image from Storage
			// Extract path from URL or use stored path if available.
			// Since we didn't store the path explicitly, we can try to parse it or just leave it orphaned if complex.
			// Ideally we should store the storage path. But for now let's try to delete if we can.
			// Simple parsing for standard Firebase Storage URLs:
			try {
				const storageRef = ref(storage, item.img);
				await deleteObject(storageRef);
			} catch (storageErr) {
				console.warn(
					'Could not delete image from storage (might be external URL or already gone):',
					storageErr
				);
			}

			alert('Kohde poistettu!');
		} catch (err) {
			console.error('Error deleting document: ', err);
			alert('Virhe poistettaessa: ' + err.message);
		}
	}
</script>

<div class="p-4">
	<div class="flex flex-col gap-2 justify-center items-center mb-10">
		<h2 class="card-title text-2xl my-4">Lisää uusi kuva galleriaan</h2>

		<form class="max-w-screen-md w-full px-4 border p-4 rounded-lg bg-base-200">
			<div class="form-control w-full max-w-xs mx-auto gap-4">
				<!-- Image Upload -->
				<div class="flex flex-col items-center gap-2">
					{#if previewURL}
						<img
							src={previewURL}
							alt="Preview"
							class="rounded-lg shadow-md max-h-64 object-contain"
						/>
					{/if}
					<label class="form-control w-full max-w-xs">
						<div class="label">
							<span class="label-text">Valitse kuva</span>
						</div>
						<input
							onchange={upload}
							type="file"
							class="file-input file-input-bordered w-full max-w-xs"
							accept="image/*"
						/>
					</label>
				</div>

				{#if uploading}
					<div class="flex flex-col items-center gap-2">
						<p>Ladataan kuvaa...</p>
						<progress class="progress progress-info w-56"></progress>
					</div>
				{/if}

				<!-- Sort Order -->
				<label class="form-control">
					<div class="label">
						<span class="label-text">Järjestysnumero (pienempi ensin)</span>
					</div>
					<input type="number" class="input input-bordered" bind:value={formData.sortOrder} />
				</label>

				<!-- Text Input -->
				<label class="form-control">
					<div class="label">
						<span class="label-text">Kuvaus / Teksti</span>
					</div>
					<textarea
						class="textarea textarea-bordered h-24"
						placeholder="Kirjoita kuvaus tälle kuvalle..."
						bind:value={formData.text}
					></textarea>
				</label>

				<!-- Submit Button -->
				<button
					type="button"
					onclick={createItem}
					disabled={uploading || !formData.img || !formData.text}
					class="btn btn-primary mt-4"
				>
					Lisää galleriaan
				</button>
			</div>
		</form>
	</div>

	<div class="divider">Hallitse nykyisiä kuvia</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each galleryItems as item (item.id)}
			<div class="card bg-base-100 shadow-xl border border-base-300">
				<figure class="px-4 pt-4">
					<img src={item.img} alt="Gallery Item" class="rounded-xl h-48 object-cover w-full" />
				</figure>
				<div class="card-body">
					<div class="form-control">
						<label class="label">
							<span class="label-text">Järjestys</span>
						</label>
						<input
							type="number"
							class="input input-bordered input-sm"
							bind:value={item.sortOrder}
						/>
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text">Kuvaus</span>
						</label>
						<textarea class="textarea textarea-bordered h-24" bind:value={item.text}></textarea>
					</div>
					<div class="card-actions justify-end mt-4">
						<button class="btn btn-error btn-sm" onclick={() => deleteItem(item)}>Poista</button>
						<button class="btn btn-success btn-sm" onclick={() => updateItem(item)}>Päivitä</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
