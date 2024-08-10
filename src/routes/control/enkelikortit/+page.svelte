<script>
import {uploadImage, createSomething, fetchDocuments, deleteStuff} from "$lib/firebaseFuncs"
import { notifications } from '$lib/stores/notifications.svelte';
let uploading = $state(false)
let urlForImg = $state("")
let cards = $state()
  //@ts-ignore
	async function upload(e) {
		try {
			uploading = true;
			const resultUrls = await uploadImage(e)
			urlForImg = resultUrls.img
			uploading = false;
		} catch (error) {
			console.error('An error occurred during the upload process:', error);
			// Handle the error appropriately, e.g., show an error message to the user
			uploading = false;
		}
	}
async function createCard(){
	const id = window.crypto.randomUUID();
  const cardObj = {
    img: urlForImg,
    id: id,
    
  }
 createSomething("cards3",cardObj,id) 
 notifications.success("Kortti luotu",5000)
 urlForImg = ""
		setTimeout(async () => {
			cards = await fetchDocuments('cards3');
		}, 1000);
}	
  /**
	 * @param {string | number} id
	 */
	async function deleteLocal(id){
		await deleteStuff('cards3', id)
		setTimeout(async () => {
			cards = await fetchDocuments('cards3');
		}, 1000);
	}
//@ts-ignore
$effect(async () => {
		const response = await fetchDocuments('cards3');
    if (response.length > 0){
    cards = response
  }	
});

</script>
	<div class="flex flex-col gap-2 justify-center items-center">
		<h2 class="card-title">Muutos kortit</h2>

		<form class="max-w-screen-md w-full">
			<div class="form-control w-full max-w-xs my-10 mx-auto gap-3 text-center">
				{#if urlForImg}
					<img src={urlForImg} alt="photoURL" width="256" height="256" class="mx-auto" />
				{/if}
				<label for="photoURL" class="label">
					<span class="label-text">Valitse tiedosto</span>
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
				<button disabled={!urlForImg} type="button" onclick={() => createCard()} class="btn btn-secondary">Lisää</button>
			</div>
		</form>
  {#if cards}
    <div class="grid-container w-full gap-2 mx-2">
    {#each cards as card}
    <div>
      <img class="w-full h-56 rounded mb-2" src={card.img} alt="card">
			<button class="btn btn-warning w-full" onclick={() => deleteLocal(card.id)}>Poista</button>
    </div>
    {/each}
  </div>
  {/if} 
	</div>

