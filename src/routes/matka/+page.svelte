<script>
import { timereserveURL } from "$lib/constants";

const imgArr = [
"https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%201..png?alt=media&token=c49919e5-fc4b-4dde-9048-e701738c39d9",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%202..png?alt=media&token=e8f5a55b-2bba-4bca-b902-11714d9f97cb",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%203..png?alt=media&token=332b6d35-a8dd-4a6d-b89a-92e67a37c418",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%204..png?alt=media&token=a0c33cad-0a58-4032-b3aa-56241f478f97",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%205..png?alt=media&token=cce9fcf6-fe76-4505-ac9b-5e94fe076403",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%206..png?alt=media&token=7847c7d2-dda3-4cd4-9a78-92e7ccc0f37a",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%207..png?alt=media&token=a6d9e03d-9785-4d61-8b04-bd8b509714a7",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%208..png?alt=media&token=3191cf9f-bc99-4730-b706-8549181e8f1b",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%209..png?alt=media&token=97382ed0-23e2-481e-83ec-b0fdce84e8ef",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%2010..png?alt=media&token=e2735906-9bed-46a8-844d-0a409f611535",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%2011..png?alt=media&token=19fbd89c-3fc8-46ab-93b7-281c125b085e",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%2012..png?alt=media&token=3c92dbf3-2ece-46a0-a20a-3c3b8c7ba4ac",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%2013..png?alt=media&token=af27eb87-7b09-40dd-a6e1-95b842c4f0f2",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%2014..png?alt=media&token=14f292da-4437-4b59-9e8c-e1ae1c647067",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%2015..png?alt=media&token=510e3517-f2ea-4eb7-b2b2-93538373849f",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%2016..png?alt=media&token=e9c5ed14-619b-4e5d-b705-8b5669afd37f",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fuudet%2FKuva%2017..png?alt=media&token=5998c89c-14bd-4e40-8bd9-e666fc2922b7",
]
</script>
<main class="ml-2 py-2 flex flex-col justify-center align-middle">
	<div class="grid place-items-center pb-5">
		<div class="max-w-[100ch] space mx-1 text-lg">
      {#each imgArr as img}
        <img loading="lazy" src={img} alt="susanna">
      {/each}

			<p class="py-2 text-lg font-bold">Varaa tästä
			Ja aloita oma paras matkasi yhdestä puhelusta!
        </p>
									<iframe 
							class="w-full h-96 rounded-lg border-2 border-purple-100" 
							src="{timereserveURL}book/4?lang=fi&id=22" 
							title="ajanvaraus">
						</iframe>
			
      <br>
      <div class="flex justify-center align-middle">
<iframe class="w-full"  height="315" src="https://www.youtube.com/embed/UE7vzOccGrw?si=T87SyimRvjgO15T-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
		</div>
      </div>

	</div>

</main>
