<script>
import { timereserveURL } from "$lib/constants";

const imgArr = [
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2F1.png?alt=media&token=d730110d-da54-4e48-8d0e-6981ed77bbca",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2F2.png?alt=media&token=92c60aa5-f63a-4004-ba95-5f09054b223c",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2F3.png?alt=media&token=f08b5e4f-e0e7-4ee3-8b2e-5838dee2f115",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2F4.png?alt=media&token=cd2639fe-6653-48d1-98e0-7d8ae4403dc6",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2F5.png?alt=media&token=f92bf045-4e31-4743-92d6-0f0b1a8c7150",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2F6.png?alt=media&token=89502323-06b9-491d-b6af-42735c4058dc",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2F7.png?alt=media&token=c3880a6b-c02d-4536-9085-ce83a3b29773",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2F8.png?alt=media&token=b7e08bae-b9c5-4dad-81fc-f166fce125db",
  "https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2F9.png?alt=media&token=816e5a0d-8f5f-45ee-9753-c96b5fcda567"
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
			
		</div>

	</div>

</main>
