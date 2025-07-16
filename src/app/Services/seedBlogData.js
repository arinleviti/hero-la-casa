/* export interface BlogImage {
  url: string;
  caption?: string;
}

export interface BlogComment {
  name: string;
  email: string;
  content: string;
  createdAt: Date;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  createdAt: Date;
  images?: BlogImage[];
  comments?: BlogComment[];
}


 */

export const blogPosts  = [
    {
        title: "Intervista di Meloleggio magazine",
        slug: "intervista-meloleggio",
        excerpt: "Siamo stati intervistati dalla rivista 'Meloleggio magazine'!",
        content: `
      <p>Siamo stati intervistati dalla rivista <strong>"Meloleggio magazine"!</strong> Nell'articolo parliamo di diverse cose, tra cui consigli per la cucina, la nostra storia,
       come siamo nati e cresciuti e dei nostri traguardi fra cui la partecipazione alla "BURGER BATTLE ITALIA 2019" nel Triveneto.</p>
    `,
        createdAt: new Date("2023-10-31"),
    },
    {
        title: "La storia di HERO",
        slug: "Hero-storia",
        excerpt: "Noi siamo HERO",
        content: `
    <p>Noi siamo HERO - La casa del burger e oggi vogliamo raccontarti la storia che monta le redini della nostra attività. HERO è il viaggio al quale ha partecipato il burger, dopo aver viaggiato in giro per tutto il mondo vivendo gli odori e i sapori, torna nella sua dimora, la casa del burger per portare colori, sapori e ingredienti dal mondo e racchiuderli all'interno degli HeroBurger.</p>

  `,
        createdAt: new Date("2023-10-31T10:00:00Z"),
        images : [
            {
                url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
                caption: "Our beach view in July",
            }
        ]
    },
    {
        title: "I 5 elementi che ci contraddistinguono",
        slug: "5-elementi",
        excerpt: "Benvenuti nel cuore pulsante di Hero, dove ogni hamburger è un viaggio culinario unico.",
        content: `
       <img src="https://res.cloudinary.com/demo/image/upload/sample.jpg" alt="" />
<p>Benvenuti nel cuore pulsante di Hero, dove ogni hamburger è un viaggio culinario unico. In un mondo dove ognuno di noi cerca di lasciare il segno, la nostra firma è l’hamburger. Nella nostra incessante ricerca della perfezione, ci siamo spesso chiesti: cosa rende un hamburger eccezionale? Cosa lo eleva da semplice pasto a esperienza indimenticabile? Attraverso anni di sperimentazione e dedizione, abbiamo individuato cinque elementi chiave che fanno degli hamburger di Hero un’esperienza senza pari. Questi elementi non solo raccontano la storia di chi siamo, ma ti porteranno insieme a noi a vivere l’esperienza del viaggio di Hero:</p>

<img src="https://res.cloudinary.com/demo/image/upload/sample.jpg" alt="" />

<h2>Il Pane</h2>
<p>Il primo elemento che distingue i nostri hamburger è, senza dubbio, il pane. Non si tratta solo del contenitore del burger, ma di una componente cruciale che ne definisce il sapore e la texture. Da noi di Hero, potete trovare una varietà di panini, dai tradizionali a quelli più innovativi, come il pane ai cereali e le opzioni senza glutine. Ma il nostro segreto non sta solo nella varietà; ogni panino viene accuratamente preparato, scaldando l’esterno fino a renderlo croccante, mentre l’interno rimane incredibilmente morbido. Questo processo garantisce un contrasto di texture che eleva ogni morso a un'esperienza unica, rendendo i nostri hamburger memorabili fin dal primo assaggio.</p>

<img src="https://res.cloudinary.com/demo/image/upload/sample.jpg" alt="" />

<h2>La carne</h2>
<p>Il secondo pilastro su cui si fonda l’eccezionalità dei nostri hamburger è la carne. La selezione del manzo rappresenta un punto cruciale del nostro processo, poiché la scelta ricade solo nella migliore qualità. Il segreto di una carne di qualità non risiede solo nella scelta del taglio, ma anche nel metodo di lavorazione: tritata una sola volta per preservarne la freschezza. A questo, aggiungiamo un pizzico di condimento extra, che esalta senza sovrastare il sapore naturale del manzo. La conservazione poi, svolge un ruolo altrettanto importante; il mantenimento delle carni deve essere eseguito in condizioni ottimali per garantire che ogni hamburger servito sia sinonimo di eccellenza. Questo impegno verso la qualità e la freschezza della carne è ciò che ci permette di offrire un prodotto che possa soddisfare, e qualcosa in più, le aspettative dei nostri clienti.</p>

<p>Un’altra componente fondamentale nella preparazione di un hamburger che spesso viene sottovalutata è la cottura della carne. Il segreto per ottenere un hamburger perfetto risiede nell’abilità di cuocere il manzo in modo che rimanga cotto all’interno e croccante all’esterno. La cottura ideale si ottiene su una griglia in ghisa, che assicura una distribuzione uniforme del calore. Questo metodo consente ai succhi di distribuirsi omogeneamente all’interno della carne, garantendo un risultato finale morbido e succulento. Seguire questa tecnica di cottura eleva notevolmente la qualità dell’hamburger, rendendolo un’esperienza culinaria superiore.</p>

<img src="https://res.cloudinary.com/demo/image/upload/sample.jpg" alt="" />

<h2>Le verdure</h2>
<p>Il terzo elemento chiave per un hamburger indimenticabile è la verdura. La freschezza è il nostro mantra quando si tratta di selezionare la verdura. Crediamo fermamente che verdure fresche, prive di conservanti e di altissima qualità, non solo completino il gusto dell’hamburger, ma ne esaltino ogni singolo sapore. Per questo motivo, l’insalata viene lasciata intera e mai condita in anticipo, per mantenere la sua croccantezza e freschezza, mentre i pomodori vengono tagliati a fette sottili, perfetti per arricchire il burger con la loro dolcezza naturale. Questa attenzione alla qualità e alla freschezza delle verdure è un pilastro della nostra filosofia, assicurando che ogni boccone sia un’esplosione di sapori autentici.</p>

<img src="https://res.cloudinary.com/demo/image/upload/sample.jpg" alt="" />

<h2>Il formaggio</h2>
<p>Il quarto elemento che eleva i nostri hamburger a vere e proprie opere d’arte culinaria è la scelta del formaggio. Con grande attenzione, selezioniamo solo formaggi di alta qualità, dando priorità ai prodotti del nostro territorio senza però trascurare le eccellenze italiane riconosciute in tutto il mondo. Questa scelta ci permette di offrire un’ampia varietà di sapori, in grado di soddisfare sia gli amanti dei gusti classici che coloro che cercano un’esperienza più audace e innovativa. L’abilità nel combinare il formaggio giusto con il resto degli ingredienti trasforma ogni hamburger in un’esperienza unica, dove la fusione dei sapori diventa protagonista assoluta. La nostra dedizione nel trovare il perfetto equilibrio tra la ricchezza del formaggio e gli altri componenti dell’hamburger testimonia il nostro impegno verso l’eccellenza e l’innovazione culinaria.</p>

<img src="https://res.cloudinary.com/demo/image/upload/sample.jpg" alt="" />

<h2>Le salse</h2>
<p>Infine, ma non per importanza, il quinto elemento che definisce l’eccellenza dei nostri hamburger è la scelta delle salse. Le salse sono la firma finale di ogni hamburger, capaci di legare insieme tutti gli ingredienti, esaltandone i sapori. Da noi, troverete solo le migliori salse tradizionali, come la maionese e il ketchup Heinz, selezionati per la loro qualità indiscussa e capaci di conferire quel tocco classico amato da tutti, per un tocco in più la Cheddar Cheese Sauce. La nostra attenzione nella selezione delle salse riflette la nostra passione per i dettagli e il nostro impegno a offrire un’esperienza culinaria senza eguali.</p>
 `,
        createdAt: new Date("2023-10-31T22:00:00Z"),
        images: [
            {
                url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
                caption: "Our beach view in July",
            },
            {
                url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
                caption: "Evening light on the boardwalk",
            },
            {
                url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
                caption: "Evening light on the boardwalk",
            },
            {
                url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
                caption: "Evening light on the boardwalk",
            },
            {
                url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
                caption: "Evening light on the boardwalk",
            },
            {
                url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
                caption: "Evening light on the boardwalk",
            },
        ],
    },
    {
  title: "Buon compleanno HERO!",
  slug: "compleanno",
  excerpt: "Quest’anno, il 23 settembre, HERO compie anni di attività!",
  content: `
    <p>Quest’anno, il 23 settembre, HERO compie anni di attività! Per questo noi di HERO – La casa del burger abbiamo deciso di proporre una promozione fantastica, funziona così:</p>

<p>Se verrete da settembre a ottobre, noi vi consegneremo una busta misteriosa alla fine del pasto!<br />
Tutte le buste misteriose contengono un REGALO! Sennò che compleanno sarebbe? Alcuni sono belli, altri bellissimi, altri sono semplicemente pensieri, ma tutte le buste contengono un omaggio.<br />
Vi piace l’idea? L’abbiamo pensata per voi!</p>

  `,
  createdAt: new Date("2023-10-31T23:00:00Z"),
  images: [
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      caption: "Our beach view in July",
    }
  ]
},
{
  title: "Diario di Bordo – Maggio 2024",
  slug: "diario-maggio-2024",
  excerpt: "Il Miglior Hamburger del Trentino e World Burger Day",
  content: `
 <img src="https://res.cloudinary.com/demo/image/upload/sample.jpg" alt="" />
<p>Hai mai avuto un mese così intenso che ti fa battere il cuore solo a pensarci? Preparati a essere travolto da una fiammata di emozioni! Maggio per la community di Hero è stato un mese da urlo! Ogni giorno, un’avventura. Ogni evento, un trionfo. Ogni hamburger, un’esplosione di gusto. Sei pronto per scoprire tutte le nostre novità? 

Immagina una cascata di eventi memorabili, dove abbiamo conquistato nuovi traguardi e condiviso il nostro viaggio con la nostra community. Siamo diventati su TripAdvisor il <a href="https://www.tripadvisor.it/Restaurants-g1493737-zfd10907-Province_of_Trento_Trentino_Alto_Adige-Hamburger.html">miglior hamburger del Trentino</a>, abbiamo lanciato il Beer Bash del martedì e siamo stati celebrati durante il <a href="https://www.radio-food.it/hamburger-le-tendenze/">World Burger Day</a>. E non è tutto! Siamo onorati di essere diventati uno dei 150 locali fidelizzati Heinz, l’unico in tutto il Trentino Alto Adige! 

Non vogliamo anticiparvi troppo… leggi fino alla fine e scopri in dettaglio tutte le novità di Hero la Casa del Burger!</p>

<h2>Il Miglior Hamburger del Trentino</h2>
<p>Immagina questo: ti svegli una mattina, apri TripAdvisor e BAM! Lì, nero su bianco, c’è scritto che HERO la Casa del Burger è <a href="https://www.tripadvisor.it/Restaurants-g1493737-zfd10907-Province_of_Trento_Trentino_Alto_Adige-Hamburger.html">il meglio in provincia di Trento</a>. Un traguardo incredibile che ci riempie di orgoglio e gratitudine!

E sapete una cosa? Questo <strong>riconoscimento</strong> non è solo nostro, è <strong>anche vostro</strong>. Ogni recensione, ogni commento positivo e ogni sorriso dopo aver assaggiato i nostri hamburger ci ha portato fino a qui. È soprattutto <strong>grazie a voi</strong> che abbiamo raggiunto questo traguardo.

Non avete ancora provato i nostri Burger? Cosa state aspettando? Venite a trovarci e scoprite perché siamo stati eletti il miglior hamburger della provincia di Trento!</p>  

<h2>Beer Bash – Bevi e vinci!</h2>
<p>Un martedì sera diverso da tutti gli altri. È il <strong>Beer Bash</strong>! Ogni martedì di maggio, abbiamo trasformato le vostre serate in un’esperienza indimenticabile, ricca di <strong>birra, risate e premi</strong>.

Se sei un cliente <strong><a href="https://heroburger.plateform.app/fidelity">Hero Fidelity</a></strong>, sei stato trattato come un vero VIP, con il doppio dei punti su ogni acquisto. La prima birra, solo per te, è stata a 1€! 

Ma cos’è esattamente il Beer Bash? È la nostra celebrazione della birra artigianale, un evento dove amici e appassionati di birra si incontrano per gustare le nostre migliori selezioni, partecipare a giochi divertenti e vincere fantastici premi. È stata l’occasione perfetta per rilassarsi, socializzare e godersi il meglio che Hero ha da offrire.</p>

<img src="https://res.cloudinary.com/demo/image/upload/sample.jpg" alt="" />

<h2>World Burger Day – Il nostro riconoscimento</h2>
<p>Il 28 maggio, in occasione del <strong>World Burger Day</strong>, siamo stati menzionati tra i <strong>migliori locali dove gustare un hamburger gourmet</strong>. Un riconoscimento che ci riempie di orgoglio e che sottolinea la nostra passione per la qualità e l’eccellenza.

Nel nord-est, in Val di Fiemme, il nostro locale è stato elogiato per l’accurata selezione delle materie prime e delle birre artigianali, tra cui quelle locali. Hanno parlato di noi come il luogo ideale per rilassarsi dopo una giornata di attività all’aperto, godendo di specialità gourmet uniche e ricercate.

Questo riconoscimento è un tributo al nostro impegno e alla nostra dedizione nel creare esperienze culinarie indimenticabili per i nostri clienti. Grazie a tutti per il continuo supporto e per essere parte della nostra famiglia. Venite a trovarci e scoprite di persona cosa ci rende speciali.</p>

<h2>Siamo tra i 150 locali fidelizzati Heinz!</h2>
<p>Un’altra grande notizia per noi di Hero: siamo entrati a far parte dei 150 locali fidelizzati Heinz! E non solo, siamo <strong>l’unico locale del Trentino Alto Adige</strong> ad aver ricevuto questo prestigioso riconoscimento.

Essere scelti da un marchio iconico come Heinz è un onore che testimonia il nostro impegno costante per la qualità. Questo traguardo riflette la nostra dedizione nell’offrire solo il meglio ai nostri clienti, utilizzando prodotti di eccellenza che fanno la differenza in ogni piatto.

Da sempre, puntiamo a creare un’esperienza unica per i nostri ospiti, e questo riconoscimento ci motiva a continuare su questa strada. Grazie a tutti voi per il supporto e la fiducia. Venite a trovarci e scoprite perché Heinz ci ha scelto tra i migliori!</p>

<h2>Concorso bevi e vinci – Estrazione del mini-frigo</h2>
<p>Maggio è stato un mese pieno di sorprese, e il nostro concorso <strong>Bevi e Vinci</strong> ne è stato la prova! Ogni volta che ordinavi una birra agricola, ricevevi un gratta e vinci. Se la fortuna era dalla tua parte, scoprivi subito se il tuo biglietto era quello vincente. Ma anche se non lo era, avevi un’altra chance: compilavi il retro del biglietto e lo consegnavi in cassa.

Il 21 maggio abbiamo tenuto l’estrazione finale e Alex Carrara di Bergamo ha vinto un <strong>fantastico frigo portatile</strong>, perfetto per le grigliate estive! È stata una serata emozionante e divertente, piena di suspense e allegria.

Grazie a tutti coloro che hanno partecipato e hanno reso questo concorso un vero successo. Restate sintonizzati per altre iniziative e sorprese future. <strong>E ricordate, da HERO la Casa del Burger, non ci si annoia mai!</strong></p>

<img src="https://res.cloudinary.com/demo/image/upload/sample.jpg" alt="" />

`,
  createdAt: new Date("2024-06-11T10:00:00Z"),
  images:  [
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      caption: "Our beach view in July",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    }
  ],
  comments: [
    {
      name: "Luca Dagradi",
      email: "idagradi@gmail.com",
      content: "Grandi ragazzi, avanti così!",
      createdAt: new Date("2024-06-12T09:22:00Z"),
    },
    {
      name: "HeroAdmin",
      email: "mircovitagliano@gmail.com",
      content: "Grazie mille per il tuo supporto Luca! Siamo felici che ti sia piaciuto l’articolo. Ti aspettiamo presto da noi!",
      createdAt: new Date("2024-06-12T14:22:00Z"),
    },
  ],
},
{
  title: "Diario di Bordo – Giugno 2024",
  slug: "diario-giugno-2024",
  excerpt: "Abbiamo inaugurato il club esclusivo 'Gli amici di Hero'",
  content: `
 <img src="https://res.cloudinary.com/demo/image/upload/sample.jpg" alt="" />
<p>Il mese di giugno ci ha travolti con la sua energia, portando con sé gioie intense e festeggiamenti indimenticabili, oltre che gustose novità qui da Hero la Casa del Burger!

Abbiamo inaugurato il club esclusivo <strong>Gli amici di Hero</strong> con una cena memorabile, creando un’atmosfera unica e intima per i nostri clienti più fedeli.

Ma non è tutto! Dal 25 giugno abbiamo lanciato il nuovo menù, con due ricette freschissime e irresistibili: il <strong>MEDITERRANEO</strong> (no meat), un’innovazione vegana che porta i sapori del Mediterraneo direttamente nel vostro piatto, e il <strong>CAPO NORD</strong>, con salmone norvegese affumicato e sfilacciato, perfetto per chi ama i sapori del mare.

Per celebrare la qualificazione dell’Italia agli Euro2024, abbiamo deciso di far indossare le vesti azzurre al nostro Burger <strong>L’ITALIANO</strong> creando una special series dai toni freschi e suggestivi, il tutto reso ancora più esclusivo permettendo di assaporare questo capolavoro solo a 35 fortunati di voi!

Preparatevi per scoprire i dettagli e le novità e di viaggiare con noi durante ogni momento di questo fantastico mese!</p>

<h2>La prima cena del Club esclusivo 'Gli amici di Hero'</h2>
<p>Il 19 giugno abbiamo avuto l’onore di ospitare la prima cena del nostro club esclusivo <strong>Gli amici di Hero</strong>. Questo evento speciale è stato dedicato ai nostri <strong>clienti più fedeli</strong>, coloro che hanno contributo a fare di Hero la Casa del Burger un luogo di eccellenza.

La serata è stata pensata per <strong>celebrare il legame</strong> che abbiamo con i nostri clienti, offrendo loro, un’altra volta, un’esperienza culinaria indimenticabile. L’atmosfera era intima e accogliente, perfetta per una cena tra amici. Tra risate, chiacchiere e brindisi, abbiamo trascorso una serata indimenticabile, rafforzando ulteriormente i nostri legami e creando <strong>ricordi che viaggeranno per sempre nella valigia di Hero</strong>. Le foto della serata raccontano meglio di qualsiasi parola l’energia e la gioia che abbiamo condiviso.

Siamo grati a tutti coloro che hanno partecipato e non vediamo l’ora di organizzare nuovi eventi esclusivi per “Gli amici di Hero”!</p>

<img src="https://res.cloudinary.com/demo/image/upload/sample.jpg" alt="" />

<h2>Limited Edition HAMBURG – Un viaggio nel Tempo e nei Sapori</h2>
<p>Dal 20 giugno al 7 luglio, abbiamo presentato il nostro hamburger Limited Edition <strong>“HAMBURG”</strong>, un tributo alla storia e alla tradizione. Questo panino speciale celebra i 130 anni dalla nascita del primo Hamburger ad Amburgo, creato nel 1894 dal cuoco <strong>Otto Quasch</strong>.

Il nostro <strong>“HAMBURG”</strong> è stato ispirato a quel primo <strong>“Deutsches beefsteak”</strong>, che conquistò i cuori dei lavoratori e dei marinai nel porto di Amburgo prima di attraversare l’oceano e diventare il celebre <strong>“Hamburger Steak”</strong> a New York. Un vero e proprio viaggio nel tempo, che vi riporta alle origini di questo iconico piatto.

Questa edizione limitata non è solo una celebrazione storica ma anche un omaggio agli Euro2024 che quest’anno si svolgono in Germania.

Non perdete l’occasione di assaporare questo capolavoro culinario, disponibile solo per un periodo limitato. Venite a trovarci e lasciatevi trasportare dai sapori autentici del nostro HAMBURG!</p>

<h2>Nuovo Menù Estivo – Freschezza e innovazione nel vostro piatto</h2>
<p>Il 25 giugno abbiamo lanciato il <strong>nuovo menù estivo</strong> qui da Hero la Casa del Burger, portando una ventata di <strong>freschezza e innovazione</strong>. Siamo entusiasti, inoltre, di presentare due nuove ricette che hanno già conquistato i nostri clienti: il <strong>“MEDITERRANEO”</strong> e il <strong>“CAPO NORD”</strong>.

Il <strong>“MEDITERRANEO”</strong> è la nostra nuova proposta vegan, creata per includere tutti i nostri clienti e offrire un’opzione deliziosa e salutare. Questo panino è preparato con pane alla curcuma, salsa rimescolata e coleslaw, un burger dal cuore verde di cavolo riccio, spinaci e broccoli. Il tutto arricchito da mozzarella vegan e pomodori secchi, per un’esplosione di sapori mediterranei.

Dall’altra parte, il <strong>“CAPO NORD”</strong> è un Hamburger di pesce unico nel suo genere. Il pane nero come il carbone avvolge 120 grammi di salmone affumicato e sfilacciato, accompagnato da insalata gentile, robiola fresca, pomodori soleggiati e una spolverata di origano. Un mix perfetto di ingredienti che evoca i sapori del Nord e rende un omaggio alla cucina scandinava.

Con queste nuove aggiunte, il nostro menù estivo è pronto a sorprendere e deliziare tutti i nostri ospiti. Venite a provarlo e lasciatevi conquistare dalle nostre creazioni culinarie!</p>

<h2>L’italiano Veste azzurro – Edizione Speciale per Euro2024</h2>
<p>Il 28 giugno abbiamo lasciato una special series davvero unica: <strong>“L’ITALIANO Veste Azzurro”</strong>. Per celebrare la partecipazione della nazionale italiana agli <strong>ottavi di finale di Euro2024</strong>, noi di Hero non potevamo non omaggiare i nostri connazionali con un Hamburger davvero speciale!

Il nostro classico Burger “L’ITALIANO” è stato vestito di azzurro, con gli ingredienti che ricordano i nostri amati colori, creando un’esperienza visiva e gustativa unica!

Solo 35 fortunati di voi hanno potuto gustare questo strepitoso burger in veste azzurra. Ma non è tutto: abbiamo lanciato un concorso sui social: condividendo una foto del tuo <strong>“Italiano Veste Azzurro”</strong> sulle piattaforme social, uno di questi 35 fortunati vince una <strong>t-shirt griffata HERO</strong>! L’entusiasmo è stato palpabile e le foto che abbiamo ricevuto sono state incredibili.

Grazie a tutti per aver partecipato e reso questo evento ancora più speciale. Continuate a seguirci per altre edizioni e sorprese future!</p>

`,
  createdAt: new Date("2024-07-09T10:00:00Z"),
  images: [
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      caption: "Our beach view in July",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    }
  ]
},{
  title: "Diario di bordo – Luglio 2024",
  slug: "diario-luglio-2024",
  excerpt: "A luglio, l’entusiasmo non ha conosciuto soste qui da Hero – la Casa del Burger.",
  content: `

<p>A luglio, l’entusiasmo non ha conosciuto soste qui da Hero – la Casa del Burger, con un susseguirsi ininterrotto di sorprese e novità. Dalle vacanze dei nostri clienti, che hanno portato lo spirito di Hero in giro per il mondo, alle nuove sorprese riservate al club <strong>“gli amici di Hero”</strong>, non ci siamo mai fermati. Come sempre del resto…</p>

<p>Il nostro planisfero si sta riempiendo di foto delle vostre avventure, mentre noi continuiamo a stupirvi con edizioni limitate come l’hamburger <strong>EL PARDACIAN</strong>, dedicato alla celebrazione di San Giacomo, il <strong>patrono di Predazzo</strong>, che ha unito la nostra comunità in una giornata di festa.</p>

<p>E, per chi ama la nostra birra artigianale, siamo felici di annunciare una nuova cotta della nostra birra CAMM. Con tutto questo e molto altro, luglio è stato un mese da ricordare!</p>

<h2>Il nostro planisfero prende forma!</h2>

<p>Grazie alle vostre vacanze e alle foto che ci avete inviato, il nostro <strong>planisfero</strong> sta prendendo vita. Ogni scatto racconta la vostra storia e ci mostra come portate un pezzo di Hero con voi ovunque andiate. Continuate a condividere i vostri viaggi con noi; la vostra passione per l’esplorazione e la vostra lealtà sono la vera essenza di ciò che rende Hero speciale. Siamo entusiasti di far parte delle vostre avventure e aspettiamo con impazienza di vedere dove vi porteranno i prossimi mesi!</p>

<img src="https://your-image-url.com/photo1.jpg" alt="Foto inviata dai clienti" />

<h2>Nuove sorprese per il club “gli amici di Hero”</h2>

<p>Per i membri del nostro club esclusivo <strong>“Gli Amici di Hero”</strong>, luglio ha riservato una sorpresa molto speciale: un bicchiere personalizzato! Questo regalo è un piccolo segno della nostra grande gratitudine per il vostro continuo supporto e la vostra incondizionata fedeltà.</p>

<p>Ogni bicchiere, unico come ognuno di voi, simbolizza il nostro impegno a costruire una relazione duratura con i nostri clienti più affezionati. Siamo lieti di poter offrire qualcosa che possa rimanere con voi come ricordo delle belle esperienze condivise. Ricordatevi di rimanere connessi e di seguirci attentamente; abbiamo in serbo molte altre sorprese esclusive per i nostri membri.</p>

<p>Questi gesti sono il nostro modo di mostrarvi quanto apprezziamo ogni momento passato insieme e quanto siamo eccitati all’idea di quello che ci riserva il futuro.</p>

<img src="https://your-image-url.com/photo2.jpg" alt="Bicchiere club Hero" />

<h2>Con la celebrazione di San Giacomo arriva EL PARDACIAN Limited Edition</h2>

<p>Il 25 luglio, Predazzo ha vibrato di festa per celebrare il suo patrono, <strong>San Giacomo</strong>. Le campane hanno risuonato in tutto il paese, portando gioia e un senso di comunità mentre tutti si univano ai festeggiamenti. Noi di Hero – la Casa del Burger, abbiamo abbracciato questa festa con grande entusiasmo, offrendo ai nostri clienti un modo unico per partecipare ai festeggiamenti con il nostro speciale burger del mese, EL PARDACIAN.</p>

<p>Questo burger non è solo un piatto da gustare, ma un vero e proprio tributo ai sapori della nostra terra. Ogni morso di <strong>EL PARDACIAN</strong> racchiude l’essenza del nostro territorio, trasformando ingredienti locali in una deliziosa esperienza culinaria.</p>

<p>Protagonista di questa ricetta sorprendente è il nostro amato Puzzone di Moena, un formaggio che con il suo sapore deciso riporta subito ai panorami mozzafiato di Predazzo. Abbinato perfettamente alla delicatezza di un burger di Scottona Nostrana, EL PARDACIAN offre un’esperienza gustativa che incanta i palati più raffinati.</p>

<p>Ma non finisce qui: l’acidità dei crauti con mela verde croccante del Trentino e la nota affumicata dello speck cotto creano un connubio di sapori che trasforma ogni morso in un’intensa avventura culinaria. Se non hai ancora avuto il coraggio di addentarlo, è giunto il momento di lasciarti tentare da questo viaggio di sapori unico e irripetibile.</p>

<p>È stata una giornata che ha unito la comunità e ha portato gioia a tutti coloro che hanno partecipato, celebrando non solo San Giacomo ma anche l’autenticità e la ricchezza dei sapori e della gente di Predazzo.</p>

<!-- Insert Image -->
<img src="https://your-image-url.com/photo3.jpg" alt="EL PARDACIAN burger" />

<h2>Nuova cotta della nostra birra CAMM</h2>

<p>Infine, siamo orgogliosi di annunciare l’arrivo di una <strong>nuova cotta della nostra birra artigianale CAMM</strong>! Siamo già alla sesta produzione da 2000 litri dal novembre 2021, un traguardo che testimonia il successo e l’apprezzamento della nostra birra tra i nostri clienti.</p>

<p><strong>Cosa significa una nuova cotta di birra</strong>? Una cotta rappresenta il processo di produzione di un lotto di birra. Questo termine deriva dal processo di “cottura” del mosto, che è la miscela di acqua e malto d’orzo (e talvolta altri cereali) che viene riscaldata con l’aggiunta di luppolo. Dopo la cottura, il mosto viene fermentato, maturato e infine filtrato o rifermentato per diventare la birra che troviamo nei bicchieri.</p>

<p>Ogni cotta può variare leggermente a seconda delle tecniche utilizzate, degli ingredienti specifici e del tempo dedicato alla maturazione, rendendo ogni lotto unico.</p>

<p>Venite a provarla e lasciatevi conquistare dal suo sapore unico! Ogni sorso racconta la storia del nostro impegno per l’eccellenza e la passione per l’arte birraia. Condividete con noi il piacere di gustare una birra artigianale di qualità, creata con dedizione e attenzione al dettaglio.</p>

<!-- Insert Image -->
<img src="https://your-image-url.com/photo4.jpg" alt="Birra CAMM" />

  `,
  createdAt: new Date("2024-08-13T10:00:00Z"),
  images:  [
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      caption: "Our beach view in July",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
     {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
     {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
     {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
  ],
  
},{
  title: "Diario di bordo – Agosto 2024",
  slug: "diario-agosto-2024",
  excerpt: "Questo mese abbiamo introdotto l’hamburger Limited Edition “Wild",
  content: `
    <h1>Diario di bordo – Agosto 2024</h1>

<p>Agosto ha brillato sotto il sole dell’estate, portandoci non solo calore, ma anche l’opportunità di cavalcare l’onda dei successi dei mesi precedenti. Con i nostri riconoscimenti su TripAdvisor e il successo del nostro nuovo <strong>Limited Edition</strong>, ormai un classico da Hero, abbiamo continuato a elevare il livello delle nostre offerte. Questo mese, abbiamo toccato nuovi vertici di gusto e ospitalità, e non vediamo l’ora di condividere con voi ogni dettaglio!</p>

<h2>Limited edition “Wild”: Un successo straripante</h2>

<img src="images/limited-edition-wild.jpg" alt="Hamburger Wild Limited Edition">

<p>Questo mese abbiamo introdotto l’hamburger <strong>Limited Edition “Wild”</strong>, e siamo entusiasti di annunciare che è stato un enorme successo! Questo hamburger, caratterizzato da sapori audaci e ingredienti inaspettati, ha catturato l’apprezzamento dei nostri clienti, diventando uno dei preferiti in breve tempo. Grazie per aver accolto questa nuova creazione con tanto entusiasmo!</p>

<h2>Preparativi per il “Buon Compleanno Hero”!</h2>

<img src="images/buon-compleanno-hero.jpg" alt="Preparativi per il compleanno di Hero">

<p>Agosto è un mese carico di anticipazione qui a Hero, la Casa del Burger, poiché ci avviciniamo alla celebrazione del nostro anniversario. Quest’anno, i preparativi per il <strong>“Buon Compleanno Hero”</strong> sono più entusiasmanti che mai. Stiamo organizzando un evento che riflette tutto il divertimento, l’innovazione e la passione che abbiamo condiviso con voi nel corso degli anni.</p>

<p>Aspettatevi molte sorprese, intrattenimento dal vivo e, naturalmente, l’inconfondibile atmosfera di festa che solo Hero sa offrire. Sarà un’opportunità per ringraziare ciascuno di voi per aver contribuito a rendere Hero un punto di riferimento nel panorama culinario.</p>

<p>Segnatevi la data e unitevi a noi per brindare agli anni passati e a quelli che verranno. Non vediamo l’ora di celebrare insieme questo traguardo importante, condividendo la gioia e creando nuovi ricordi indimenticabili!</p>

<h2>Continuano i riconoscimenti su TripAdvisor</h2>

<img src="images/tripadvisor-award.jpg" alt="Premio TripAdvisor Hero">

<p>Grazie al vostro sostegno instancabile, abbiamo mantenuto il titolo di miglior ristorante e miglior hamburger del Trentino su <strong>TripAdvisor</strong>. Ogni recensione che condividete è una testimonianza del lavoro appassionato che il nostro team svolge ogni giorno e del legame speciale che abbiamo costruito con voi, i nostri clienti fedeli.</p>

<p>Questo riconoscimento non è solo un premio; è un promemoria quotidiano del nostro impegno nel superare le vostre aspettative, servendo piatti che deliziano e sorprendono. Continuate a raccontarci la vostra esperienza, la vostra storia, i vostri viaggi, perché ogni parola che condividete ci aiuta a crescere e a innovare.</p>

<p>E se non avete ancora lasciato la vostra recensione, vi invitiamo a farlo. Venite a vivere l’esperienza Hero e scoprite perché siamo, ancora una volta, stati votati i migliori!</p>

  `,
  createdAt: new Date("2024-09-09T10:00:00Z"),
  images: [
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      caption: "Our beach view in July",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    }
  ]
},{
  title: "Diario di bordo – Settembre 2024",
  slug: "diario-settembre-2024",
  excerpt: "La serata del 21 settembre è stata semplicemente indimenticabile! ",
  content: `
    <h1>Diario di bordo – Settembre 2024</h1>

<p>Nel mese di settembre, Hero – la Casa del Burger ha celebrato un traguardo speciale: <strong>sei anni di attività all’insegna del gusto e della qualità</strong>. Abbiamo festeggiato con una serata indimenticabile, ricca di divertimento e sapori straordinari.</p>

<h2>BUON COMPLEANNO HERO!</h2>

<img src="images/buon-compleanno-hero-settembre.jpg" alt="Festa di compleanno Hero 6 anni">

<p>La serata del <strong>21 settembre</strong> è stata semplicemente indimenticabile! Per celebrare i sei anni di attività, ci siamo goduti una giornata di buon cibo, belle persone e divertimento a non finire. Gli ospiti si sono lasciati travolgere da un’atmosfera speciale, tra risate, chiacchiere e, ovviamente, i nostri amati Burger. Un compleanno che ha saputo unire vecchi e nuovi amici per brindare insieme a questo grande traguardo!</p>

<p>Ma le sorprese non finiscono qui! <strong>Dal 21 settembre al 31 ottobre</strong>, ogni visita al nostro locale ti regalerà un’emozione in più. Riceverai una busta segreta per ogni visita, che dovrà rimanere sigillata fino al 1° novembre. Dopo di che, finalmente, potrai aprirla insieme a noi e scoprire cosa ti riserva la fortuna!</p>

<p>In palio ci sono premi fantastici come weekend per due persone, gift card fino a 150 euro, cene speciali, birre a volontà e tanto altro. E attenzione, c’è anche il mitico “NON PREMIO CHE PREMIA”, per rendere il tutto ancora più emozionante!</p>

<p>Visita il seguente link per scoprire le regole del gioco, ti aspettiamo!</p>

<p><a href="https://heroburger.plateform.app/promo/promo-compleanno" target="_blank">https://heroburger.plateform.app/promo/promo-compleanno</a></p>

  `,
  createdAt: new Date("2024-10-08T10:00:00Z"),
  images: [
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      caption: "Our beach view in July",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
  ]
},{
  title: "Diario di bordo – Ottobre 2024",
  slug: "diario-ottobre-2024",
  excerpt: "Nel mese di ottobre, abbiamo voluto portarvi con noi in un viaggio culinario straordinario qui da Hero.",
  content: `
    <h1>Diario di bordo – Ottobre 2024</h1>

<p>Nel mese di ottobre, abbiamo voluto portarvi con noi in un <strong>viaggio culinario</strong> straordinario qui da Hero. Un percorso ideato per nutrire non solo il vostro appetito, ma anche la vostra voglia di condividere emozioni con la comunità, attraverso esperienze che hanno fatto battere i cuori di tutti.</p>

<p>Siamo salpati verso terre di tradizioni secolari, abbiamo dato via ad un viaggio attraverso 8 birrifici europei e, come ogni anno, abbiamo trascorso la <strong>giornata di Halloween</strong> composta da gusti e idee del tutto innovative.</p>

<p>Preparatevi a vivere con noi il racconto di questo mese speciale, lasciatevi immergere nel racconto, visitate i nostri social e scoprite di più sugli eventi futuri.</p>

<h2>La Desmontegada di Predazzo</h2>

<img src="images/desmontegada-predazzo.jpg" alt="Desmontegada di Predazzo">

<p>Domenica 6 Ottobre, il ritmo della tradizione batteva forte a Predazzo con la celebrazione della <strong>Desmontegada</strong>. 🎉🐮 Una festa che risveglia l’antico spirito della nostra terra, portando le strade alla vita con il rientro colorato e festoso delle mucche dall’alpeggio estivo.</p>

<p>In questa giornata speciale, Hero, la vostra oasi di gusto, ha aperto le sue porte per accogliervi con calore. Molti di voi hanno approfittato di questa meravigliosa occasione.</p>

<h2>Beer To Ride – Un viaggio tra le birre d’Europa</h2>

<img src="images/beer-to-ride.jpg" alt="Beer To Ride - Birre europee">

<p>Quest’anno abbiamo lanciato un’iniziativa entusiasmante: il <a href="https://heroburger.plateform.app/esperienze/" target="_blank"><strong>BEER TO RIDE</strong></a>. 🍻 Un’avventura settimanale che ha invitato gli amanti della birra e del buon cibo a un viaggio unico attraverso i sapori di 8 birrifici europei.</p>

<p>Ogni giovedì dal 24 ottobre al 19 dicembre, i nostri ospiti avranno l’opportunità di esplorare una diversa birreria del continente, assaporando una birra speciale ad ogni tappa. Questo tour non solo ha offerto la possibilità di gustare birre uniche, ma ha anche arricchito le serate con i nostri deliziosi hamburger, creando un abbinamento perfetto tra cibo e bevande.</p>

<h3>Come Funziona il Tour?</h3>

<p>All’inizio di ogni serata, ai partecipanti viene consegnata una cartina con i dettagli del tour e le informazioni sulle birre presenti in quella tappa. Ad ogni evento, i nostri avventurieri birrai riceveranno un timbro sul loro passaporto del BEER TO RIDE, avanzando verso la conquista di premi esclusivi firmati HERO e BEER TO RIDE.</p>

<p>Non vediamo l’ora di vivere insieme la prossima serata con voi. Restate sintonizzati per le prossime avventure!</p>

<p><a href="https://heroburger.plateform.app/esperienze/" target="_blank">https://heroburger.plateform.app/esperienze/</a></p>

<h2>Beer Hero Hollow Walley – Una cena da brivido</h2>

<img src="images/hero-hollow-walley.jpg" alt="Cena di Halloween Hero Hollow Walley">

<p>La notte di Halloween è stata speciale qui da Hero! Abbiamo organizzato la cena a tema Hero Hollow Walley, trasformando il nostro locale in un luogo misterioso e affascinante. Tra decorazioni spettrali, piatti tematici e un’atmosfera unica, abbiamo trascorso una serata indimenticabile.</p>

<p>Ringraziamo tutti coloro che hanno partecipato, sfoggiando i loro costumi più spaventosi e contribuendo a rendere la festa un vero successo. Non vediamo l’ora di sorprendervi di nuovo il prossimo anno!</p>

  `,
  createdAt: new Date("2024-11-11T10:00:00Z"),
  images:  [
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      caption: "Our beach view in July",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
  ]
},
{
  title: "Diario di bordo – Novembre 2024",
  slug: "diario-novembre-2024",
  excerpt: "Novembre è stato un mese semplicemente incredibile qui a Hero!",
  content: `
    <h1>Diario di bordo – Novembre 2024</h1>

<p>Novembre è stato un mese semplicemente incredibile qui a Hero! Tra novità, eventi speciali e tanta energia, non ci siamo fermati un attimo. Finalmente, abbiamo inaugurato la nostra nuova pagina <strong>YouTube</strong>, il mistero delle <strong>buste segrete</strong> si è finalmente svelato, portando con sé emozioni e premi indimenticabili.</p>

<p>Le tappe del <strong>Beer to Ride</strong> sono andate avanti con un entusiasmo contagioso. E per concludere in bellezza, la notte del trenta abbiamo celebrato una serata epica dedicata ai <strong>Krampus</strong>.</p>

<p>Pronti a rivivere con noi tutto quello che è successo?</p>

<h2>Un nuovo inizio su YouTube</h2>

<img src="images/youtube-channel-launch.jpg" alt="Nuova pagina YouTube Hero">

<p>Siamo entusiasti di annunciarlo: abbiamo aperto la nostra nuova pagina YouTube! Era un progetto che sognavamo da tempo e finalmente è realtà. Questo spazio nasce per condividere con voi tutto quello che rende Hero speciale, andando oltre il piatto e raccontando le storie che stanno dietro ai nostri burger.</p>

<p>All’interno della pagina troverete le nostre <strong>ricette</strong>, i <strong>dietro le quinte</strong> di Hero, gli <strong>eventi</strong> che organizziamo e tante curiosità che non vediamo l’ora di mostrarvi. Sarà uno spazio per divertirci, imparare e, perché no, scoprire qualcosa di nuovo sul nostro mondo.</p>

<p>Non vediamo l’ora di portarvi con noi in questa nuova avventura: accendete lo schermo e fateci compagnia anche lì!</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/B09lrequywk" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

<h2>Le buste segrete sono state svelate</h2>

<img src="images/buste-segrete.jpg" alt="Apertura delle buste segrete da Hero">

<p>Finalmente, a novembre, le misteriose buste segrete hanno iniziato a rivelare il loro contenuto, portando con sé un carico di emozioni e sorprese spettacolari.</p>

<p>Le buste, distribuite nei mesi scorsi, hanno saputo regalare momenti unici, trasformando ogni apertura in un’occasione speciale. Un modo per celebrare insieme e rendere l’esperienza da Hero ancora più memorabile.</p>

<p>Se non hai ancora aperto la tua busta, prenota un tavolo e vieni a scoprire cosa ti aspetta!</p>

<h2>Beer to Ride: Il viaggio continua</h2>

<img src="images/beer-to-ride-novembre.jpg" alt="Birre del Beer to Ride a novembre">

<p>Anche a novembre, il nostro Beer-to-Ride ci ha portato a scoprire nuove birre e territori, continuando questo percorso all’insegna del gusto e della convivialità.</p>

<p>Abbiamo iniziato con la Tappa 2 nella <strong>Repubblica Ceca</strong>, con la Kozel Lager, per poi proseguire in <strong>Irlanda</strong> con la Hop House Lager Guinness (Tappa 3). La <strong>Scozia</strong> è stata protagonista della Tappa 4 con la Brew Dog Punk IPA, seguita dall’<strong>Inghilterra</strong> nella Tappa 5 con la Samuel Smith Organic Pale Ale.</p>

<p>Ma il viaggio non si ferma qui: la prossima tappa sarà <strong>il 5 dicembre dove viaggeremo fino in Belgio</strong>. Prenota il tuo tavolo e unisciti a noi per il prossimo appuntamento del Beer-to-Ride!</p>

<h2>La notte dei Krampus!</h2>

<img src="images/krampus-night.jpg" alt="Krampus Burger e festa a Cavalese">

<p>Il trenta novembre siamo stati a <strong>Cavalese</strong> per la magica notte dei <strong>Krampus</strong>, un evento unico che celebra le tradizioni alpine. Per l’occasione, Hero ha portato il suo tocco speciale con il Krampus Burger, il <strong>burger ufficiale dei Krampus di Fiemme</strong>.</p>

<p>Un mix perfetto di gusto e atmosfera, che ha reso la serata ancora più indimenticabile.</p>

<h2>I nostri social:</h2>

<p><a href="https://www.instagram.com/herolacasadelburger/" target="_blank">https://www.instagram.com/herolacasadelburger/</a></p>

<h2>Il nostro sito web:</h2>

<p><a href="https://herolacasadelburger.it" target="_blank">https://herolacasadelburger.it</a></p>

<h2>Prenotate il vostro posto a tavola:</h2>

<p><a href="https://heroburger.plateform.app" target="_blank">https://heroburger.plateform.app</a></p>

  `,
  createdAt: new Date("2024-12-10T10:00:00Z"),
  images: [
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      caption: "Our beach view in July",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
  ]
 
},{
  title: "Diario di bordo – Dicembre 2024",
  slug: "diario-dicembre-2024",
  excerpt: "Dicembre è stato un mese straordinario qui a Hero, ricco di novità, emozioni festive e momenti da condividere. ",
  content: `
    <h1>Diario di bordo – Dicembre 2024</h1>

<p>Dicembre è stato un mese straordinario qui a Hero, ricco di novità, emozioni festive e momenti da condividere. Abbiamo accolto il freddo con un caloroso abbraccio grazie al nostro nuovo menu invernale, lanciato con grande entusiasmo e accompagnato da sorprese golose per celebrare la magia del Natale.</p>

<h2>Un menu invernale che scalda il cuore</h2>

<img src="images/menu-invernale-hero.jpg" alt="Menu invernale Hero">

<p>Il nuovo menu invernale è finalmente arrivato, portando con sé sapori avvolgenti e ricette pensate per combattere il freddo. I nostri chef hanno messo passione e creatività nelle nuove proposte, che spaziano dai burger più classici alle varianti più innovative, tutte arricchite da ingredienti stagionali e un tocco di calore in più. Venite a scoprire le novità e lasciatevi conquistare dai sapori dell’inverno.</p>

<h2>Il Christmas Burger in edizione limitata</h2>

<p>Per rendere le feste ancora più speciali, abbiamo creato il Christmas Burger, un’edizione limitata dedicata proprio al Natale. Questo burger unico nel suo genere è arricchito con ingredienti festivi e sapori che richiamano la tradizione natalizia, perfetto per un pranzo o una cena in famiglia o con amici durante le festività. Affrettatevi, l’edizione limitata non durerà per sempre!</p>

<h2>Natale da Hero</h2>

<p>L’atmosfera natalizia ha invaso anche il nostro locale: decorazioni scintillanti, musica di sottofondo e un’accoglienza calorosa vi faranno sentire subito nel cuore delle feste. Da Hero, crediamo nel valore della condivisione e della convivialità, e durante questo mese abbiamo organizzato momenti speciali per rendere indimenticabile la vostra esperienza natalizia.</p>

<h2>La conclusione delle buste segrete</h2>

<p>Il 22 dicembre abbiamo chiuso il capitolo delle nostre misteriose buste segrete, con un finale a sorpresa dedicato a “Buon Compleanno Hero”. Questo evento ha rappresentato la chiusura di un percorso fatto di emozioni e sorprese, un modo speciale per ringraziare tutti voi che ci avete accompagnato in questo viaggio. Se vi siete persi l’apertura delle ultime buste, non mancate l’occasione di rivivere i momenti salienti durante la vostra prossima visita!</p>

<h2>Un brindisi con gli amici di Hero</h2>

<p>Le feste sono un momento di unione e allegria, e cosa c’è di meglio di un aperitivo speciale per brindare insieme? Abbiamo organizzato un momento di convivialità con “gli amici di Hero”, dove abbiamo alzato i calici in un brindisi festoso per le feste. L’atmosfera era piena di risate, calore e tanta gioia. Restate sintonizzati sui nostri canali social: presto condivideremo le foto di questi momenti indimenticabili!</p>

<p>Dicembre è stato un mese ricco di novità e sorprese, e noi di Hero non vediamo l’ora di continuare a celebrare insieme a voi l’arrivo del nuovo anno, con altre iniziative, sapori unici e momenti di pura convivialità. Buone feste da tutto lo staff di Hero!</p>

  `,
  createdAt: new Date("2025-01-07T10:00:00Z"),
  images: [
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      caption: "Our beach view in July",
    }
  ]
},{
  title: "Diario di bordo – Gennaio 2025",
  slug: "diario-gennaio-2025",
  excerpt: "Il 2025 si è aperto con un’energia contagiosa qui da HERO!",
  content: `
    <h1>Diario di bordo – Gennaio 2025</h1>

<p>Il 2025 si è aperto con un’energia contagiosa qui da HERO! Abbiamo festeggiato l’arrivo del nuovo anno circondati dai nostri amici, dalla famiglia e, ovviamente, dai nostri burger preferiti. L’atmosfera di festa e la voglia di rimettersi in gioco ci hanno dato la giusta carica per iniziare gennaio con entusiasmo e tante idee in cantiere.</p>

<h2>28 gennaio: sorteggiati i premi “Buon Compleanno HERO”</h2>

<img src="images/sorteggio-premi-compleanno.jpg" alt="Sorteggio premi Buon Compleanno HERO">

<p>Forse ricorderai che a settembre avevamo lanciato la promozione “Buon Compleanno HERO”. Durante questo speciale evento, abbiamo distribuito tantissimi premi, ma alcuni di questi sono rimasti in attesa di un fortunato vincitore.</p>

<p>Ebbene, il 28 gennaio abbiamo finalmente sorteggiato i premi rimasti! È stato un momento emozionante in cui abbiamo chiuso il cerchio di questa iniziativa, regalando ancora un po’ di magia a chi ci segue con passione.</p>

<h2>Buoni propositi per l’anno nuovo</h2>

<img src="images/buoni-propositi-hero.jpg" alt="Buoni propositi Hero 2025">

<p>Il nuovo anno porta sempre con sé nuove prospettive e buoni propositi. Anche noi di HERO ne abbiamo tanti:</p>

<ul>
  <li><strong>Innovare la nostra cucina</strong>: stiamo già lavorando a nuove proposte e combinazioni per sorprenderti con sapori inediti.</li>
  <li><strong>Organizzare eventi memorabili</strong>: vogliamo continuare a creare occasioni speciali per divertirci insieme, magari scoprendo birre particolari o ospitando serate a tema.</li>
  <li><strong>Rimanere vicini alla nostra community</strong>: la nostra priorità resta sempre offrire un’esperienza unica, dentro e fuori dal locale, coltivando lo spirito di amicizia e condivisione che ci contraddistingue.</li>
</ul>

<p>Sappiamo che per molti l’anno nuovo è un momento di riflessione e cambiamento. Facci sapere quali sono i tuoi buoni propositi: noi saremo qui, pronti a fare il tifo per te (magari davanti a un ottimo burger)!</p>

<h2>E tu, sei pronto a scrivere nuovi capitoli insieme a noi?</h2>

<p>Questo 2025 è appena cominciato, e siamo già pieni di progetti e collaborazioni che non vediamo l’ora di condividere con te. Restate sintonizzati sui nostri canali social e sul nostro sito web: le prossime settimane riserveranno tante sorprese!</p>

  `,
  createdAt: new Date("2025-02-04T10:00:00Z"),
  images: [
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      caption: "Our beach view in July",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
  ]
},{
  title: "Diario di bordo – Febbraio 2025",
  slug: "diario-febbraio-2025",
  excerpt: "Febbraio è stato un mese esplosivo qui da Hero!",
  content: `
    <h1>Diario di bordo – Febbraio 2025</h1>

<p>Febbraio è stato un mese esplosivo qui da Hero! Tra sorprese, eventi speciali e tanto divertimento, non ci siamo fermati un attimo.</p>

<p>Il nostro concorso “Bevi e Vinci” è tornato con premi incredibili, abbiamo celebrato un San Valentino indimenticabile e, per concludere in bellezza, il Carnevale ha portato colore e gusto ai nostri burger.</p>

<p>Pronti a rivivere con noi tutto quello che è successo?</p>

<h2>Bevi e Vinci: il concorso che fa felici tutti!</h2>

<img src="images/bevi-e-vinci.jpg" alt="Concorso Bevi e Vinci da Hero">

<p>Grande ritorno per il nostro concorso “Bevi e Vinci”! Ogni birra ordinata ha regalato un gratta e vinci, con la possibilità di vincere subito o di tentare la fortuna con l’estrazione finale. In palio, un fusto da 5L di birra con sei bicchieri, una birra da portare a casa o fantastici gadget targati Hero.</p>

<p>Se non hai ancora tentato la sorte, che aspetti? Vieni a brindare con noi e prova a vincere!</p>

<h2>San Valentino: una serata magica tra luci soffuse e sapori unici</h2>

<img src="images/san-valentino-hero.jpg" alt="Cena di San Valentino da Hero">

<p>Il 14 febbraio da Hero è stato un vero successo! Abbiamo trasformato la nostra veranda in un angolo romantico con luci soffuse e un’atmosfera intima perfetta per celebrare l’amore.</p>

<p>Il protagonista della serata è stato lo “Share the Burger”, una coppia di burger da dividere, creati appositamente per l’occasione con pane rosso e ricette esclusive. Per finire in dolcezza, una golosa sorpresa: un dolce a forma di cuore da condividere. Ma le sorprese non finiscono qui! Chi ha trovato un cuore sotto il burger ha vinto il dessert della serata.</p>

<p>Un’esperienza unica, che ha reso questo San Valentino davvero speciale!</p>

<h2>Carnevale Hero: i burger si mascherano!</h2>

<img src="images/carnevale-hero.jpg" alt="Burger in maschera per il Carnevale da Hero">

<p>Il 22 febbraio il Carnevale ha preso il via e Hero si è trasformato con decorazioni a tema e, soprattutto, burger in maschera!</p>

<p>Quattro dei nostri hamburger più amati si sono vestiti a festa per celebrare il Carnevale, ispirandosi alle maschere tradizionali:</p>

<ul>
  <li><strong>Arlecchino</strong> (edizione limitata): un mix esplosivo di sapori, proprio come il suo variopinto costume.</li>
  <li><strong>Gianduia</strong>: dedicato al Piemonte, con una ricetta a base di tartare piemontese e pane verde, per richiamare i colori della maschera.</li>
  <li><strong>Pulcinella</strong>: omaggio alla Campania, con ingredienti tipici della cucina napoletana e pane nero, simbolo del costume di Pulcinella.</li>
  <li><strong>Pantalone</strong>: ispirato al Veneto, con ingredienti regionali e pane rosso per richiamare il suo tradizionale abito.</li>
</ul>

<p>Un’esplosione di colori e sapori che ha reso il Carnevale da Hero un evento imperdibile!</p>

<p>Febbraio è stato un mese incredibile, ma siamo già pronti per le prossime sorprese. Resta sintonizzato e vieni a vivere con noi ogni momento speciale qui da Hero!</p>

  `,
  createdAt: new Date("2025-03-03T10:00:00Z"),
},{
  title: "Diario di bordo – Marzo 2025",
  slug: "diario-marzo-2025",
  excerpt: "Marzo si è aperto con una nota festosa qui da Hero",
  content: `
   <h1>Diario di bordo – Marzo 2025</h1>

<p>Marzo si è aperto con una nota festosa qui da Hero, e non avremmo potuto chiedere inizio migliore! Abbiamo celebrato il compleanno di Mauro, il nostro instancabile titolare, che con la sua passione e carisma è sempre una fonte d’ispirazione per tutti noi. La sua gioia contagiosa ha reso la giornata speciale e abbiamo brindato insieme a questo traguardo. Un momento che ha unito tutto il nostro team e i nostri affezionati clienti.</p>

<h2>Festa della Donna: Un omaggio unico</h2>

<p>L’8 marzo abbiamo dedicato una giornata straordinaria a tutte le donne che ci hanno fatto visita. Ogni donna è stata accolta con un delizioso fiore, simbolo di bellezza e forza, e un fresco aperitivo rosa, perfetto per brindare alla loro unicità.</p>

<p>Ma non ci siamo fermati qui! Abbiamo offerto la possibilità di “vestire” il loro burger di giallo, una scelta giocosa per celebrare la vitalità e l’energia femminile. Inoltre, ogni cliente ha potuto pescare da una valigetta dei biglietti fortunati, trovando frasi motivazionali che scaldano il cuore, mini candele MUMEX profumate per un tocco di relax, o addirittura un buono da €20 da utilizzare nel nostro locale.</p>

<p>È stata una giornata all’insegna dell’empowerment, dell’amore e della condivisione, che ha lasciato un sorriso su ogni volto.</p>

<h2>San Patrizio: Un tuffo nell’Irlanda</h2>

<p>La festa di San Patrizio ha portato un’ondata di magia irlandese da Hero! Il nostro chef ha creato un burger in edizione limitata, disponibile solo per una settimana, che ha conquistato i palati con i suoi sapori unici.</p>

<p>Abbiamo abbinato questo capolavoro a una birra stout direttamente dall’Irlanda, una combinazione che ha fatto vibrare i sensi di tutti i nostri ospiti. Per concludere in dolcezza, un dessert a tema con un cuore verde ha deliziato il nostro pubblico, rendendo ogni morso un’esperienza indimenticabile.</p>

<p>È stata un’ottima occasione per brindare, ridere e festeggiare insieme, creando ricordi preziosi.</p>

<h2>Nuovo Locale in Arrivo!</h2>

<p>I lavori per il nostro nuovo locale stanno procedendo a ritmo serrato e pian piano prende forma! Ogni giorno vediamo il nostro sogno diventare realtà e non vediamo l’ora di svelarvi questo nuovo spazio, che promette di essere ancora più accogliente e innovativo.</p>

<p>Preparatevi a scoprire un ambiente dove continueremo a offrire i nostri burger deliziosi, insieme a nuove esperienze culinarie e momenti di convivialità.</p>

<p>Marzo è stato un mese ricco di festeggiamenti, sorprese e momenti indimenticabili, ma Aprile ci riserva tantissime altre novità! Continuate a seguirci per vivere insieme ogni attimo speciale e per scoprire ciò che abbiamo in serbo per voi. Vi aspettiamo con entusiasmo!</p>

  `,
  createdAt: new Date("2025-04-01T10:00:00Z"),
  
},{
  title: "Diario di bordo – Aprile 2025",
  slug: "diario-aprile-2025",
  excerpt: "Aprile è stato un mese di calma apparente qui a Hero – La Casa del Burger, ma dietro le quinte il fermento non si è mai fermato.",
  content: `
   <h1>Diario di bordo – Aprile 2025</h1>

<p>Aprile è stato un mese di calma apparente qui a Hero – La Casa del Burger, ma dietro le quinte il fermento non si è mai fermato. Poche occasioni ufficiali, tante emozioni: ve le raccontiamo tutte, così da portarvi con noi in questo viaggio verso la nostra prossima, entusiasmante avventura!</p>

<h2>Pranzo con gli amici di HERO</h2>

<p>Abbiamo aperto le porte del cantiere soltanto per loro: un pranzo informale con gli amici che da sempre sostengono il nostro progetto. Tra il profumo dei burger – preparati in versione “on-site” per l’occasione – e l’eco dei trapani in lontananza, abbiamo fatto scoprire in anteprima la nuova location.</p>

<p>Passeggiando tra muri ancora da dipingere e banconi appena montati, tutti hanno potuto immaginare il locale finito: più ampio, luminoso e pensato per farvi sentire a casa dal primo morso. Tra risate, qualche selfie con il caschetto da cantiere e brindisi improvvisati, è stato impossibile non lasciarsi contagiare dall’entusiasmo collettivo. È stato il nostro modo di dire “grazie” a chi ci sostiene giorno dopo giorno.</p>

<h2>Una breve pausa… prima del grande salto</h2>

<p>Proprio per trasformare quelle pareti grezze in un nuovo spazio accogliente, è arrivato il momento di tirare giù le serrande. Ci prendiamo qualche settimana di stop – poco più di un mese – per completare gli ultimi lavori, installare le nuove attrezzature e rifinire ogni dettaglio.</p>

<p>Sappiamo che la vostra voglia di burger non va mai in vacanza, ma promettiamo che l’attesa sarà ripagata da un’esperienza ancora più coinvolgente: menù aggiornato, nuovi posti a sedere, atmosfera rinnovata e, naturalmente, il nostro inconfondibile sorriso dietro al bancone.</p>

<h2>Ci rivediamo prestissimo</h2>

<p>Segnatevelo in agenda: il countdown è ufficialmente partito. Continuate a seguirci sui social per curiosare tra i progressi del cantiere, sbirciare qualche spoiler sul nuovo menù e scoprire la data esatta dell’inaugurazione. Presto stapperemo insieme la prima birra nella nostra nuova casa e vi aspetterà il profumo dei panini appena sfornati, ancora più buoni perché condivisi dopo questa piccola pausa.</p>

<p>Aprile ci ha dato un assaggio di ciò che verrà. Ora tocca a noi trasformare quei sogni in realtà e, come sempre, farvi sentire gli eroi assoluti di ogni morso. Restate affamati, restate curiosi: ci vediamo tra pochissimo nella nuova Hero!</p>

  `,
  createdAt: new Date("2025-05-06T10:00:00Z"),
  comments: [
    {
      name: "Raffaella Dezulian",
      email: "raffaelladezulian@hotmail.it",
      content: "Complimenti ragazzi siete sempre grandi!! Attendiamo con ansia di vedere la nuova location. Il grande impegno che mettete in tutto quello che fate e la vostra professionalità verranno sempre ripagati! A presto!!!! Raffaella 😘",
      createdAt: new Date("2025-05-10T22:58:00Z"),
    },
    {
      name: "Silvana Biondi",
      email: "silvanabiondi1956@libero.it",
      content: "Bravii! Attendiamo con trepidazione la riapertura del”nostro”punto APPETITOSO A PRESTO",
      createdAt: new Date("2025-05-10T07:27:00Z"),
    },
  ],
},{
  title: "Diario di Bordo – HERO La Casa del Burger Maggio e Giugno 2025",
  slug: "diario-maggiogiugno-2025",
  excerpt: "Questi ultimi due mesi hanno segnato una vera e propria rinascita per la nostra casa",
  content: `
   <h1>Diario di Bordo – HERO La Casa del Burger Maggio e Giugno 2025</h1>

<p>Cari Amici di HERO,</p>

<p>È difficile trovare le parole giuste per descrivere quanto abbiamo vissuto in questi ultimi due mesi, mesi che hanno segnato una vera e propria rinascita per la nostra casa, HERO La Casa del Burger. Se ci guardiamo indietro, possiamo solo provare un’immensa gratitudine e un’emozione forte, perché ciò che abbiamo conquistato va oltre ogni aspettativa.</p>

<h2>MAGGIO: la fine di un grande viaggio</h2>

<img src="images/trasloco.jpg" alt="Trasloco verso la nuova sede HERO">

<p>Il mese di maggio è stato il mese della conclusione di un capitolo e dell’inizio di un nuovo, più grande e più luminoso. Con impegno e dedizione, abbiamo portato a termine i lavori nella nostra nuova location, trasformando il sogno in realtà di un ambiente ancora più accogliente e spazioso.</p>

<p>Il trasloco dalla vecchia sede, dove tutto è nato, è stato un momento di grande emozione… un arrivederci ai ricordi, un benvenuto a una casa tutta nuova fatta su misura per voi, nostri clienti, amici e familiari.</p>

<img src="images/cantiere-fine.jpg" alt="Ultimi momenti nel cantiere della nuova sede">

<h2>GIUGNO: l’apertura della nuova Casa HERO</h2>

<img src="images/taglio-nastro.jpg" alt="Taglio del nastro alla nuova apertura HERO">

<p>Giugno ci ha visti protagonisti di un evento che abbiamo atteso con il cuore in mano: l’apertura ufficiale della nostra nuova casa, dopo 100 giorni di ristrutturazione intensissima. Quattro giorni di festeggiamenti e momenti indimenticabili che hanno reso ufficiale l’inizio di una nuova era.</p>

<p>Il 17 giugno abbiamo aperto con il taglio del nastro assieme all’amministrazione comunale, ai nostri fornitori, alle aziende che hanno contribuito con il cuore e ai nostri amici… “GLI AMICI DI HERO”, un gruppo ristretto di persone che negli anni è sempre rimasto al nostro fianco.</p>

<p>È stato un giorno di orgoglio, di emozione e di riconoscenza, per aver potuto condividere con voi la realizzazione di questo sogno.</p>

<img src="images/fidelity-vip.jpg" alt="Serata VIP e clienti Fidelity da HERO">

<p>Il 18 giugno abbiamo celebrato i nostri clienti FIDELITY e VIP, dimostrando ancora una volta che qui da HERO non si è solo clienti, ma parte di una grande famiglia.</p>

<p>Il 19 giugno abbiamo aperto in modalità ESCLUSIVA, riservando a chi si è prenotato tramite la nostra newsletter un’esperienza unica, un momento speciale tra amici in un ambiente che già sentiamo nostro.</p>

<p>Il 21 giugno alla serata finale di un percorso meraviglioso abbiamo condiviso un momento di festa con tutti i nostri clienti e ospiti speciali, tra cui il “TIMBER TEAM GIACOMELLI”, protagonisti di UNDERCUT su DMAX e FLORIAN ANDRES MUSIC, arrivato direttamente da Lienz per celebrare questa grande apertura.</p>

<img src="images/festa-apertura.jpg" alt="Festa di apertura con Timber Team e Florian Andres">

<p>È stato un momento di pura energia, musica, emozione… e di tanti sorrisi. Non poteva mancare la specialissima festeggiata, una nostra affezionata cliente che ha spento 50 candeline tra abbracci, risate e buonissimo cibo.</p>

<p>Dopo questa partenza in grande stile, abbiamo riaperto regolarmente dal 24 giugno con tutte le serate SOLD OUT, un segno inequivocabile di quanto il nostro nuovo ristorante sia stato accolto con entusiasmo, passione e voglia di vivere momenti autentici.</p>

<h2>Un enorme GRAZIE</h2>

<p>Non potremmo concludere senza ringraziare di cuore tutti coloro che ci hanno accompagnato in questo viaggio. Un grazie speciale ai miei collaboratori, <strong>ANNA, CHANTAL, LAURA, KRISTIAN E SABRINA</strong>, alla mia famiglia, alle persone che mi hanno aiutato e mi sono state vicine e alla mia compagna, senza il vostro supporto questa meravigliosa avventura non sarebbe mai diventata realtà.</p>

<p>E infine, un grazie immenso a voi, i nostri clienti, amici e sostenitori, perché senza di VOI tutto questo non avrebbe senso. La vostra fiducia, il vostro entusiasmo e il vostro affetto sono il cuore pulsante di HERO.</p>

<img src="images/gruppo-team.jpg" alt="Il team HERO e amici durante l'inaugurazione">

<p>Vi aspettiamo per continuare insieme questa straordinaria storia, fatta di hamburger, amicizia e tante emozioni.</p>

<p><em>Con tutto il cuore,<br>
Mauro<br>
Titolare di HERO La Casa del Burger</em></p>

<h2>NON FARTELO RACCONTARE… VIVILO CON NOI!</h2>

  `,
  createdAt: new Date("2025-07-08T10:00:00Z"),
  images: [
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      caption: "Our beach view in July",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
    {
      url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg",
      caption: "Evening light on the boardwalk",
    },
  ]
}
];