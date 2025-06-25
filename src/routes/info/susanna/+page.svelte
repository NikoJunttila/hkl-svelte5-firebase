<script>
import { timereserveURL } from "$lib/constants";
</script>
 <style>
        .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .card-hover {
            transition: all 0.3s ease;
        }
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .floating {
            animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
            0% { transform: translatey(0px); }
            50% { transform: translatey(-10px); }
            100% { transform: translatey(0px); }
        }
        .sparkle {
            position: relative;
            overflow: hidden;
        }
        .sparkle::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
            transform: rotate(45deg);
            animation: sparkle 3s linear infinite;
        }
        @keyframes sparkle {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
    </style>
<div class="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 min-h-screen">
    <!-- Header Section -->
    <header class="gradient-bg text-white py-16 relative overflow-hidden">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6 floating">Heissan! ✨</h1>
                <p class="text-xl md:text-2xl text-purple-100 font-light leading-relaxed">
                    Matka kohti itserakkautta ja hyvinvointia alkaa tästä
                </p>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-6 py-16 max-w-5xl">
        <!-- Introduction Card -->
        <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 card-hover sparkle">
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-700 leading-relaxed text-lg mb-6">
                    Kaikkein tärkein asia jotta hyvinvointi, terveys ja tasapaino elämässä voi kukoistaa on se, että tulisi ensin oppia <span class="text-purple-600 font-semibold">rakastamaan itseään</span>. Silloin osaa hyväksyä itsensä täysin, tehdä itseä kunnioittavia ja arvostavia valintoja ja asettaa terveet rajat itselle ja toisille.
                </p>
                
                <p class="text-gray-700 leading-relaxed text-lg">
                    Olen <span class="font-semibold text-indigo-600">Susanna Höijer</span> Hyvinvointikeskus Luxusen yrittäjä. Olen toiminut parantajana, näkijänä ja henkisenä valmentajana ja koulutettuna hierojana yli 20 vuoden ajan.
                </p>
            </div>
        </div>

        <!-- About Section -->
        <div class="grid md:grid-cols-2 gap-12 mb-16">
            <div class="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white card-hover">
                <h2 class="text-3xl font-bold mb-6">Mitä teen? 🔮</h2>
                <p class="leading-relaxed text-purple-100">
                    Erityisesti alaani on löytää ja nähdä henkinen ydinsyy ongelmaan joka asiakkaalla on. Ongelma voi liittyä sairauteen tai terveys haasteisiin, fyysiseen kehoon, parisuhteen epätasapainoon, itsetunto-ongelmiin, ja traumoihin.
                </p>
            </div>
            
            <div class="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white card-hover">
                <h2 class="text-3xl font-bold mb-6">Miten autan? 💫</h2>
                <p class="leading-relaxed text-blue-100">
                    Helppoa olisi saada valmiit vastaukset kaikkeen mutta se ei tuo sitä muutosta jonka ydinongelma tarvitsee. Siksi haluan palveluillani ohjata asiakasta itseä löytämään ja näkemään omat rajoittavat asiat.
                </p>
            </div>
        </div>

        <!-- Story Sections -->
        <div class="space-y-12 mb-16">
            <div class="bg-white rounded-3xl shadow-xl p-8 md:p-10 card-hover">
                <h2 class="text-3xl font-bold text-indigo-600 mb-6">Miksi näkijä ja parantaja? 🌟</h2>
                <p class="text-gray-700 leading-relaxed text-lg mb-4">
                    Olen aina ollut näkijä jo lapsesta saakka. Myös keskustellut enkeleiden kanssa. Parantaminen ja kaikki parantamiseen liittyvät hoitomuodot ovat astuneet mukaan kun 2001 vuonna opiskelin hierojakoulussa. Tämä koulutus avasi käsieni kautta kulkevat parannuskanavat.
                </p>
                <p class="text-gray-700 leading-relaxed text-lg">
                    Kun teen töitä olen aina yhteydessä korkeimpaan valovoimaan Luojaan. Ja kaikki hoitojen avulla tehtävät muutokset tapahtuvat taajuustasojen kautta.
                </p>
            </div>

            <div class="bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-8 md:p-10 card-hover">
                <h2 class="text-3xl font-bold text-orange-600 mb-6">Isoisäni 👴✨</h2>
                <p class="text-gray-700 leading-relaxed text-lg">
                    <span class="font-semibold">Isoisäni</span> oli selvännäkijä. Joten on tuntunut niin luonnolliselta asialta itselleni se, että minäkin olen saanut olla näkijä ja syntyä näkijäksi. On ihana kiitollisuuden tunne tästä kaikesta.
                </p>
            </div>
        </div>

        <!-- Personal Journey -->
        <div class="bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-16 card-hover">
            <h2 class="text-3xl font-bold text-purple-600 mb-6">Oma matka 🦋</h2>
            <p class="text-gray-700 leading-relaxed text-lg mb-4">
                Olen saanut kulkea omia muutosmatkoja joita käsittelemällä olen eheyttänyt itseäni. Nämä kaikki matkat ovat olleet suuria opettajia joista olen saanut valtavasti lisää tietoisuutta, näkemystä ja hoitavaa energiaa mukaan Hyvinvointikeskus Luxusen palveluihin.
            </p>
            <p class="text-gray-700 leading-relaxed text-lg">
                Olen luonut oman hoito- ja valmennuskonseptin. Katson asiakkaan tilaa aina kokonaisvaltaisesti ja hoito valikoituu sen mukaisesti mikä parhaiten tukee asiakkaan omaa muutosmatkaa.
            </p>
        </div>

        <!-- Call to Action -->
        <div class="gradient-bg rounded-3xl p-8 md:p-12 text-white text-center mb-16 card-hover">
            <h2 class="text-4xl font-bold mb-6">Kaikella on aina jokin tarkoitus ✨</h2>
            <p class="text-xl text-purple-100 mb-8">Tarkoituksen saa tietää silloin kun on valmis kuulemaan vastauksen.</p>
            
            <div class="bg-white bg-opacity-20 rounded-2xl p-6 mb-6">
                <p class="text-lg mb-4">
                    <span class="font-bold">Jos sinulla</span> on jokin asia johon haluat saada selkeyttä, parantamisvoimaa ja muutosta - olethan epäröimättä yhteydessä.
                </p>
                <a href={`${timereserveURL}book/4?id=12`} target="_blank"
 class="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Varaa ilmainen kartoitusaika 📅
                </a>
            </div>
            
            <p class="text-lg">
                <span class="font-bold">Mikäli</span> koet, että haluat kehittää omia parantajan taitojasi, ole yhteydessä silloinkin. Olen pitänyt Parantajakoulutuksia vuodesta 2005 saakka.
            </p>
        </div>

        <!-- Profile Image -->
        <div class="text-center mb-16">
            <div class="inline-block relative">
                <img src="https://i.imgur.com/MDvLKIa.jpeg" alt="Susanna Höijer" class="rounded-full w-64 h-64 object-cover shadow-2xl mx-auto floating">
                <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 opacity-20"></div>
            </div>
        </div>

        <!-- Credentials -->
        <div class="grid md:grid-cols-2 gap-8 mb-16">
            <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <h3 class="text-2xl font-bold text-indigo-600 mb-4">📚 Koulutukset</h3>
                <ul class="space-y-2 text-gray-700">
                    <li>• Kodinhoitajan ammattitutkinto, Kauhajoki 1991</li>
                    <li>• Klassinen hierojakoulutus, Kauhajoki 2001</li>
                    <li>• Hierojan ammattitutkinto, Tampere 2001</li>
                    <li>• Terveydenhuollon rekisteröity hieroja Valvira/ Koulutettu hieroja 2001</li>
                </ul>
            </div>
            
            <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <h3 class="text-2xl font-bold text-purple-600 mb-4">🎓 Kurssit</h3>
                <ul class="space-y-2 text-gray-700">
                    <li>• Korvakynttilä, 2002</li>
                    <li>• Reiki I ja II, 2003</li>
                    <li>• <a href="https://www.thetahealing.com/theta-specialist-profile.html?id=206353" class="text-purple-600 underline">SERTIFIOITU: Theta Healing® Practioner</a></li>
                    <li>• Bach'n Kukkaterapia, 2002</li>
                    <li>• Perinteinen kiinalainen kasvojen Gua Sha, 2023</li>
                </ul>
            </div>
        </div>

        <!-- Certificates -->
        <div class="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 mb-16 card-hover">
            <h3 class="text-2xl font-bold text-green-600 mb-4">✨ Sertifikaatit</h3>
            <div class="grid md:grid-cols-2 gap-2 text-gray-700">
                <div>
                    <p>• ThetaHealing® DNA Basic Practioner, 2017</p>
                    <p>• ThetaHealing® DNA Advance Practioner, 2018</p>
                    <p>• ThetaHealing® DNA Manifesting and Abundance practioner, 2018</p>
                    <p>• ThetaHealing® Growing Your Relationships I Practioner, 2018</p>
                </div>
                <div>
                    <p>• ThetaHealing® DNA Dig Deeper Practioner</p>
                    <p>• ThetaHealing® You and the Earth, 2021</p>
                    <p>• Theta Healing® Sinä ja Luoja, 2023</p>
                </div>
            </div>
        </div>

        <!-- Video Section -->
        <div class="text-center bg-white rounded-2xl p-8 shadow-lg card-hover">
            <h3 class="text-2xl font-bold text-indigo-600 mb-4">🎥 Tutustu minuun paremmin</h3>
            <a href="https://youtu.be/0Lu8cViD7SQ?si=JEFIWKG22Iw8UHSm" class="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Katso yrittäjän esittely
            </a>
        </div>
    </main>

    <!-- Footer -->
    <footer class="gradient-bg text-white py-12 text-center">
        <div class="container mx-auto px-6">
            <p class="text-2xl font-light mb-2">Kiitos Kun Olet. 🙏</p>
            <p class="text-xl text-purple-100 mb-2">Kaikkea hyvää ja parasta päivään meille kaikille!</p>
            <p class="text-lg text-purple-200">Valon säteillä,</p>
            <p class="text-xl font-semibold">Susanna Höijer ✨</p>
        </div>
    </footer>
  </div>
