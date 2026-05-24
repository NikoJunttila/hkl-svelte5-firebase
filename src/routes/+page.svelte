<script>
	import Landing from '$lib/components/landing.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Quote from '$lib/components/quote.svelte';
	import { timereserveURL } from '$lib/constants';
	import KeyBanner from '$lib/components/KeyBanner.svelte';
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
						Kun muutat alitajuiset rajoittavat ohjelmoinnit saat elämääsi kokonaisvaltaisen
						tasapainon.
					</h1>
					<p class="text-xl text-gray-600 leading-relaxed">
						Näkyväksi omalle itsellesi, löytämään oma henkinen vahvuutesi sekä avaamaan sinun
						korkeimmat tietoisuus taajuudet jolloin myös sinun fyysinen hyvinvointi voi alkaa
						kukoistaa.
					</p>
					<div class="flex flex-wrap gap-4">
						<a
							href={`${timereserveURL}book/4?`}
							class="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
							target="_blank"
						>
							Varaa aika
						</a>
						<a
							href="/store"
							class="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-200 hover:border-purple-400 transition-colors"
						>
							Kauppa
						</a>
					</div>
				</div>
				<div class="text-center">
					<KeyBanner title="Muutoksen avaimet"></KeyBanner>
				</div>
			</div>
		</div>
	</section>

	<!-- Narrative Section -->
	<section class="py-16 px-4">
		<div class="max-w-3xl mx-auto fade-in-section">
			<div class="text-center mb-12">
				<span
					class="inline-block text-sm font-semibold tracking-widest text-purple-600 uppercase mb-3"
				>
					Pysähdy hetkeksi
				</span>
				<h2 class="text-3xl lg:text-4xl font-bold text-gray-800">Tunnistatko tämän tunteen?</h2>
			</div>

			<div class="space-y-6 text-lg text-gray-700 leading-relaxed">
				<p>
					Oletko koskaan kokenut ahaa-elämystä, jossa jokin yhtäkkiä loksahtaa paikoilleen? Ehkä se
					syntyi jostakin lukemastasi tai kuulemastasi – tai sisäisen opastuksen ja visualisoinnin
					kautta. Tuntui kuin jokin olisi muuttunut. Näit jotakin selkeämmin.
				</p>
				<p>
					Ja sitten elämä jatkui. Tuo selkeys, olipa se kuinka todellinen tahansa, ei aivan vienyt
					sinua eteenpäin toivomallasi tavalla. Ei siksi, etteikö kokemus olisi ollut aito – vaan
					siksi, että se sijaitsee usein juuri sillä taajuudella, jonka alitajuntasi antaa sinun
					uskoa olevan sinulle mahdotonta.
				</p>
				<p>Kauan sitten luotu ohjelma voi kuiskata sinulle esimerkiksi:</p>
			</div>

			<!-- Self-talk quotes -->
			<div class="my-10 grid sm:grid-cols-2 gap-4">
				<blockquote class="bg-white border-l-4 border-purple-300 rounded-r-xl p-5 shadow-sm">
					<p class="text-gray-700 italic">"Et kuitenkaan onnistu."</p>
				</blockquote>
				<blockquote class="bg-white border-l-4 border-purple-300 rounded-r-xl p-5 shadow-sm">
					<p class="text-gray-700 italic">"Muut pystyvät siihen, mutta sinä et."</p>
				</blockquote>
				<blockquote class="bg-white border-l-4 border-pink-300 rounded-r-xl p-5 shadow-sm">
					<p class="text-gray-700 italic">"Et tee mitään oikein."</p>
				</blockquote>
				<blockquote class="bg-white border-l-4 border-pink-300 rounded-r-xl p-5 shadow-sm">
					<p class="text-gray-700 italic">"Et riitä."</p>
				</blockquote>
				<blockquote class="bg-white border-l-4 border-blue-300 rounded-r-xl p-5 shadow-sm">
					<p class="text-gray-700 italic">"Kukaan ei oikeasti näe sinua."</p>
				</blockquote>
				<blockquote class="bg-white border-l-4 border-blue-300 rounded-r-xl p-5 shadow-sm">
					<p class="text-gray-700 italic">
						"Sinun pitää tehdä kaikki yksin – pelkäät jääväsi yksin."
					</p>
				</blockquote>
			</div>

			<div class="space-y-6 text-lg text-gray-700 leading-relaxed">
				<p>
					Ja näin jarrutat itse itseäsi. Kerrot itsellesi paljon tarinoita ja uskomuksia, jotka
					eivät pidä paikkaansa – vaikka alitajuntasi niin sinulle uskottelee. Joskus sisimmässäsi
					oleva trauma tai pelko estää sinua pääsemästä eteenpäin elämäsi eri osa-alueilla.
				</p>
			</div>

			<!-- Seuraava askel CTA card -->
			<div
				class="mt-12 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 rounded-2xl p-8 lg:p-10 shadow-lg"
			>
				<div class="flex items-center gap-3 mb-4">
					<span class="text-3xl" aria-hidden="true">👉</span>
					<h3 class="text-2xl lg:text-3xl font-bold text-gray-800">"Seuraava askel" -puhelu</h3>
				</div>
				<p class="text-gray-700 leading-relaxed mb-4">
					Ilmainen kartoitus, jonka tarkoituksena on selvittää mikä hoito tai palvelu sinulle
					parhaiten sopisi. Tavoitteena on, että voisit tulla nähdyksi ja kuulluksi – itsellesi ja
					muille – sekä löytää oman sisäisen vahvuutesi ja itsetuntosi. Silloin myös fyysinen
					hyvinvointisi voi alkaa kukoistaa.
				</p>
				<p class="text-gray-600 text-sm leading-relaxed mb-6">
					Soitan sinulle silloin, kun olet varannut kartoitusajan. Puhelu ei sido sinua mihinkään,
					mutta voi käynnistää muutoksen kohti paljon parempaa.
				</p>
				<a
					href={`${timereserveURL}book/4?id=12`}
					target="_blank"
					class="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
				>
					Varaa ilmainen kartoitus
				</a>
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
					<h2 class="text-3xl font-bold text-gray-800">Matka kohti tasapainoa</h2>
					<p class="text-lg text-gray-600">
						Jokainen kohtaaminen on ainutlaatuinen mahdollisuus pysähtyä, kuunnella itseään ja
						löytää uudelleen yhteys omaan sisäiseen viisauteesi. Lempeällä otteella ja vahvalla
						ammattitaidolla tuen sinua matkalla kohti syvempää hyvinvointia – kehossa, mielessä ja
						sielussa.
					</p>
					<div class="bg-purple-50 p-6 rounded-xl">
						<h3 class="text-xl font-semibold text-gray-800 mb-4">
							Oletko valmis omaan muutokseesi?
						</h3>
						<iframe
							class="w-full h-96 rounded-lg border-2 border-purple-100"
							src="{timereserveURL}book/4?lang=fi&id=12"
							title="ajanvaraus"
						>
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
				<h2 class="text-3xl font-bold text-gray-800 mb-4">Muutoksen avaimet</h2>
				<p class="text-lg text-gray-600">
					Hyvinvointikeskus Luxus palvelee seuraavilla ohjelmilla ja etähoidolla
				</p>
			</div>

			<div class="fade-in-section grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div class="bg-white p-6 rounded-xl shadow-lg">
					<div class="text-2xl mb-3">🟣</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Muutoksen matka</h3>
					<KeyBanner
						variant="card"
						title="7 päivän Muutoksen matka on suunniteltu siihen, että opit tuntemaan aitoa rakkauden tunnetta itseäsi kohtaan, joka on menestyksen avain elämäsi kaikille osa-alueille."
						subtitle="Muutoksen matka valmennus herättää sinut siihen osaan itseäsi, joka tietää, että olet paljon enemmän."
					></KeyBanner>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg">
					<div class="text-2xl mb-3">🟣</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Theta Healing</h3>
					<KeyBanner
						variant="card"
						title="Theta Healing hoito on yksi muutoksen avaimista. Hoidon avulla vapaudut rajoittavista uskomuksista ja tunteista sekä peloista."
						subtitle="Hoito vaikuttaa välittömästi ja tuo positiivisen muutoksen niin henkiseen hyvinvointiin kuin myös fyysiseen hyvinvointiin."
					></KeyBanner>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg">
					<div class="text-2xl mb-3">🟣</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Tunne itsesi -Loista itsellesi</h3>
					<KeyBanner
						variant="card"
						title="Tunne itsesi - Loista itsellesi hoitava valmennus on suunniteltu Sinulle, joka haluat syventyä traumojen käsittelyyn ja vapautua niistä."
						subtitle="Tällä valmennusmatkalla avaudut sisäisesti tuntemaan itseäsi, jotta voit eheytyä ja loistaa itsellesi."
					></KeyBanner>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg">
					<div class="text-2xl mb-3">🟣</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Voimaannuttava energiahoito</h3>
					<KeyBanner
						variant="card"
						title="Voimaannuttava ja puhdistava Energiahoito vapauttaa fyysiseltä keholta tunnelukkoja ja puhdistaa kehon energiakenttiä."
						subtitle="Energiahoito tehdään puhelimitse keskusteluna sekä lähivastaanotoilla. Hoidossa tulee kehon energeettinen katselmus joka kertoo mitä hoidetaan. Tarvittaessa hoidon aikana tulee myös chakrojen aktivointia, enkelienergiahoitoa, ja viestiä. Hoito on vahva fyysisen kehon ja mielen hoitaja ja puhdistaja."
					></KeyBanner>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg">
					<div class="text-2xl mb-3">🟣</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Enkelienergia hoito</h3>
					<KeyBanner
						variant="card"
						title="Lempeä Enkelienergiahoito avaa elämääsi enkeleiden läsnäolon ja heidän antamat viestit. Hoidossa välittyy pyyteettömän rakkauden voimaa. Hoito on vahva hoitaja elämäsi eri osa-alueille."
						subtitle="Enkelihoito tehdään puhelimitse keskusteluna tai vastaanotoilla."
					></KeyBanner>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg">
					<div class="text-2xl mb-3">🟣</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Energiahieronta</h3>
					<KeyBanner
						variant="card"
						title="Energiahieronta avaa tehokkaasti fyysisen kehon tunnelukkoja ja puhdistaa energioita. Hoidossa käytetään hieronta otteita sekä energeettistä käsillä parantamisen hoitoa."
						subtitle="Energiahieronnan jälkeen keho on vapautunut tunnekuormasta ja mieli on kirkas ja seuraavat askeleet eteenpäin menemisen näyttää selkeältä. Energiahieronta hoito tehdään lähivastaanotoilla."
					></KeyBanner>
				</div>

				<div class="bg-white p-6 rounded-xl shadow-lg">
					<div class="text-2xl mb-3">🟣</div>
					<h3 class="text-xl font-semibold mb-3 text-gray-800">Sisäisen lapsen tulkinta</h3>
					<KeyBanner
						variant="card"
						title="Sisäisen lapsen tulkinta on myös avain sisäiseen muutokseesi sillä tulkinta kertoo sen mitä Sinun oma Sisäinen lapsesi kantaa mukana. Tulkinnassa Sisäinen lapsesi tulee kuulluksi ja nähdyksi sinulle."
						subtitle="Tulkinta sisältää harjoituksen jonka avulla voit vapautua sisäisen lapsesi kantamasta rajoittavasta tunteesta tai uskomuksesta. Tulkinta tulee sähköpostilla."
					></KeyBanner>
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
					Pääset parantaville energiataajuuksille. Workshop luennot ovat samalla ns. työpajoja jotka
					antavat sinulle muutostyövälineitä. Luennot ovat kestoltaan alk. 60 min.
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
						<a
							href={`${timereserveURL}book/4?id=12`}
							class="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
							target="_blank"
						>
							Varaa ilmainen kartoitusaika
						</a>
						<p class="text-sm text-gray-500 mt-2">Keskustellaan asiasta lisää</p>
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
					<h2 class="text-3xl font-bold text-gray-800">Yli kahden vuosikymmenen ammattitaito</h2>
					<p class="text-lg text-gray-600">
						Susannalla on yli kahden vuosikymmenen ammattitaito energiaparantamisen taajuudella ja
						selvänäkemisen kyky ihmisten fyysisen ja henkisen kehon tunnelukkojen informaatiosta ja
						niiden avaamisesta, parantamisesta ja kehon kokonaisvaltaisesta eheyttämisestä.
						<span class="font-bold">
							Hoidot ja valmennukset sisältävät vahvaa parantavaa ja hoitavaa valoa ja
							energiataajuutta joilla saadaan aikaan muutoksia.</span
						>
					</p>

					<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
						<h3 class="font-semibold text-gray-800 mb-2">🟡 Tärkeää tietää</h3>
						<div class="font-semibold text-md">
							Olet ehkä pysytellyt hiljaa silloin kun olisi pitänyt puhua... Olet ehkä mieluummin
							vaiennut ja lopulta ehkä muuttunut "näkymättömäksi" Tai itkemättömät itkut ahdistavat
							painona hartioilla, rintakehällä.
						</div>
						<p class="text-gray-600">
							Fyysinen keho saattaa kantaa mukana monien vuosikymmenten takaa asioita ja kokemuksia
							jotka kiinnittyvät kehon energiatilaan ja sieltä alkavat ajan kanssa vaikuttaa
							fyysiselle keholle aiheuttaen oire haasteita.
						</p>
					</div>

					<div class="space-y-4">
						<h3 class="text-xl font-semibold text-gray-800">
							Pääset omille muutos matkoille kolmella tavalla:
						</h3>
						<div class="space-y-3">
							<div class="bg-blue-50 p-4 rounded-lg">
								<a
									href={`${timereserveURL}book/4?`}
									class="text-blue-600 font-semibold hover:text-blue-800"
									target="_blank"
								>
									Varaa hoitoaika
								</a>
							</div>
							<div class="bg-green-50 p-4 rounded-lg">
								<a
									href="https://www.hyvinvointikeskusluxus.com/store"
									class="text-green-600 font-semibold hover:text-green-800"
								>
									Valitse kaupasta sopiva hoito tai valmennus
								</a>
							</div>
							<div class="bg-purple-50 p-4 rounded-lg">
								<a
									href={`${timereserveURL}book/4?id=12`}
									class="text-purple-600 font-semibold hover:text-purple-800"
									target="_blank"
								>
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
					Minivalmennuksia ja kursseja sekä kuunneltavia äänitteitä ja digitaalisia voima
					korttipakkoja. Äänitteet ovat helppo ja nopea tapa eheyttää ja antaa hoitoja itselle.
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
			<div
				class="fade-in-section bg-white rounded-2xl p-8 shadow-lg border-4 border-dashed border-green-300"
			>
				<h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Voimalause päivään</h2>
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
						<p class="text-lg text-purple-600 font-medium">Ilon säteitä päivään Sinulle!</p>
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
				<a
					href="https://info-hyvinvointikeskusluxus.systeme.io/029e9b27"
					class="inline-block bg-yellow-500 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-yellow-600 transition-colors shadow-lg"
					target="_blank"
				>
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
					Tällä sivustolla annettuja tietoja tai yrityksen palveluita ei ole tarkoitettu
					diagnosoimaan, hoitamaan tai parantamaan ketään. Sivun tiedot ja palvelut eivät korvaa
					terveydenhuollon ammattilaisen kanssa tapahtuvaa vastaanottoa tai konsultaatiota, eikä
					niitä pidä tulkita lääketieteellisenä neuvona. Nämä sivut ja Hyvinvointikeskus Luxusen
					palvelut on tarkoitettu lisäämään Sinulle tietoisuutta ja ymmärrystä henkisestä ja
					fyysisestä hyvinvoinnista, tasapainosta ja eheytymisestä ja siten tukemaan Sinua
					muutoksesi ja hyvinvointisi matkalla. Jos Sinulla on jokin henkistä tai fyysistä terveyttä
					uhkaava asia jossa tarvitset terveydenhuollon neuvoja käänny heidän puoleen.
					Hyvinvointikeskus Luxus ei ole vastuussa näiden palveluiden ja hoitojen mahdollisista
					haittavaikutuksista terveydellesi.
				</p>
			</div>
		</div>
	</section>

	<Contact />
</main>

<style>
	/* Clean typography */
	* {
		font-family:
			'Inter',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			sans-serif;
	}

	/* Smooth scrolling */
	:global(html) {
		scroll-behavior: smooth;
	}

	/* Accessibility */
	@media (prefers-reduced-motion: reduce) {
		.fade-in-section {
			transition: none;
		}
	}
</style>
