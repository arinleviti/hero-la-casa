import { Burger } from "./menuItems"

export const olympicBurgers: Burger[] = [
  {
    id: 1, // unique identifier
    name: "AFRICA",
    ingredients: [
      "Pane nero",
      "Verdure wok speziate con coriandolo",
      "Carne di manzo",
      "Salsa harissa",
      "Platano croccante"
    ],
    description:
      "Un viaggio esotico in ogni morso: il pane nero racchiude succulenta carne di manzo, arricchita da verdure wok speziate con coriandolo fresco. La salsa harissa dona un tocco piccante e avvolgente, mentre il platano croccante aggiunge una nota dolce e croccante che completa l’esperienza con un perfetto equilibrio di sapori intensi e consistenze sorprendenti.",
      modalDescription:"Burger di manzo con verdure speziate, salsa harissa e platano croccante nel pane nero.",
    side: "Accompagnato da patatine non fritte",
    allergens: ["glutine"], // list allergens for allergy info
    categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
    priceOptions: [{ weight: 160, price: 16.90 }],
    burgerOfTheMonth: false,
    olympian: true,
    extras: [
      { name: "Bacon nelle patate", price: 1.50 },
      { name: "Cheddar nelle patate", price: 1.50 },
      { name: "Cheddar + Bacon nelle patate", price: 2.50 },
      { name: "Cipolle caramellate", price: 1.50 },
    ],
    imageSmallUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/c_fill,g_auto,w_250,q_auto,f_auto/v1769631912/Africa_xzmvny.webp",
    imageLargeUrl: "https://res.cloudinary.com/dvr9t29vj/image/upload/w_800,q_auto,f_auto/v1769631912/Africa_xzmvny.webp",
    backgroundImage: "",
  },
   {
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
  },  {
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
  },
   {
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
  },  {
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
  }]