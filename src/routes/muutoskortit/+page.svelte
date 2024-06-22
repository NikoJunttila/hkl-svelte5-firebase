<script>
     //@ts-ignore
    let {data} = $props(); 
    let cards = $state(data.cards)
    let currentIndex = $state(0)
    function nextIndex(){
       if(currentIndex == cards.length-1){
         currentIndex = 0
       }else{
         currentIndex++
       }
    }
</script>
<div class="grid place-items-center my-4">
  <div class="max-w-[900px] mb-3 mx-1">
    <h1 class="font-bold text-2xl mb-3">MUUTOSKORTIT</h1> 
    
    Muutoskortti-pakka sisältää 52 erilaista muutos aiheista ja voimaannuttavaa,  inspiroivaa, opettavaa ja eheyttävää korttia. Pakka sisältää myös 10 energeettistä voimakuva korttia. 
    <br>
    Korttien sisältämät tehtävät ja ohjelmat ovat muutoksen taajuudella ja siten antavat sinulle helposti keinot ja työvälineet ohjelmoida alitajuntaasi ja löytää tasapaino ja eheytymisen matka itseesi. 
    <br>
    Kun alat tekemään korttien sisältämiä tehtäviä alkaa positiivisia muutoksia kyllä näkyä ja tuntua. Alat huomata mitä kaikkea lisää voit alkaa itsessäsi muuttamaan jotta voit voida paremmin ja saada sinun hyvinvointiin lisää tasapainoa. 
    <br>
    Korttien aiheet liittyvät hyvinvointiin, itsesi rakastamiseen, raha energiaan, parisuhteeseen, terveyteen.
    <br>
    Voit harjoitella korttien kanssa seuraavasti:
    <br>
    1. Muutokset vuoden aikana: Nosta yksi kortti viikossa ja opettele viikon ajan kortin sisältämä opastus tai muutos. Näin sinulla on vuoden jokaiselle viikolle oma ohjelma ja tehtävä jolla eheyttää itseäsi ja luoda pitkän tähtäimen muutosta elämään.
    <br>
    2. Ohjelmoi itseäsi päivittäin:  Nosta pakasta kortti päivittäin ja tee kortin opastama asia, tehtävä tai voimaannuttavat lataukset. Päivittäin nostetut kortit luovat alitajuntaasi  valmiuden työstää asioita nopeastikin. 
    <br>
    3. Nosta kortti silloin tällöin: Voit käyttää kortteja myös tilanteisiin kun haluat saada vastauksia miettimääsi omaan asiaan tai tilanteeseen. Ja antaa kortin tietojen opastaa sinua löytämään "vastaukset". 
    <br>
    4. Nosta kortteja yhdessä toisen kanssa (esim. parisuhteessa puolison kanssa) 
    Korttipakan tehtävät voivat antaa uutta näkökulmaa käsitellä parisuhteen asioita mutta myös eheyttää yhteyttä puolisoon. Nostakaa kortteja yhdessä ja tehkää korttien antamien ohjeiden mukaan kumpikin erikseen oma tehtävä tai ohjelmointi. 
    Ja katsokaa miten muutokset alkavat näkyä teidän suhteessa.
    <br>
    <br>
    Korttipakan kortteihin voi aika ajoin tulla muutoksia esimerkiksi niin, että joitakin kortteja voi tulla lisää ja joitakin poistua.  
    <br>
    <br>
    Ota mukaan ilo ja hauskuus kun nostat kortteja. Anna ensin kortin tekstin avautua sinulle ja tunnustele miltä aihe tuntuu ja sitten tee tehtävä, tai ota vastaan ohjelmointeja ja voimalatauksia.
    <br>
    
    Muutoskortit on luonut Susanna Höijer<br>
    © Hyvinvointikeskus Luxus 
  </div>
    {#if cards}
    <div>
    <figure>
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <img onclick={nextIndex} class="rounded cursor-pointer" src={cards[currentIndex].img} alt="kortti">
    </figure>
    <div class="mt-2 flex justify-center gap-4">
        <button disabled={currentIndex === 0} onclick={() => currentIndex--}>Aikaisempi kortti</button>
        <button onclick={nextIndex}>Seuraava kortti</button>
      </div>
    </div>
  {:else}
    <div>
      Ladataan kortteja...
    </div>
  {/if}
</div>
