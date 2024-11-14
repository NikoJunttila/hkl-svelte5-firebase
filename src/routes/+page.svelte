<script>
	import Landing from '$lib/components/landing.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Quote from '$lib/components/quote.svelte';
	import { notifications } from '$lib/stores/notifications.svelte';

	/**
	 * @type {any[] | NodeListOf<Element>}
	 */
	let hiddenElements = [];

	$effect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show2');
				} else {
					entry.target.classList.remove('show2');
				}
			});
		});

		hiddenElements = document.querySelectorAll('.hidden2');
		hiddenElements.forEach((el) => observer.observe(el));
		return () => {
			observer.disconnect();
		};
	});
</script>

<svelte:head>
	<title>Hyvinvointikeskus Luxus</title>
</svelte:head>

<main class="flex flex-col text-xl">
	<Landing />
	<section class="min-h-[30vh] flex items-center py-5">
		<div
			class="hidden2 max-w-[500px] rounded ml-[5%] gap-5 xl:ml-[10%] flex flex-col lg:flex-row items-center"
		>
			<div>
				<h2 class="text-2xl font-bold">Valoisasti tervetuloa omalle muutosmatkallesi</h2>
				<p class="text-xl">
					- näkyväksi omalle itsellesi, löytämään oma henkinen vahvuutesi sekä avaamaan sinun
					korkeimmat tietoisuus taajuudet jolloin myös sinun fyysinen hyvinvointi voi alkaa
					kukoistaa.
				</p>
			</div>
			<div>
				<img
					class="shader min-w-[250px] min-h-[250px] rounded ml-2 dropShadow"
					src="https://i.imgur.com/h8QNWAA.png"
					alt="hkl"
				/>
			</div>
		</div>
	</section>
	<section class="min-h-[30vh] flex items-center py-5">
		<div class="hidden2 w-[400px] rounded lessMargin flex gap-6 flex-col">
			<div>
				<img
					class="mt-3 shader max-w-[300px] max-h-[250px] rounded dropShadow"
					src="https://i.imgur.com/nVwWQad.jpeg"
					alt="senjankuva"
				/>
			</div>
			<div>
				Hyvinvointikeskus Luxusen hoidot ja valmennukset ovat syntyneet vankalla kokemuksella ja
				ammattitaidolla yli kahdenkymmenen vuoden ajalta. Hoidot ja valmennukset sisältävät vahvaa
				parantavaa ja hoitavaa valoa ja energiataajuutta joilla saadaan muutoksia aikaan.<br><br>
				<br />
				Oletko valmis omaan muutokseesi?
				<br />
				Hyvinvointikeskus Luxus palvelee seuraavilla ohjelmilla ja etähoidolla:
				<br />
				🟣 Syvällisellä Theta Healing hoidolla löydetään ja työstetään ydinsyy haastetta alitajunnan
				taajuudella ja uudelleen ohjelmoidaan tilalle toimivampia ratkaisuja jolloin henkinen ja fyysinen
				tila pääsee eheytymään. viestit.
				<br />
				🟣 Navigointi ohjelma on hienovärähteistä energiahoitoa joka avaa sinua ja näyttää sinulle eteenpäin
				menemisen reitit.
				<br />
				🟣 Muutoksen matka valmennusohjelma on 3 kk rakkausmatka itseesi.

				<br />
				🟣Tunne itsesi - Loista itsellesi on 3x90 min. hoitava valmennusohjelma joka auttaa sinua käsittelemään
				henkisiä tai fyysisiä traumoja.
				<br />
				🟣 Sisäisen lapsen tulkinta/valmennus avaa sisimpääsi jolloin sisäinen lapsesi tulee kuulluksi
				ja nähdyksi sinulle.
				<br />
				🟣 Unelmista totta! Vapaudu rajoittavista uskomuksista jotka estävät sinua saavuttamasta haluamaasi.
				Tämä kaupassa oleva minivalmennus *Kulje unelmiesi taajuudelle* on matkakartta, joka auttaa sinua
				askel kerrallaan saavuttamaan luottamuksesi siihen, että voit vetää puoleesi sinua kutsuvia unelmia.
				<br />
				🟢 Workshop luennoilla pääsee parantaville energiataajuuksille. Workshop luennot ovat samalla
				ns. työpajoja jotka antavat sinulle muutostyövälineitä. Luennot ovat kestoltaan alk. 60 min.
				Kun haluat tilata luennon varaa ilmainen <a href="https://booksalon.fi/hyvinvointikeskus-luxus?booking-state=N4IgzgpgTgbglgYwgYQPYDsAuEAemwgBcA2qJLIhAJIAmRIAbACxMAcAzEwAwBMPA7DwCG-GkIYMAjDSb92EdiAA0IITRpxMcDEIA2AZWjwkYWgRIBdAL7WgA" class="text-green-800 font-bold">kartoitusaika</a> niin keskustellaan asiasta lisää.
				<br />
				<ul>
					Luentojen aiheita ovat:
					<li>* enkeliluento</li>
					<li>* tunne itsesi - loista itsellesi</li>
					<li>* rakkausmatka itseesi</li>
					<li>* alitajunnan voima</li>
				</ul>
				<br>
				<br>
				<div>
					KAUPASTA: Löytyy lisäksi minivalmennuksia ja kursseja sekä kuunneltavia äänitteitä ja digitaalisia voima korttipakkoja.
Äänitteet ovat helppo ja nopea tapa eheyttää ja antaa hoitoja itselle. 
				</div>

				<img
					class="mt-3 shader max-w-[300px] max-h-[250px] rounded dropShadow"
					src="https://i.imgur.com/jDRaoXg.png"
					alt="idk"
				/>
			</div>
		</div>
	</section>
	<section class="min-h-[30vh] flex items-center py-5">
		<div class="hidden2 w-[400px] rounded ml-[5%] xl:ml-[10%] grid place-items-center">
			<div>
				💜 Susannalla on yli kahden vuosikymmenen ammattitaito energiaparantamisen taajuudella ja selvänäkemisen kyky ihmisten fyysisen -ja henkisen kehon tunnelukkojen informaatiosta ja niiden avaamisesta, parantamisesta ja kehon kokonaisvaltaisesta eheyttämisestä. 
				<br />
				🟡 Fyysinen keho saattaa kantaa mukana monien vuosikymmenten takaa asioita ja kokemuksia jotka kiinnittyvät kehon energiatilaan ja sieltä alkavat ajan kanssa vaikuttaa fyysiselle keholle aiheuttaen oire haasteita. 
				<br />
				Jos koet, että sinulla on tällaisia oire haasteita tai tunnelukkoja joita sinun keho tai alitajunta kantaa mukana niin pääset omille muutos matkoille näillä kolmella tavalla: 
				<ul>
					<li>* varaa  <a href="https://booksalon.fi/hyvinvointikeskus-luxus" class="text-green-800 font-bold">hoitoaika</a> 
					</li>
					<li>* valitse <a href="https://www.hyvinvointikeskusluxus.com/store" class="text-green-800 font-bold">kaupasta</a> sopiva hoito tai valmennus. 
					</li>
					<li>* varaa ilmainen <a href="https://booksalon.fi/hyvinvointikeskus-luxus?booking-state=N4IgzgpgTgbglgYwgYQPYDsAuEAemwgBcA2qJLIhAJIAmRIAbACxMAcAzEwAwBMPA7DwCG-GkIYMAjDSb92EdiAA0IITRpxMcDEIA2AZWjwkYWgRIBdAL7WgA" class="text-green-800 font-bold">kartoitus puhelu</a> niin katsotaan yhdessä sinun seuraava eheytymisen askel eteenpäin.
					</li>
				</ul>
			</div>
			<div class="mt-2">
				<img
					class="mt-3 shader max-w-[300px] max-h-[250px] rounded dropShadow"
					src="https://i.imgur.com/gPwhZ44.png"
					alt="angel"
				/>
			</div>
		</div>
	</section>

	<section class="min-h-[30vh] flex items-center py-5">
		<div class="hidden2 w-[400px] rounded lessMargin">
			<div>
				🟣 KAUPASTA: löytyy lisäksi minivalmennuksia sekä kuunneltavia äänitteitä. Ja lisäksi
				kaikille jotka haluavat avata oven maailmankaikkeuden ihmeille, niin on nyt myös tarjolla
				Metsätonttu Alfredin tarinoiden matkat jotka ohjaavat sinut luonnon lempeään maailmaan.
				Alfredin tarinoihin pääset kaupan kautta jonne tulee aina uusi tarina sitä mukaan kun
				energiamatkoja syntyy.
			</div>
			<div>
				<img
					loading="lazy"
					class="mt-3 shader rounded dropShadow"
					src="https://i.imgur.com/ulffGhQ.png"
					alt="susanna2"
				/>
			</div>
		</div>
	</section>

	<section class="min-h-[30vh] flex items-center py-5">
		<div
			class="hidden2 w-[400px] rounded ml-[5%] xl:ml-[10%] p-4 border-4 border-dashed border-green-400"
		>
			<h2 class="mb-2">Voimalause päivään</h2>
			<Quote />
		</div>
	</section>
	<section class="min-h-[30vh] flex items-center py-5">
		<div class="hidden2 w-[450px] rounded lessMargin flex">
			<div>
				<img
					loading="lazy"
					src="https://i.imgur.com/Pkr7YgK.jpeg"
					alt="susanna"
					class="shader rounded dropShadow"
				/>
			</div>
			<div class="flex flex-col gap-2 pl-3 ml-2">
				<p>Avaa ovi omaan muutokseesi ja voi hyvin! </p>
					<p>Ilon säteitä päivään Sinulle! 
					</p>
				
				<p>
					Susanna Höijer, <br />
					parantaja, näkijä, henkinen valmentaja, koulutettu hieroja
				</p>
			</div>
		</div>
	</section>
	<div class="flex justify-center items-center">
		<form
			id="tilaus"
			class="w-64 sm:w-[600px] p-4 flex justify-center items-center flex-col gap-3 bg-primary rounded-md py-10"
			target="_blank"
			method="post"
			action="https://archive.cardu.com/mailinglist/d2951a3fb48b486d576ac1a9fab11d0b73aac32f"
		>
			<p class="text-xl">🟡 Liity alta uutiskirjeemme tilaajaksi. Uutiskirje ei sido sinua mihinkään päinvastoin saat itsellesi ihania hoitavia opastuksia ja aktivointeja ja myös tarjouksia. 
			</p>
			<p>
				* Kun liityt Luxusen uutiskirjeen tilaajaksi saat lahjaksi Kiitollisuuden meditaatio
				äänitteen.
			</p>
			<p>
				* Luxusen uutiskirjeen lukijat saavat sähköpostiinsa positiivista energiaa sisältäviä
				kirjeitä joissa voi olla lyhyitä hoito-ohjelmia, aktivointeja ja harjoituksia hyvinvoinnin
				tasapainon ylläpitämiseen. Sekä tietysti saat ensimmäisenä tietää Luxusen extra tarjoukset.
			</p>
			<p>
				* Uutiskirje on ilmainen eikä sido sinua mihinkään. Voit milloin tahansa lopettaa tilauksen
				mikäli tunnet kirjeet tarpeettomiksi.
			</p>
			<p>
				* <span class="font-bold">Kyllä haluan liittyä</span> Luxusen uutiskirjeen tilaajaksi ja saada
				maksuttoman Kiitollisuuden meditaation.
			</p>
			<br />
			<label class="flex justify-center items-center"
				>Sposti:<input
					class="ml-2 input bg-base-100 outline outline-3 outline-secondary"
					type="text"
					name="email"
					placeholder="Sähköposti"
					value=""
				/></label
			>
			<button
				onclick={() => notifications.success('Tilattu uutiskirje', 5000)}
				class="btn bg-base-300"
				type="submit"
				value="Liity">Tilaa</button
			>
			* Antamalla yhteystietosi hyväksyt samalla, että sinulle voidaan jatkossa lähettää sähköpostia.
			Voit poistua listalta koska tahansa.
		</form>
	</div>
	<div class="max-w-[500px] mx-auto py-5 show2">
		Lääketieteellinen vastuuvapaus lauseke:
		<br />
		Tällä sivustolla annettuja tietoja tai yrityksen palveluita ei ole tarkoitettu diagnosoimaan, hoitamaan
		tai parantamaan ketään. Sivun tiedot ja palvelut eivät korvaa terveydenhuollon ammattilaisen kanssa
		tapahtuvaa vastaanottoa tai konsultaatiota, eikä niitä pidä tulkita lääketieteellisenä neuvona. Nämä
		sivut ja Hyvinvointikeskus Luxusen palvelut on tarkoitettu lisäämään Sinulle tietoisuutta ja ymmärrystä
		henkisestä ja fyysisestä hyvinvoinnista, tasapainosta ja eheytymisestä ja siten tukemaan Sinua muutoksesi
		ja hyvinvointisi matkalla. Jos Sinulla on jokin henkistä tai fyysistä terveyttä uhkaava asia jossa
		tarvitset terveydenhuollon neuvoja käänny heidän puoleen. Hyvinvointikeskus Luxus ei ole vastuussa
		näiden palveluiden ja hoitojen mahdollisista haittavaikutuksista terveydellesi.
	</div>
	<Contact />
</main>

<style>
	.dropShadow {
		filter: drop-shadow(5px 5px 18px #6ee7b7);
	}
	div {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	.lessMargin {
		margin-left: 50%;
	}
	@media (max-width: 750px) {
		.lessMargin {
			margin-left: 20%;
		}
	}
	@media (max-width: 750px) {
		.lessMargin {
			margin-left: 5%;
		}
	}
	.hidden2 {
		opacity: 0;
		transition: all 1s;
		filter: blur(5px);
		transform: translateX(-100%);
		transition-timing-function: ease-in;
	}

	.show2 {
		opacity: 1;
		filter: blur(0);
		transform: translateX(0);
	}
	@media (prefers-reduced-motion) {
		.hidden2 {
			transition: none;
		}
	}
</style>
