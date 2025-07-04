export interface Burger {
  id: number;
  name: string;
  ingredients: string[];
  description: string;
  side: string;
  allergens: string[];
  categories: string[];
  priceOptions: WeightOption[]; // replaces single price
  extras?: ExtraOption[];
  image?: string;
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
    name: "ANGUS di ABERDEEN",
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
    image: "/images/classic-beef-burger.png", // optional for UI
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
    image: "/images/classic-beef-burger.png", // optional for UI
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
    image: "/images/classic-beef-burger.png", // optional for UI
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
    extras: [{ name: "Cipolle caramellate", price: 1.5 }],
    image: "/images/classic-beef-burger.png", // optional for UI
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
    image: "/images/classic-beef-burger.png", // optional for UI
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
    extras: [
      { name: "Cipolle caramellate", price: 1.5 },
      { name: "Uovo al tegamino", price: 1.5 },
    ],
    image: "/images/classic-beef-burger.png", // optional for UI
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
    image: "/images/classic-beef-burger.png", // optional for UI
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
    extras: [
      { name: "Formaggio", price: 1.5 },
      { name: "Uovo al tegamino", price: 1.5 },
    ],
    image: "/images/classic-beef-burger.png", // optional for UI
  },
  {
    id: 8, // unique identifier
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
    extras: [
      { name: "Salsa al formaggio cheddar", price: 1.5 },
      { name: "Uovo al tegamino", price: 1.5 },
    ],
    image: "/images/classic-beef-burger.png", // optional for UI
  },
  {
    id: 9, // unique identifier
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
    image: "/images/classic-beef-burger.png", // optional for UI
  },
  {
    id: 9, // unique identifier
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
    image: "/images/classic-beef-burger.png", // optional for UI
  },
];
