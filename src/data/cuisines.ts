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
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1528697203043-733dafdaa316?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
      "https://images.pexels.com/photos/208537/pexels-photo-208537.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
  },
  {
    id: "pad-thai",
    name: "Bangkok Street Pad Thai",
    region: "Thailand",
    imageUrl:
      "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDescription: "Tamarind-kissed noodles with shrimp, tofu, and crunchy peanuts.",
    description:
      "A staple of Bangkok night markets. Rice noodles are tossed with a tangy tamarind sauce, shrimp, tofu, bean sprouts, and crushed peanuts for sweet-sour balance.",
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    totalTimeMinutes: 35,
    servings: 4,
    ingredients: [
      "10 oz dried rice noodles",
      "8 oz shrimp, peeled",
      "4 oz firm tofu, cubed",
      "2 eggs, lightly beaten",
      "1 cup bean sprouts",
      "3 tbsp tamarind paste",
      "3 tbsp fish sauce",
      "2 tbsp palm sugar or brown sugar",
      "2 cloves garlic, minced",
      "3 green onions, sliced",
      "1/3 cup roasted peanuts, crushed",
      "Lime wedges",
      "Chili flakes and oil",
      "2 tbsp neutral oil"
    ],
    steps: [
      "Soak rice noodles in hot water until pliable; drain.",
      "Whisk tamarind, fish sauce, and sugar to make the sauce.",
      "Stir-fry tofu and shrimp in oil until just cooked; set aside.",
      "Add garlic, noodles, and sauce to the pan; toss until glossy.",
      "Push noodles aside, scramble eggs, then mix in.",
      "Fold in bean sprouts and green onions. Serve with peanuts, lime, and chili."
    ],
    difficulty: "Medium"
  },
  {
    id: "shakshuka",
    name: "Spiced Tomato Shakshuka",
    region: "Middle East",
    imageUrl:
      "https://images.pexels.com/photos/4551908/pexels-photo-4551908.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDescription: "Poached eggs in a smoky tomato-pepper sauce.",
    description:
      "A brunch hero of the Levant. Bell peppers and tomatoes simmer with cumin and smoked paprika, then eggs are gently poached in the sauce and finished with herbs.",
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    totalTimeMinutes: 40,
    servings: 4,
    ingredients: [
      "1 tbsp olive oil",
      "1 onion, diced",
      "1 red bell pepper, diced",
      "3 cloves garlic, minced",
      "1 tsp ground cumin",
      "1 tsp smoked paprika",
      "1/4 tsp chili flakes",
      "1 can (28 oz) crushed tomatoes",
      "4–6 eggs",
      "1/4 cup crumbled feta",
      "Fresh parsley or cilantro",
      "Salt and pepper"
    ],
    steps: [
      "Sauté onion and bell pepper in olive oil until softened.",
      "Stir in garlic and spices; cook until fragrant.",
      "Pour in crushed tomatoes, season, and simmer 10–12 minutes to thicken.",
      "Create wells and crack eggs into the sauce; cover and cook until whites set.",
      "Finish with feta and herbs. Serve with crusty bread."
    ],
    difficulty: "Easy"
  },
  {
    id: "poutine",
    name: "Montreal Bistro Poutine",
    region: "Canada",
    imageUrl:
      "https://images.pexels.com/photos/6605650/pexels-photo-6605650.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDescription: "Crisp fries topped with cheese curds and rich gravy.",
    description:
      "Classic Quebec comfort food. Golden fries are loaded with squeaky cheese curds and blanketed in a savory brown gravy.",
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    totalTimeMinutes: 50,
    servings: 4,
    ingredients: [
      "2 lb russet potatoes, cut into fries",
      "2 tbsp cornstarch",
      "Vegetable oil for frying",
      "1 cup cheese curds",
      "3 tbsp butter",
      "3 tbsp flour",
      "2 cups beef or chicken stock",
      "1 tsp Worcestershire sauce",
      "Salt and pepper"
    ],
    steps: [
      "Soak cut fries in cold water, dry, then toss with cornstarch.",
      "Fry potatoes at 325°F until tender; drain. Fry again at 375°F until crisp.",
      "Make gravy by whisking butter and flour over medium heat until golden.",
      "Slowly pour in stock, add Worcestershire, and simmer until thick; season.",
      "Layer hot fries with cheese curds and ladle over hot gravy."
    ],
    difficulty: "Medium"
  },
  {
    id: "bibimbap",
    name: "Seoul Stone Pot Bibimbap",
    region: "Korea",
    imageUrl:
      "https://images.pexels.com/photos/979702/pexels-photo-979702.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDescription: "Crispy rice bowl with beef, vegetables, and gochujang.",
    description:
      "A vibrant Korean rice bowl served sizzling hot. Marinated beef, seasoned veggies, fried egg, and tangy gochujang unite over crispy-bottomed rice.",
    prepTimeMinutes: 25,
    cookTimeMinutes: 25,
    totalTimeMinutes: 50,
    servings: 4,
    ingredients: [
      "2 cups cooked short-grain rice",
      "8 oz beef sirloin, thinly sliced",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "2 tsp sugar",
      "1 carrot, julienned",
      "1 zucchini, julienned",
      "1 cup spinach",
      "1 cup bean sprouts",
      "4 eggs",
      "4 tbsp gochujang",
      "2 cloves garlic, minced",
      "Sesame seeds and sliced scallions"
    ],
    steps: [
      "Marinate beef with soy sauce, sesame oil, sugar, and garlic.",
      "Sauté vegetables separately with a pinch of salt; set aside.",
      "Sear beef quickly over high heat.",
      "Heat stone pots or heavy pans with a bit of oil, add rice to crisp the bottom.",
      "Arrange beef, veggies, and a fried egg over rice. Serve with gochujang."
    ],
    difficulty: "Medium"
  },
  {
    id: "peruvian-ceviche",
    name: "Lime-Cured Peruvian Ceviche",
    region: "Peru",
    imageUrl:
      "https://images.pexels.com/photos/8470151/pexels-photo-8470151.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDescription: "Citrus-cured white fish with red onion, chili, and cilantro.",
    description:
      "Fresh, bright, and zesty. Firm white fish marinates briefly in lime juice with ají chili, red onion, and cilantro—served chilled with sweet potato or corn.",
    prepTimeMinutes: 25,
    cookTimeMinutes: 0,
    totalTimeMinutes: 25,
    servings: 4,
    ingredients: [
      "1 lb firm white fish (sea bass or tilapia), diced",
      "8–10 limes, juiced",
      "1 small red onion, thinly sliced",
      "1 ají amarillo or mild chili, sliced",
      "1/2 cup chopped cilantro",
      "Salt and black pepper",
      "Sweet potato slices and corn kernels for serving"
    ],
    steps: [
      "Chill diced fish, then toss with lime juice, salt, and pepper.",
      "Add red onion and chili; marinate 10–15 minutes until fish turns opaque.",
      "Fold in cilantro and serve immediately with sweet potato and corn."
    ],
    difficulty: "Easy"
  },
  {
    id: "valencia-paella",
    name: "Valencia Saffron Paella",
    region: "Spain",
    imageUrl:
      "https://images.pexels.com/photos/66636/pexels-photo-66636.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDescription: "Smoky saffron rice with chicken, chorizo, and mussels.",
    description:
      "Traditional Spanish paella with saffron-tinted rice, seared chicken, chorizo, peas, and mussels. Cooked in a wide pan to create the prized socarrat crust.",
    prepTimeMinutes: 25,
    cookTimeMinutes: 40,
    totalTimeMinutes: 65,
    servings: 6,
    ingredients: [
      "1 lb chicken thighs, chopped",
      "6 oz chorizo, sliced",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 red bell pepper, sliced",
      "2 cups bomba or short-grain rice",
      "1/2 tsp saffron threads",
      "4 cups chicken stock",
      "1 cup peas",
      "12 mussels, cleaned",
      "1 tsp smoked paprika",
      "Olive oil, salt, and pepper",
      "Lemon wedges"
    ],
    steps: [
      "Bloom saffron in warm stock.",
      "Sear chicken and chorizo in olive oil; set aside.",
      "Sauté onion, garlic, and bell pepper; stir in rice and paprika.",
      "Pour in saffron stock, chicken, and chorizo; simmer without stirring.",
      "Add peas and nestle mussels on top; cook until shells open and rice is tender.",
      "Rest off heat 5 minutes, then garnish with lemon."
    ],
    difficulty: "Hard"
  },
  {
    id: "jerk-chicken",
    name: "Island Jerk Chicken",
    region: "Jamaica",
    imageUrl:
      "https://images.pexels.com/photos/703423/pexels-photo-703423.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDescription: "Spicy-sweet grilled chicken with allspice and Scotch bonnet.",
    description:
      "Marinated in a fiery blend of allspice, thyme, ginger, and Scotch bonnet, this jerk chicken grills to smoky perfection with caramelized edges.",
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    totalTimeMinutes: 55,
    servings: 4,
    ingredients: [
      "2 lb bone-in chicken pieces",
      "2 Scotch bonnet peppers, seeded",
      "4 green onions",
      "3 cloves garlic",
      "1 tbsp fresh ginger",
      "1 tbsp allspice berries or ground",
      "1 tsp dried thyme",
      "2 tbsp brown sugar",
      "2 tbsp soy sauce",
      "1 lime, juiced",
      "2 tbsp vegetable oil",
      "Salt and pepper"
    ],
    steps: [
      "Blend peppers, onions, garlic, ginger, allspice, thyme, sugar, soy, lime, and oil into a paste.",
      "Rub marinade over chicken; refrigerate at least 2 hours.",
      "Grill over medium heat, turning, until charred and cooked through.",
      "Rest 5 minutes before serving."
    ],
    difficulty: "Medium"
  },
  {
    id: "banh-mi",
    name: "Saigon Veggie Bánh Mì",
    region: "Vietnam",
    imageUrl:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDescription: "Crispy baguette with pickled veggies, tofu, and herbs.",
    description:
      "A plant-forward take on the Vietnamese classic: crusty baguette layered with seared tofu, pickled carrots and daikon, cucumber, jalapeño, cilantro, and tangy mayo.",
    prepTimeMinutes: 25,
    cookTimeMinutes: 10,
    totalTimeMinutes: 35,
    servings: 4,
    ingredients: [
      "1 baguette, divided into 4",
      "12 oz firm tofu, sliced",
      "1 carrot and 1/2 daikon, julienned",
      "1/4 cup rice vinegar",
      "1 tbsp sugar",
      "1 cucumber, sliced",
      "1 jalapeño, sliced",
      "Fresh cilantro",
      "4 tbsp mayonnaise",
      "2 tsp soy sauce",
      "1 tsp sriracha",
      "1 tbsp neutral oil",
      "Salt and pepper"
    ],
    steps: [
      "Quick-pickle carrot and daikon with vinegar, sugar, and salt; set aside.",
      "Sear tofu in oil until golden; season with soy sauce and pepper.",
      "Toast baguette halves lightly.",
      "Mix mayo with sriracha. Spread on baguette, layer tofu, pickles, cucumber, jalapeño, and cilantro.",
      "Serve immediately while crusty and fresh."
    ],
    difficulty: "Easy"
  },
  {
    id: "texas-brisket",
    name: "Slow-Smoked Texas Brisket",
    region: "USA",
    imageUrl:
      "https://images.unsplash.com/photo-1608033561560-1ba9bf2fa6c7?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Peppery bark, tender beef, and classic BBQ smoke.",
    description:
      "Central Texas-style brisket rubbed simply with salt and pepper, smoked low and slow until ultra tender with a mahogany bark.",
    prepTimeMinutes: 20,
    cookTimeMinutes: 480,
    totalTimeMinutes: 500,
    servings: 8,
    ingredients: [
      "1 whole packer brisket (8–10 lb)",
      "1/4 cup kosher salt",
      "1/4 cup coarse black pepper",
      "2 tbsp garlic powder",
      "Hardwood chunks (oak preferred)"
    ],
    steps: [
      "Trim excess fat from brisket, leaving a thin cap.",
      "Rub all sides with salt, pepper, and garlic powder.",
      "Smoke at 225–250°F with clean post-oak smoke, fat side up.",
      "Wrap in butcher paper when bark is set (around 165°F internal).",
      "Continue until 200–203°F internal and probe tender; rest at least 1 hour before slicing."
    ],
    difficulty: "Hard"
  }
];
