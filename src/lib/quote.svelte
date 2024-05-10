<script>

	const options = [
		'” Kun keskityn valoon, ystävällisyyteen, runsauteen ja rakkauteen, ne laajenee elämässäni”.',
		'” Vapautan menneisyyden katumukset ja tulevaisuuden huolet.”',
		'” Kuulun positiivisten tunteiden taajuuteen. ”',
		'” Minulla on rohkeus ja luottamus mennä elämässäni eteenpäin.”',
		' ” Vapautan kaiken epävarmuuden ja pelon. Olen tietoinen omasta voimastani.”',
		'” Olen läsnä omassa elämässäni.”',
		'” Luotan parhaaseen lopputulokseen joka tilanteessa.”',
		'” Luotan omiin kykyihini ja elämän prosessiin. ”',
		'” Vapautan asioita, tunteita ja ajatuksia jotka eivät enää palvele minua.”',
		'” Sydämeni on rakkauden taajuudella.”',
		' ” Kehoni on hyvinvoinnin taajuudella.”',
		'” Olen arvokas, riittävä ja hyvä juuri sellaisena kuin olen. Minä olen.”',
		'” Käytän viisauttani ja arvostelukykyäni ja teen valintoja ilman pelkoja ja huolta.',
		'” Tiedän miltä tuntuu kunnioittaa ja arvostaa itseäni. Arvostan ja kunnioitan itseäni.”',
		'” Tiedän kuinka rakastaa ilman menettämisen pelkoa.”',
		'” Annan anteeksi päästämällä irti kivusta ja kaunasta ja teen tilaa rakkaudelle.”',
    `” Minulla on viisaus, voima, motivaatio, inspiraatio ja intohimo saavuttaa mitä tahansa ja kaikkea, mitä valitsen.”`,
    `” Olen kiitollisuuden taajuudella päivien mittaan, ymmärrän olevani monipuolisesti lahjakas ja olen kaikesta kiitollinen.”`,
    `” Olen terveyden ja hyvinvoinnin magneetti, vedän puoleeni terveyttä ja hyvinvointia joka ikinen päivä.”`,
    `” Minulla on vaurauden ja yltäkylläisyyden ajattelutapa, voin saavuttaa mitä tahansa ja tunnen itseni voimakkaaksi ja itsevarmaksi.”`,
    `” Jokainen yö tuo minulle levollisen unen. Kehoni on täysin rentoutunut unen aikana ja saan tarvitsemani rentoutuksen ja levon yön ja nukkumiseni aikana.”`,
    `” Jokainen päivä tuo minulle tuoreita uusia mahdollisuuksia, enkä malta odottaa, että pääsen aloittamaan jokaisen päivän ihanassa valossa.”`,
    `” Rakastan itseni eheyttämistä. Kun mikä tahansa eheytyminen onnistuu ja edistyy tavalla tai toisella, iloitsen siitä, ja tunnen itsevarmuutta ja innostusta.”`,
    `” Rakastan Itseäni ja heijastan hyvää oloani kaikkialle. Rakastan olla Itseni lähellä, viettää aikaa Itseni kanssa ja kommunikoida sieluni, kehoni ja mieleni kanssa. Tunnen olevani rakastettu, rentoutunut, rauhallinen ja itsevarma.”`,
    `” Päätän menestyä kaikilla elämäni alueilla. Tunnen olevani lahjakas ja arvostettu.”`,
    `”  Menestyn kaikessa, mitä teen, yllätän itseni kyvyilläni ja saavutuksillani ja tunnen olevani inspiroitunut ja lahjakas.”`,
    `” Vastaanotan itselleni pyyteetöntä rakkautta juuri nyt ja tiedän että olen aina oikealla taajuudella kaikessa.”`,
	];
	let quoteToShow = $state("");

	$effect(() => {
		const randomIndex = Math.floor(Math.random() * options.length);
		quoteToShow = options[randomIndex];
	});
</script>

<h3>{quoteToShow}</h3>
