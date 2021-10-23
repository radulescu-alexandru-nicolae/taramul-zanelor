export default class Main{
    constructor(){
        this.container=document.querySelector('.container');
        this.setMain();
        this.animatiiMain();
    }
    setMain=()=>{
        const main=document.createElement('main');
        main.innerHTML=
        `
    <section class="alegere">
        <div class="alegere-title">
            <h2>De ce sa ne alegi pe noi</h3>
        </div>
        <div class="valori_baza">
            <h1>Valorile noastre de baza</h2>
        </div>
        <div class="modificare">
            <h3>Impreuna putem valorifica capacitatile copilului dumneavoastra</h3>
        </div>
        <div class="conainter-albina">
            <img src="poze/image-bee.png" alt="">
        </div>
    </section>
    <section class="container-optiuni">
        <div class="invatare optiune">
            <div class="container-poza-invatare  container-poza">
                <img src="poze/invatare.jpg" alt="">
            </div>
            <div class="text-invatare">
                <h2>Invatare si joaca</h2>
                <p>
                    Pentru o educație cat mai sporita si mai confortabilă pentru copilul dumneavoastră folosim metode interactive si distractive.

                </p>
            </div>
        </div>
        <div class="nutritie optiune">
            <div class="container-poza-nutritie container-poza">
                <img src="poze/nutritie.jpg" alt="">
            </div>
            <h2>Nutritie si sanatate</h2>
            <p>
                Împreuna putem spori gândirea copilului tau legata de nutriție si sănătate. Oferim copiilor cursuri pentru dezvoltarea stilului de viată sanatos
            </p>
        </div>
        <div class="profesori optiune">
            <div class="container-poza-profesori container-poza">
                <img src="poze/profesori.jpg" alt="">
            </div>
            <h2>Profesori excelenti</h2>
            <p>Experiența si dedicația echipei de profesori o sa va ajute copii sa se dezvolte din mai multe puncte de vedere si sa descopere noi talente.</p>
        </div>
        <div class="mediu optiune">
            <div class="container-poza-mediu  container-poza">
                <img src="poze/mediu.jpg" alt="">
            </div>
            <h2>Mediu atractiv</h2>
            <p>Evenimentele pline de culoare ale grădiniței Tărâmul Zânelor este potrivit pentru vârsta copiilor, făcându-i mai comunicativi.</p>
        </div>
    </section>

    <section class="inscriere">
        <div class="text-inscriere">
            <h2><span>Esti interesat</span> cum poti sa-ti inscrii copilul la Gradinita Taramul Zanelor?</h2>
            <h3>Lăsați-va copilul in grija gradinitei Tarâmul Zânelor pentru a-l ajuta să se dezvolte într-un mod placut si eficient în toate aspectele.</h3>
        </div>
        <div class="inscriere_button">
            <a href="">
                <span>Inscrieti Copilul</span>
                <span>	
                    &#10132;</span>
            </a>
        </div>
    </section>

    <section class="ghidarea">
        <div class="container-ghidare">
            <div class="container-img-ghidare">
                <img src="poze/image-left-home.png" alt="">
            </div>
            <div class="container-text-ghidarea">
                <div class="first-text-ghidarea">
                    <div class="container-animatie-ghidare1">
                        <h1>Ghidarea tinerei generatii spre reusita</h1>
                        <p> Fondată în 2012 cu dorinţa de a descoperi şi a valorifica unicitatea fiecarui copil, Tărâmul Zânelor promovează explorarea şi învăţarea prin intermediul jocului, a cântecelor, a mişcării şi a tot ceea ce ne pune natura la dispoziţie.
                            Pe Tărâmul Zânelor şi dincolo de el sprijinim şi ridicăm comunitatea, promovăm diversitatea şi incluziunea şi acţionăm activ pentru o mai bună cunoaştere şi protejare a mediului. Tărâmul Zânelor oferă un echilibru în explorarea
                            mediului interior şi exterior. Natura devine un loc de joacă şi explorare în toate sezoanele consolidând conexiunea dintre copii şi lumea lor. Mediul este al treilea educator care aprinde scânteia curiozităţii naturale
                            a copiilor. Oferim un mediu de învăţare bazat pe anchetă care este centrat pe copil. Programa noastră apare în mod organic pe baza întrebărilor şi intereselor copiilor. activităţile noastre sunt deszvoltate pe măsura ce
                            educatorii ascultă activ şi observă copiii în joc, acest lucru permite în mod firesc cercetării să fie centrul învăţării copiilor. Observaţiile inspiră experienţe semnificative, permitându-le copiilor să îşi exploreze ideile
                            şi să interactioneze cu ceilalţi.</p>
                    </div>
                </div>

                <div class="container-text-ghidarea-sectiuni">
                    <div class="container-text-two">
                        <div class="ghidarea-first">
                            <h2><span>“Părinţii dau copiilor rădăcini, Profesorii le dau aripi”</span></h2>
                            <p> Fiecare copil trebuie să îşi consolideze propria autonomie pentru o viitoare integrare în societate. Grădiniţa noastră este locul în care se dezvoltă sociabilitatea, curiozitatea, sensibilitatea, aptitudinile manuale, fizice
                                şi artistice ale copiilor, dar este și mediul în care se respectă individualitatea fiecărui copil și care asigură o comunicare optimă interetnică și interculturală între copii și cadre didactice. Aici se pun bazele
                                întregii culturi ca punct de plecare pentru integrarea socială şi profesională viitoare</p>
                        </div>
                        <div class="ghidarea-second">
                            <h2> <span>Misiunea noastra</span> </h2>
                            <p>Este misiunea noastră să creştem, să inovăm continuu şi să provocăm standardul de înaltă calitate a creşterii şi educării copiilor. În acest sens, valorile noastre inovative apreciază fiecare copil în parte ca o minune
                                unică şi irepetabilă, angajează toţi membrii echipei noastre ca parteneri ai copiilor şi ai familiei acestora şi consolidează comunitatea noastră pentru a creşte şi a susţine bunăstarea tuturor. Iubim cu adevărat ceea
                                ce facem si ne străduim să dezvoltăm încrederea copiii că visele se pot transforma în realitate şi orice zi este o nouă poveste.</p>
                        </div>
                    </div>
                    <div class="button-ghidarea">
                        <a href="">
                            <span>Afla Mai Multe</span>
                            <span>	
                                &#10132;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class=" alegere-second">
        <div class="first-alegere-div">
            <img src="poze/image-home-2.png" alt="">
        </div>
        <div class="second-alegere-div">
            <div class="alegere-title2">
                <h2>De ce sa ne alegi pe noi</h3>
            </div>
            <div class="valori_baza2">
                <h1>Valorile noastre de baza</h2>
            </div>
            <div class="modificare2">
                <h3>Impreuna putem valorifica capacitatile copilului dumneavoastra</h3>
            </div>
            <div class="">
                <img src="poze/image-bee.png" alt="">
            </div>
        </div>
        <div class="second-alegere-div-img">
            <img src="poze/image-home-3.png" alt="">
        </div>
    </section>

    <section class="sectiune-copil">
        <div class="first-copil-container">
            <div class="sectiune-copil-container1">
                <div class="dragoste aptitudini">
                    <div class="text-dragoste text">
                        <h3>Dragoste</h3>
                        <p>Dragostea este în fruntea a tot ceea ce facem iar ceea ce facem nu este doar un serviciu ci este o extensie a iubirii noastre pentru copii.</p>
                    </div>
                    <div class="container-poza-copil">
                        <div class="contaienr-poza-copil2">
                            <img src="poze/heart_PNG51183-2.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="incredere aptitudini ">

                    <div class="text-incredere text">
                        <h3>Incredere</h3>
                        <p>Ne străduim spre excelenţă, suntem cinstiţi în tot ceea ce facem si pentru asta am promis să punem binele copilului înaintea oricarei decizii si acţiuni.</p>
                    </div>
                    <div class="container-poza-copil">
                        <div class="contaienr-poza-copil2">
                            <img src="poze/1387949.png" alt="">
                        </div>

                    </div>
                </div>
            </div>
            <div class="container-copil">
                <div class="container-copil-aux">
                    <img src="poze/child-man.png" alt="">
                </div>
            </div>
            <div class="sectiune-copil-container1">
                <div class="dezvoltarea aptitudini ">
                    <div class="text-dezvoltarea text">
                        <h3>Dezvoltarea</h3>
                        <p>Suntem conştienţi de impactul acţiunilor noastre şi există mereu un scop atent ales în spatele a tot ceea ce facem.</p>
                    </div>
                    <div class="container-poza-copil">
                        <div class="contaienr-poza-copil2">
                            <img src="poze/persoane.png" alt="">
                        </div>

                    </div>
                </div>
                <div class="atentia aptitudini ">
                    <div class="text-atentia text">
                        <h3>Atentia</h3>
                        <p>Suntem conştienţi de impactul acţiunilor noastre şi există mereu un scop atent ales în spatele a tot ceea ce facem.</p>
                    </div>
                    <div class="container-poza-copil">
                        <div class="contaienr-poza-copil2">
                            <img src="poze/2124635.png" alt="">
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="second-copil-container">
            <div class="conectarea aptitudini ">
                <div class="text-atentia text">
                    <h3>Conectarea</h3>
                    <p>Construim relaţii de încredere, de acceptare şi sprijin cu toţi partenerii noştri, copii, părinţi, comunitate.
                    </p>
                </div>
                <div class="container-poza-copil">
                    <div class="contaienr-poza-copil2">
                        <img src="poze/share.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="container-rac">
            <div class="container-rac2">
                <img src="poze/image-home-1.png" alt="">
            </div>
        </div>
    </section>
    <section class="domenii-de-studiu">
        <div class="container-domenii-studiuuu">
            <div class="container-domenii-de-studiu">
                <section class="container-text-studiu">
                    <div class="domenii-studiu-program">
                        <h2>Programul Nostru</h2>
                        <img src="poze/image-bee.png" alt="">
                    </div>
                    <div class="title-domenii">
                        <h2>Domenii de studiu</h2>
                        <p>Procesul instructiv educativ are la baza urmatoarele domenii experentiale propuse prin curriculum national:</p>
                    </div>
                </section>
            </div>
            <div class="tabel-domenii">
                <div class="container-tabel-domenii">
                    <div class="sectiune-domenii-tabel comunicare">
                        <div class="container-non-extins">
                            <div class="container-img-domenii first-container-img-domenii">
                                <img src="poze/ursulet.png" alt="">
                            </div>
                            <div class="text-sectiune comunicare">
                                <h2>Domeniul Limba si Comunicarea</h2>

                                <span class="extindere">
                            <span class="exit-domenii">&#x2716;</span>
                                <span class="plus">&plus;</span>
                                </span>
                            </div>
                        </div>
                        <div class="text-extins">
                            Are ca scop principal dezvoltarea capacităţii de exprimare orală, de înţelegere şi utilizare corectă a semnificaţiilor structurilor verbale orale. Totodată, prin activităţile desfăşurate, ne propunem să dezvoltăm creativitatea şi expresivitatea limbajului
                            oral şi să educăm exprimarea corectă din punct de vedere fonetic, lexical şi sintactic a celor mici).
                        </div>
                    </div>
                    <div class="sectiune-domenii-tabel stiinta">
                        <div class="container-non-extins">
                            <div class="container-img-domenii">
                                <img src="poze/masinuta.png" alt="">
                            </div>
                            <div class="text-sectiune comunicare">
                                <h2>Domeniul Stiinta(cunoasterea mediului/activitati matematice)</h2>

                                <span class="extindere">
                            <span class="exit-domenii">&#x2716;</span>
                                <span class="plus">&plus;</span>
                                </span>
                            </div>
                        </div>
                        <div class="text-extins">
                            Cunoasterea mediului- În cadrul temelor abordate se transmit noi experienţe şi cunoștinţe despre oameni şi mediu. Cunoaşterea mediului este o categorie de activitate menită să stimuleze curiozitatea privind explicarea şi înţelegerea lumii înconjurătoare
                            prin explorarea acestuia. Dezvoltarea capacităţii de observare şi stabilire de relaţii cauzale, spaţiale, temporale, utilizarea unui limbaj adecvat în prezentarea unor fenomene din natură şi mediul înconjurător, dar şi
                            formarea şi exersarea unor deprinderi de îngrijire şi ocrotire a mediului înconjurător, în vederea educării unei atitudini pozitive faţă de acesta reprezintă obiective ce se doresc a fi atinse prin activităţile instructiv-educative
                            desfăşurate. Activitatea matematică îşi propune dezvoltarea operaţiilor intelectuale prematematice, a capacităţii de a înţelege şi utiliza numere, cifre, unităţi de măsură, figuri geometrice, precum şi a capacităţii de
                            rezolvare de situaţii problematice, prin achiziţia de strategii adecvate.
                        </div>
                    </div>
                    <div class="sectiune-domenii-tabel psihometric">
                        <div class="container-non-extins">
                            <div class="container-img-domenii">
                                <img src="poze/rubic.png" alt="">
                            </div>
                            <div class="text-sectiune comunicare">
                                <h2>Domeniul Psihometric</h2>

                                <span class="extindere">
                            <span class="exit-domenii">&#x2716;</span>
                                <span class="plus">&plus;</span>
                                </span>
                            </div>
                        </div>
                        <div class="text-extins">
                            Prin activităţile de Educaţie Fizică, ne dorim formarea şi dezvoltarea deprinderilor motrice de bază, stimularea calităţilor intelectuale, de voinţă şi afective în vederea aplicării independente a deprinderilor însuşite, dar şi cunoaşterea deprinderilor
                            igienico-sanitare pentru menţinerea stării de sănătate. oral şi să educăm exprimarea corectă din punct de vedere fonetic, lexical şi sintactic a celor mici).
                        </div>
                    </div>
                    <div class="sectiune-domenii-tabel societate">
                        <div class="container-non-extins">
                            <div class="container-img-domenii">
                                <img src="poze/icon-accordion-4.png" alt="">
                            </div>
                            <div class="text-sectiune comunicare">
                                <h2>Domeniul Om si Societate(educatie pentru societate/activitati practice</h2>

                                <span class="extindere">
                            <span class="exit-domenii">&#x2716;</span>
                                <span class="plus">&plus;</span>
                                </span>
                            </div>
                        </div>
                        <div class="text-extins">
                            În cadrul activitatilor de Educaţie pentru Societate se urmăresc aspecte interculturale despre om şi societate, descoperirea cotidianului/datini şi obiceiuri atât din cultura germană cât si cea româna, bazate pe exemple şi aşezarea lor în contextul propriului
                            mediu de viaţă; Activitatea Practică are în vedere formarea şi consolidarea unor abilităţi practice specifice nivelului de dezvoltare motrică, îmbogaţirea cunoştinţelor despre materiale şi caracteristicile lor, precum şi
                            despre tehnici de lucru necesare prelucrării acestora în scopul realizării unor proiecte creative. oral şi să educăm exprimarea corectă din punct de vedere fonetic, lexical şi sintactic a celor mici).
                        </div>
                    </div>
                    <div class="sectiune-domenii-tabel estetic">
                        <div class="container-non-extins">
                            <div class="container-img-domenii last-container-img-domenii">
                                <img src="poze/8-512.png" alt="">
                            </div>
                            <div class="text-sectiune estetic-title">
                                <h2>Domeniul Estetic si Creativ(Eduucatie muzicala/activitati artistico-plastice)</h2>

                                <span class="extindere">
                            <span class="exit-domenii">&#x2716;</span>
                                <span class="plus">&plus;</span>
                                </span>
                            </div>
                        </div>
                        <div class="text-extins">
                            Activităţi de Educaţie Muzicală prin care urmărim să formăm capacitatea de receptare a lumii sonore şi a muzicii, a capacităţii de exprimare prin muzică, dar şi să facem cunoscute preşcolarilor marile valori ale creaţiei muzicale naţionale şi universale.
                            Activități de Educație Plastică care își propun să formeze deprinderi de lucru pentru realizarea unor desene, picturi, modelaje şi să stimuleze expresivitatea şi creativitatea prin limbaj artistic-plastic.
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <div class="container-poza-domenii">
            <img src="poze/profesori.jpg" alt="">
        </div>
    </section>
    <section class="invarare-joaca">
        <div class="title-invatare-joaca">
            <h3>Invatarea prin joaca</h3>
            <h2>Clasele noastre</h2>
            <p>Gradinita Taramul Zanelor,pune intodeauna calitatea invatarii copiilor pe primul loc,de asemenea asigura si prosperitatea acestora</p>
            <img src="poze/image-bee.png" alt="">
        </div>
        <div class="activitati">
            <div class="first-activitate activitate">
                <div class="poza-invatare">
                    <img src="poze/classes-6.jpg" alt="">
                </div>
                <div class="text-activitate">
                    <h3>Sternchengruppe – Kid And Future</h3>
                    <p>Aceasta grupa este dedicata dezvoltării si descoperirea talentelor copilului. Oferim oportunitatea copiilor sa se descopere prin joacă.</p>
                </div>
                <div class="element"></div>
                <div class="buton-activitati">
                    <span class="varsta">
                        <h2>Varsta: 3-4 ani</h2>
                        <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 width="556.38px" height="556.38px" viewBox="0 0 556.38 556.38" style="enable-background:new 0 0 556.38 556.38;"
 xml:space="preserve">
<g>
<g>
    <path d="M188.434,315.146c11.767,0,21.31-9.534,21.315-21.301c0.009-0.004,0.028-130.165,0.028-130.165
        c0-1.224,0.99-2.218,2.219-2.218h4.513c1.224,0,2.219,0.99,2.219,2.218c0,0,0,365.168,0,365.211
        c0,15.181,12.307,27.487,27.487,27.487c15.181,0,27.487-12.307,27.487-27.487c0-0.043,0-214.884,0-214.884
        c0-1.568,0.727-2.219,2.271-2.219h4.432c1.549,0,2.271,0.655,2.271,2.219c0,0,0,214.846,0,214.884
        c0,15.181,12.308,27.487,27.488,27.487c15.18,0,27.487-12.307,27.487-27.487c0-0.043,0-365.211,0-365.211
        c0-1.224,0.989-2.218,2.218-2.218h4.514c1.225,0,2.219,0.99,2.219,2.218c0,0,0.02,130.161,0.028,130.165
        c0.01,11.767,9.549,21.301,21.315,21.301c11.771,0,21.319-9.543,21.319-21.319c0-0.067,0-146.359,0-148.104
        c0-29.17-22.443-51.614-50.49-51.614c-0.712,0-38.417,0-56.099,0c0,0-3.543,0-8.974,0c-17.681,0-55.386,0-56.098,0
        c-28.052,0-50.49,22.438-50.49,51.614c0,1.745,0,148.037,0,148.104C167.114,305.604,176.658,315.146,188.434,315.146z"/>
    <circle cx="278.192" cy="40.904" r="40.904"/>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

                    </span>
                    <a href="">
                        <h2>Afla mai multe</h2>
                        <?xml version="1.0" encoding="iso-8859-1"?>
                        <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 296.999 296.999" style="enable-background:new 0 0 296.999 296.999;" xml:space="preserve">
<g>
<g>
    <g>
        <path d="M45.432,35.049c-0.008,0-0.017,0-0.025,0c-2.809,0-5.451,1.095-7.446,3.085c-2.017,2.012-3.128,4.691-3.128,7.543
            v159.365c0,5.844,4.773,10.61,10.641,10.625c24.738,0.059,66.184,5.215,94.776,35.136V84.023c0-1.981-0.506-3.842-1.461-5.382
            C115.322,40.849,70.226,35.107,45.432,35.049z"/>
        <path d="M262.167,205.042V45.676c0-2.852-1.111-5.531-3.128-7.543c-1.995-1.99-4.639-3.085-7.445-3.085c-0.009,0-0.018,0-0.026,0
            c-24.793,0.059-69.889,5.801-93.357,43.593c-0.955,1.54-1.46,3.401-1.46,5.382v166.779
            c28.592-29.921,70.038-35.077,94.776-35.136C257.394,215.651,262.167,210.885,262.167,205.042z"/>
        <path d="M286.373,71.801h-7.706v133.241c0,14.921-12.157,27.088-27.101,27.125c-20.983,0.05-55.581,4.153-80.084,27.344
            c42.378-10.376,87.052-3.631,112.512,2.171c3.179,0.724,6.464-0.024,9.011-2.054c2.538-2.025,3.994-5.052,3.994-8.301V82.427
            C297,76.568,292.232,71.801,286.373,71.801z"/>
        <path d="M18.332,205.042V71.801h-7.706C4.768,71.801,0,76.568,0,82.427v168.897c0,3.25,1.456,6.276,3.994,8.301
            c2.545,2.029,5.827,2.78,9.011,2.054c25.46-5.803,70.135-12.547,112.511-2.171c-24.502-23.19-59.1-27.292-80.083-27.342
            C30.49,232.13,18.332,219.963,18.332,205.042z"/>
    </g>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

                    </a>
                </div>
            </div>
            <div class="first-activitate activitate">
                <div class="poza-invatare">
                    <img src="poze/image-fcb-5.jpg" alt="">
                </div>
                <div class="text-activitate">
                    <h3>Schmetterliggrupp – Music For The Imagination</h3>
                    <p>Un copil care cânta este un copil cu adevărat fericit. Copiii sunt atrași de muzic si le oferă o stare de bine. Pot învață mult mai repede lucruri noi.</p>
                </div>
                <div class="element"></div>
                <div class="buton-activitati">
                    <span class="varsta">
                        <h2>Varsta: 4-5 ani</h2>
                        <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 width="556.38px" height="556.38px" viewBox="0 0 556.38 556.38" style="enable-background:new 0 0 556.38 556.38;"
 xml:space="preserve">
<g>
<g>
    <path d="M188.434,315.146c11.767,0,21.31-9.534,21.315-21.301c0.009-0.004,0.028-130.165,0.028-130.165
        c0-1.224,0.99-2.218,2.219-2.218h4.513c1.224,0,2.219,0.99,2.219,2.218c0,0,0,365.168,0,365.211
        c0,15.181,12.307,27.487,27.487,27.487c15.181,0,27.487-12.307,27.487-27.487c0-0.043,0-214.884,0-214.884
        c0-1.568,0.727-2.219,2.271-2.219h4.432c1.549,0,2.271,0.655,2.271,2.219c0,0,0,214.846,0,214.884
        c0,15.181,12.308,27.487,27.488,27.487c15.18,0,27.487-12.307,27.487-27.487c0-0.043,0-365.211,0-365.211
        c0-1.224,0.989-2.218,2.218-2.218h4.514c1.225,0,2.219,0.99,2.219,2.218c0,0,0.02,130.161,0.028,130.165
        c0.01,11.767,9.549,21.301,21.315,21.301c11.771,0,21.319-9.543,21.319-21.319c0-0.067,0-146.359,0-148.104
        c0-29.17-22.443-51.614-50.49-51.614c-0.712,0-38.417,0-56.099,0c0,0-3.543,0-8.974,0c-17.681,0-55.386,0-56.098,0
        c-28.052,0-50.49,22.438-50.49,51.614c0,1.745,0,148.037,0,148.104C167.114,305.604,176.658,315.146,188.434,315.146z"/>
    <circle cx="278.192" cy="40.904" r="40.904"/>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

                    </span>
                    <a href="">
                        <h2>Afla mai multe</h2>
                        <?xml version="1.0" encoding="iso-8859-1"?>
                        <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 296.999 296.999" style="enable-background:new 0 0 296.999 296.999;" xml:space="preserve">
<g>
<g>
    <g>
        <path d="M45.432,35.049c-0.008,0-0.017,0-0.025,0c-2.809,0-5.451,1.095-7.446,3.085c-2.017,2.012-3.128,4.691-3.128,7.543
            v159.365c0,5.844,4.773,10.61,10.641,10.625c24.738,0.059,66.184,5.215,94.776,35.136V84.023c0-1.981-0.506-3.842-1.461-5.382
            C115.322,40.849,70.226,35.107,45.432,35.049z"/>
        <path d="M262.167,205.042V45.676c0-2.852-1.111-5.531-3.128-7.543c-1.995-1.99-4.639-3.085-7.445-3.085c-0.009,0-0.018,0-0.026,0
            c-24.793,0.059-69.889,5.801-93.357,43.593c-0.955,1.54-1.46,3.401-1.46,5.382v166.779
            c28.592-29.921,70.038-35.077,94.776-35.136C257.394,215.651,262.167,210.885,262.167,205.042z"/>
        <path d="M286.373,71.801h-7.706v133.241c0,14.921-12.157,27.088-27.101,27.125c-20.983,0.05-55.581,4.153-80.084,27.344
            c42.378-10.376,87.052-3.631,112.512,2.171c3.179,0.724,6.464-0.024,9.011-2.054c2.538-2.025,3.994-5.052,3.994-8.301V82.427
            C297,76.568,292.232,71.801,286.373,71.801z"/>
        <path d="M18.332,205.042V71.801h-7.706C4.768,71.801,0,76.568,0,82.427v168.897c0,3.25,1.456,6.276,3.994,8.301
            c2.545,2.029,5.827,2.78,9.011,2.054c25.46-5.803,70.135-12.547,112.511-2.171c-24.502-23.19-59.1-27.292-80.083-27.342
            C30.49,232.13,18.332,219.963,18.332,205.042z"/>
    </g>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

                    </a>
                </div>
            </div>
            <div class="first-activitate activitate">
                <div class="poza-invatare">
                    <img src="poze/classes-4.jpg" alt="">
                </div>
                <div class="text-activitate">
                    <h3>Bienchengruppe Magic Number</h3>
                    <p>Grupa care ii indrumeaza pe copiii spre recunoasterea primele numere,acest lucru fiind adecvat si eficient din punct de vedere al dezvoltarii.</p>
                </div>
                <div class="element"></div>
                <div class="buton-activitati">
                    <span class="varsta">
                        <h2>Varsta: 5-6 ani</h2>
                        <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 width="556.38px" height="556.38px" viewBox="0 0 556.38 556.38" style="enable-background:new 0 0 556.38 556.38;"
 xml:space="preserve">
<g>
<g>
    <path d="M188.434,315.146c11.767,0,21.31-9.534,21.315-21.301c0.009-0.004,0.028-130.165,0.028-130.165
        c0-1.224,0.99-2.218,2.219-2.218h4.513c1.224,0,2.219,0.99,2.219,2.218c0,0,0,365.168,0,365.211
        c0,15.181,12.307,27.487,27.487,27.487c15.181,0,27.487-12.307,27.487-27.487c0-0.043,0-214.884,0-214.884
        c0-1.568,0.727-2.219,2.271-2.219h4.432c1.549,0,2.271,0.655,2.271,2.219c0,0,0,214.846,0,214.884
        c0,15.181,12.308,27.487,27.488,27.487c15.18,0,27.487-12.307,27.487-27.487c0-0.043,0-365.211,0-365.211
        c0-1.224,0.989-2.218,2.218-2.218h4.514c1.225,0,2.219,0.99,2.219,2.218c0,0,0.02,130.161,0.028,130.165
        c0.01,11.767,9.549,21.301,21.315,21.301c11.771,0,21.319-9.543,21.319-21.319c0-0.067,0-146.359,0-148.104
        c0-29.17-22.443-51.614-50.49-51.614c-0.712,0-38.417,0-56.099,0c0,0-3.543,0-8.974,0c-17.681,0-55.386,0-56.098,0
        c-28.052,0-50.49,22.438-50.49,51.614c0,1.745,0,148.037,0,148.104C167.114,305.604,176.658,315.146,188.434,315.146z"/>
    <circle cx="278.192" cy="40.904" r="40.904"/>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

                    </span>
                    <a href="">
                        <h2>Afla mai multe</h2>
                        <?xml version="1.0" encoding="iso-8859-1"?>
                        <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 296.999 296.999" style="enable-background:new 0 0 296.999 296.999;" xml:space="preserve">
<g>
<g>
    <g>
        <path d="M45.432,35.049c-0.008,0-0.017,0-0.025,0c-2.809,0-5.451,1.095-7.446,3.085c-2.017,2.012-3.128,4.691-3.128,7.543
            v159.365c0,5.844,4.773,10.61,10.641,10.625c24.738,0.059,66.184,5.215,94.776,35.136V84.023c0-1.981-0.506-3.842-1.461-5.382
            C115.322,40.849,70.226,35.107,45.432,35.049z"/>
        <path d="M262.167,205.042V45.676c0-2.852-1.111-5.531-3.128-7.543c-1.995-1.99-4.639-3.085-7.445-3.085c-0.009,0-0.018,0-0.026,0
            c-24.793,0.059-69.889,5.801-93.357,43.593c-0.955,1.54-1.46,3.401-1.46,5.382v166.779
            c28.592-29.921,70.038-35.077,94.776-35.136C257.394,215.651,262.167,210.885,262.167,205.042z"/>
        <path d="M286.373,71.801h-7.706v133.241c0,14.921-12.157,27.088-27.101,27.125c-20.983,0.05-55.581,4.153-80.084,27.344
            c42.378-10.376,87.052-3.631,112.512,2.171c3.179,0.724,6.464-0.024,9.011-2.054c2.538-2.025,3.994-5.052,3.994-8.301V82.427
            C297,76.568,292.232,71.801,286.373,71.801z"/>
        <path d="M18.332,205.042V71.801h-7.706C4.768,71.801,0,76.568,0,82.427v168.897c0,3.25,1.456,6.276,3.994,8.301
            c2.545,2.029,5.827,2.78,9.011,2.054c25.46-5.803,70.135-12.547,112.511-2.171c-24.502-23.19-59.1-27.292-80.083-27.342
            C30.49,232.13,18.332,219.963,18.332,205.042z"/>
    </g>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="recenzii">
        <div class="title-recenzii">
            <h2>Ce parere au parintii despre gradinita noastra</h2>
            <h1>Recenzii</h1>
            <p>Sa exploram ce au spus parintii despre noi</p>
            <img src="poze/image-bee.png" alt="">
        </div>
        <div class="lista-recenzii">
            <div class="recenzie first-recenzie">
                <div class="recenzie-container">
                    <img src="poze/recenzie1.jpg" alt="">
                    <div class="contaienr-poza-stele">
                        <p>Romana Maria</p>
                        <svg class="first-svg-container-poza-stele" version="1.0" xmlns="http://www.w3.org/2000/svg" width="28.000000pt" height="18.000000pt" viewBox="0 0 28.000000 18.000000" preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M39 166 c-44 -22 -35 -106 12 -106 30 0 22 -20 -11 -27 -33 -6 -46
                            -18 -31 -28 16 -9 77 21 95 46 19 28 21 92 4 106 -24 18 -45 21 -69 9z"></path>
                            <path d="M188 166 c-43 -22 -33 -106 13 -106 30 0 22 -20 -11 -27 -33 -6 -46
                            -18 -31 -28 14 -8 73 18 92 41 55 64 7 155 -63 120z"></path>
                            </g>
                        </svg>
                        <div class="stele">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recenzie first-recenzie">
                <div class="recenzie-container">
                    <img src="poze/recenzie1.jpg" alt="">
                    <div class="contaienr-poza-stele">
                        <p>Romana Maria</p>
                        <svg class="first-svg-container-poza-stele" version="1.0" xmlns="http://www.w3.org/2000/svg" width="28.000000pt" height="18.000000pt" viewBox="0 0 28.000000 18.000000" preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M39 166 c-44 -22 -35 -106 12 -106 30 0 22 -20 -11 -27 -33 -6 -46
                            -18 -31 -28 16 -9 77 21 95 46 19 28 21 92 4 106 -24 18 -45 21 -69 9z"></path>
                            <path d="M188 166 c-43 -22 -33 -106 13 -106 30 0 22 -20 -11 -27 -33 -6 -46
                            -18 -31 -28 14 -8 73 18 92 41 55 64 7 155 -63 120z"></path>
                            </g>
                        </svg>
                        <div class="stele">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recenzie first-recenzie">
                <div class="recenzie-container">
                    <img src="poze/recenzie1.jpg" alt="">
                    <div class="contaienr-poza-stele">
                        <p>Romana Maria</p>
                        <svg class="first-svg-container-poza-stele" version="1.0" xmlns="http://www.w3.org/2000/svg" width="28.000000pt" height="18.000000pt" viewBox="0 0 28.000000 18.000000" preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M39 166 c-44 -22 -35 -106 12 -106 30 0 22 -20 -11 -27 -33 -6 -46
                            -18 -31 -28 16 -9 77 21 95 46 19 28 21 92 4 106 -24 18 -45 21 -69 9z"></path>
                            <path d="M188 166 c-43 -22 -33 -106 13 -106 30 0 22 -20 -11 -27 -33 -6 -46
                            -18 -31 -28 14 -8 73 18 92 41 55 64 7 155 -63 120z"></path>
                            </g>
                        </svg>
                        <div class="stele">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recenzie first-recenzie">
                <div class="recenzie-container">
                    <img src="poze/recenzie1.jpg" alt="">
                    <div class="contaienr-poza-stele">
                        <p>Romana Maria</p>
                        <svg class="first-svg-container-poza-stele" version="1.0" xmlns="http://www.w3.org/2000/svg" width="28.000000pt" height="18.000000pt" viewBox="0 0 28.000000 18.000000" preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M39 166 c-44 -22 -35 -106 12 -106 30 0 22 -20 -11 -27 -33 -6 -46
                            -18 -31 -28 16 -9 77 21 95 46 19 28 21 92 4 106 -24 18 -45 21 -69 9z"></path>
                            <path d="M188 166 c-43 -22 -33 -106 13 -106 30 0 22 -20 -11 -27 -33 -6 -46
                            -18 -31 -28 14 -8 73 18 92 41 55 64 7 155 -63 120z"></path>
                            </g>
                        </svg>
                        <div class="stele">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recenzie first-recenzie">
                <div class="recenzie-container">
                    <img src="poze/recenzie1.jpg" alt="">
                    <div class="contaienr-poza-stele">
                        <p>Romana Maria</p>
                        <svg class="first-svg-container-poza-stele" version="1.0" xmlns="http://www.w3.org/2000/svg" width="28.000000pt" height="18.000000pt" viewBox="0 0 28.000000 18.000000" preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M39 166 c-44 -22 -35 -106 12 -106 30 0 22 -20 -11 -27 -33 -6 -46
                            -18 -31 -28 16 -9 77 21 95 46 19 28 21 92 4 106 -24 18 -45 21 -69 9z"></path>
                            <path d="M188 166 c-43 -22 -33 -106 13 -106 30 0 22 -20 -11 -27 -33 -6 -46
                            -18 -31 -28 14 -8 73 18 92 41 55 64 7 155 -63 120z"></path>
                            </g>
                        </svg>
                        <div class="stele">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recenzie first-recenzie">
                <div class="recenzie-container">
                    <img src="poze/recenzie1.jpg" alt="">
                    <div class="contaienr-poza-stele">
                        <p>Romana Maria</p>
                        <svg class="first-svg-container-poza-stele" version="1.0" xmlns="http://www.w3.org/2000/svg" width="28.000000pt" height="18.000000pt" viewBox="0 0 28.000000 18.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)" stroke="none">
                                <path d="M39 166 c-44 -22 -35 -106 12 -106 30 0 22 -20 -11 -27 -33 -6 -46
                                -18 -31 -28 16 -9 77 21 95 46 19 28 21 92 4 106 -24 18 -45 21 -69 9z"></path>
                                <path d="M188 166 c-43 -22 -33 -106 13 -106 30 0 22 -20 -11 -27 -33 -6 -46
                                -18 -31 -28 14 -8 73 18 92 41 55 64 7 155 -63 120z"></path>
                                </g>
                            </svg>
                        <div class="stele">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="butoane-recenzii">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </section>


    <section class="padure">
        <div class="container-padure">
            <div class="container-optiuni-padure">
                <div class="calendar optiune-padure">
                    <?xml version="1.0" encoding="iso-8859-1"?>
                    <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="36.447px" height="36.447px" viewBox="0 0 36.447 36.447" style="enable-background:new 0 0 36.447 36.447;" xml:space="preserve">
<g>
<g>
    <path d="M30.224,3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75c-1.474,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75
        c0-1.517-1.197-2.75-2.67-2.75c-1.473,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75
        c-1.473,0-2.67,1.233-2.67,2.75v1.197H6.224c-2.343,0-4.25,1.907-4.25,4.25v24c0,2.343,1.907,4.25,4.25,4.25h24
        c2.344,0,4.25-1.907,4.25-4.25v-24C34.474,5.855,32.567,3.948,30.224,3.948z M25.286,2.75c0-0.689,0.525-1.25,1.17-1.25
        c0.646,0,1.17,0.561,1.17,1.25v4.896c0,0.689-0.524,1.25-1.17,1.25c-0.645,0-1.17-0.561-1.17-1.25V2.75z M17.206,2.75
        c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z M9.125,2.75
        c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z
         M31.974,32.198c0,0.965-0.785,1.75-1.75,1.75h-24c-0.965,0-1.75-0.785-1.75-1.75v-22h27.5V32.198z"/>
    <rect x="6.724" y="14.626" width="4.595" height="4.089"/>
    <rect x="12.857" y="14.626" width="4.596" height="4.089"/>
    <rect x="18.995" y="14.626" width="4.595" height="4.089"/>
    <rect x="25.128" y="14.626" width="4.596" height="4.089"/>
    <rect x="6.724" y="20.084" width="4.595" height="4.086"/>
    <rect x="12.857" y="20.084" width="4.596" height="4.086"/>
    <rect x="18.995" y="20.084" width="4.595" height="4.086"/>
    <rect x="25.128" y="20.084" width="4.596" height="4.086"/>
    <rect x="6.724" y="25.54" width="4.595" height="4.086"/>
    <rect x="12.857" y="25.54" width="4.596" height="4.086"/>
    <rect x="18.995" y="25.54" width="4.595" height="4.086"/>
    <rect x="25.128" y="25.54" width="4.596" height="4.086"/>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
                    <h1>9</h1>
                    <p>Ani de experienta</p>
                </div>
            </div>
            <div class="strangere-de-mana optiune-padure">
                <div class="container-optiuni-padure">
                    <?xml version="1.0" encoding="iso-8859-1"?>
                    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
<g>
    <path d="M404.267,315.41c-10.048-20.949-45.995-50.027-80.725-78.123c-19.371-15.659-37.675-30.464-49.344-42.133
        c-2.923-2.944-7.296-3.883-11.157-2.496c-7.189,2.603-11.627,4.608-15.125,6.165c-5.333,2.389-7.125,3.2-14.315,3.925
        c-3.179,0.32-6.037,2.027-7.808,4.672c-15.083,22.549-30.699,20.629-41.131,17.131c-3.328-1.109-3.925-2.539-4.245-3.904
        c-2.24-9.365,9.003-31.168,23.573-45.739c34.667-34.688,52.544-43.371,90.304-26.496c42.837,19.157,85.76,34.155,86.187,34.304
        c5.611,1.941,11.648-1.003,13.589-6.571c1.92-5.568-1.003-11.648-6.571-13.589c-0.427-0.149-42.496-14.848-84.48-33.643
        c-48.917-21.867-75.755-7.467-114.091,30.891c-14.592,14.592-34.411,44.117-29.291,65.771c2.197,9.216,8.683,16.043,18.325,19.221
        c24.171,7.979,46.229,0.341,62.656-21.461c6.784-1.045,10.475-2.581,16.021-5.077c2.005-0.896,4.352-1.941,7.467-3.2
        c12.203,11.456,28.672,24.789,46.016,38.805c31.36,25.365,66.923,54.123,74.923,70.763c3.947,8.213-0.299,13.568-3.179,16.021
        c-4.224,3.627-10.005,4.779-13.141,2.581c-3.456-2.368-7.957-2.517-11.52-0.384c-3.584,2.133-5.589,6.165-5.141,10.304
        c0.725,6.784-5.483,10.667-8.171,12.011c-6.827,3.456-13.952,2.859-16.619,0.384c-2.987-2.773-7.275-3.584-11.072-2.176
        c-3.797,1.429-6.443,4.928-6.827,8.981c-0.64,6.997-5.824,13.717-12.587,16.341c-3.264,1.237-8,1.984-12.245-1.899
        c-2.645-2.389-6.315-3.307-9.749-2.475c-3.477,0.853-6.272,3.371-7.488,6.72c-0.405,1.067-1.323,3.627-11.307,3.627
        c-7.104,0-19.883-4.8-26.133-8.939c-7.488-4.928-54.443-39.957-94.997-73.92c-5.696-4.8-15.552-15.083-24.256-24.171
        c-7.723-8.064-14.784-15.381-18.411-18.453c-4.544-3.84-11.264-3.264-15.04,1.259c-3.797,4.501-3.243,11.243,1.259,15.04
        c3.307,2.795,9.707,9.557,16.768,16.917c9.515,9.941,19.349,20.224,25.963,25.771c39.723,33.259,87.467,69.163,96.981,75.413
        c7.851,5.163,24.768,12.416,37.867,12.416c10.517,0,18.603-2.411,24.213-7.125c7.509,2.923,16.043,2.944,24.256-0.256
        c9.707-3.755,17.685-11.328,22.208-20.501c8.405,1.792,18.027,0.533,26.773-3.861c8.555-4.309,14.741-10.901,17.813-18.603
        c8.491,0.448,17.237-2.56,24.469-8.768C407.979,346.407,411.349,330.109,404.267,315.41z"/>
</g>
</g>
<g>
<g>
    <path d="M213.333,138.663h-96c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667h96
        c5.888,0,10.667-4.779,10.667-10.667S219.221,138.663,213.333,138.663z"/>
</g>
</g>
<g>
<g>
    <path d="M435.52,292.711c-3.307-4.885-9.92-6.229-14.805-2.901l-31.189,20.949c-4.885,3.285-6.187,9.92-2.901,14.805
        c2.069,3.051,5.44,4.715,8.875,4.715c2.027,0,4.096-0.576,5.931-1.813l31.189-20.949
        C437.504,304.231,438.805,297.597,435.52,292.711z"/>
</g>
</g>
<g>
<g>
    <path d="M369.301,343.613c-7.637-6.016-41.792-40.981-62.912-62.997c-4.075-4.267-10.837-4.416-15.083-0.32
        c-4.267,4.075-4.395,10.837-0.32,15.083c5.483,5.717,53.845,56.128,65.088,65.003c1.941,1.536,4.288,2.283,6.592,2.283
        c3.136,0,6.272-1.408,8.405-4.075C374.72,353.981,373.931,347.261,369.301,343.613z"/>
</g>
</g>
<g>
<g>
    <path d="M326.677,365.01c-12.779-10.219-44.885-44.331-52.139-52.224c-4.011-4.352-10.731-4.608-15.083-0.64
        c-4.331,3.989-4.629,10.752-0.64,15.083c0.384,0.405,38.699,41.771,54.528,54.443c1.963,1.557,4.331,2.325,6.656,2.325
        c3.115,0,6.229-1.387,8.341-3.989C332.011,375.399,331.264,368.679,326.677,365.01z"/>
</g>
</g>
<g>
<g>
    <path d="M284.224,386.493c-15.211-12.821-46.336-45.952-52.416-52.459c-4.032-4.309-10.795-4.544-15.083-0.512
        c-4.309,4.032-4.523,10.773-0.512,15.083c8.747,9.365,38.528,40.939,54.251,54.208c2.005,1.685,4.437,2.517,6.869,2.517
        c3.029,0,6.059-1.301,8.171-3.797C289.301,397.01,288.725,390.29,284.224,386.493z"/>
</g>
</g>
<g>
<g>
    <path d="M124.672,120.253C106.389,102.93,33.28,97.319,11.307,96.018c-3.029-0.149-5.824,0.853-7.957,2.88
        C1.216,100.903,0,103.719,0,106.663v192c0,5.888,4.779,10.667,10.667,10.667h64c4.608,0,8.704-2.965,10.133-7.36
        c1.557-4.779,38.315-117.589,43.157-173.056C128.235,125.671,127.04,122.471,124.672,120.253z M66.88,287.997H21.333V118.098
        c34.283,2.709,71.275,8.597,84.715,15.125C100.395,179.943,74.816,262.951,66.88,287.997z"/>
</g>
</g>
<g>
<g>
    <path d="M501.333,117.33c-83.755,0-130.219,21.44-132.16,22.336c-2.773,1.301-4.843,3.712-5.696,6.635s-0.427,6.059,1.173,8.661
        c13.184,21.227,54.464,139.115,62.4,167.872c1.28,4.629,5.483,7.829,10.283,7.829h64c5.888,0,10.667-4.779,10.667-10.667v-192
        C512,122.087,507.221,117.33,501.333,117.33z M490.667,309.33h-45.355c-10.112-32.939-39.979-118.827-56.64-154.325
        c16.277-5.525,51.243-15.019,101.995-16.213V309.33z"/>
</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
                    <h1>576+</h1>
                    <p>Parinti multumiti</p>
                </div>
            </div>
            <div class="teacher optiune-padure">
                <div class="contaienr-optiuni-padure">
                    <?xml version="1.0" encoding="iso-8859-1"?>
                    <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="937px" height="937px" viewBox="0 0 937 937" style="enable-background:new 0 0 937 937;" xml:space="preserve">
            <g>
                <path d="M513.1,360.85c5.601,0,11,0.9,16.2,2.4l97-118.9c6.2-7.6,17.7-9,25.2-2.6c7.3,6.1,8.3,17,2.2,24.4l-95.9,117.6
                    c6.5,9,10.4,20.101,10.4,32.101c0,22.3-13.4,41.6-32.5,50.199H912c13.8,0,25-11.199,25-25v-316.5c0-13.8-11.2-25-25-25H434
                    c-13.8,0-25,11.2-25,25v207.8l22.6,28.6h81.5V360.85z"/>
                <circle cx="201.3" cy="121.85" r="102.4"/>
                <g>
                    <path d="M306.3,892.55c0,13.801-11.2,25-25,25h-42c-13.8,0-25-11.199-25-25v-209.6c0-7.4-6-13.4-13.4-13.4l0,0
                        c-7.4,0-13.4,6-13.4,13.4v208.6c0,14.301-11.7,26-26,26h-41.1c-13.8,0-25-11.199-25-25l-0.2-506c0-6.8-5.5-12.399-12.4-12.399l0,0
                        c-6.8,0-12.4,5.5-12.4,12.399V581.15c0,13.8-11.2,25-25,25H25c-13.8,0-25-11.2-25-25v-266.8c0-31.7,25.7-57.3,57.3-57.3H285
                        c24.399,0,47.5,11.2,62.7,30.3l61.199,77.2l12.9,16.3c0,0,58,0,91.4,0.1c13.8,0,25,11.2,25,25v19.9c0,13.8-11.2,25-25,25H405
                        c-10.7,0-20.8-4.9-27.4-13.301l-45.6-58.6c-2.3-3-6-4.8-9.8-4.8H319.1c-6.8,0-12.399,5.5-12.399,12.399L306.3,892.55z"/>
                </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            </svg>
                    <h1>20+</h1>
                    <p>Educatori</p>
                </div>
            </div>
        </div>
    </section>

    <section class="despre-profesorii-nostri">
        <div class="container-profesori">
            <h3>Despre profesorii Nostri</h3>
            <h2>Profesorii Nostri</h2>
            <p>Avem un raport excelent intre profesor la copil la grădinița noastră pentru a ne asigura că fiecare copil primește atenția de care are nevoie. Întreg personalul ajută fiecare copil să se dezvolte armonios, să îşi dobândească propria autonomie
                şi competenţele care să îi permită să îşi construiască învăţăturile fundamentale, în funcţie de ritmul propriu de dezvoltare şi de creştere.</p>
            <img src="poze/image-bee.png" alt="">
            <div class="button-ghidarea">
                <a href="">
                    <span>Citeste mai multe</span>
                    <span>	
                    &#10132;</span>
                </a>
            </div>
        </div>

    </section>

    <section class="section-ore">
        <div class="orar-sectiune-ore">
            <a href="">April 04, 2021 at 09:00 AM</a>
            <h1>„OSTERFEST”- SĂRBĂTORILE PASCALE</h1>
        </div>
        <div class="container-ore-section-ore">
            <div class="days casuta-timp">
                <div class="container-culoare"></div>
                <p>Days</p>
            </div>
            <div class="hours casuta-timp">
                <div class="container-culoare"></div>
                <p>Hours</p>
            </div>
            <div class="minutes casuta-timp">
                <div class="container-culoare"></div>
                <p>Minutes</p>
            </div>
            <div class="seconds casuta-timp">
                <div class="container-culoare"></div>
                <p>Seconds</p>
            </div>
        </div>
        <div class="inscriere_button vezi_evenimente">
            <a href="">
                <span>Vezi toate evenimentele</span>
                <span>	
                    &#10132;</span>
            </a>
        </div>
    </section>
    <section class="stiri-recente">
        <div class="first-stiri-container">
            <h3>Ce se intampla in blogul nostru?</h3>
            <h2>Stiri recente</h2>
            <p>Afla cele mai noi noutati legate de gradinita Taramul Zanelor</p>
            <div class="conainter-albina">
                <img src="poze/image-bee.png" alt="">
            </div>
        </div>
        <div class="second-stiri-container">
            <img src="poze/poza-copii2.jpg" alt="">
            <h2>De ce copiii au nevoie de un mediu sanatos?</h2>
            <p>Un mediu placut si distractiv.Acesta este un test</p>
            <a href="">
                <p>Citeste mai multe</p>
                <span></span></a>
        </div>
    </section>
    <section class="galerie">
        <div class="first-container-galerie">
            <h3>Explorati taramul zanelor</h3>
            <h2>Galerie</h2>
            <p>Aruncati o privire peste activitatile desfasurate la gradinita noastra.Un mediu de joaca si invatare distractiv.</p>
            <img src="poze/image-bee.png" alt="">
        </div>
        <div class="second-container-galerie">
            <ul class="first-galerie-ul">
                <li>
                    <span class="all">ALL</span>
                </li>
                <li><span class="activitati">Activitati</span></li>
                <li><span class="clase">Clase</span></li>
                <li><span class="evenimente">Evenimente</span></li>
                <li><span class="iesiri">Iesiri</span></li>
            </ul>
        </div>
        <div class="container-poze-galerie">
            <div class="container-poza-1 container-poza-img">
                <img src="poze/poza1.jpg" alt="">
                <div class="plus-container">
                    <p>&#43;</p>
                </div>
            </div>
            <div class="container-poza-2 container-poza-img">
                <img src="poze/poza2.jpg" alt="">
                <div class="plus-container">
                    <p>&#43;</p>
                </div>
            </div>
            <div class="container-poza-3 container-poza-img">
                <img src="poze/poza3.jpg" alt="">
                <div class="plus-container">
                    <p>&#43;</p>
                </div>
            </div>
            <div class="container-poza-4 container-poza-img">
                <img src="poze/poza4.jpg" alt="">
                <div class="plus-container">
                    <p>&#43;</p>
                </div>
            </div>
            <div class="container-poza5 container-poza-img">
                <img src="poze/poza5.jpg" alt="">
                <div class="plus-container">
                    <p>&#43;</p>
                </div>
            </div>
            <div class="container-poza-6 container-poza-img">
                <img src="poze/poza6.jpg" alt="">
                <div class="plus-container">
                    <p>&#43;</p>
                </div>
            </div>
        </div>
    </section>
    <section class="inscriere-gradinita">
        <div class="container-inscriere-gradinita">
            <div class="text-inscriere-gradinita">
                <h1><span>Esti interesat</span> cum poti sa iti inscrii copilul la Gradinita Taramul Zanelor?</h1>
                <h3>Va intereseaza o educatie prescoala buna pentru copilul dumneavoastra?Gradinita noastra este decizia corecta!</h3>
            </div>
            <div class="final-button">
                <a href="">
                    <span>INSCRIETI-VA</span>
                </a>
            </div>
        </div>
    </section>
        `
        this.container.appendChild(main);
    }

    animatiiMain=()=>{
        let afla_mai_mult = document.querySelector('.afla-mai-multe a');
let container_title = document.querySelector('.container-title');
let container_descriere = document.querySelector('.container-descriere');
let container_animatie_ghidarea1 = document.querySelector('.container-animatie-ghidare1');
let ghidarea_second = document.querySelector('.ghidarea-second');
let container_img = document.querySelector('.container-copil img ');
let container_conectare = document.querySelector('.conectarea');
let incredere_actiune = document.querySelector('.incredere');
let dezvoltare_actiune = document.querySelector('.dezvoltarea');
let invatare_title = document.querySelector('.title-invatare-joaca');
let nav_animatie = document.querySelector('nav');
let container_padure = document.querySelector('.container-padure');
let despre_noi_animatie = document.querySelector('.despre-noi');
let despre_noi_second_ul = document.querySelector('.second-ul');
document.addEventListener('scroll', function(e) {
    afla_mai_mult.style.transform = "rotate(0deg) translate(0px,0px)";
    container_title.style.transform = "translateY(0px)"
    container_descriere.style.transform = "translateY(0px)";
    nav_animatie.style.position = "fixed";

})
if (window.matchMedia("(min-width: 1200px)").matches) {
    despre_noi_animatie.addEventListener("mouseover", function(event) {
        if (event.target.tagName == "A") {
            if (event.target.className == "animatie-despre-noi") {
                despre_noi_second_ul.style.opacity = "1";
            }
        }
    })
    despre_noi_animatie.addEventListener("mouseleave", function(event) {
        despre_noi_second_ul.style.opacity = "0";

    })
}
window.onscroll = function(e) {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        if (window.scrollY > 1200 && window.scrollY < 1400) {
            container_animatie_ghidarea1.style.transform = "translateY(0px)";
            ghidarea_second.style.transform = "translateX(0px) rotate(0deg)";
            container_conectare.style.transform = "translateY(0)";
        } else if (window.scrollY > 2700 && window.scrollY < 2900) {
            container_img.style.transform = "scale(1)";
            container_conectare.style.transform = "translateY(0)";
            incredere_actiune.style.opacity = "1";
            incredere_actiune.style.transform = "translate(0)";
            dezvoltare_actiune.style.opacity = "1";
            dezvoltare_actiune.style.transform = "translate(0)";
        } else if (window.scrollY > 4500 && window.scrollY < 5000) {
            invatare_title.style.transform = "scale(1)";
            invatare_title.querySelector('img').style.opacity = "1";
        } else if (window.scrollY > 6200) {
            container_padure.style.transform = "translateX(0)";
            container_padure.style.opacity = "1";
        }

    } else {
        if (window.matchMedia("(max-width:1200px)".matches)) {
            if (window.scrollY > 2300 && window.scrollY < 2500) {
                container_animatie_ghidarea1.style.transform = "translateY(0px)";
                ghidarea_second.style.transform = "translateX(0px) rotate(0deg)";

            } else if (window.scrollY > 3300 && window.scrollY < 3400) {
                container_img.style.transform = "scale(1)";
                container_conectare.style.transform = "translateY(0)";
                incredere_actiune.style.opacity = "1";
                incredere_actiune.style.transform = "translate(0)";
                dezvoltare_actiune.style.opacity = "1";
                dezvoltare_actiune.style.transform = "translate(0)";
            } else if (window.scrollY > 7800 && window.scrollY < 8200) {
                invatare_title.style.transform = "scale(1)";
                invatare_title.querySelector('img').style.opacity = "1";

            } else if (window.scrollY > 10300) {
                container_padure.style.transform = "translateX(0)";
                container_padure.style.opacity = "1";
            }


        }
    }
};
    }
}