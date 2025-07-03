interface Burger {
  id: number;
  name: string;
  ingredients: string[];
  description: string;
  allergens: string[];
  categories: string[];
  price: number;
  image?: string;
}

const burgers: Burger[] = [
  {
    id: 1, // unique identifier
    name: "ANGUS di ABERDEEN",
    ingredients: [
      "hamburger",
      "Lettuga",
    "Pomodoro",
    "Bacon",
    "Insalata gentile",
    "Formaggio Cheddar",
    "Pane HERO"
  ],
  description: "Pane HERO, 200 g di carne proveniente da Aberdeen, territorio incontaminato del nord della Scozia",
  allergens: ["glutine", "latticini"], // list allergens for allergy info
  categories: ["manzo"], // e.g., vegan, vegetarian, fish, beef, spicy...
  price: 13.99, // price in your currency (number)
  image: "/images/classic-beef-burger.png" // optional for UI
},
]