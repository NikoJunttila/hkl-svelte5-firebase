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
					- näkyväksi omalle itsellesi, löytämään oma vahvuutesi sekä avaamaan korkein
					tietoisuustaajuutesi jolloin myös fyysinen hyvinvointisi voi alkaa kukoistaa.
				</p>
			</div>
			<div>
				<img
					class="shader min-w-[250px] min-h-[250px] rounded ml-2"
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
					class="mt-3 shader max-w-[300px] max-h-[250px] rounded"
					src="https://i.imgur.com/851DS8t.jpeg"
					alt="senjankuva"
				/>
			</div>
			<div>
				Hyvinvointikeskus Luxusen hoidot ja valmennukset ovat syntyneet vankalla kokemuksella ja
				ammattitaidolla yli kahdenkymmenen vuoden ajalta. Hoidot sisältävät vahvaa hoitavaa valoa ja
				energiataajuutta joka on yksi muutoksen työvälineistä. Palveluista löytyy seuraavat
				etäohjelmat:
				<br />
				🟣 Muutoksen matka valmennusohjelma joka on 3 kk rakkausmatka itseesi.
				<br />
				🟣 Syvällisellä Theta Healing matkalla työstetään ydinsyitä alitajunnan taajuudella jolloin henkinen
				ja fyysinen tila pääsee paremmin eheytymään.
				<br />
				🟣 Pääset Valosiivet ohjelmalla lempeästi kokemaan enkeleiden luomat vahvat energiahoidot ja
				viestit.
				<br />
				🟣 Navigointi ohjelma on hienovärähteistä energiahoitoa joka avaa sinua ja näyttää sinulle eteenpäin
				menemisen reitit.
				<br />
				🟣 Tiennäyttäjä ohjelma avaa elämän ilon ja vapauttaa pelkoja silloin kun jokin sairaus on tullut
				opettamaan asioita.
				<img
					class="mt-3 shader max-w-[300px] max-h-[250px] rounded"
					src="https://i.imgur.com/iD3SVYo.jpeg"
					alt="idk"
				/>
			</div>
		</div>
	</section>
	<section class="min-h-[30vh] flex items-center py-5">
		<div
			class="hidden2 w-[400px] rounded ml-[5%] xl:ml-[10%] grid place-items-center"
		>
			<div>
				Pääset omille muutoksen matkoille kolmella tavalla:
				<br />
				1. Varaa ilmainen
				<a
				class="text-green-600 font-bold"
					href="https://booksalon.fi/hyvinvointikeskus-luxus?booking-state=N4IgzgpgTgbglgYwgYQPYDsAuEAemwgBcA2qJLIhAJIAmRIAbACxMAcAzEwAwBMPA7DwCG-GkIYMAjDSb92EdiAA0IITRpxMcDEIA2AZWjwkYWgRIBdAL7WgA"
					>kartoitusaika</a
				>
				jossa katsotaan mikä palvelu olisi sinulle sopivin.
				<br />
				2. Osta palvelu suoraan <a class="text-green-600 font-bold" href="/kauppa">kaupasta</a> jolloin pääset sen jälkeen varaamaan
				ajan hoitoon.
				<br />
				3. Kun 3 kk Muutoksen matka valmennusohjelma kutsuu sinua, varaa ensin siihen oma
				<a class="text-green-600 font-bold"
					href="https://booksalon.fi/hyvinvointikeskus-luxus?booking-state=N4IgzgpgTgbglgYwgYQPYDsAuEAemwgBcA2qJLIhAJIAmRIA7AIYAcADBAgCysRcCsENgE4AZv2EQGANgBGARn4gANCCY0acTHAxMANgGVo8JGFoESAXQC%2BNoA"
					>tutustumisaika täältä.</a
				>
			</div>
			<div class="mt-2">
				<img
					class="mt-3 shader max-w-[300px] max-h-[250px] rounded"
					src="https://i.imgur.com/3BK0By2.jpg"
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
					class="mt-3 shader rounded"
					src="https://i.imgur.com/PLnX1Ch.jpeg"
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
					src="https://i.imgur.com/34LfzPl.jpeg"
					alt="susanna"
					class="shader rounded"
				/>
			</div>
			<div class="flex flex-col gap-2 pl-3 ml-2">
				<p>Valolla ja rakkaudella, minulla on ilo palvella Sinua hyvinvointisi matkalla!</p>
				<p>
					Susanna Höijer Parantaja, Näkijä, Kouluttaja, Theta Healing® Practioner, Koulutettu
					hieroja
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
			<p class="text-xl">Kiitollisuuden meditaatio - ole hyvä :)</p>
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
			<label class="flex justify-center items-center">Sposti:<input
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
