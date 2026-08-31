export interface Burger {
  id: number;
  name: string;
  ingredients: string[];
  description?: string;
  modalDescription?: string;
  side?: string;
  allergens: string[];
  categories: string[];
  priceOptions: WeightOption[]; // replaces single price
  burgerOfTheMonth: boolean;
  olympian?: boolean;
  extras?: ExtraOption[];
  imageSmallUrl?: string;
  imageLargeUrl?: string; // optional for UI, if you have larger images
  burgHeroUrl?: string;
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
  imageLargeUrl: string;
  backgroundImage?: string;
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
    id: 2, // unique identifier
    name: "ALTAMURA",
    ingredients: [
      "Puccia pugliese",
      "Melanzane grigliate",
      "Medaglione di mozzarella panata",
      "Salsa di pomodoro",
      "Cialda di grana croccante",
      "Basilico fresco"
    ],
    description:
      "Un omaggio ai sapori della Puglia: la puccia pugliese racchiude melanzane grigliate, un medaglione di mozzarella panata e una salsa di pomodoro ricca e profumata. La cialda di grana croccante aggiunge un tocco di sapore intenso, mentre il basilico fresco completa l’esperienza con la sua fragranza inconfondibile. Un burger che celebra la tradizione culinaria pugliese con gusto e autenticità.",
      modalDescription:"Burger di melanzane grigliate con medaglione di mozzarella panata, salsa di pomodoro e cialda di grana nel pane pugliese.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["vegetariano"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 160, price: 15.90 }],
    burgerOfTheMonth: false,
    olympian: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 },
      { name: "Mortadella", price: 2.00 },
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1783253510/Altamura_zix7uj.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1783253510/Altamura_zix7uj.webp",
    backgroundImage: "",
  },
  /*  {
    id: 2, // unique identifier
    name: "AMERICA",
    ingredients: [
      "Pane rosso",
      "Salsa americana BBQ",
      "Cetriolini",
      "Hamburger di Brisket",
      "Cheddar CHeese sauce",
      "Crumble di Bacon"
    ],
    description:
      "Un omaggio ai sapori iconici d'oltreoceano: il pane rosso racchiude un succulento hamburger di Brisket, arricchito dalla dolcezza affumicata della salsa americana BBQ e dalla cremosità avvolgente della Cheddar Cheese sauce. I cetriolini aggiungono una nota fresca e croccante, mentre il crumble di bacon dona un tocco irresistibile di sapore e consistenza, completando un'esperienza gustativa ricca e appagante.",
      modalDescription:"Burger di Brisket con salsa BBQ, Cheddar cheese sauce e crumble di bacon nel pane rosso.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 200, price: 16.90 }],
    burgerOfTheMonth: false,
    olympian: true,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 },
      { name: "Cipolle caramellate", price: 1.50 },
      { name: "Uovo al tegamino", price: 1.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1769631912/America_skhmwd.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1769631912/America_skhmwd.webp",
    backgroundImage: "",
  }, */
   /* {
    id: 3, // unique identifier
    name: "ASIA",
    ingredients: [
      "Pane giallo",
      "Cracker di alga",
      "Kimchi",
      "Petto di pollo grigliato",
      "Salsa Mango e ananas",
      "Crumble di cipolla"
    ],
    description:
      "Un omaggio ai sapori iconici dell'oriente: il pane giallo racchiude un succulento petto di pollo grigliato, arricchito dalla dolcezza esotica della salsa Mango e ananas e dalla croccantezza del kimchi fermentato. Il cracker di alga aggiunge una nota marina e croccante, mentre il crumble di cipolla dona un tocco irresistibile di sapore e consistenza, completando un'esperienza gustativa ricca e appagante.",
      modalDescription:"Burger di pollo grigliato con salsa Mango e ananas e crumble di cipolla nel pane giallo.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["pollo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 140, price: 16.90 }],
    burgerOfTheMonth: false,
    olympian: true,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1769631912/Asia_nj11ah.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1769631912/Asia_nj11ah.webp",
    backgroundImage: "",
  }, */
  /* {
    id: 4, // unique identifier
    name: "EUROPA",
    ingredients: [
      "Pane Verde",
      "Rucola",
      "Mortadella",
      "Stracciatella di burrata",
      "Carne di maiale",
      "Pomodori secchi",
      "Pesto di pistacchio"
    ],
    description:
      "Un viaggio nei sapori del vecchio continente: il pane verde racchiude succulenta carne di maiale, arricchita dalla morbidezza della stracciatella di burrata e dalla delicatezza della mortadella. La rucola fresca aggiunge una nota pepata, mentre i pomodori secchi donano un tocco di dolcezza intensa. Il pesto di pistacchio completa l'esperienza con la sua cremosità e il suo aroma unico, creando un equilibrio perfetto tra sapori autentici e consistenze avvolgenti.",
      modalDescription:"Burger di maiale con mortadella, stracciatella di burrata e pesto di pistacchio nel pane verde.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["maiale"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 180, price: 16.90 }],
    burgerOfTheMonth: false,
    olympian: true,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1769631913/Europe_irxc5k.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1769631913/Europe_irxc5k.webp",
    backgroundImage: "",
  }, */
   /* {
    id: 5, // unique identifier
    name: "OCEANIA",
    ingredients: [
      "Pane Blu",
      "Avocado",
      "Filetto di merluzzo panato",
      "Mayonese limone e pepe",
      "Scramble di uovo",
    ],
    description:
      "Un burger che celebra i sapori dell'Oceania: il pane blu racchiude avocado fresco, filetto di merluzzo panato, mayonese limone e pepe e uno scramble di uovo. Un mix di sapori freschi e autentici che creano un'esperienza unica.",
      modalDescription:"Burger con avocado, merluzzo panato, mayonese limone e pepe e scramble di uovo nel pane Blu.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "pesce"], // list allergens for allergy info
    categories: ["pesce"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 120, price: 16.90 }],
    burgerOfTheMonth: false,
    olympian: true,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1769631912/Oceania_w7ipdw.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1769631912/Oceania_w7ipdw.webp",
    backgroundImage: "",
  }, */
 /*  {
    id: 6, // unique identifier
    name: "CLASSICO",
    ingredients: [
      "Carne di Manzo",
      "Insalata gentile",
      "Pomodoro",
      "Irish Bacon",
      "Insalata gentile",
      "Cheddar cheese sauce",
      "Pane HERO",
    ],
    description:
      "Un burger dal gusto deciso con carne di alta qualità, arricchito da croccante lattuga, pomodoro fresco, bacon saporito e delicata insalata gentile. Il tutto accompagnato da una fetta di formaggio Cheddar fuso e racchiuso nel soffice e fragrante pane HERO.",
      modalDescription:"Burger di manzo con bacon, Cheddar e verdure fresche nel pane HERO.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 11.90 },{ weight: 200, price: 13.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 },
      { name: "Cipolle caramellate", price: 1.50 },
      { name: "Uovo al tegamino", price: 2.00 },
      { name: "Cetriolini", price: 1.00 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639883/angus-no-bg_z07lgp.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1751639883/angus-no-bg_z07lgp.png",
    /* backgroundImage: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752476282/aberdeen-resized_qno92r.jpg",
    origin: "2227 Km" 
  }, */
  {
    id: 7, // unique identifier
    name: "CHICKEN",
    ingredients: [
      "Filetto di pollo panato",
      "Insalata gentile",
      "Pomodoro fresco",
      "Pane HERO",
    ],
    description:
      "Un burger di pollo dal gusto avvolgente: il filetto di pollo panato, croccante e saporito, si unisce alla freschezza dell’insalata gentile e del pomodoro maturo, racchiusi nel morbido pane HERO. Un classico intramontabile che conquista con semplicità e bontà.",
      modalDescription:"Burger di pollo panato con verdure fresche nel pane HERO.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["pollo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 11.90 },{ weight: 200, price: 13.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 },
      { name: "Bacon croccante", price: 1.50 },
      { name: "Uovo al tegamino", price: 2.00 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1775228468/chicken_t7mrfw.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1775228468/chicken_t7mrfw.webp"
  }
   /* {
    id: 8, 
    name: "SAPORI DI PRIMAVERA",
    ingredients: [
      "Pane al mais",
      "Tartare di Carne Salada",
      "Cremoso alla rucola",
      "Pomodori datterini gialli",
      "Punte di asparagi verdi croccanti",
      "Olio, sale e pepe",
      "Polvere di limone nero",
    ],
    description:
      "Un burger che celebra i sapori freschi e vibranti della primavera: il pane al mais racchiude una pregiata tartare di Carne Salada, arricchita da un cremoso alla rucola che dona una nota erbacea e avvolgente. I pomodori datterini gialli aggiungono dolcezza e colore, mentre le punte di asparagi verdi croccanti offrono una consistenza sorprendente. Il tutto è esaltato da un semplice condimento di olio, sale e pepe, con un tocco finale di polvere di limone nero che dona un aroma unico e irresistibile.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], 
    categories: ["manzo"], 
    priceOptions: [{ weight: 100, price: 16.50 }],
    burgerOfTheMonth: true,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1777046018/sapori_primavera_1_b9kgds.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1777046018/sapori_primavera_1_b9kgds.webp",
  }, */
 ,
  {
    id: 8, // unique identifier
    name: "NOSTRANO",
    ingredients: [
      "Carne di manzo",
      "Insalata gentile",
      "Pomodoro",
      "Speck delle Dolomiti",
      "Colata di Fontal di Cavalese",
      "Pane HERO",
    ],
    description:
      "Un morso e sei tra le cime delle Dolomiti: succulenta carne di manzo avvolta dalla freschezza dell’insalata gentile e del pomodoro maturo. A dare carattere, un tocco affumicato di Speck delle Dolomiti, mentre una generosa colata di Fontal di Cavalese scivola lenta e cremosa, abbracciando ogni ingrediente. Il tutto è legato da un classico abbinamento di maionese e ketchup, racchiuso in un fragrante pane HERO. Un tributo ai sapori autentici, per chi ama sentirsi a casa ovunque.",
    modalDescription: "Burger di manzo con speck delle Dolomiti, Fontal di Cavalese e salsa speciale nel pane HERO.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [
      { weight: 100, price: 12.90 },
      { weight: 160, price: 13.90 }
    ],
    burgerOfTheMonth: false,
    extras: [{ name: "Cipolle caramellate", price: 1.5 },
    { name: "Bacon nelle patate", price: 1.50 },
    { name: "Cheddar nelle patate", price: 1.50 },
    { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639875/Nostrano_rree3j.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1751639875/Nostrano_rree3j.png",
    backgroundImage: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752841650/Parco-Naturale-Paneveggio-Pale-di-San-Martino-2_1_gn2mdi.png",
    origin: "Km 0"
  },
  {
    id: 9, // unique identifier
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
      "Un burger che osa con classe: pregiata tartare di Fassona piemontese, lasciata cruda per esaltarne tutta la purezza e la delicatezza. Ad accompagnarla, insalata gentile, pomodori soleggiati e germogli freschi, in un equilibrio di freschezza e profondità. La cipolla caramellata aggiunge dolcezza, mentre la salsa tartare firma il piatto con un tocco deciso. Il tutto racchiuso nel morbido pane HERO. Crudo, sì—ma con stile.",
    modalDescription: "Burger con tartare di Fassona piemontese, cipolla caramellata e salsa tartare nel pane HERO.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 14.90 },
      { weight: 200, price: 18.50 },
      { weight: 300, price: 21.90 }
    ],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639880/Crudo-no-bg_q8yizx.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1751639880/Crudo-no-bg_q8yizx.png"
  },
  {
    id: 10, // unique identifier
    name: "TIMBER BURGER",
    ingredients: [
      "Pane Hero",
      "Carne di manzo",
      "Peperoni grigliati",
      "Speck grigliato",
      "Tosella alla piastra",
      "Salsa al pepe rosa fatta in casa"
    ],
    description: "Il burger ufficiale del Timber Team Giacomelli! Una carica di energia e gusto pensata per chi non teme il bosco né la fame. Robusta carne di manzo, accompagnata da peperoni grigliati e speck scottato alla perfezione, per un’esplosione affumicata e succosa. La rosella alla piastra aggiunge carattere e croccantezza, mentre la protagonista è lei: una salsa al pepe rosa fatta in casa, intensa e profumata come una passeggiata tra i larici. Il tutto avvolto nel fidato pane HERO. Un panino da veri boscaioli. Ma con stile.",
    modalDescription: "Burger di manzo con speck grigliato, peperoni e salsa al pepe rosa nel pane HERO.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 220, price: 15.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Cipolle caramellate", price: 1.5 },
      { name: "Uovo al tegamino", price: 1.5 },
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639880/Timber-no-bg_woc0to.png", // optional for UI
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1751639880/Timber-no-bg_woc0to.png",
    backgroundImage: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752842107/timber-team_pnlr39.jpg"
  },
 /*  {
    id: 11, // unique identifier
    name: "KEPPORKO",
    ingredients: [
      "Carne di manzo",
      "Insalata gentile",
      "PorKetta alla piastra",
      "Pomodoro",
      "Formaggio Cheddar",
      "Pane HERO",
    ],
    description:
      "Quando la carne di manzo incontra la porKetta alla piastra, nasce un panino dal cuore doppio e deciso. La freschezza dell’insalata gentile (raddoppiata per chi ama il verde!), la succosità del pomodoro e la cremosità del formaggio Cheddar creano un’armonia irresistibile. Il tutto racchiuso nel classico pane HERO, pronto a tenere testa a tanta goduria.",
    modalDescription: "Burger di manzo con porchetta alla piastra, Cheddar e verdure fresche nel pane HERO.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini", "uova"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 13.90 },
      { weight: 160, price: 14.90 }
    ],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 },
      { name: "Cipolle caramellate", price: 1.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639893/Kepporko-no-bg_haupew.png", // optional for UI
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1751639893/Kepporko-no-bg_haupew.png"
  }, */
  {
    id: 11, // unique identifier
    name: "GOLOSO",
    ingredients: [
      "Pane nero come il carbone",
      "Carne di manzo",
      "Mortadella pistacchiata",
      "Insalata gentile",
      "Peperoni grigliati",
      "Spalmata di gorgonzola dolce"
    ],
    description:
      "Un’esplosione di gusto racchiusa in un pane nero come carbone. La succulenta carne di manzo si fonde con la morbida mortadella pistacchiata, mentre l’insalata gentile aggiunge freschezza e croccantezza. I peperoni grigliati donano una dolcezza affumicata, completata dalla spalmata avvolgente di gorgonzola dolce: un equilibrio perfetto tra sapori intensi e vellutati.",
    modalDescription: "Burger di manzo con mortadella pistacchiata, gorgonzola dolce e peperoni nel pane nero.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [
      { weight: 100, price: 12.90 },
      { weight: 160, price: 13.90 },
      { weight: 220, price: 14.90 }
    ],
    burgerOfTheMonth: false,
    extras: [
      { name: "Cipolle caramellate", price: 1.50 },
      { name: "Uovo al tegamino", price: 1.50 },
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1752839750/Hero-Il-Goloso_kci3mu.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1752839750/Hero-Il-Goloso_kci3mu.png"


  },
  {
    id: 12, // unique identifier
    name: "IL TARTUFO",
    ingredients: [
      "Pane nero come il carbone",
      "Tartare 100 g",
      "Stracciatella di burrata",
      "Pistacchi tritati",
      "Scaglie di tartufo nero"
    ],
    description:
      "Un burger che celebra il lusso dei sapori: il pane nero come il carbone racchiude una pregiata tartare di carne di bovino nostrano, arricchita dalla morbidezza della stracciatella di burrata. I pistacchi tritati aggiungono una nota croccante e aromatica, mentre le scaglie di tartufo nero donano un profumo intenso e avvolgente. Un’esperienza gastronomica unica, per chi ama indulgere nei piaceri del palato.",
    modalDescription: "Pane nero con tartare di bovino nostrano, stracciatella di burrata, pistacchi tritati e scaglie di tartufo nero.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [
      { weight: 100, price: 19.90 }
    ],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1761858616/TARTUFO_INVERNO_celntu.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1761858616/TARTUFO_INVERNO_celntu.webp"

  },
  {
    id: 13, // unique identifier
    name: "ITALIANO",
    ingredients: [
      "Pane HERO",
      "Carne di manzo",
      "Insalata gentile",
      "Crudo di Parma",
      "Mozzarella di bufala campana DOP",
      "Pomodoro fresco",
      "Maionese e ketchup"
    ],
    description:
      "Un classico intramontabile rivisitato con ingredienti d’eccellenza. Il pane HERO racchiude succulenta carne di manzo, fresca insalata gentile e il pregiato crudo di Parma. La mozzarella di bufala campana DOP si fonde con il pomodoro fresco, mentre una delicata maionese e un tocco di ketchup completano questo burger dal sapore autentico e irresistibile.",
    modalDescription: "Burger di manzo con crudo di Parma, mozzarella di bufala e verdure fresche nel pane HERO.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [
      { weight: 100, price: 12.90 },
      { weight: 160, price: 13.90 }
    ],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1752839752/Hero-ltaliano_s5msgu.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752839752/Hero-ltaliano_s5msgu.png"
    
  },
 /* {
    id: 14, // unique identifier
    name: "MARRAKESH",
    ingredients: [
      "Pane giallo alla curcuma",
      "Petto di pollo grigliato",
      "Verdure saltate con spezie",
      "Chips di platano",
      "Salsa harissa piccante"
    ],
    description:
      "Un viaggio nei sapori di Marrakesh: il pane giallo alla curcuma racchiude un petto di pollo grigliato, arricchito da verdure saltate con spezie aromatiche. Le chips di platano aggiungono una croccantezza esotica, mentre la salsa harissa piccante completa l’esperienza con un tocco di fuoco e intensità. Un burger che trasporta i sensi in un mercato marocchino, tra profumi e sapori avvolgenti.",
    modalDescription: "Burger di pollo con verdure saltate con spezie, chips di platano e salsa harissa piccante nel pane giallo alla curcuma.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["pollo", "piccante"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [
      { weight: 100, price: 14.90 }
    ],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1775228467/marrakech_dytiei.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1775228467/marrakech_dytiei.webp"
    
  }, */
 {
    id: 15, // unique identifier
    name: "MANGIAFUOCO",
    ingredients: [
      "Carne di manzo",
      "Insalata gentile",
      "Bacon",
      "Salsa fuoco",
      "Salsa Harissa",
      "Pane al peperoncino",
    ],
    description: "Un burger che non ha paura di accendere i sapori: la carne di manzo succulenta si unisce alla freschezza dell’insalata gentile, mentre il bacon alla paprika aggiunge un tocco affumicato e croccante. La salsa fuoco, con il suo mix di spezie e piccantezza, si fonde con la salsa Harissa, creando un’esplosione di gusto che avvolge ogni morso. Il tutto è racchiuso in un pane al peperoncino, pronto a sfidare anche i palati più audaci. Un burger per chi ama il brivido del piccante, ma con equilibrio e carattere.",
    modalDescription: "Burger di manzo con insalata gentile, bacon, salsa fuoco e salsa Harissa nel pane al peperoncino.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["manzo", "piccante"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 16.50 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 },
      { name: "Jalapeno", price: 1.50 },
      { name: "Peperoncino piccante tritato", price: 1.90 },
      { name: "Peperoncino Scorpion Trinidad", price: 1.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639896/Mangiafuoco-no-bg_ofnztw.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1751639896/Mangiafuoco-no-bg_ofnztw.png"
  },

 /*  {
    id: 16, // unique identifier
    name: "MARANELLO",
    ingredients: [
      "Carne di maiale",
      "Rucola",
      "Mortadella",
      "Aceto balsamico",
      "Scaglie di Parmigiano Reggiano",
      "Pane rosso"
    ],
    description: "Un burger che celebra i sapori di Maranello: la carne di maiale succulenta si unisce alla freschezza della rucola, mentre la morbida mortadella aggiunge un tocco di dolcezza. L’aceto balsamico dona una nota agrodolce, completata dalle scaglie di Parmigiano Reggiano che regalano un tocco di sapidità e cremosità. Il tutto è racchiuso in un pane rosso, pronto a portare i sapori di Maranello direttamente nel tuo piatto. Un burger per chi ama i gusti autentici e decisi, con un tocco di eleganza.",
    modalDescription: "Burger di maiale con rucola, mortadella, aceto balsamico e scaglie di Parmigiano Reggiano nel pane rosso.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["maiale"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 14.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1775228467/maranello_yauuip.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1775228467/maranello_yauuip.webp"
  }, */

 /*  {
    id: 17, // unique identifier
    name: "SPACCANAPOLI",
    ingredients: [
      "Carne di maiale",
      "Friarielli",
      "Mozzarella impanata",
      "Ciabattina croccante"
    ],
    description: "Un burger che porta i sapori di Napoli direttamente nel tuo piatto: la carne di maiale succulenta si unisce alla freschezza dei friarielli, mentre la mozzarella impanata aggiunge un tocco di golosità e croccantezza. Il tutto è racchiuso in una ciabattina croccante, pronta a portare i sapori di Spaccanapoli direttamente nel tuo piatto. Un burger per chi ama i gusti autentici e decisi, con un tocco di tradizione partenopea.",
    modalDescription: "Burger di maiale con friarielli, mozzarella impanata e ciabattina croccante.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["maiale"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 15.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1775228468/spaccanapoli_znv13z.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1775228468/spaccanapoli_znv13z.webp"
  }, */

   {
    id: 18, // unique identifier
    name: "COLOR-ON",
    ingredients: [
      "Burger di verdure e avena",
      "Hummus di barbabietola",
      "Bacon di carota",
      "Insalata di cavolo cappuccio",
      "Pane giallo alla curcuma"
    ],
    description: "Un burger che celebra i colori e i sapori della natura: il burger di verdure e avena, ricco di gusto e consistenza, si unisce all’hummus di barbabietola, che dona una dolcezza terrosa e un colore vibrante. Il bacon di carota aggiunge una nota affumicata e croccante, mentre l’insalata di cavolo cappuccio regala freschezza e croccantezza. Il tutto è racchiuso in un pane giallo alla curcuma, pronto a portare i sapori della natura direttamente nel tuo piatto. Un burger per chi ama i gusti autentici e decisi, con un tocco di creatività e colore.",
    modalDescription: "Burger di verdure e avena con hummus di barbabietola, bacon di carota, insalata di cavolo cappuccio e pane giallo alla curcuma.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["vegano"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 12.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1775228468/ColorOn_ednl0e.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1775228468/ColorOn_ednl0e.webp"
  },

   {
    id: 25, // unique identifier
    name: "XI'AN",
    ingredients: [
      "Pane verde",
      "Burger Umami",
      "Kimchi",
      "Cracker di alga",
      "Crumble di cipolla",
      "Salsa agrodolce"
    ],
    description:
      "Un burger che porta i sapori di Xi'an direttamente nel tuo piatto: il pane verde racchiude un succulento burger umami, arricchito dalla piccantezza del kimchi e dalla croccantezza del cracker di alga. Il crumble di cipolla aggiunge una nota dolce e croccante, mentre la salsa agrodolce completa l'esperienza con un equilibrio perfetto tra sapori intensi e contrastanti.",
    modalDescription: "Burger umami con kimchi, cracker di alga, crumble di cipolla e salsa agrodolce nel pane verde.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [
      { weight: 100, price: 14.50 }
    ],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1775228468/XiAn_jwwwpr.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1775228468/XiAn_jwwwpr.webp"
    
  },
  /* {
    id: 26, // unique identifier
    name: "WILD",
    ingredients: [
      "Ciabattina croccante e morbida",
      "Tartare di cervo nostrano",
      "Porcini dei nostri boschi",
      "Ricotta del caseificio Val di Fiemme all'erba cipollina",
      "Lamponi freschi",
      "Scaglie di cioccolato fondente"
    ],
    description:
      "Un panino che unisce eleganza e audacia. La ciabattina croccante e soffice accoglie la tartare di cervo nostrano, esaltata dai porcini dei nostri boschi e dalla ricotta del caseificio Val di Fiemme profumata all’erba cipollina. I lamponi freschi aggiungono una nota acidula e vivace, mentre le scaglie di cioccolato fondente regalano un sorprendente tocco finale per un’esperienza selvaggia e raffinata.",
    modalDescription: "Tartare di cervo con porcini, ricotta alle erbe, lamponi e scaglie di cioccolato in ciabattina croccante.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["cervo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [
      { weight: 100, price: 24.90 }
    ],
    burgerOfTheMonth: true,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1754481682/wild-burger_ixpjwo.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1754481682/wild-burger_ixpjwo.webp",
  }, */
 
  {
    id: 27, // unique identifier
    name: "SEASON BURGER",
    ingredients: [
      "Pane integrale",
      "Petto di pollo impanato",
      "Pomodoro",
      "Mozzarella di bufala",
      "Basilico",
    ],
    description:
      "Un burger che celebra i sapori dell'estate: il pane integrale accoglie un tenero petto di pollo impanato, arricchito dalla freschezza del pomodoro e dalla cremosità della mozzarella di bufala. Il basilico aggiunge un tocco aromatico e profumato, completando un’esperienza gustativa che racconta la bellezza dei prodotti stagionali in un panino unico.",
      modalDescription: "Burger di pollo impanato con pomodoro, mozzarella di bufala e basilico nel pane integrale.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["pollo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [
      { weight: 160, price: 16.50 }
    ],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1752839752/Hero-Season-Burger_hqq1gb.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1752839752/Hero-Season-Burger_hqq1gb.png"

  } ,
  
  /* {
    id: 26, // unique identifier
    name: "SEASON BURGER",
    ingredients: [
      "Pane al carbone",
      "Carne di manzo",
      "Robiola",
      "Asparagi bianchi",
      "Salsa bernese",
      "Uovo al tegamino"
    ],
    description:
      "Un burger che celebra i sapori della primavera: il pane al carbone accoglie una succulenta carne di manzo, arricchita dalla cremosità della robiola e dalla delicatezza degli asparagi bianchi. La salsa bernese aggiunge un tocco di eleganza, mentre l’uovo al tegamino completa il tutto con una nota ricca e avvolgente. Un’esperienza gustativa che racconta la bellezza dei prodotti stagionali in un panino unico.",
      modalDescription: "Burger di manzo con robiola, asparagi bianchi, salsa bernese e uovo al tegamino nel pane al carbone.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [
      { weight: 200, price: 16.50 }
    ],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1775228468/season_new_fazxwy.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1775228468/season_new_fazxwy.webp"

  }  */
  /* {
    id: 13, // unique identifier
    name: "SEASON BURGER",
    ingredients: [
      "Ciabattina croccante",
      "Stinco di maiale sfilacciato",
      "crema ai funghi porcini",
      "Chips di polenta"
    ],
    description:
      "Una ciabattina croccante accoglie un irresistibile cuore di stinco di maiale sfilacciato, tenero e ricco di sapore. La crema ai funghi porcini avvolge ogni morso con note intense e vellutate, mentre le chips di polenta croccante aggiungono un tocco rustico e dorato che completa l’esperienza con un perfetto contrasto di consistenze.",
    modalDescription: "Ciabattina croccante con stinco di maiale sfilacciato, crema ai funghi porcini e chips di polenta croccante.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["maiale"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [
      { weight: 100, price: 16.50 }
    ],
    burgerOfTheMonth: true,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1761858613/SEASON_OTTOBRE_2025_ksgsif.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1761858613/SEASON_OTTOBRE_2025_ksgsif.webp"

  } */
  {
    id: 35, // unique identifier
    name: "MYKONOS",
    ingredients: [
      "Pane 'Non siamo mica SEMI'",
      "Filetto di pollo grigliato",
      "Letto di carciofi con gambo",
      "Yogurt greco",
      "Spolveratina di paprika dolce"
    ],
    description:
      "Un viaggio di sapori mediterranei racchiuso nel pane “Non siamo mica SEMI”, morbido e fragrante. Il filetto di pollo grigliato si posa su un letto di carciofi croccanti con gambo, avvolto dalla freschezza cremosa dello yogurt greco. Il tocco finale? Una spolverata di paprika dolce che regala un leggero brivido di gusto, perfetto per chi ama i sapori autentici e solari.",
    modalDescription: "Burger di pollo grigliato con carciofi, yogurt greco e paprika nel pane ‘Non siamo mica SEMI’.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["pollo","burgHero"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [
      { weight: 100, price: 14.50 }
    ],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1752839752/Hero-Mykonos_jkztgl.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1752839752/Hero-Mykonos_jkztgl.png",
    backgroundImage: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752842535/greek_drcjp3.png",
    burgHeroUrl:"https://res.cloudinary.com/dvr9t29vj/image/upload/v1754308597/mikonos-viaggiatore_ahukp5.webp",
    origin: "1260 Km"
  },
   /* {
    id: 15, // unique identifier
    name: "BANGKOK",
    ingredients: [
      "Petto di pollo marinato su salsa di soia",
      "Zucchine e peperoni al forno",
      "Anacardi tostati e salati",
      "Salsa thai",
      "Pane ai semi di girasole"
    ],
    description:
      "Un’esplosione di profumi e colori dal cuore dell’Asia: il pane ai semi di girasole racchiude un succulento petto di pollo marinato nella salsa di soia, accompagnato da zucchine e peperoni al forno per un tocco fresco e leggermente dolce. Gli anacardi tostati e salati regalano croccantezza e carattere, mentre la salsa thai lega il tutto con un equilibrio perfetto di note piccanti e aromatiche.",
    modalDescription: "Pane ai semi di girasole con pollo marinato alla soia, verdure al forno, anacardi tostati e salsa thai.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["pollo","burgHero","piccante"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [
      { weight: 100, price: 13.50 }
    ],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1761858614/BANGKOK_vikslj.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1761858614/BANGKOK_vikslj.webp",
    backgroundImage: "",
    burgHeroUrl:"https://res.cloudinary.com/dvr9t29vj/image/upload/v1761860539/STORY_BANKOK_pjlsct.webp",
    origin: "1260 Km"
  }, */
 /*  {
    id: 16, // unique identifier
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
      "Un’esplosione di colori e freschezza per chi ama il verde senza perdere il gusto. Il burger di verdure è il cuore di questo panino, accompagnato dalla croccantezza dell’insalata gentile, la dolcezza del pomodoro, la vivacità delle carote e la nota avvolgente della cipolla caramellata. Il tutto abbracciato dal simpaticissimo pane “non siamo mica SEMI”, che dice la verità: qui si mangia serio, anche senza carne. Vegetariano sì, ma con grinta!",
    modalDescription: "Burger di verdure con insalata, pomodoro e cipolla caramellata nel pane ‘Non siamo mica SEMI’.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["vegano"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 10.50 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Formaggio", price: 1.5 },
      { name: "Uovo al tegamino", price: 1.5 },
      { name: "Cheddar cheese sauce", price: 1.50 },
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639893/Ortolano-no-bg_jbrtwj.png", // optional for UI
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1751639893/Ortolano-no-bg_jbrtwj.png"
  } *//* ,
  {
    id: 17, // unique identifier
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
      "Un morso e senti crunch — il segnale che sei nel posto giusto. Il protagonista è un burger di frumento panato, dorato e irresistibile, esaltato da un tocco di paprika leggermente piccante. A completare l’opera: insalata gentile, pomodori semicerchi sott’olio, e l’inaspettata sorpresa del bacon di barbabietola, che stupisce per sapore e texture. La maionese vegana aggiunge cremosità, mentre il pane casereccio chiude il cerchio con la sua anima rustica. Vegetale, sì. Ma con carattere da vero rockstar.",
    modalDescription: "Burger di frumento panato con bacon di barbabietola, pomodori sott'olio e maionese vegana nel pane casereccio.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["vegano", "piccante"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 9.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Salsa al formaggio cheddar", price: 1.5 },
      { name: "Uovo al tegamino", price: 1.5 },
      { name: "Cipolle caramellate", price: 1.50 },
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639882/Crunch-no-bg_ge9zzl.png", // optional for UI
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1751639882/Crunch-no-bg_ge9zzl.png"
  } */
  {
    id: 36, // unique identifier
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
      "Burger di patata viola, asparagi rustici, patè di olive nere e pomodoro al forno Hero Made, avvolti da zucchine grigliate e una ciabattina croccante e morbida. Intensa, raffinata, indimenticabile.",
    modalDescription: "Burger di patata viola con asparagi, patè di olive nere e pomodoro al forno nella ciabattina croccante.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["vegano"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 150, price: 13.50 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639893/Donna-Nera-no-bg_j8ktfd.png", // optional for UI
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1751639893/Donna-Nera-no-bg_j8ktfd.png"
  },
  /* {
    id: 19, // unique identifier
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
      "Il protagonista è il succoso burger vegetale Beyond Meat, accompagnato dalla cremosità dell’hummus di ceci, le gocce di peperoni dolci e i pomodorini datterini gialli sott’olio per un’esplosione di gusto e colore. Il tutto bilanciato dall’amaro elegante del radicchio rosso e racchiuso in un pane verde come la natura. Un panino che parla chiaro: sostenibile, sorprendente, super buono.",
    modalDescription: "Burger vegetale Beyond Meat con hummus, peperoni dolci e pomodorini gialli nel pane verde naturale.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["vegano"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 115, price: 12.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 },
      { name: "Cipolle caramellate", price: 1.50 },
      { name: "Cheddar cheese sauce", price: 1.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1751639890/Green-Burger-no-bg_iiaewd.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1751639890/Green-Burger-no-bg_iiaewd.png"
  }, */
 /*  {
    id: 20, // unique identifier
    name: "QUEBEC",
    ingredients: [
      "Pane nero",
      "Salmone affumicato marinato nello sciroppo d’acero",
      "Salvia fritta",
      "Panna acida con pepe al limone",
      "Insalata di cavolo cappuccio"
    ],
    description:
      "Un tuffo nei sapori del mare e della natura, racchiuso in un pane nero avvolgente. Il salmone affumicato, marinato nello sciroppo d’acero, si scioglie al morso, accompagnato dalla croccantezza dell’insalata di cavolo cappuccio. La panna acida con pepe al limone regala una nota fresca e vivace, mentre la salvia fritta aggiunge un tocco aromatico che completa questo burger unico e raffinato.",
    modalDescription: "Burger con salmone affumicato marinato nello sciroppo d’acero, panna acida e insalata di cavolo nel pane nero.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini", "pesce"], // list allergens for allergy info
    categories: ["pesce"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 14.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1768160498/quebec_burger_baxwcj.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1768160498/quebec_burger_baxwcj.webp",
    backgroundImage: "",
    burgHeroUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1761860801/STORY_QUEBEC_fpr6ze.webp"
  }, */
  {
    id: 37, // unique identifier
    name: "IL KRAKEN",
    ingredients: [
      "Ciabattina croccante e morbida",
      "Tentacolo di polpo cotto a bassa temperatura",
      "Insalatina di pomodorini e sedano",
      "Stracciatella di burrata pugliese",
      "Pesto di basilico senz'aglio"
    ],
    description:
      "Un tuffo nei sapori del mare e della natura, racchiuso in una ciabattina croccante e soffice. Il tentacolo di polpo, cotto lentamente a bassa temperatura, si scioglie al morso, accompagnato da un’insalatina fresca di pomodorini e sedano. La cremosa stracciatella di burrata pugliese avvolge il tutto, mentre il pesto di basilico, delicato e senza aglio, regala una ventata di freschezza.",
    modalDescription: "Burger con tentacolo di polpo cotto a bassa temperatura, burrata e pesto di basilico nella ciabattina croccante.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["pesce"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 115, price: 18.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1752839749/IL-KRAKEN_1_r2hmcp.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1752839749/IL-KRAKEN_1_r2hmcp.png",
    backgroundImage: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752843013/kraken_oloocf.png"
  },
  {
    id: 38, // unique identifier
    name: "AVISIO",
    ingredients: [
      "Pane ai 7 cereali",
      "Tartare di Biotrota delle Dolomiti",
      "Condimento con sale, olio e scorza di lime",
      "Finocchio fresco",
      "Salsa yogurt con mandorle croccanti",
      "Pomodoro datterino giallo sott'olio"
    ],
    description:
      "Come le acque limpide del torrente che gli dà il nome, questo burger scorre leggero e fresco. Il pane ai 7 cereali avvolge una pregiata tartare di Biotrota delle Dolomiti, insaporita con sale, olio e un tocco di scorza di lime. Il finocchio fresco e la salsa yogurt con mandorle croccanti aggiungono freschezza e croccantezza, mentre il pomodoro datterino giallo sott’olio regala un’esplosione di dolcezza mediterranea. Un equilibrio puro che celebra la natura e il territorio.",
    modalDescription: "Burger con tartare di Biotrota delle Dolomiti, finocchio fresco e salsa yogurt alle mandorle nel pane ai 7 cereali.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["pesce"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 14.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1752839752/Hero-lAvisio_a65ups.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1752839752/Hero-lAvisio_a65ups.png",
    origin: "Km 0"

  },
  {
    id: 39, // unique identifier
    name: "CAPO NORD",
    ingredients: [
      "Pane nero come il carbone",
      "Salmone affumicato sfilacciato",
      "Insalata gentile",
      "Robiola fresca",
      "Pomodori soleggiati",
      "Spolverata di origano"
    ],
    description:
      "Un viaggio ai confini del gusto, racchiuso in un pane nero come carbone. Il salmone affumicato sfilacciato incontra la delicatezza dell’insalata gentile e la morbidezza della robiola fresca. I pomodori soleggiati donano un tocco di dolcezza mediterranea, mentre una leggera spolverata di origano completa questo burger dal carattere deciso e raffinato.",
    
    modalDescription: "Burger con salmone affumicato, robiola fresca e pomodori soleggiati nel pane nero.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["pesce","burgHero"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 120, price: 14.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1752839753/CAPO-NORD_1_zcgapt.png",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752839753/CAPO-NORD_1_zcgapt.png",
    backgroundImage: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752843271/north_cape_tgrhhm.png",
    burgHeroUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1754299227/capo-nord-viaggiatore_pwaey5.webp"
  }
  /* ,
  {
    id: 40, // unique identifier
    name: "PARDACIAN",
    ingredients: [
      "Pane al pepe nero",
      "Carne di bovino",
      "Puzzone di Moena",
      "Crauti",
      "Mela",
      "Speck cotto",
      "Salsa di senape e miele"
    ],
    description:
      "Un burger che racconta la tradizione Predazzana con un tocco di modernità: il pane al pepe nero avvolge una succulenta carne di bovino, arricchita dal sapore intenso del Puzzone di Moena. I crauti e la mela aggiungono freschezza e dolcezza, mentre lo speck cotto regala una nota affumicata. La salsa di senape e miele completa il tutto con un equilibrio perfetto tra piccantezza e dolcezza.",
    
    modalDescription: "Burger di bovino con Puzzone di Moena, crauti, mela e speck nel pane al pepe nero.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 200, price: 16.50 }],
    burgerOfTheMonth: true,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1781773829/pardacian_1_smkfnv.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1781773829/pardacian_1_smkfnv.webp",

  } */
  /* ,
  {
    id: 23, // unique identifier
    name: "LONDON",
    ingredients: [
      "Pane ai 7 cereali",
      "Crema di piselli home-made",
      "Nuggets di merluzzo",
      "Pops di patate impanate",
    ],
    description:
      "Un viaggio di sapori tra tradizione e modernità: il pane ai 7 cereali, ricco e fragrante, racchiude una delicata crema di piselli home-made che esalta la freschezza dei nuggets di merluzzo dorati. A completare il tutto, i pops di patate impanate, croccanti e golosi, aggiungono la giusta dose di comfort food in perfetto stile britannico.",
    
    modalDescription: "Pane ai 7 cereali con crema di piselli home-made, nuggets di merluzzo dorati e croccanti pops di patate impanate.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["pesce","burgHero"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 120, price: 14.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1761858613/LONDON_iscceg.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1761858613/LONDON_iscceg.webp",
    backgroundImage: "",
    burgHeroUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1761859802/London-viaggiatore_u1rkdl.webp"
  } *//* ,
   {
    id: 24, // unique identifier
    name: "MONACO",
    ingredients: [
      "Pane Hero",
      "Salsa Ranch",
      "Insalata gentile",
      "Bacon croccante",
      "Petto di pollo panato",
      "Patate lesse",
      "Uovo all'occhio di bue"
    ],
    description:
      "Un panino ricco e deciso, perfetto per chi ama i sapori autentici: il pane Hero accoglie un gustoso petto di pollo panato, croccante fuori e morbido dentro, accompagnato da bacon croccante, uovo all’occhio di bue e patate lesse per un tocco sostanzioso. La salsa Ranch e l’insalata gentile completano il tutto con freschezza e cremosità, per un equilibrio perfetto tra comfort e carattere bavarese.",
    
    modalDescription: "Pane Hero con pollo panato, bacon croccante, uovo all’occhio di bue, patate lesse, insalata gentile e salsa Ranch.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "uovo", "latte"], // list allergens for allergy info
    categories: ["pollo","burgHero"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 120, price: 14.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 },
      { name: "Cipolle caramellate", price: 1.50 },
      { name: "Doppio bacon", price: 2.00 },
      { name: "Salsa Cheddar Cheese", price: 1.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1761858613/MONACO_atiego.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1761858613/MONACO_atiego.webp",
    backgroundImage: "",
    burgHeroUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1761860804/STORY_MONACO_xoxgfp.webp"
  } *//* ,
  {
    id: 32, // unique identifier
    name: "RUSTICO",
    ingredients: [
      "Carne di Angus 200g",
      "Insalata gentile",
      "Lardo",
      "Senape dolce bavarese",
      "Noci tritate",
      "Pane bretzel"
    ],
    description:
      "Un panino dal carattere forte e autentico: il pane bretzel racchiude un succulento burger di Angus da 200g, avvolto dalla cremosità del lardo e dal tocco aromatico della senape dolce bavarese. L’insalata gentile dona freschezza, mentre le noci tritate aggiungono una nota croccante e raffinata che esalta ogni morso. Un equilibrio perfetto tra sapori decisi e genuinità montana.",
    
    modalDescription: "Pane bretzel con burger di Angus, lardo, senape dolce bavarese, insalata gentile e noci tritate.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 200, price: 13.90 }],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1761858613/RUSTICO_escuqt.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1761858613/RUSTICO_escuqt.webp"
  }, */
  /* {
    id: 26, // unique identifier
    name: "SOLEGGIATO",
    ingredients: [
      "Pane Hero",
      "160g di puro manzo",
      "Insalata gentile",
      "Pancetta arrotolata",
      "Scamorza affumicata",
      "Pomodori soleggiati"
    ],
    description:
      "Un panino dal gusto intenso e mediterraneo: il pane Hero racchiude 160g di puro manzo grigliato alla perfezione, arricchito da scamorza affumicata e pancetta arrotolata croccante per un contrasto irresistibile. L’insalata gentile aggiunge leggerezza, mentre i pomodori soleggiati sprigionano tutto il calore e la dolcezza del sole italiano. Un’esplosione di sapori equilibrati e appaganti.",
    
    modalDescription: "Pane Hero con manzo grigliato, scamorza affumicata, pancetta arrotolata, pomodori soleggiati e insalata gentile.",
      side: "Accompagnato da patatine non fritte",
    allergens: ["glutine", "latticini"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 100, price: 12.90 },
      { weight: 160, price: 13.90 },
      { weight: 220, price: 14.90 }
    ],
    burgerOfTheMonth: false,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 }
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1761858613/SOLEGGIATO_OTTOBRE_2025_zmsuvo.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1761858613/SOLEGGIATO_OTTOBRE_2025_zmsuvo.webp"
  }, */
  
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
    priceOptions: [{ weight: 0.20, price: 2.90 }, { weight: 0.40, price: 5.50 }],
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
    priceOptions: [{ weight: 0.25, price: 3.50 }, { weight: 0.50, price: 6.00 }],
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
    priceOptions: [{ weight: 0.20, price: 2.90 }, { weight: 0.40, price: 5.50 }],
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
    priceOptions: [{ weight: 0.20, price: 2.90 }, { weight: 0.40, price: 5.50 }],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752652306/rye-river-small_soky7d.png",
    imageLargeUrl: "",
    backgroundImage: ""
  },
  {
    id: 5, // unique identifier
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
    priceOptions: [{ weight: 0.30, price: 3.50 }, { weight: 0.20, price: 6 }],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/v1752652306/warsteiner-small_tmbezy.png",
    imageLargeUrl: "",
    backgroundImage: ""
  }
]

export const cammBeer = {
	title: "CAMM - LA REGINA DELLE BIRRE!",
	subtitle: " PRODOTTA IN ESCLUSIVA PER HERO. Non pastorizzata,  a bassa fermentazione beverina e con una nota pepata",
	description: "CAMM è una birra artigianale nata dalla collaborazione tra Mauro, Anna, Chantal e il birrificio di Fiemme, con il Mastro Birraio Michele Gilmozzi. Dopo mesi di sperimentazioni, hanno creato una Helles non pastorizzata, senza conservanti, maturata per 40 giorni. Il suo gusto equilibrato e amarognolo è arricchito dal pepe di Sichuan, che le dona un aroma originale. CAMM rappresenta la passione, l’amicizia e l’innovazione dei quattro amici, offrendo un’esperienza unica ad ogni sorso.",

  priceOptions: [
    {weight: 200, price: 2.90},
    {weight: 400, price: 5.50}
  ] as WeightOption[]
}
