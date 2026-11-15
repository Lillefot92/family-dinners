// Starter recipe library. Every recipe makes 5 portions:
// dinner for 2 adults + 1 toddler, plus next-day lunch for all three.
// Salt, pepper, cooking oil and water are assumed to be at home.
const WIKI = "https://commons.wikimedia.org/wiki/File:";
window.LIBRARY = [
  {
    id: "salmon-potatoes", name: "Baked salmon with dill potatoes and peas", protein: "Salmon", minutes: 30,
    summary: "Oven-baked salmon, boiled potatoes, peas and a lemony dill yogurt sauce.",
    image: "images/salmon-potatoes.jpg",
    credit: { text: "HaJunkiyada, CC BY-SA 4.0", url: WIKI + "Liat_Portal_for_Foodie_Disorder_-_Salmon_with_garlic_and_herbs,_crushed_potatoes_and_peas.jpg" },
    ingredients: [
      { item: "Salmon fillet, frozen", qty: 750, unit: "g", section: "Frozen" },
      { item: "Potato", qty: 1200, unit: "g", section: "Fruit & veg" },
      { item: "Frozen peas", qty: 400, unit: "g", section: "Frozen" },
      { item: "Plain yogurt", qty: 250, unit: "ml", section: "Dairy & eggs" },
      { item: "Fresh dill", qty: 1, unit: "bunch", section: "Fruit & veg" },
      { item: "Lemon", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Egg", qty: 2, unit: "pcs", section: "Dairy & eggs" },
      { item: "Breadcrumbs", qty: 4, unit: "tbsp", section: "Pantry" }
    ],
    steps: [
      "Boil the potatoes in lightly salted water for about 20 minutes until soft.",
      "Thaw the salmon in the fridge overnight, or bake from frozen. Bake on a lined tray at 200 °C for 15–18 minutes (25 from frozen).",
      "Cook the peas for 3 minutes. Stir chopped dill and the juice of half the lemon into the yogurt.",
      "Serve dinner, then set aside about a third of the salmon and potatoes.",
      "For lunch: mash the leftover salmon and potatoes with the eggs and breadcrumbs, shape into patties and fry 3 minutes per side."
    ],
    toddler: "Flake the salmon and check carefully for bones. Mash potatoes and peas together with a little butter.",
    lunch: "Salmon and potato patties with the leftover dill sauce."
  },
  {
    id: "chicken-pasta", name: "Creamy chicken and broccoli pasta", protein: "Chicken", minutes: 25,
    summary: "Short pasta with tender chicken, broccoli and a mild cheesy cream sauce.",
    image: "images/chicken-pasta.jpg",
    credit: { text: "FitTasteTic, CC BY-SA 2.0", url: WIKI + "Chicken_with_pasta_and_mushroom_ragout_and_Broccoli.jpg" },
    ingredients: [
      { item: "Chicken breast fillet", qty: 700, unit: "g", section: "Meat & fish" },
      { item: "Short pasta", qty: 600, unit: "g", section: "Pantry" },
      { item: "Frozen broccoli", qty: 700, unit: "g", section: "Frozen" },
      { item: "Yellow onion", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Garlic", qty: 3, unit: "clove", section: "Fruit & veg" },
      { item: "Light crème fraîche", qty: 300, unit: "ml", section: "Dairy & eggs" },
      { item: "Grated cheese", qty: 100, unit: "g", section: "Dairy & eggs" },
      { item: "Chicken stock cube", qty: 1, unit: "pcs", section: "Pantry" }
    ],
    steps: [
      "Cook the pasta. Add the frozen broccoli for the last 4 minutes, then drain and keep a cup of the water.",
      "Fry the chicken in small pieces until golden, about 6 minutes. Add chopped onion and garlic and cook 2 more minutes.",
      "Stir in the crème fraîche, crumbled stock cube and a splash of pasta water. Simmer 2 minutes.",
      "Toss with the pasta, broccoli and cheese."
    ],
    toddler: "Cut the chicken into small pieces. Serve the toddler's portion before seasoning the rest.",
    lunch: "Chicken pasta, reheated or cold in lunchboxes."
  },
  {
    id: "lentil-curry", name: "Mild lentil, chickpea and sweet potato curry", protein: "Lentils and chickpeas", minutes: 35,
    summary: "A gentle coconut curry with red lentils, chickpeas and sweet potato, served with rice.",
    image: "images/lentil-curry.jpg",
    credit: { text: "Cookipedia.co.uk, CC BY 4.0", url: WIKI + "Red_lentil_curry_soup.jpg" },
    ingredients: [
      { item: "Red lentils", qty: 375, unit: "g", section: "Pantry" },
      { item: "Chickpeas", qty: 1, unit: "can", section: "Pantry" },
      { item: "Sweet potato", qty: 3, unit: "pcs", section: "Fruit & veg" },
      { item: "Yellow onion", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Garlic", qty: 2, unit: "clove", section: "Fruit & veg" },
      { item: "Mild curry powder", qty: 1.5, unit: "tbsp", section: "Pantry" },
      { item: "Coconut milk", qty: 1, unit: "can", section: "Pantry" },
      { item: "Crushed tomatoes", qty: 1, unit: "can", section: "Pantry" },
      { item: "Rice", qty: 450, unit: "g", section: "Pantry" },
      { item: "Pita bread", qty: 1, unit: "pack", section: "Bakery" }
    ],
    steps: [
      "Soften the chopped onion and garlic for 5 minutes, then stir in the curry powder.",
      "Add diced sweet potato, rinsed lentils, coconut milk, tomatoes and 500 ml water.",
      "Simmer for 25 minutes, stirring now and then. Add the drained chickpeas for the last 5 minutes.",
      "Cook the rice while the curry simmers."
    ],
    toddler: "Serve as it is. Adults add chili flakes or hot sauce at the table.",
    lunch: "Curry with warm pita bread."
  },
  {
    id: "pea-soup", name: "Homemade pea soup with bacon and oven pancake", protein: "Yellow peas and bacon", minutes: 90,
    summary: "The Swedish Thursday classic made from dried yellow peas, then oven pancake with jam. Soak the peas the night before.",
    image: "images/pea-soup.jpg",
    credit: { text: "JIP, CC BY-SA 4.0", url: WIKI + "Pea_soup_in_Loviisa.jpg" },
    ingredients: [
      { item: "Dried yellow peas", qty: 500, unit: "g", section: "Pantry" },
      { item: "Diced bacon", qty: 280, unit: "g", section: "Meat & fish" },
      { item: "Yellow onion", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Carrot", qty: 2, unit: "pcs", section: "Fruit & veg" },
      { item: "Dried thyme", qty: 1, unit: "tsp", section: "Pantry" },
      { item: "Egg", qty: 4, unit: "pcs", section: "Dairy & eggs" },
      { item: "Plain flour", qty: 180, unit: "g", section: "Pantry" },
      { item: "Milk", qty: 750, unit: "ml", section: "Dairy & eggs" },
      { item: "Butter", qty: 30, unit: "g", section: "Dairy & eggs" },
      { item: "Strawberry jam", qty: 1, unit: "jar", section: "Pantry" },
      { item: "Mustard", qty: 2, unit: "tbsp", section: "Pantry" }
    ],
    steps: [
      "The night before: rinse the peas and soak them in plenty of cold water.",
      "Drain, cover with 1.5 litres of fresh water and bring to the boil. Skim off the foam, add the chopped onion and carrots and simmer for about 1 hour until soft.",
      "Fry the bacon until golden and stir it into the soup with the thyme. Simmer 10 more minutes and thin with water if needed.",
      "Meanwhile heat the oven to 225 °C with the butter in a roasting tin. Whisk flour and half the milk until smooth, then whisk in the rest of the milk and the eggs.",
      "Pour the batter into the hot tin and bake for 25 minutes. Serve the soup with mustard for the adults, then pancake with jam."
    ],
    toddler: "Ladle the toddler's bowl before stirring in the bacon, or pick the bacon out, as it is salty. Cut the pancake into strips for finger food.",
    lunch: "Leftover soup and pancake squares with jam."
  },
  {
    id: "taco-night", name: "Taco night", protein: "Beef", minutes: 25,
    summary: "Soft tortillas with mild beef and lots of toppings for everyone to build their own.",
    image: "images/taco-night.jpg",
    credit: { text: "Kurt Kaiser, CC0", url: WIKI + "Tacos_in_a_soft_tortilla_5.jpg" },
    ingredients: [
      { item: "Beef mince", qty: 750, unit: "g", section: "Meat & fish" },
      { item: "Mild taco spice", qty: 1, unit: "pack", section: "Pantry" },
      { item: "Tortillas", qty: 2, unit: "pack", section: "Bakery" },
      { item: "Grated cheese", qty: 200, unit: "g", section: "Dairy & eggs" },
      { item: "Sour cream", qty: 200, unit: "ml", section: "Dairy & eggs" },
      { item: "Yellow onion", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Cucumber", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Tomato", qty: 3, unit: "pcs", section: "Fruit & veg" },
      { item: "Avocado", qty: 2, unit: "pcs", section: "Fruit & veg" },
      { item: "Iceberg lettuce", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Sweetcorn", qty: 1, unit: "can", section: "Pantry" }
    ],
    steps: [
      "Brown the mince with the chopped onion. Add half the taco spice and a splash of water; simmer 5 minutes.",
      "Take out the toddler's portion, then stir the rest of the spice into the adults' share.",
      "Chop the vegetables and set everything out on the table with cheese and sour cream.",
      "Warm the tortillas in a dry pan."
    ],
    toddler: "Offer a soft tortilla with mince, cheese and mashed avocado, rolled and cut into strips.",
    lunch: "Quesadillas: leftover mince and cheese folded in tortillas and fried until crisp."
  },
  {
    id: "meatballs-mash", name: "Meatballs with mash and lingonberries", protein: "Pork and beef", minutes: 45,
    summary: "Homemade Swedish meatballs with creamy mash, gravy, lingonberries and cucumber.",
    image: "images/meatballs-mash.jpg",
    credit: { text: "Gunnar Creutz, CC BY-SA 4.0", url: WIKI + "K%C3%B6ttbullar_och_potatismos_fr%C3%A5n_Cronwalls_gatuk%C3%B6k_i_Falk%C3%B6ping_8579.jpg" },
    ingredients: [
      { item: "Mixed mince (pork and beef)", qty: 750, unit: "g", section: "Meat & fish" },
      { item: "Egg", qty: 1, unit: "pcs", section: "Dairy & eggs" },
      { item: "Breadcrumbs", qty: 6, unit: "tbsp", section: "Pantry" },
      { item: "Milk", qty: 400, unit: "ml", section: "Dairy & eggs" },
      { item: "Yellow onion", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Potato", qty: 1400, unit: "g", section: "Fruit & veg" },
      { item: "Butter", qty: 40, unit: "g", section: "Dairy & eggs" },
      { item: "Cream", qty: 200, unit: "ml", section: "Dairy & eggs" },
      { item: "Beef stock cube", qty: 1, unit: "pcs", section: "Pantry" },
      { item: "Lingonberry jam", qty: 1, unit: "jar", section: "Pantry" },
      { item: "Cucumber", qty: 1, unit: "pcs", section: "Fruit & veg" }
    ],
    steps: [
      "Soak the breadcrumbs in 150 ml of the milk for 5 minutes. Mix with the mince, egg and grated onion.",
      "Roll into small balls and bake at 200 °C for 15 minutes, or fry in batches.",
      "Boil the potatoes, then mash with the butter and the rest of the milk.",
      "For gravy, simmer the cream with the stock cube and the pan juices for 3 minutes.",
      "Serve with lingonberries and sliced cucumber."
    ],
    toddler: "Roll a few extra-small meatballs and cut them into quarters. Go easy on the gravy.",
    lunch: "Meatballs and mash, or meatball sandwiches with cucumber."
  },
  {
    id: "chicken-traybake", name: "Roast chicken drumsticks with root veg", protein: "Chicken", minutes: 55,
    summary: "Chicken drumsticks roasted on one tray with potatoes, carrots and parsnips.",
    image: "images/chicken-traybake.jpg",
    credit: { text: "E4024, CC BY-SA 4.0", url: WIKI + "Pollastre_al_forn.jpg" },
    ingredients: [
      { item: "Chicken drumsticks", qty: 1600, unit: "g", section: "Frozen" },
      { item: "Potato", qty: 900, unit: "g", section: "Fruit & veg" },
      { item: "Carrot", qty: 5, unit: "pcs", section: "Fruit & veg" },
      { item: "Parsnip", qty: 3, unit: "pcs", section: "Fruit & veg" },
      { item: "Yellow onion", qty: 2, unit: "pcs", section: "Fruit & veg" },
      { item: "Garlic", qty: 4, unit: "clove", section: "Fruit & veg" },
      { item: "Dried thyme", qty: 1, unit: "tsp", section: "Pantry" },
      { item: "Chicken stock cube", qty: 1, unit: "pcs", section: "Pantry" },
      { item: "Tortillas", qty: 1, unit: "pack", section: "Bakery" }
    ],
    steps: [
      "Thaw the drumsticks in the fridge overnight. Heat the oven to 200 °C. Cut the vegetables into chunks and toss with oil, thyme and the garlic cloves.",
      "Lay the drumsticks on top and roast for 40–45 minutes until cooked through and golden.",
      "Pour the pan juices into a pan with the stock cube and 200 ml water and simmer for a quick gravy.",
      "Pull the leftover chicken off the bone for tomorrow."
    ],
    toddler: "Pull the chicken off the bone and serve soft roasted vegetables as finger food.",
    lunch: "Chicken and roast veg wraps."
  },
  {
    id: "fish-gratin", name: "Saithe and broccoli bake with mash", protein: "White fish (saithe)", minutes: 45,
    summary: "Swedish-style fish gratin: mild white fish and broccoli in a creamy sauce under a mash topping.",
    ingredients: [
      { item: "Saithe fillet, frozen", qty: 800, unit: "g", section: "Frozen" },
      { item: "Potato", qty: 1400, unit: "g", section: "Fruit & veg" },
      { item: "Frozen broccoli", qty: 400, unit: "g", section: "Frozen" },
      { item: "Milk", qty: 300, unit: "ml", section: "Dairy & eggs" },
      { item: "Butter", qty: 40, unit: "g", section: "Dairy & eggs" },
      { item: "Light crème fraîche", qty: 200, unit: "ml", section: "Dairy & eggs" },
      { item: "Grated cheese", qty: 100, unit: "g", section: "Dairy & eggs" },
      { item: "Lemon", qty: 1, unit: "pcs", section: "Fruit & veg" }
    ],
    steps: [
      "Boil the potatoes and mash with the milk and butter.",
      "Put the thawed fish and broccoli in an ovenproof dish. Mix the crème fraîche with lemon zest and spoon over.",
      "Pipe or spread the mash on top and sprinkle with cheese.",
      "Bake at 225 °C for 25 minutes until golden."
    ],
    toddler: "Mash the fish into the potato and check for bones.",
    lunch: "Reheated fish bake with a squeeze of lemon."
  },
  {
    id: "hidden-veg-bolognese", name: "Hidden-veg spaghetti bolognese", protein: "Beef", minutes: 40,
    summary: "A rich tomato and beef sauce with grated carrot and courgette melted in.",
    ingredients: [
      { item: "Beef mince", qty: 750, unit: "g", section: "Meat & fish" },
      { item: "Yellow onion", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Carrot", qty: 2, unit: "pcs", section: "Fruit & veg" },
      { item: "Courgette", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Garlic", qty: 2, unit: "clove", section: "Fruit & veg" },
      { item: "Crushed tomatoes", qty: 2, unit: "can", section: "Pantry" },
      { item: "Tomato purée", qty: 2, unit: "tbsp", section: "Pantry" },
      { item: "Spaghetti", qty: 600, unit: "g", section: "Pantry" },
      { item: "Grated cheese", qty: 100, unit: "g", section: "Dairy & eggs" }
    ],
    steps: [
      "Brown the mince. Add finely chopped onion, grated carrot, grated courgette and garlic; cook 5 minutes.",
      "Stir in tomato purée and crushed tomatoes. Simmer 20 minutes.",
      "Cook the spaghetti and serve with grated cheese."
    ],
    toddler: "Snap spaghetti into short pieces before cooking, or use a short pasta for their portion.",
    lunch: "Bolognese pasta boxes."
  },
  {
    id: "korv-stroganoff", name: "Sausage stroganoff with rice", protein: "Sausage", minutes: 25,
    summary: "Swedish korv stroganoff: falukorv strips in a mild tomato cream sauce.",
    ingredients: [
      { item: "Falukorv", qty: 800, unit: "g", section: "Meat & fish" },
      { item: "Yellow onion", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Tomato purée", qty: 3, unit: "tbsp", section: "Pantry" },
      { item: "Cream", qty: 300, unit: "ml", section: "Dairy & eggs" },
      { item: "Mustard", qty: 1, unit: "tbsp", section: "Pantry" },
      { item: "Rice", qty: 450, unit: "g", section: "Pantry" },
      { item: "Frozen green beans", qty: 300, unit: "g", section: "Frozen" }
    ],
    steps: [
      "Cook the rice. Cut the sausage into short strips.",
      "Fry the sausage and sliced onion for 5 minutes.",
      "Stir in tomato purée, cream and mustard. Simmer 5 minutes.",
      "Boil the green beans for 4 minutes and serve on the side."
    ],
    toddler: "Falukorv is salty, so give a smaller portion. Cut strips lengthways, never in round coins.",
    lunch: "Stroganoff and rice, reheated."
  },
  {
    id: "chicken-noodles", name: "Chicken and vegetable noodle stir-fry", protein: "Chicken", minutes: 25,
    summary: "Egg noodles with chicken, crunchy vegetables and a gentle honey-soy sauce.",
    ingredients: [
      { item: "Chicken thigh fillet", qty: 700, unit: "g", section: "Meat & fish" },
      { item: "Egg noodles", qty: 400, unit: "g", section: "Pantry" },
      { item: "Frozen broccoli", qty: 400, unit: "g", section: "Frozen" },
      { item: "Carrot", qty: 2, unit: "pcs", section: "Fruit & veg" },
      { item: "Red pepper", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Garlic", qty: 2, unit: "clove", section: "Fruit & veg" },
      { item: "Low-salt soy sauce", qty: 3, unit: "tbsp", section: "Pantry" },
      { item: "Honey", qty: 1, unit: "tbsp", section: "Pantry" }
    ],
    steps: [
      "Cook the noodles, rinse in cold water and drain.",
      "Stir-fry the chicken strips until cooked, about 6 minutes.",
      "Add the vegetables cut into thin sticks and the garlic; stir-fry 3 minutes.",
      "Add the noodles, soy sauce and honey and toss until hot."
    ],
    toddler: "Cut noodles shorter with scissors and give soft-cooked vegetables. Honey is fine from 1 year.",
    lunch: "Noodle boxes, warm or cold."
  },
  {
    id: "halloumi-traybake", name: "Halloumi and veggie traybake with bulgur", protein: "Halloumi and chickpeas", minutes: 35,
    summary: "Roasted peppers, courgette and chickpeas with golden halloumi and fluffy bulgur.",
    ingredients: [
      { item: "Halloumi", qty: 500, unit: "g", section: "Dairy & eggs" },
      { item: "Chickpeas", qty: 1, unit: "can", section: "Pantry" },
      { item: "Red pepper", qty: 2, unit: "pcs", section: "Fruit & veg" },
      { item: "Courgette", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Red onion", qty: 1, unit: "pcs", section: "Fruit & veg" },
      { item: "Cherry tomatoes", qty: 250, unit: "g", section: "Fruit & veg" },
      { item: "Bulgur", qty: 400, unit: "g", section: "Pantry" },
      { item: "Plain yogurt", qty: 200, unit: "ml", section: "Dairy & eggs" }
    ],
    steps: [
      "Toss chopped vegetables and drained chickpeas with oil on a tray. Roast at 200 °C for 20 minutes.",
      "Add sliced halloumi and roast 10 more minutes.",
      "Simmer the bulgur in 800 ml lightly salted water for 12 minutes, then fluff with a fork.",
      "Serve with a spoonful of yogurt."
    ],
    toddler: "Halloumi is salty, so give a few small pieces. Quarter the cherry tomatoes.",
    lunch: "Bulgur salad with the leftover veg and halloumi."
  },
  {
    id: "pork-wedges", name: "Creamy pork tenderloin with potato wedges", protein: "Pork", minutes: 40,
    summary: "Pan-fried pork tenderloin in a mild cream sauce with oven wedges and broccoli.",
    ingredients: [
      { item: "Pork tenderloin", qty: 800, unit: "g", section: "Meat & fish" },
      { item: "Potato", qty: 1400, unit: "g", section: "Fruit & veg" },
      { item: "Frozen broccoli", qty: 700, unit: "g", section: "Frozen" },
      { item: "Cream", qty: 250, unit: "ml", section: "Dairy & eggs" },
      { item: "Chicken stock cube", qty: 1, unit: "pcs", section: "Pantry" },
      { item: "Paprika powder", qty: 1, unit: "tsp", section: "Pantry" }
    ],
    steps: [
      "Cut potatoes into wedges, toss with oil and paprika and roast at 225 °C for 30 minutes.",
      "Slice the pork into medallions and fry 3 minutes per side.",
      "Add the cream and crumbled stock cube; simmer 3 minutes.",
      "Boil or steam the frozen broccoli for 4–5 minutes."
    ],
    toddler: "Cut the pork into thin small strips; soft wedges make easy finger food.",
    lunch: "Sliced pork and wedges, or pork and broccoli in a wrap."
  },
  {
    id: "tuna-pasta-bake", name: "Tuna and sweetcorn pasta bake", protein: "Tuna", minutes: 35,
    summary: "A cheesy pasta bake with tuna, sweetcorn and peas.",
    ingredients: [
      { item: "Tuna in water", qty: 3, unit: "can", section: "Pantry" },
      { item: "Short pasta", qty: 600, unit: "g", section: "Pantry" },
      { item: "Sweetcorn", qty: 1, unit: "can", section: "Pantry" },
      { item: "Frozen peas", qty: 300, unit: "g", section: "Frozen" },
      { item: "Light crème fraîche", qty: 300, unit: "ml", section: "Dairy & eggs" },
      { item: "Grated cheese", qty: 150, unit: "g", section: "Dairy & eggs" },
      { item: "Yellow onion", qty: 1, unit: "pcs", section: "Fruit & veg" }
    ],
    steps: [
      "Cook the pasta 2 minutes short of the packet time and drain.",
      "Soften the chopped onion, then mix with the pasta, drained tuna, sweetcorn, peas and crème fraîche.",
      "Spread in a dish, top with cheese and bake at 200 °C for 20 minutes."
    ],
    toddler: "Choose tuna in water and keep tuna to about once a week for little ones.",
    lunch: "Pasta bake squares, reheated."
  }
];
window.STARTER_WEEK = ["salmon-potatoes", "chicken-pasta", "lentil-curry", "pea-soup", "taco-night", "meatballs-mash", "chicken-traybake"];
