<script>
	import Landing from '$lib/components/landing.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Quote from '$lib/components/quote.svelte';
	import { timereserveURL } from "$lib/constants";

</script>

<svelte:head>
	<title>Hyvinvointikeskus Luxus</title>
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
	<Landing />
	<!-- Hero Section -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<div class="fade-in-section grid lg:grid-cols-2 gap-12 items-center">
				<div class="space-y-6">
					<h1 class="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
						Valoisasti tervetuloa omalle 
						<span class="text-purple-600">muutosmatkallesi</span>
					</h1>
					<p class="text-xl text-gray-600 leading-relaxed">
						Näkyväksi omalle itsellesi, löytämään oma henkinen vahvuutesi sekä avaamaan sinun 
						korkeimmat tietoisuus taajuudet jolloin myös sinun fyysinen hyvinvointi voi alkaa kukoistaa.
					</p>
					<div class="flex flex-wrap gap-4">
						<a href={`${timereserveURL}book/4?`} 
						   class="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors" 
						   target="_blank">
							Varaa aika
						</a>
						<a href="/store" 
						   class="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-200 hover:border-purple-400 transition-colors">
							Kauppa
						</a>
					</div>
				</div>
				<div class="text-center">
					<img
						class="w-full max-w-md mx-auto rounded-2xl shadow-xl"
						src="https://i.imgur.com/h8QNWAA.png"
						alt="Hyvinvointikeskus Luxus"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section class="py-16 px-4 bg-white">
		<div class="max-w-6xl mx-auto">
			<div class="fade-in-section grid lg:grid-cols-2 gap-12 items-center">
				<div class="text-center">
					<img
						class="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
						src="https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2FKUVA%201.%20Etusivulle%20mun%201.%20kuva%20tilalle%20(%20siihen%20joka%20on%20perhoskuvan%20alapuolella).png?alt=media&token=9994969d-cf47-4423-b860-d9b16bd44b43"
						alt="Susanna"
					/>
				</div>
				<div class="space-y-6">
					<h2 class="text-3xl font-bold text-gray-800">
						Yli 20 vuoden kokemus
					</h2>
					<p class="text-lg text-gray-600">
						Hyvinvointikeskus Luxusen hoidot ja valmennukset ovat syntyneet vankalla kokemuksella ja 
						ammattitaidolla yli kahdenkymmenen vuoden ajalta. Hoidot ja valmennukset sisältävät vahvaa 
						parantavaa ja hoitavaa valoa ja energiataajuutta joilla saadaan muutoksia aikaan.
					</p>
					<div class="bg-purple-50 p-6 rounded-xl">
						<h3 class="text-xl font-semibold text-gray-800 mb-4">
							Oletko valmis omaan muutokseesi?
						</h3>
						<iframe 
							class="w-full h-96 rounded-lg border-2 border-purple-100" 
							src="{timereserveURL}book/4?lang=fi&id=12" 
							title="ajanvaraus">
						</iframe>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Services Section -->
	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<div class="fade-in-section text-center mb-12">
				<h2 class="text-3xl font-bold text-gray-800 mb-4">
					Palvelut ja ohjelmat
				</h2>
				<p class="text-lg text-gray-600">
					Hyvinvointikeskus Luxus palvelee seuraavilla ohjelmilla ja etähoidolla
				</p>
			</div>

			<div class="fade-in-section grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div class="bg-white p-6 rounded-xl shadow-lg">
					<div class="text-2xl mb-3">🟣</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Theta Healing</h3>
					<p class="text-gray-600">
						Syvällisellä Theta Healing hoidolla löydetään ja työstetään ydinsyy haastetta alitajunnan 
						taajuudella ja uudelleen ohjelmoidaan tilalle toimivampia ratkaisuja.
					</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg">
					<div class="text-2xl mb-3">🟣</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Navigointi ohjelma</h3>
					<p class="text-gray-600">
						Hienovärähteistä energiahoitoa joka avaa sinua ja näyttää sinulle eteenpäin menemisen reitit.
					</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg">
					<div class="text-2xl mb-3">🟣</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Muutoksen matka</h3>
					<p class="text-gray-600">
						3 kk rakkausmatka itseesi - valmennusohjelma henkilökohtaiseen kasvuun.
					</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg">
					<div class="text-2xl mb-3">🟣</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Tunne itsesi - Loista itsellesi</h3>
					<p class="text-gray-600">
						3x90 min. hoitava valmennusohjelma joka auttaa sinua käsittelemään henkisiä tai fyysisiä traumoja.
					</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg">
					<div class="text-2xl mb-3">🟣</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Sisäisen lapsen tulkinta</h3>
					<p class="text-gray-600">
						Avaa sisimpääsi jolloin sisäinen lapsesi tulee kuulluksi ja nähdyksi sinulle.
					</p>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg">
					<div class="text-2xl mb-3">🟣</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Unelmista totta!</h3>
					<p class="text-gray-600">
						Vapaudu rajoittavista uskomuksista jotka estävät sinua saavuttamasta haluamaasi.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Workshop Section -->
	<section class="py-16 px-4 bg-green-50">
		<div class="max-w-6xl mx-auto">
			<div class="fade-in-section bg-white rounded-2xl p-8 shadow-lg">
				<div class="flex items-center gap-4 mb-6">
					<div class="text-3xl">🟢</div>
					<h2 class="text-3xl font-bold text-gray-800">Workshop luennot</h2>
				</div>
				<p class="text-lg text-gray-600 mb-8">
					Pääset parantaville energiataajuuksille. Workshop luennot ovat samalla ns. työpajoja 
					jotka antavat sinulle muutostyövälineitä. Luennot ovat kestoltaan alk. 60 min.
				</p>
				
				<div class="grid md:grid-cols-2 gap-8">
					<div>
						<h3 class="text-xl font-semibold mb-4 text-gray-800">Luentojen aiheita ovat:</h3>
						<ul class="space-y-2 text-gray-600">
							<li>• Enkeliluento</li>
							<li>• Tunne itsesi - loista itsellesi</li>
							<li>• Rakkausmatka itseesi</li>
							<li>• Alitajunnan voima</li>
						</ul>
					</div>
					<div class="text-center">
						<img
							class="w-full max-w-xs mx-auto rounded-xl shadow-lg mb-4"
							src="https://i.imgur.com/jDRaoXg.png"
							alt="Workshop"
						/>
						<a href={`${timereserveURL}book/4?id=12`}
						   class="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors" 
						   target="_blank">
							Varaa ilmainen kartoitusaika
						</a>
						<p class="text-sm text-gray-500 mt-2">
							Keskustellaan asiasta lisää
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Professional Info Section -->
	<section class="py-16 px-4 bg-white">
		<div class="max-w-6xl mx-auto">
			<div class="fade-in-section grid lg:grid-cols-2 gap-12 items-center">
				<div class="space-y-6">
					<div class="text-3xl mb-4">💜</div>
					<h2 class="text-3xl font-bold text-gray-800">
						Yli kahden vuosikymmenen ammattitaito
					</h2>
					<p class="text-lg text-gray-600">
						Susannalla on yli kahden vuosikymmenen ammattitaito energiaparantamisen taajuudella ja 
						selvänäkemisen kyky ihmisten fyysisen ja henkisen kehon tunnelukkojen informaatiosta ja 
						niiden avaamisesta, parantamisesta ja kehon kokonaisvaltaisesta eheyttämisestä.
					</p>
					
					<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
						<h3 class="font-semibold text-gray-800 mb-2">🟡 Tärkeää tietää</h3>
						<p class="text-gray-600">
							Fyysinen keho saattaa kantaa mukana monien vuosikymmenten takaa asioita ja kokemuksia 
							jotka kiinnittyvät kehon energiatilaan ja sieltä alkavat ajan kanssa vaikuttaa fyysiselle 
							keholle aiheuttaen oire haasteita.
						</p>
					</div>

					<div class="space-y-4">
						<h3 class="text-xl font-semibold text-gray-800">Pääset omille muutos matkoille kolmella tavalla:</h3>
						<div class="space-y-3">
							<div class="bg-blue-50 p-4 rounded-lg">
								<a href={`${timereserveURL}book/4?`}
								   class="text-blue-600 font-semibold hover:text-blue-800" 
								   target="_blank">
									Varaa hoitoaika
								</a>
							</div>
							<div class="bg-green-50 p-4 rounded-lg">
								<a href="https://www.hyvinvointikeskusluxus.com/store" 
								   class="text-green-600 font-semibold hover:text-green-800">
									Valitse kaupasta sopiva hoito tai valmennus
								</a>
							</div>
							<div class="bg-purple-50 p-4 rounded-lg">
								<a href={`${timereserveURL}book/4?id=12`}
								   class="text-purple-600 font-semibold hover:text-purple-800" 
								   target="_blank">
									Varaa ilmainen kartoitus puhelu
								</a>
								<p class="text-sm text-gray-500 mt-1">
									Katsotaan yhdessä sinun seuraava eheytymisen askel eteenpäin
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="text-center">
					<img
						class="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
						src="https://i.imgur.com/gPwhZ44.png"
						alt="Enkeli"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Store Section -->
	<section class="py-16 px-4 bg-gray-50">
		<div class="max-w-4xl mx-auto">
			<div class="fade-in-section text-center bg-white rounded-2xl p-8 shadow-lg">
				<h2 class="text-3xl font-bold text-gray-800 mb-6">Kaupasta löydät lisää</h2>
				<p class="text-lg text-gray-600 mb-8">
					Minivalmennuksia ja kursseja sekä kuunneltavia äänitteitä ja digitaalisia voima korttipakkoja. 
					Äänitteet ovat helppo ja nopea tapa eheyttää ja antaa hoitoja itselle.
				</p>
				<img
					loading="lazy"
					class="w-full max-w-md mx-auto rounded-xl shadow-lg"
					src="https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2FKUVA%202.%20T%C3%A4m%C3%A4%20kuva%20tulee%20etusivulle%20sen%20mun%20aiemman%20tunne%20itsesi-loista%20itsellesi%20kuvan%20tilalle.png?alt=media&token=462690a5-c8bf-4b5f-8376-f324c66e104f"
					alt="Kauppa"
				/>
			</div>
		</div>
	</section>

	<!-- Daily Quote -->
	<section class="py-16 px-4">
		<div class="max-w-2xl mx-auto">
			<div class="fade-in-section bg-white rounded-2xl p-8 shadow-lg border-4 border-dashed border-green-300">
				<h2 class="text-2xl font-bold text-center mb-6 text-gray-800">
					Voimalause päivään
				</h2>
				<Quote />
			</div>
		</div>
	</section>

	<!-- Susanna Section -->
	<section class="py-16 px-4 bg-purple-100">
		<div class="max-w-4xl mx-auto">
			<div class="fade-in-section bg-white rounded-2xl p-8 shadow-lg">
				<div class="grid lg:grid-cols-2 gap-8 items-center">
					<div class="text-center">
						<img
							loading="lazy"
							src="https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2FKuva%203.%20T%C3%A4m%C3%A4%20kuva%20etusivulle%20sivun%20alas%20siihen%20mun%20nimitiet9ojen%20tilalle..png?alt=media&token=9dd8d132-70f5-4706-9a83-897ed27af73d"
							alt="Susanna Höijer"
							class="w-full max-w-xs mx-auto rounded-2xl shadow-lg"
						/>
					</div>
					<div class="space-y-4">
						<h2 class="text-2xl font-bold text-gray-800">
							Avaa ovi omaan muutokseesi ja voi hyvin!
						</h2>
						<p class="text-lg text-purple-600 font-medium">
							Ilon säteitä päivään Sinulle!
						</p>
						<div class="border-t pt-4">
							<p class="font-semibold text-gray-800">Susanna Höijer</p>
							<p class="text-gray-600">
								Parantaja, näkijä, henkinen valmentaja, koulutettu hieroja
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Free Guide CTA -->
	<section class="py-16 px-4 bg-yellow-100">
		<div class="max-w-4xl mx-auto text-center">
			<div class="fade-in-section">
				<a href="https://info-hyvinvointikeskusluxus.systeme.io/029e9b27" 
				   class="inline-block bg-yellow-500 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-yellow-600 transition-colors shadow-lg" 
				   target="_blank">
					Tilaa tästä ILMAINEN Esteet itsesi rakastamisen tiellä -opas
				</a>
			</div>
		</div>
	</section>

	<!-- Legal Disclaimer -->
	<section class="py-12 px-4 bg-gray-100">
		<div class="max-w-4xl mx-auto">
			<div class="bg-white rounded-xl p-6 shadow-md">
				<h3 class="font-semibold text-gray-800 mb-3">Lääketieteellinen vastuuvapaus lauseke:</h3>
				<p class="text-sm text-gray-600 leading-relaxed">
					Tällä sivustolla annettuja tietoja tai yrityksen palveluita ei ole tarkoitettu diagnosoimaan, 
					hoitamaan tai parantamaan ketään. Sivun tiedot ja palvelut eivät korvaa terveydenhuollon 
					ammattilaisen kanssa tapahtuvaa vastaanottoa tai konsultaatiota, eikä niitä pidä tulkita 
					lääketieteellisenä neuvona. Nämä sivut ja Hyvinvointikeskus Luxusen palvelut on tarkoitettu 
					lisäämään Sinulle tietoisuutta ja ymmärrystä henkisestä ja fyysisestä hyvinvoinnista, 
					tasapainosta ja eheytymisestä ja siten tukemaan Sinua muutoksesi ja hyvinvointisi matkalla. 
					Jos Sinulla on jokin henkistä tai fyysistä terveyttä uhkaava asia jossa tarvitset 
					terveydenhuollon neuvoja käänny heidän puoleen. Hyvinvointikeskus Luxus ei ole vastuussa 
					näiden palveluiden ja hoitojen mahdollisista haittavaikutuksista terveydellesi.
				</p>
			</div>
		</div>
	</section>

	<Contact />
</main>

<style>
	/* Clean typography */
	* {
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	/* Smooth scrolling */
	html {
		scroll-behavior: smooth;
	}

	/* Accessibility */
	@media (prefers-reduced-motion: reduce) {
		.fade-in-section {
			transition: none;
		}
	}
</style>
