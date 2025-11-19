export interface Cuisine {
  id: string;
  name: string;
  region: string;
  imageUrl: string;
  shortDescription: string;
  description: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  totalTimeMinutes: number;
  servings: number;
  ingredients: string[];
  steps: string[];
  difficulty: "Easy" | "Medium" | "Hard";
}

export const cuisines: Cuisine[] = [
  {
    id: "tuscan-pasta",
    name: "Tuscan Truffle Pasta",
    region: "Italy",
    imageUrl:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Silky tagliatelle with mushrooms, cream, and black truffle.",
    description:
      "A comforting Tuscan-inspired pasta featuring earthy mushrooms, garlic, and a whisper of black truffle. The sauce is luxuriously creamy without overpowering the fresh herbs and parmesan.",
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    totalTimeMinutes: 40,
    servings: 4,
    ingredients: [
      "12 oz tagliatelle pasta",
      "2 tbsp olive oil",
      "3 cloves garlic, thinly sliced",
      "10 oz cremini mushrooms, sliced",
      "1/2 cup dry white wine",
      "1 cup heavy cream",
      "1/2 cup freshly grated parmesan",
      "1 tsp black truffle oil",
      "1 tbsp chopped parsley",
      "Salt and black pepper"
    ],
    steps: [
      "Cook pasta in salted boiling water until al dente; reserve 1/2 cup pasta water.",
      "Sauté garlic in olive oil until fragrant, then add mushrooms and cook until browned.",
      "Deglaze with white wine and reduce by half.",
      "Pour in cream, simmer gently, then fold in parmesan until melted.",
      "Add truffle oil, parsley, and cooked pasta. Loosen with reserved pasta water as needed.",
      "Season to taste and serve immediately with extra parmesan."
    ],
    difficulty: "Medium"
  },
  {
    id: "street-tacos",
    name: "Charred Lime Street Tacos",
    region: "Mexico",
    imageUrl:
      "https://images.unsplash.com/photo-1608039829576-23c1f5b00c4e?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Smoky grilled chicken with salsa verde and pickled onions.",
    description:
      "Inspired by Mexico City's taquerias, these tacos layer citrus-marinated chicken, charred on a hot griddle, with tangy salsa verde and quick-pickled red onions for brightness.",
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    totalTimeMinutes: 35,
    servings: 4,
    ingredients: [
      "1.5 lb boneless chicken thighs",
      "2 limes, juiced",
      "2 cloves garlic, minced",
      "1 tsp ground cumin",
      "1 tsp smoked paprika",
      "Corn tortillas",
      "1/2 cup salsa verde",
      "1/2 red onion, thinly sliced",
      "1/4 cup apple cider vinegar",
      "Fresh cilantro, chopped",
      "Salt and pepper"
    ],
    steps: [
      "Marinate chicken with lime juice, garlic, cumin, paprika, salt, and pepper for at least 15 minutes.",
      "Quick-pickle onions by tossing with vinegar and a pinch of salt; set aside.",
      "Grill or sear chicken over high heat until lightly charred and cooked through.",
      "Rest chicken for 5 minutes, then chop into bite-size pieces.",
      "Warm tortillas, fill with chicken, spoon salsa verde, and top with pickled onions and cilantro."
    ],
    difficulty: "Easy"
  },
  {
    id: "miso-ramen",
    name: "Hokkaido Miso Ramen",
    region: "Japan",
    imageUrl:
      "https://images.unsplash.com/photo-1612874472278-5c1f9c9e8f58?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Umami-rich broth with miso tare, corn, butter, and chashu.",
    description:
      "A northern Japanese classic. Deeply savory chicken-and-dashi broth meets roasted miso tare, topped with chewy noodles, sweet corn, and a pat of butter for richness.",
    prepTimeMinutes: 25,
    cookTimeMinutes: 45,
    totalTimeMinutes: 70,
    servings: 3,
    ingredients: [
      "4 cups chicken broth",
      "2 cups dashi stock",
      "3 tbsp red miso",
      "2 tbsp white miso",
      "2 tbsp sesame oil",
      "2 cloves garlic, minced",
      "1 tbsp ginger, minced",
      "2 tbsp mirin",
      "1 tbsp soy sauce",
      "3 servings fresh ramen noodles",
      "1 cup sweet corn",
      "3 tbsp butter",
      "Chashu or roasted pork slices",
      "Soft-boiled eggs, scallions, nori"
    ],
    steps: [
      "Sauté garlic and ginger in sesame oil until aromatic.",
      "Stir in miso pastes and cook briefly to deepen flavor.",
      "Whisk in chicken broth, dashi, mirin, and soy sauce; simmer 30 minutes.",
      "Cook ramen noodles separately until just tender.",
      "Assemble bowls with noodles, ladle over hot broth, and top with corn, butter, pork, egg, scallions, and nori."
    ],
    difficulty: "Hard"
  },
  {
    id: "butter-chicken",
    name: "Delhi Butter Chicken",
    region: "India",
    imageUrl:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Creamy tomato gravy with aromatic spices and tender chicken.",
    description:
      "A North Indian favorite with marinated chicken cooked in a buttery tomato sauce scented with fenugreek and garam masala. Serve with naan or basmati rice.",
    prepTimeMinutes: 30,
    cookTimeMinutes: 35,
    totalTimeMinutes: 65,
    servings: 6,
    ingredients: [
      "2 lb boneless chicken thighs",
      "1 cup plain yogurt",
      "2 tbsp lemon juice",
      "2 tsp garam masala",
      "1 tsp turmeric",
      "2 tsp ground cumin",
      "3 tbsp butter",
      "1 large onion, finely chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, minced",
      "1 tsp chili powder",
      "1.5 cups tomato purée",
      "1 cup heavy cream",
      "1 tsp dried fenugreek leaves",
      "Salt to taste",
      "Fresh cilantro for garnish"
    ],
    steps: [
      "Marinate chicken with yogurt, lemon juice, turmeric, half the cumin, and 1 tsp garam masala for at least 20 minutes.",
      "Sear chicken in a hot pan until lightly browned; set aside.",
      "In the same pan, cook onions in butter until golden, then add garlic, ginger, and remaining spices.",
      "Add tomato purée and simmer 10 minutes.",
      "Stir in cream, fenugreek, and return chicken to the pan; simmer until cooked through and sauce is silky.",
      "Adjust seasoning and garnish with cilantro."
    ],
    difficulty: "Medium"
  },
  {
    id: "marrakesh-tagine",
    name: "Marrakesh Apricot Tagine",
    region: "Morocco",
    imageUrl:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Slow-braised lamb with apricots, almonds, and warm spices.",
    description:
      "A Moroccan tagine combining tender lamb, sweet dried apricots, toasted almonds, and a blend of cinnamon, ginger, and saffron. Perfect with fluffy couscous.",
    prepTimeMinutes: 25,
    cookTimeMinutes: 90,
    totalTimeMinutes: 115,
    servings: 5,
    ingredients: [
      "2 lb lamb shoulder, cubed",
      "2 tbsp olive oil",
      "1 large onion, diced",
      "3 garlic cloves, minced",
      "1 tsp ground cinnamon",
      "1 tsp ground ginger",
      "1/2 tsp saffron threads",
      "1 tsp ground coriander",
      "1 cup chicken broth",
      "1 cup water",
      "1 cup dried apricots",
      "1/3 cup toasted almonds",
      "Fresh cilantro and mint",
      "Salt and pepper"
    ],
    steps: [
      "Brown lamb in olive oil until well seared; remove and set aside.",
      "Sauté onions and garlic until translucent, then add spices and toast briefly.",
      "Return lamb to the pot, pour in broth and water, and bring to a gentle simmer.",
      "Cover and cook over low heat for about 70 minutes until tender.",
      "Stir in apricots and cook 15 minutes more until sauce thickens.",
      "Finish with toasted almonds and fresh herbs before serving."
    ],
    difficulty: "Hard"
  },
  {
    id: "aegean-salad",
    name: "Aegean Village Salad",
    region: "Greece",
    imageUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Bright cucumbers, tomatoes, olives, feta, and oregano vinaigrette.",
    description:
      "A refreshing Greek horiatiki-inspired salad loaded with crunchy vegetables and briny feta. The oregano-lemon dressing keeps it vivid and tangy.",
    prepTimeMinutes: 15,
    cookTimeMinutes: 0,
    totalTimeMinutes: 15,
    servings: 4,
    ingredients: [
      "2 cups cherry tomatoes, halved",
      "1 large cucumber, chopped",
      "1/2 red onion, thinly sliced",
      "1/2 cup Kalamata olives",
      "6 oz feta cheese, cubed",
      "1 green bell pepper, sliced",
      "2 tbsp red wine vinegar",
      "2 tbsp lemon juice",
      "1/3 cup extra-virgin olive oil",
      "1 tsp dried oregano",
      "Salt and black pepper"
    ],
    steps: [
      "Combine tomatoes, cucumber, onion, olives, pepper, and feta in a large bowl.",
      "Whisk vinegar, lemon juice, olive oil, oregano, salt, and pepper to make the dressing.",
      "Toss salad with dressing just before serving for maximum crunch."
    ],
    difficulty: "Easy"
  }
];
