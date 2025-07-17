export interface Burger {
  id: number;
  name: string;
  ingredients: string[];
  description: string;
  side?: string;
  allergens: string[];
  categories: string[];
  priceOptions: WeightOption[]; // replaces single price
  burgerOfTheMonth: boolean;
  extras?: ExtraOption[];
  imageSmallUrl?: string;
  imageLargeUrl?: string; // optional for UI, if you have larger images
  backgroundImage?: string;
  origin?: string;
}
export interface Beer {
  id: number;
  name: string;
  characteristics: string[];
  description: string;
  beerType: string;
  priceOptions: WeightOption[];
  imageSmallUrl: string;
  imageLargeUrl: "",
    backgroundImage?: ""
}
export interface WeightOption {
  weight: number; // in grams
  price: number;
}

export interface ExtraOption {
  name: string;
  price: number;
}

export const burgers: Burger[] = [
  {
    id: 1, // unique identifier
    name: "ANGUS DI ABERDEEN",
    ingredients: [
      "Carne di Angus",
      "Lattuga",
      "Pomodoro",
      "Bacon",
      "Insalata gentile",
      "Formaggio Cheddar",
      "Pane HERO",
    ],
    description:
      "Pane HERO, 200 g di carne proveniente da Aberdeen, territorio incontaminato del nord della Scozia",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 200, price: 13.99 }],
    burgerOfTheMonth: true,
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639883/angus-no-bg_z07lgp.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_1300,q_auto,f_auto/v1751639883/angus-no-bg_z07lgp.png",
    backgroundImage: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752476282/aberdeen-resized_qno92r.jpg",
    origin: "2227 Km"
  },
  {
    id: 2, // unique identifier
    name: "HOKKAIDO",
    ingredients: [
      "100 g Tartare di WAGYU di HOKKAIDO A4 BMS 12",
      "Rapanello",
      "Porcino polverizzato",
      "Germogli di pisello",
      "Alga Wakame",
      "Mousse di Trentingrana",
      "Pane HERO",
    ],
    description:
      "Pane Home Made, 100 g Tartare di WAGYU di HOKKAIDO A4 BMS 12, aromatizzata al Porcino polverizzato, alga Wakame con mousse di Trentingrana, Rapanello e germogli di Pisello",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 13.99 }],
    burgerOfTheMonth: false,
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639889/okkaido-no-bg_1_xfzmzo.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_1300,q_auto,f_auto/v1751639889/okkaido-no-bg_1_xfzmzo.png",
    backgroundImage:"https://res.cloudinary.com/dvr9t29vj/image/upload/v1752479202/japan_auzbh3.jpg",
    origin: "12.593 Km"
  },
  {
    id: 3, // unique identifier
    name: "MANGIAFUOCO",
    ingredients: [
      "Carne piccante",
      "Insalata gentile",
      "Bacon alla paprika",
      "Cheddar al Tabasco",
      "Pane al peperoncino",
    ],
    description: "Un mix di ingredienti super piccanti!",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["manzo", "piccante"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 13.99 }],
    burgerOfTheMonth: false,
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639896/Mangiafuoco-no-bg_ofnztw.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_1300,q_auto,f_auto/v1751639896/Mangiafuoco-no-bg_ofnztw.png"
  },
  {
    id: 4, // unique identifier
    name: "NOSTRANO",
    ingredients: [
      "Carne di manzo",
      "Insalata gentile",
      "Pomodoro",
      "Speck delle Dolomiti",
      "Maionese e ketchup",
      "Colata di Fontal di Cavalese",
      "Pane HERO",
    ],
    description:
      "Pane HERO, 200 g di carne proveniente da Aberdeen, territorio incontaminato del nord della Scozia",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [
      { weight: 100, price: 12.9 },
      { weight: 160, price: 13.9 },
      { weight: 220, price: 14.9 },
    ],
    burgerOfTheMonth: false,
    extras: [{ name: "Cipolle caramellate", price: 1.5 }],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639875/Nostrano_rree3j.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_1300,q_auto,f_auto/v1751639875/Nostrano_rree3j.png"
  },
  {
    id: 5, // unique identifier
    name: "CRUDO",
    ingredients: [
      "Tartare di Fassona piemontese",
      "Insalata gentile",
      "Pomodori soleggiati",
      "Cipolla caramellata",
      "Germogli",
      "Salsa tartare",
      "Pane HERO",
    ],
    description:
      "Per gli amanti della carne cruda, un mix di ingredienti freschi e gustosi",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 200, price: 13.99 }],
    burgerOfTheMonth: false,
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639880/Crudo-no-bg_q8yizx.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_1300,q_auto,f_auto/v1751639880/Crudo-no-bg_q8yizx.png"
  },
  {
    id: 6, // unique identifier
    name: "TIMBER BURGER",
    ingredients: [
      "Carne di manzo",
      "Peperoni grigliati",
      "Speck grigliato",
      "Rosella alla piastra",
      "Salsa al pepe rosa fatta in casa",
      "Pane HERO",
    ],
    description: "Il burger ufficiale del Timber Team Giacomelli!",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 220, price: 13.99 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Cipolle caramellate", price: 1.5 },
      { name: "Uovo al tegamino", price: 1.5 },
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639880/Timber-no-bg_woc0to.png", // optional for UI
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_1300,q_auto,f_auto/v1751639880/Timber-no-bg_woc0to.png"
  },
  {
    id: 7, // unique identifier
    name: "KEPPORKO",
    ingredients: [
      "Carne di manzo",
      "Insalata gentile",
      "PorKetta alla piastra",
      "Pomodoro",
      "Insalata gentile",
      "Formaggio Cheddar",
      "Pane HERO",
    ],
    description:
      "Per gli amanti della porKetta e della carne di manzo, un mix di ingredienti freschi e gustosi",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini", "uova"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 200, price: 13.99 }],
    burgerOfTheMonth: false,
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639893/Kepporko-no-bg_haupew.png", // optional for UI
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_1300,q_auto,f_auto/v1751639893/Kepporko-no-bg_haupew.png"
  },
  {
    id: 8, // unique identifier
    name: "L'ORTOLANO",
    ingredients: [
      "Burger di verdure",
      "Insalata gentile",
      "Pomodoro",
      "Carote",
      "Cipolla caramellata",
      "Pane 'non siamo mica SEMI'",
    ],
    description:
      "Per i nostri amici vegani, un mix di verdure fresche e gustose",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["vegano"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 13.99 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Formaggio", price: 1.5 },
      { name: "Uovo al tegamino", price: 1.5 },
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639893/Ortolano-no-bg_jbrtwj.png", // optional for UI
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_1300,q_auto,f_auto/v1751639893/Ortolano-no-bg_jbrtwj.png"
  },
  {
    id: 9, // unique identifier
    name: "IL CRUNCH",
    ingredients: [
      "Burger di frumento panato",
      "Paprika leggermente piccante",
      "Insalata gentile",
      "Bacon di barbabietola",
      "Pomodori semicerchi sott'olio",
      "Maionese vegana",
      "Pane casereccio",
    ],
    description:
      "Pane casereccio che fa cruuunch ad ogni morso, con un mix di ingredienti freschi e gustosi",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["vegano", "leggermente piccante"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 13.99 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Salsa al formaggio cheddar", price: 1.5 },
      { name: "Uovo al tegamino", price: 1.5 },
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639882/Crunch-no-bg_ge9zzl.png", // optional for UI
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_1300,q_auto,f_auto/v1751639882/Crunch-no-bg_ge9zzl.png"
  },
  {
    id: 10, // unique identifier
    name: "DONNA NERA",
    ingredients: [
      "Burger di patata viola",
      "Asparagi verdi rustici",
      "Patè di olive nere",
      "Zucchine grigliate",
      "Pomodoro al forno Hero Made",
      "Ciabattina croccante e morbida",
    ],
    description:
      "Il vegan burger più dark che ci sia, con un mix di ingredienti freschi e gustosi",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["vegano"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 150, price: 13.99 }],
    burgerOfTheMonth: false,
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639893/Donna-Nera-no-bg_j8ktfd.png", // optional for UI
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_1300,q_auto,f_auto/v1751639893/Donna-Nera-no-bg_j8ktfd.png"
  },
  {
    id: 11, // unique identifier
    name: "GREEN BURGER",
    ingredients: [
      "Burger vegetale Beyond Meat",
      "Hummus di ceci",
      "Gocce di peperoni dolci",
      "Pomodorino datterino giallo sott'olio",
      "Radicchio rosso",
      "Pane verde come la natura",
    ],
    description:
      "Il burger Beyond Meat si veste di verde, con un mix di ingredienti freschi e gustosi",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["vegano"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 115, price: 13.99 }],
    burgerOfTheMonth: false,
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639890/Green-Burger-no-bg_iiaewd.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_1300,q_auto,f_auto/v1751639890/Green-Burger-no-bg_iiaewd.png"
  },
];


export const beers: Beer[] = [
   {
    id: 1, // unique identifier
    name: "KALTENBERG KELLER",
    characteristics: [
      "COLORE • Paglierino opalescente",
      "GUSTO • Amabilmente maltato e leggermente luppolato",
      "RETROGUSTO • Intensi sentori di lievito",
      "GRADO ALCOLICO • 5,1%"
    ],
    description:
      "SUA ALTEZZA, LA BIRRA. Tutto nasce con il casato dei Wittelsbach che ha regnato per oltre 700 anni in Baviera, influenzando e caratterizzando fortemente la tradizione e la cultura birraria tedesca. Oggi il Principe Luitpold di Baviera continua a tramandare le speciali ricette della gamma König Ludwig e Kaltenberg, garantendone la qualità.",
    beerType: "Lager non filtrata", // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 0.20, price: 2.90 },{weight: 0.40, price: 5.50}],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752652306/karltenberg-keller-small_btncjy.png",
    imageLargeUrl: "",
    backgroundImage: ""
  },
  {
    id: 2, // unique identifier
    name: "PATER LINUS BLANCHE",
    characteristics: [
      "COLORE • Bianco opalescente",
      "GUSTO • Fresco, fruttato (agrumato), leggermente speziato",
      "RETROGUSTO • Note di coriandolo e di arance Curaçao",
      "GRADO ALCOLICO • 4,5%"
    ],
    description:
      "QUANDO LA BIRRA È UNA VOCAZIONE. Godersi una birra d’abbazia è un’esperienza che va ben oltre il gusto. Dietro c’è un mondo fatto di passione e pazienza, come nel caso della Pater Linus, la cui ricetta è stata creata dall’omonimo priore dell’Abbazia di Koenigmuenster, in Germania, e tramandata fino a oggi grazie all’ostinazione dei monaci benedettini che l’hanno custodita senza alterarne l’anima.",
    beerType: "Abbazia Blanche",
    priceOptions: [{ weight: 0.25, price: 3.50 },{weight: 0.50, price: 6.00}],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752652306/pater-linus-small_o9p264.png",
    imageLargeUrl: "",
    backgroundImage: ""
  },
{
    id: 3, // unique identifier
    name: "OBERBRÄU DOPPIO MALTO ROSSA",
    characteristics: [
      "COLORE • Ambrato intenso",
      "GUSTO • Aroma intenso e fruttato",
      "RETROGUSTO • Note di malto e caramello",
      "GRADO ALCOLICO • 6,5%"
    ],
    description:
      "CAPOLAVORO DELL’ARTE BIRRARIA BAVARESE. Oberbräu 1605 ha le sue origini in Holzkirchen, un paesino incastonato nelle innevate alpi bavaresi. Nel 1605 la famiglia reale Wittelsbach concesse agli abitanti di Holzkirchen i diritti di produzione della birra. Il giorno dell’ufficializzazione di questo permesso, tutti gli abitanti festeggiarono per le strade cantando e ballando e non si sprecò tempo nell’inaugurare il birrificio locale per la produzione della birra denominata inizialmente Holzkirchener Oberbräu. Questo momento segnò l’inizio di un patrimonio di birra d’eccellenza. Da allora e in stretta aderenza alla legge di purezza, Oberbräu 1605 è magistralmente prodotta con acqua, luppolo e orzo. Più di 400 anni dopo, la birreria di Holzkirchen produce ancora questo autentico capolavoro dell’arte birarria bavarese sotto il controllo del Principe Luitpold di Baviera.",
    beerType: "Doppio malto rossa, bassa fermentazione", // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 0.20, price: 2.90 },{weight: 0.40, price: 5.50}],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752652306/oberrau-dm-small_r90sjj.png",
    imageLargeUrl: "",
    backgroundImage: ""
  },
  {
    id: 4, // unique identifier
    name: "RYE RIVER RETRO IPA",
    characteristics: [
      "COLORE • Dorato intenso",
      "GUSTO • Equilibrato, maltato e floreale",
      "RETROGUSTO • Balsamico, floreale e agrumato",
      "GRADO ALCOLICO • 5,6%"
    ],
    description:
      "Rye River è un birrificio artigianale indipendente nato nel 2013 nella contea di Kildare, vicino a Dublino (Irlanda). Ha vinto oltre 180 premi internazionali per le sue birre, tutte realizzate con grande passione. Tutte le ricette hanno un profilo dell’acqua unico che corrisponde allo stile della birra. Utilizzano malti selezionati a mano con combinazioni diverse per ogni birra selezionando i migliori luppoli da tutto il mondo per assicurarsi che siano il più freschi possibile.",
   beerType: "IPA", 
    priceOptions: [{ weight: 0.20, price: 2.90 },{weight: 0.40, price: 5.50}],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752652306/rye-river-small_soky7d.png",
    imageLargeUrl: "",
    backgroundImage: ""
  },
  {
    id:5, // unique identifier
    name: "WARSTEINER PREMIUM FRESH (ALC. 0,0%)",
    characteristics: [
      "COLORE • Oro chiaro",
      "GUSTO • Vivace, leggermente amarognolo, con delicato sentore di malto",
      "RETROGUSTO • Fresco, vivace e leggermente fruttato",
      "GRADO ALCOLICO • 0,0%"
    ],
    description:
      "Rye River è un birrificio artigianale indipendente nato nel 2013 nella contea di Kildare, vicino a Dublino (Irlanda). Ha vinto oltre 180 premi internazionali per le sue birre, tutte realizzate con grande passione. Tutte le ricette hanno un profilo dell’acqua unico che corrisponde allo stile della birra. Utilizzano malti selezionati a mano con combinazioni diverse per ogni birra selezionando i migliori luppoli da tutto il mondo per assicurarsi che siano il più freschi possibile.",
   beerType: "Premium pilsner analcolica", // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 0.30, price: 3.50},{weight: 0.20, price: 6}],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752652306/warsteiner-small_tmbezy.png",
    imageLargeUrl: "",
    backgroundImage: ""
  }
]
