const recipes = [
    // Breakfast
    {
        name: "Oatmeal with Berries",
        nameEs: "Avena con Frutos Rojos",
        description: "A healthy and filling breakfast with fiber and antioxidants.",
        descriptionEs: "Un desayuno saludable y saciante con fibra y antioxidantes.",
        instructions: "1. Cook oats with water or milk.\n2. Top with fresh berries and a drizzle of honey.",
        instructionsEs: "1. Cocina la avena con agua o leche.\n2. Cubre con frutos rojos frescos y un chorrito de miel.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 300,
        protein: 10,
        carbs: 50,
        fat: 6,
        tags: "Breakfast,Vegetarian,HighFiber",
        ingredients: [
            { name: "Oats", nameEs: "Avena", amount: 50, unit: "g", foodName: "Oats" },
            { name: "Strawberries", nameEs: "Frutillas", amount: 50, unit: "g", foodName: "Strawberries" },
            { name: "Blueberries", nameEs: "Arándanos", amount: 30, unit: "g", foodName: "Blueberries" },
            { name: "Milk (Skim)", nameEs: "Leche (Descremada)", amount: 200, unit: "ml", foodName: "Milk (Skim)" }
        ]
    },
    {
        name: "Scrambled Eggs with Toast",
        nameEs: "Huevos Revueltos con Tostadas",
        description: "Classic protein-packed breakfast.",
        descriptionEs: "Desayuno clásico lleno de proteínas.",
        instructions: "1. Whisk eggs and cook in a pan.\n2. Serve with toasted whole wheat bread.",
        instructionsEs: "1. Bate los huevos y cocínalos en una sartén.\n2. Sirve con pan integral tostado.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 350,
        protein: 20,
        carbs: 30,
        fat: 15,
        tags: "Breakfast,HighProtein",
        ingredients: [
            { name: "Egg", nameEs: "Huevo", amount: 2, unit: "unit", foodName: "Egg" },
            { name: "Whole Wheat Bread", nameEs: "Pan Integral", amount: 2, unit: "slice", foodName: "Whole Wheat Bread" },
            { name: "Butter", nameEs: "Mantequilla", amount: 5, unit: "g", foodName: "Butter" }
        ]
    },
    {
        name: "Greek Yogurt Parfait",
        nameEs: "Parfait de Yogurt Griego",
        description: "High protein yogurt with granola and fruit.",
        descriptionEs: "Yogurt alto en proteínas con granola y fruta.",
        instructions: "1. Layer yogurt, granola, and fruit in a glass.",
        instructionsEs: "1. Coloca capas de yogurt, granola y fruta en un vaso.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 250,
        protein: 20,
        carbs: 30,
        fat: 5,
        tags: "Breakfast,HighProtein,NoCook",
        ingredients: [
            { name: "Greek Yogurt (Non-fat)", nameEs: "Yogurt Griego (Descremado)", amount: 200, unit: "g", foodName: "Greek Yogurt (Non-fat)" },
            { name: "Banana", nameEs: "Plátano", amount: 1, unit: "unit", foodName: "Banana" },
            { name: "Almonds", nameEs: "Almendras", amount: 10, unit: "g", foodName: "Almonds" }
        ]
    },
    {
        name: "Avocado Toast with Egg",
        nameEs: "Tostada con Palta y Huevo",
        description: "Trendy and nutritious breakfast.",
        descriptionEs: "Desayuno nutritivo y de moda.",
        instructions: "1. Toast bread.\n2. Mash avocado and spread on toast.\n3. Top with a fried or poached egg.",
        instructionsEs: "1. Tuesta el pan.\n2. Muele la palta y úntala en la tostada.\n3. Cubre con un huevo frito o escalfado.",
        prepTime: 10,
        cookTime: 5,
        servings: 1,
        calories: 400,
        protein: 15,
        carbs: 35,
        fat: 20,
        tags: "Breakfast,Vegetarian,HealthyFats",
        ingredients: [
            { name: "Whole Wheat Bread", nameEs: "Pan Integral", amount: 2, unit: "slice", foodName: "Whole Wheat Bread" },
            { name: "Avocado", nameEs: "Palta", amount: 100, unit: "g", foodName: "Avocado" },
            { name: "Egg", nameEs: "Huevo", amount: 1, unit: "unit", foodName: "Egg" }
        ]
    },
    {
        name: "Protein Pancakes",
        nameEs: "Panqueques de Proteína",
        description: "Fluffy pancakes made with protein powder and oats.",
        descriptionEs: "Panqueques esponjosos hechos con proteína en polvo y avena.",
        instructions: "1. Blend oats, egg, protein powder, and banana.\n2. Cook on a griddle.",
        instructionsEs: "1. Licúa la avena, el huevo, la proteína en polvo y el plátano.\n2. Cocina en una plancha.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 350,
        protein: 30,
        carbs: 40,
        fat: 8,
        tags: "Breakfast,HighProtein",
        ingredients: [
            { name: "Oats", nameEs: "Avena", amount: 40, unit: "g", foodName: "Oats" },
            { name: "Egg", nameEs: "Huevo", amount: 1, unit: "unit", foodName: "Egg" },
            { name: "Banana", nameEs: "Plátano", amount: 0.5, unit: "unit", foodName: "Banana" }
        ]
    },

    // Lunch
    {
        name: "Grilled Chicken Salad",
        nameEs: "Ensalada de Pollo a la Parrilla",
        description: "Light and fresh salad with grilled chicken breast.",
        descriptionEs: "Ensalada ligera y fresca con pechuga de pollo a la parrilla.",
        instructions: "1. Grill chicken breast.\n2. Toss lettuce, cucumber, and tomato.\n3. Top with chicken and dressing.",
        instructionsEs: "1. Asa la pechuga de pollo.\n2. Mezcla la lechuga, el pepino y el tomate.\n3. Cubre con el pollo y el aderezo.",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 350,
        protein: 40,
        carbs: 10,
        fat: 15,
        tags: "Lunch,HighProtein,LowCarb",
        ingredients: [
            { name: "Chicken Breast", nameEs: "Pechuga de Pollo", amount: 150, unit: "g", foodName: "Chicken Breast" },
            { name: "Lettuce", nameEs: "Lechuga", amount: 100, unit: "g", foodName: "Lettuce" },
            { name: "Tomato", nameEs: "Tomate", amount: 1, unit: "unit", foodName: "Tomato" },
            { name: "Cucumber", nameEs: "Pepino", amount: 50, unit: "g", foodName: "Cucumber" },
            { name: "Olive Oil", nameEs: "Aceite de Oliva", amount: 10, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    {
        name: "Quinoa Bowl with Veggies",
        nameEs: "Bowl de Quinua con Verduras",
        description: "Nutritious bowl with quinoa and roasted vegetables.",
        descriptionEs: "Bowl nutritivo con quinua y verduras asadas.",
        instructions: "1. Cook quinoa.\n2. Roast bell peppers and zucchini.\n3. Combine and serve.",
        instructionsEs: "1. Cocina la quinua.\n2. Asa los pimientos y el zapallo italiano.\n3. Combina y sirve.",
        prepTime: 10,
        cookTime: 20,
        servings: 1,
        calories: 400,
        protein: 12,
        carbs: 60,
        fat: 10,
        tags: "Lunch,Vegetarian,Vegan,HighFiber",
        ingredients: [
            { name: "Quinoa (Cooked)", nameEs: "Quinua (Cocida)", amount: 150, unit: "g", foodName: "Quinoa (Cooked)" },
            { name: "Bell Pepper", nameEs: "Pimentón", amount: 100, unit: "g", foodName: "Bell Pepper" },
            { name: "Zucchini", nameEs: "Zapallo Italiano", amount: 100, unit: "g", foodName: "Zucchini" },
            { name: "Olive Oil", nameEs: "Aceite de Oliva", amount: 5, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    {
        name: "Tuna Salad Sandwich",
        nameEs: "Sándwich de Ensalada de Atún",
        description: "Quick and easy tuna sandwich.",
        descriptionEs: "Sándwich de atún rápido y fácil.",
        instructions: "1. Mix tuna with a bit of mayo or yogurt.\n2. Serve on whole wheat bread with lettuce.",
        instructionsEs: "1. Mezcla el atún con un poco de mayonesa o yogurt.\n2. Sirve en pan integral con lechuga.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 25,
        carbs: 35,
        fat: 10,
        tags: "Lunch,HighProtein",
        ingredients: [
            { name: "Tuna (Canned in Water)", nameEs: "Atún (en agua)", amount: 100, unit: "g", foodName: "Tuna (Canned in Water)" },
            { name: "Whole Wheat Bread", nameEs: "Pan Integral", amount: 2, unit: "slice", foodName: "Whole Wheat Bread" },
            { name: "Lettuce", nameEs: "Lechuga", amount: 20, unit: "g", foodName: "Lettuce" }
        ]
    },
    {
        name: "Lentil Soup",
        nameEs: "Sopa de Lentejas",
        description: "Hearty and warming lentil soup.",
        descriptionEs: "Sopa de lentejas abundante y reconfortante.",
        instructions: "1. Sauté onions and carrots.\n2. Add lentils and broth.\n3. Simmer until tender.",
        instructionsEs: "1. Saltea las cebollas y las zanahorias.\n2. Agrega las lentejas y el caldo.\n3. Cocina a fuego lento hasta que estén tiernas.",
        prepTime: 10,
        cookTime: 30,
        servings: 1,
        calories: 300,
        protein: 15,
        carbs: 45,
        fat: 5,
        tags: "Lunch,Vegan,HighFiber",
        ingredients: [
            { name: "Lentils (Cooked)", nameEs: "Lentejas (Cocidas)", amount: 200, unit: "g", foodName: "Lentils (Cooked)" },
            { name: "Carrot", nameEs: "Zanahoria", amount: 50, unit: "g", foodName: "Carrot" },
            { name: "Onion", nameEs: "Cebolla", amount: 50, unit: "g", foodName: "Onion" }
        ]
    },
    {
        name: "Chicken Burrito Bowl",
        nameEs: "Bowl de Burrito de Pollo",
        description: "Deconstructed burrito with rice, beans, and chicken.",
        descriptionEs: "Burrito deconstruido con arroz, frijoles y pollo.",
        instructions: "1. Assemble rice, beans, and grilled chicken.\n2. Top with salsa and avocado.",
        instructionsEs: "1. Arma el arroz, los frijoles y el pollo a la parrilla.\n2. Cubre con salsa y palta.",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 500,
        protein: 40,
        carbs: 55,
        fat: 15,
        tags: "Lunch,HighProtein",
        ingredients: [
            { name: "Chicken Breast", nameEs: "Pechuga de Pollo", amount: 150, unit: "g", foodName: "Chicken Breast" },
            { name: "White Rice (Cooked)", nameEs: "Arroz Blanco (Cocido)", amount: 100, unit: "g", foodName: "White Rice (Cooked)" },
            { name: "Avocado", nameEs: "Palta", amount: 50, unit: "g", foodName: "Avocado" }
        ]
    },

    // Dinner
    {
        name: "Baked Salmon with Asparagus",
        nameEs: "Salmón al Horno con Espárragos",
        description: "Healthy fats and protein dinner.",
        descriptionEs: "Cena de grasas saludables y proteínas.",
        instructions: "1. Season salmon and asparagus.\n2. Bake at 200°C for 15-20 mins.",
        instructionsEs: "1. Sazona el salmón y los espárragos.\n2. Hornea a 200°C por 15-20 minutos.",
        prepTime: 5,
        cookTime: 20,
        servings: 1,
        calories: 450,
        protein: 35,
        carbs: 5,
        fat: 30,
        tags: "Dinner,HighProtein,Keto,HealthyFats",
        ingredients: [
            { name: "Salmon", nameEs: "Salmón", amount: 150, unit: "g", foodName: "Salmon" },
            { name: "Olive Oil", nameEs: "Aceite de Oliva", amount: 10, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    {
        name: "Beef Stir-Fry",
        nameEs: "Salteado de Carne",
        description: "Quick beef stir-fry with vegetables.",
        descriptionEs: "Salteado rápido de carne con verduras.",
        instructions: "1. Slice beef and veggies.\n2. Stir-fry in a hot pan with soy sauce.",
        instructionsEs: "1. Corta la carne y las verduras.\n2. Saltea en una sartén caliente con salsa de soja.",
        prepTime: 15,
        cookTime: 10,
        servings: 1,
        calories: 400,
        protein: 30,
        carbs: 15,
        fat: 20,
        tags: "Dinner,HighProtein",
        ingredients: [
            { name: "Beef (Lean)", nameEs: "Carne de Vacuno (Magra)", amount: 150, unit: "g", foodName: "Beef (Lean)" },
            { name: "Broccoli", nameEs: "Brócoli", amount: 100, unit: "g", foodName: "Broccoli" },
            { name: "Bell Pepper", nameEs: "Pimentón", amount: 50, unit: "g", foodName: "Bell Pepper" },
            { name: "Onion", nameEs: "Cebolla", amount: 30, unit: "g", foodName: "Onion" }
        ]
    },
    {
        name: "Spaghetti Bolognese (Lean)",
        nameEs: "Espagueti a la Boloñesa (Magro)",
        description: "Classic pasta dish made with lean ground beef.",
        descriptionEs: "Plato de pasta clásico hecho con carne molida magra.",
        instructions: "1. Brown beef with onions.\n2. Add tomato sauce and simmer.\n3. Serve over pasta.",
        instructionsEs: "1. Dora la carne con cebollas.\n2. Agrega la salsa de tomate y cocina a fuego lento.\n3. Sirve sobre la pasta.",
        prepTime: 10,
        cookTime: 30,
        servings: 1,
        calories: 500,
        protein: 30,
        carbs: 60,
        fat: 12,
        tags: "Dinner,HighProtein",
        ingredients: [
            { name: "Ground Beef (5% fat)", nameEs: "Carne Molida (5% grasa)", amount: 100, unit: "g", foodName: "Ground Beef (5% fat)" },
            { name: "Pasta (Cooked)", nameEs: "Pasta (Cocida)", amount: 150, unit: "g", foodName: "Pasta (Cooked)" },
            { name: "Tomato", nameEs: "Tomate", amount: 100, unit: "g", foodName: "Tomato" },
            { name: "Onion", nameEs: "Cebolla", amount: 50, unit: "g", foodName: "Onion" }
        ]
    },
    {
        name: "Tofu Stir-Fry",
        nameEs: "Salteado de Tofu",
        description: "Vegetarian stir-fry with tofu and veggies.",
        descriptionEs: "Salteado vegetariano con tofu y verduras.",
        instructions: "1. Press tofu and cube.\n2. Stir-fry with veggies and soy sauce.",
        instructionsEs: "1. Presiona el tofu y córtalo en cubos.\n2. Saltea con verduras y salsa de soja.",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 350,
        protein: 15,
        carbs: 20,
        fat: 20,
        tags: "Dinner,Vegetarian,Vegan",
        ingredients: [
            { name: "Tofu", nameEs: "Tofu", amount: 150, unit: "g", foodName: "Tofu" },
            { name: "Broccoli", nameEs: "Brócoli", amount: 100, unit: "g", foodName: "Broccoli" },
            { name: "Carrot", nameEs: "Zanahoria", amount: 50, unit: "g", foodName: "Carrot" }
        ]
    },
    {
        name: "Chicken Curry with Rice",
        nameEs: "Curry de Pollo con Arroz",
        description: "Flavorful chicken curry served with rice.",
        descriptionEs: "Curry de pollo sabroso servido con arroz.",
        instructions: "1. Cook chicken with curry spices and coconut milk.\n2. Serve over rice.",
        instructionsEs: "1. Cocina el pollo con especias de curry y leche de coco.\n2. Sirve sobre arroz.",
        prepTime: 15,
        cookTime: 30,
        servings: 1,
        calories: 550,
        protein: 35,
        carbs: 50,
        fat: 20,
        tags: "Dinner,HighProtein",
        ingredients: [
            { name: "Chicken Thigh", nameEs: "Muslo de Pollo", amount: 150, unit: "g", foodName: "Chicken Thigh" },
            { name: "White Rice (Cooked)", nameEs: "Arroz Blanco (Cocido)", amount: 150, unit: "g", foodName: "White Rice (Cooked)" },
            { name: "Onion", nameEs: "Cebolla", amount: 50, unit: "g", foodName: "Onion" }
        ]
    },

    // Snacks
    {
        name: "Apple with Peanut Butter",
        nameEs: "Manzana con Mantequilla de Maní",
        description: "Simple and satisfying snack.",
        descriptionEs: "Snack simple y satisfactorio.",
        instructions: "1. Slice apple.\n2. Dip in peanut butter.",
        instructionsEs: "1. Corta la manzana.\n2. Unta en mantequilla de maní.",
        prepTime: 2,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 5,
        carbs: 25,
        fat: 10,
        tags: "Snack,Vegetarian",
        ingredients: [
            { name: "Apple", nameEs: "Manzana", amount: 1, unit: "unit", foodName: "Apple" },
            { name: "Peanut Butter", nameEs: "Mantequilla de Maní", amount: 15, unit: "g", foodName: "Peanut Butter" }
        ]
    },
    {
        name: "Hard Boiled Eggs",
        nameEs: "Huevos Duros",
        description: "Protein snack on the go.",
        descriptionEs: "Snack de proteínas para llevar.",
        instructions: "1. Boil eggs for 10 mins.\n2. Peel and eat.",
        instructionsEs: "1. Hierve los huevos por 10 minutos.\n2. Pela y come.",
        prepTime: 1,
        cookTime: 10,
        servings: 1,
        calories: 140,
        protein: 12,
        carbs: 1,
        fat: 10,
        tags: "Snack,HighProtein,Keto",
        ingredients: [
            { name: "Egg", nameEs: "Huevo", amount: 2, unit: "unit", foodName: "Egg" }
        ]
    },
    {
        name: "Almonds and Cheese",
        nameEs: "Almendras y Queso",
        description: "Savory snack combo.",
        descriptionEs: "Combo de snack salado.",
        instructions: "1. Serve almonds with cheese cubes.",
        instructionsEs: "1. Sirve almendras con cubos de queso.",
        prepTime: 1,
        cookTime: 0,
        servings: 1,
        calories: 250,
        protein: 10,
        carbs: 5,
        fat: 20,
        tags: "Snack,Keto,LowCarb",
        ingredients: [
            { name: "Almonds", nameEs: "Almendras", amount: 20, unit: "g", foodName: "Almonds" },
            { name: "Cheese (Cheddar)", nameEs: "Queso Cheddar", amount: 30, unit: "g", foodName: "Cheese (Cheddar)" }
        ]
    },
    {
        name: "Protein Shake",
        nameEs: "Batido de Proteína",
        description: "Quick post-workout shake.",
        descriptionEs: "Batido rápido post-entrenamiento.",
        instructions: "1. Mix protein powder with water or milk.",
        instructionsEs: "1. Mezcla la proteína en polvo con agua o leche.",
        prepTime: 2,
        cookTime: 0,
        servings: 1,
        calories: 150,
        protein: 25,
        carbs: 5,
        fat: 2,
        tags: "Snack,HighProtein",
        ingredients: [
            { name: "Milk (Skim)", nameEs: "Leche (Descremada)", amount: 250, unit: "ml", foodName: "Milk (Skim)" }
        ]
    },
    {
        name: "Carrot Sticks with Hummus",
        nameEs: "Bastones de Zanahoria con Hummus",
        description: "Crunchy and creamy snack.",
        descriptionEs: "Snack crujiente y cremoso.",
        instructions: "1. Cut carrots into sticks.\n2. Serve with hummus.",
        instructionsEs: "1. Corta las zanahorias en bastones.\n2. Sirve con hummus.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 150,
        protein: 5,
        carbs: 20,
        fat: 7,
        tags: "Snack,Vegetarian,Vegan",
        ingredients: [
            { name: "Carrot", nameEs: "Zanahoria", amount: 100, unit: "g", foodName: "Carrot" }
        ]
    },
    // More Lunch/Dinner
    {
        name: "Turkey Meatballs with Zucchini Noodles",
        nameEs: "Albóndigas de Pavo con Tallarines de Zapallo Italiano",
        description: "Low carb alternative to spaghetti and meatballs.",
        descriptionEs: "Alternativa baja en carbohidratos a los espaguetis con albóndigas.",
        instructions: "1. Form turkey meatballs and bake.\n2. Spiralize zucchini and sauté.\n3. Serve with marinara sauce.",
        instructionsEs: "1. Forma las albóndigas de pavo y hornea.\n2. Haz espirales de zapallo italiano y saltea.\n3. Sirve con salsa marinara.",
        prepTime: 20,
        cookTime: 20,
        servings: 1,
        calories: 350,
        protein: 35,
        carbs: 10,
        fat: 15,
        tags: "Dinner,LowCarb,HighProtein",
        ingredients: [
            { name: "Turkey Breast", nameEs: "Pechuga de Pavo", amount: 150, unit: "g", foodName: "Turkey Breast" },
            { name: "Zucchini", nameEs: "Zapallo Italiano", amount: 200, unit: "g", foodName: "Zucchini" },
            { name: "Tomato", nameEs: "Tomate", amount: 100, unit: "g", foodName: "Tomato" }
        ]
    },
    {
        name: "Shrimp Stir-Fry",
        nameEs: "Salteado de Camarones",
        description: "Quick and light seafood dinner.",
        descriptionEs: "Cena de mariscos rápida y ligera.",
        instructions: "1. Stir-fry shrimp with snap peas and bell peppers.\n2. Season with soy sauce and ginger.",
        instructionsEs: "1. Saltea los camarones con guisantes y pimientos.\n2. Sazona con salsa de soja y jengibre.",
        prepTime: 10,
        cookTime: 5,
        servings: 1,
        calories: 250,
        protein: 25,
        carbs: 10,
        fat: 5,
        tags: "Dinner,HighProtein,LowCarb",
        ingredients: [
            { name: "Shrimp (Cooked)", nameEs: "Camarones (Cocidos)", amount: 150, unit: "g", foodName: "Shrimp (Cooked)" },
            { name: "Bell Pepper", nameEs: "Pimentón", amount: 100, unit: "g", foodName: "Bell Pepper" },
            { name: "Green Beans", nameEs: "Porotos Verdes", amount: 100, unit: "g", foodName: "Green Beans" }
        ]
    },
    {
        name: "Vegetable Omelette",
        nameEs: "Omelette de Verduras",
        description: "Breakfast for dinner or a hearty start.",
        descriptionEs: "Desayuno para la cena o un comienzo abundante.",
        instructions: "1. Whisk eggs.\n2. Sauté spinach, onions, and mushrooms.\n3. Cook omelette with veggies inside.",
        instructionsEs: "1. Bate los huevos.\n2. Saltea las espinacas, las cebollas y los champiñones.\n3. Cocina el omelette con las verduras adentro.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 300,
        protein: 18,
        carbs: 5,
        fat: 20,
        tags: "Breakfast,Dinner,Vegetarian,Keto",
        ingredients: [
            { name: "Egg", nameEs: "Huevo", amount: 3, unit: "unit", foodName: "Egg" },
            { name: "Spinach", nameEs: "Espinaca", amount: 50, unit: "g", foodName: "Spinach" },
            { name: "Onion", nameEs: "Cebolla", amount: 30, unit: "g", foodName: "Onion" }
        ]
    },
    {
        name: "Chicken and Rice Soup",
        nameEs: "Sopa de Pollo con Arroz",
        description: "Comforting soup for any day.",
        descriptionEs: "Sopa reconfortante para cualquier día.",
        instructions: "1. Simmer chicken, rice, carrots, and celery in broth.",
        instructionsEs: "1. Cocina a fuego lento el pollo, el arroz, las zanahorias y el apio en caldo.",
        prepTime: 10,
        cookTime: 30,
        servings: 1,
        calories: 350,
        protein: 25,
        carbs: 40,
        fat: 8,
        tags: "Lunch,Dinner,HighProtein",
        ingredients: [
            { name: "Chicken Breast", nameEs: "Pechuga de Pollo", amount: 100, unit: "g", foodName: "Chicken Breast" },
            { name: "White Rice (Cooked)", nameEs: "Arroz Blanco (Cocido)", amount: 100, unit: "g", foodName: "White Rice (Cooked)" },
            { name: "Carrot", nameEs: "Zanahoria", amount: 50, unit: "g", foodName: "Carrot" }
        ]
    },
    {
        name: "Cottage Cheese Bowl",
        nameEs: "Bowl de Queso Cottage",
        description: "High protein snack or light meal.",
        descriptionEs: "Snack alto en proteínas o comida ligera.",
        instructions: "1. Top cottage cheese with fruit or nuts.",
        instructionsEs: "1. Cubre el queso cottage con fruta o nueces.",
        prepTime: 2,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 20,
        carbs: 10,
        fat: 5,
        tags: "Snack,HighProtein",
        ingredients: [
            { name: "Cottage Cheese", nameEs: "Queso Cottage", amount: 150, unit: "g", foodName: "Cottage Cheese" },
            { name: "Blueberries", nameEs: "Arándanos", amount: 50, unit: "g", foodName: "Blueberries" }
        ]
    },
    {
        name: "Beef Tacos (Lettuce Wrap)",
        nameEs: "Tacos de Carne (Envoltura de Lechuga)",
        description: "Low carb tacos using lettuce leaves.",
        descriptionEs: "Tacos bajos en carbohidratos usando hojas de lechuga.",
        instructions: "1. Cook ground beef with taco seasoning.\n2. Serve in lettuce leaves with salsa.",
        instructionsEs: "1. Cocina la carne molida con condimento para tacos.\n2. Sirve en hojas de lechuga con salsa.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 300,
        protein: 25,
        carbs: 5,
        fat: 15,
        tags: "Dinner,LowCarb,HighProtein",
        ingredients: [
            { name: "Ground Beef (5% fat)", nameEs: "Carne Molida (5% grasa)", amount: 100, unit: "g", foodName: "Ground Beef (5% fat)" },
            { name: "Lettuce", nameEs: "Lechuga", amount: 50, unit: "g", foodName: "Lettuce" },
            { name: "Tomato", nameEs: "Tomate", amount: 50, unit: "g", foodName: "Tomato" }
        ]
    },
    {
        name: "Chia Pudding",
        nameEs: "Pudín de Chía",
        description: "Prepare ahead breakfast or snack.",
        descriptionEs: "Desayuno o snack para preparar con anticipación.",
        instructions: "1. Mix chia seeds with milk and sweetener.\n2. Let sit overnight.",
        instructionsEs: "1. Mezcla las semillas de chía con leche y endulzante.\n2. Deja reposar durante la noche.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 250,
        protein: 10,
        carbs: 20,
        fat: 15,
        tags: "Breakfast,Snack,Vegetarian,HighFiber",
        ingredients: [
            { name: "Chia Seeds", nameEs: "Semillas de Chía", amount: 30, unit: "g", foodName: "Chia Seeds" },
            { name: "Milk (Skim)", nameEs: "Leche (Descremada)", amount: 150, unit: "ml", foodName: "Milk (Skim)" }
        ]
    },
    {
        name: "Baked Sweet Potato",
        nameEs: "Camote al Horno",
        description: "Simple side or light meal.",
        descriptionEs: "Acompañamiento simple o comida ligera.",
        instructions: "1. Bake sweet potato until tender.\n2. Top with a bit of butter or cinnamon.",
        instructionsEs: "1. Hornea el camote hasta que esté tierno.\n2. Cubre con un poco de mantequilla o canela.",
        prepTime: 2,
        cookTime: 45,
        servings: 1,
        calories: 150,
        protein: 2,
        carbs: 35,
        fat: 0,
        tags: "Snack,Side,Vegetarian",
        ingredients: [
            { name: "Sweet Potato (Boiled)", nameEs: "Camote (Cocido)", amount: 150, unit: "g", foodName: "Sweet Potato (Boiled)" }
        ]
    },
    {
        name: "Fruit Salad",
        nameEs: "Ensalada de Frutas",
        description: "Refreshing mix of seasonal fruits.",
        descriptionEs: "Mezcla refrescante de frutas de temporada.",
        instructions: "1. Chop all fruits.\n2. Mix in a bowl.",
        instructionsEs: "1. Corta todas las frutas.\n2. Mezcla en un bowl.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 150,
        protein: 2,
        carbs: 35,
        fat: 0,
        tags: "Snack,Dessert,Vegan",
        ingredients: [
            { name: "Apple", nameEs: "Manzana", amount: 0.5, unit: "unit", foodName: "Apple" },
            { name: "Banana", nameEs: "Plátano", amount: 0.5, unit: "unit", foodName: "Banana" },
            { name: "Orange", nameEs: "Naranja", amount: 0.5, unit: "unit", foodName: "Orange" }
        ]
    },
    {
        name: "Caprese Salad",
        nameEs: "Ensalada Caprese",
        description: "Fresh tomato and mozzarella salad.",
        descriptionEs: "Ensalada fresca de tomate y mozzarella.",
        instructions: "1. Slice tomatoes and mozzarella.\n2. Layer with basil and drizzle with olive oil.",
        instructionsEs: "1. Corta los tomates y la mozzarella en rodajas.\n2. Coloca capas con albahaca y rocía con aceite de oliva.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 300,
        protein: 15,
        carbs: 5,
        fat: 20,
        tags: "Lunch,Snack,Vegetarian,Keto",
        ingredients: [
            { name: "Tomato", nameEs: "Tomate", amount: 150, unit: "g", foodName: "Tomato" },
            { name: "Cheese (Mozzarella)", nameEs: "Queso Mozzarella", amount: 50, unit: "g", foodName: "Cheese (Mozzarella)" },
            { name: "Olive Oil", nameEs: "Aceite de Oliva", amount: 10, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    // Batch 2: Smoothies, Salads, Wraps
    {
        name: "Green Detox Smoothie",
        nameEs: "Batido Verde Detox",
        description: "Packed with greens and fruit.",
        descriptionEs: "Lleno de verduras y frutas.",
        instructions: "1. Blend spinach, apple, cucumber, and water.",
        instructionsEs: "1. Licúa la espinaca, la manzana, el pepino y el agua.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 120,
        protein: 2,
        carbs: 28,
        fat: 0,
        tags: "Snack,Breakfast,Vegan,Detox",
        ingredients: [
            { name: "Spinach", nameEs: "Espinaca", amount: 50, unit: "g", foodName: "Spinach" },
            { name: "Apple", nameEs: "Manzana", amount: 1, unit: "unit", foodName: "Apple" },
            { name: "Cucumber", nameEs: "Pepino", amount: 50, unit: "g", foodName: "Cucumber" }
        ]
    },
    {
        name: "Berry Blast Smoothie",
        nameEs: "Batido de Frutos Rojos",
        description: "Antioxidant rich smoothie.",
        descriptionEs: "Batido rico en antioxidantes.",
        instructions: "1. Blend mixed berries, yogurt, and milk.",
        instructionsEs: "1. Licúa los frutos rojos mixtos, el yogurt y la leche.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 10,
        carbs: 35,
        fat: 2,
        tags: "Snack,Breakfast,Vegetarian",
        ingredients: [
            { name: "Strawberries", nameEs: "Frutillas", amount: 50, unit: "g", foodName: "Strawberries" },
            { name: "Blueberries", nameEs: "Arándanos", amount: 50, unit: "g", foodName: "Blueberries" },
            { name: "Yogurt (Plain)", nameEs: "Yogurt Natural", amount: 100, unit: "g", foodName: "Yogurt (Plain)" },
            { name: "Milk (Skim)", nameEs: "Leche (Descremada)", amount: 100, unit: "ml", foodName: "Milk (Skim)" }
        ]
    },
    {
        name: "Chicken Caesar Wrap",
        nameEs: "Wrap César de Pollo",
        description: "Classic Caesar salad in a wrap.",
        descriptionEs: "Ensalada César clásica en un wrap.",
        instructions: "1. Toss lettuce and chicken with caesar dressing.\n2. Wrap in a tortilla.",
        instructionsEs: "1. Mezcla la lechuga y el pollo con aderezo césar.\n2. Envuelve en una tortilla.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 450,
        protein: 30,
        carbs: 35,
        fat: 20,
        tags: "Lunch,HighProtein",
        ingredients: [
            { name: "Chicken Breast", nameEs: "Pechuga de Pollo", amount: 100, unit: "g", foodName: "Chicken Breast" },
            { name: "Tortilla (Flour)", nameEs: "Tortilla de Harina", amount: 1, unit: "unit", foodName: "Tortilla (Flour)" },
            { name: "Lettuce", nameEs: "Lechuga", amount: 50, unit: "g", foodName: "Lettuce" },
            { name: "Cheese (Mozzarella)", nameEs: "Queso Mozzarella", amount: 20, unit: "g", foodName: "Cheese (Mozzarella)" }
        ]
    },
    {
        name: "Veggie Hummus Wrap",
        nameEs: "Wrap de Vegetales y Hummus",
        description: "Fresh and crunchy vegan wrap.",
        descriptionEs: "Wrap vegano fresco y crujiente.",
        instructions: "1. Spread hummus on tortilla.\n2. Add sliced veggies and roll.",
        instructionsEs: "1. Unta hummus en la tortilla.\n2. Agrega verduras en rodajas y enrolla.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 10,
        carbs: 45,
        fat: 12,
        tags: "Lunch,Vegan,Vegetarian",
        ingredients: [
            { name: "Tortilla (Flour)", nameEs: "Tortilla de Harina", amount: 1, unit: "unit", foodName: "Tortilla (Flour)" },
            { name: "Cucumber", nameEs: "Pepino", amount: 50, unit: "g", foodName: "Cucumber" },
            { name: "Bell Pepper", nameEs: "Pimentón", amount: 50, unit: "g", foodName: "Bell Pepper" },
            { name: "Spinach", nameEs: "Espinaca", amount: 30, unit: "g", foodName: "Spinach" }
        ]
    },
    {
        name: "Mediterranean Quinoa Salad",
        nameEs: "Ensalada Mediterránea de Quinua",
        description: "Quinoa with cucumber, tomato, and olives.",
        descriptionEs: "Quinua con pepino, tomate y aceitunas.",
        instructions: "1. Mix cooked quinoa with chopped veggies.\n2. Dress with olive oil and lemon.",
        instructionsEs: "1. Mezcla la quinua cocida con verduras picadas.\n2. Adereza con aceite de oliva y limón.",
        prepTime: 15,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 8,
        carbs: 45,
        fat: 15,
        tags: "Lunch,Vegan,Vegetarian,GlutenFree",
        ingredients: [
            { name: "Quinoa (Cooked)", nameEs: "Quinua (Cocida)", amount: 150, unit: "g", foodName: "Quinoa (Cooked)" },
            { name: "Cucumber", nameEs: "Pepino", amount: 50, unit: "g", foodName: "Cucumber" },
            { name: "Tomato", nameEs: "Tomate", amount: 50, unit: "g", foodName: "Tomato" },
            { name: "Olive Oil", nameEs: "Aceite de Oliva", amount: 10, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    {
        name: "Cobb Salad (Light)",
        nameEs: "Ensalada Cobb (Ligera)",
        description: "Lighter version of the classic Cobb.",
        descriptionEs: "Versión más ligera de la clásica Cobb.",
        instructions: "1. Assemble greens, chicken, egg, and avocado.\n2. Drizzle with light dressing.",
        instructionsEs: "1. Arma las verduras, el pollo, el huevo y la palta.\n2. Rocía con aderezo ligero.",
        prepTime: 15,
        cookTime: 0,
        servings: 1,
        calories: 400,
        protein: 35,
        carbs: 10,
        fat: 25,
        tags: "Lunch,Dinner,HighProtein,Keto",
        ingredients: [
            { name: "Chicken Breast", nameEs: "Pechuga de Pollo", amount: 100, unit: "g", foodName: "Chicken Breast" },
            { name: "Egg", nameEs: "Huevo", amount: 1, unit: "unit", foodName: "Egg" },
            { name: "Avocado", nameEs: "Palta", amount: 50, unit: "g", foodName: "Avocado" },
            { name: "Lettuce", nameEs: "Lechuga", amount: 100, unit: "g", foodName: "Lettuce" }
        ]
    },
    {
        name: "Pasta Primavera",
        nameEs: "Pasta Primavera",
        description: "Pasta with fresh spring vegetables.",
        descriptionEs: "Pasta con verduras frescas de primavera.",
        instructions: "1. Cook pasta.\n2. Sauté veggies.\n3. Toss together with olive oil.",
        instructionsEs: "1. Cocina la pasta.\n2. Saltea las verduras.\n3. Mezcla con aceite de oliva.",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 400,
        protein: 12,
        carbs: 65,
        fat: 10,
        tags: "Dinner,Vegetarian",
        ingredients: [
            { name: "Pasta (Cooked)", nameEs: "Pasta (Cocida)", amount: 150, unit: "g", foodName: "Pasta (Cooked)" },
            { name: "Broccoli", nameEs: "Brócoli", amount: 50, unit: "g", foodName: "Broccoli" },
            { name: "Carrot", nameEs: "Zanahoria", amount: 50, unit: "g", foodName: "Carrot" },
            { name: "Bell Pepper", nameEs: "Pimentón", amount: 50, unit: "g", foodName: "Bell Pepper" }
        ]
    },
    {
        name: "Pesto Chicken Pasta",
        nameEs: "Pasta con Pollo al Pesto",
        description: "Flavorful pasta with chicken and pesto.",
        descriptionEs: "Pasta sabrosa con pollo y pesto.",
        instructions: "1. Cook pasta and chicken.\n2. Toss with pesto sauce.",
        instructionsEs: "1. Cocina la pasta y el pollo.\n2. Mezcla con salsa pesto.",
        prepTime: 10,
        cookTime: 20,
        servings: 1,
        calories: 500,
        protein: 35,
        carbs: 50,
        fat: 20,
        tags: "Dinner,HighProtein",
        ingredients: [
            { name: "Pasta (Cooked)", nameEs: "Pasta (Cocida)", amount: 100, unit: "g", foodName: "Pasta (Cooked)" },
            { name: "Chicken Breast", nameEs: "Pechuga de Pollo", amount: 100, unit: "g", foodName: "Chicken Breast" },
            { name: "Olive Oil", nameEs: "Aceite de Oliva", amount: 10, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    {
        name: "Rice and Beans",
        nameEs: "Arroz con Porotos",
        description: "Simple and complete protein meal.",
        descriptionEs: "Comida de proteína simple y completa.",
        instructions: "1. Mix cooked rice and beans.\n2. Season to taste.",
        instructionsEs: "1. Mezcla el arroz cocido y los frijoles.\n2. Sazona al gusto.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 12,
        carbs: 65,
        fat: 2,
        tags: "Lunch,Dinner,Vegan,Vegetarian",
        ingredients: [
            { name: "White Rice (Cooked)", nameEs: "Arroz Blanco (Cocido)", amount: 150, unit: "g", foodName: "White Rice (Cooked)" },
            { name: "Lentils (Cooked)", nameEs: "Lentejas (Cocidas)", amount: 100, unit: "g", foodName: "Lentils (Cooked)" }
        ]
    },
    {
        name: "Fried Rice with Egg",
        nameEs: "Arroz Chaufa con Huevo",
        description: "Quick fried rice with veggies and egg.",
        descriptionEs: "Arroz frito rápido con verduras y huevo.",
        instructions: "1. Stir-fry veggies and rice.\n2. Scramble egg into the mix.",
        instructionsEs: "1. Saltea las verduras y el arroz.\n2. Revuelve el huevo en la mezcla.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 400,
        protein: 15,
        carbs: 55,
        fat: 12,
        tags: "Dinner,Vegetarian",
        ingredients: [
            { name: "White Rice (Cooked)", nameEs: "Arroz Blanco (Cocido)", amount: 150, unit: "g", foodName: "White Rice (Cooked)" },
            { name: "Egg", nameEs: "Huevo", amount: 2, unit: "unit", foodName: "Egg" },
            { name: "Onion", nameEs: "Cebolla", amount: 30, unit: "g", foodName: "Onion" },
            { name: "Carrot", nameEs: "Zanahoria", amount: 30, unit: "g", foodName: "Carrot" }
        ]
    },
    {
        name: "Lemon Herb Chicken",
        nameEs: "Pollo a las Hierbas y Limón",
        description: "Zesty grilled chicken.",
        descriptionEs: "Pollo a la parrilla con sabor a limón.",
        instructions: "1. Marinate chicken in lemon and herbs.\n2. Grill until cooked.",
        instructionsEs: "1. Marina el pollo en limón y hierbas.\n2. Asa hasta que esté cocido.",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 200,
        protein: 30,
        carbs: 0,
        fat: 8,
        tags: "Dinner,HighProtein,LowCarb,Keto",
        ingredients: [
            { name: "Chicken Breast", nameEs: "Pechuga de Pollo", amount: 150, unit: "g", foodName: "Chicken Breast" },
            { name: "Olive Oil", nameEs: "Aceite de Oliva", amount: 5, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    {
        name: "Chicken Fajitas",
        nameEs: "Fajitas de Pollo",
        description: "Sizzling chicken and peppers.",
        descriptionEs: "Pollo y pimientos chisporroteantes.",
        instructions: "1. Sauté chicken strips with peppers and onions.\n2. Serve with tortillas.",
        instructionsEs: "1. Saltea las tiras de pollo con pimientos y cebollas.\n2. Sirve con tortillas.",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 450,
        protein: 35,
        carbs: 40,
        fat: 15,
        tags: "Dinner,HighProtein",
        ingredients: [
            { name: "Chicken Breast", nameEs: "Pechuga de Pollo", amount: 150, unit: "g", foodName: "Chicken Breast" },
            { name: "Bell Pepper", nameEs: "Pimentón", amount: 100, unit: "g", foodName: "Bell Pepper" },
            { name: "Onion", nameEs: "Cebolla", amount: 50, unit: "g", foodName: "Onion" },
            { name: "Tortilla (Flour)", nameEs: "Tortilla de Harina", amount: 2, unit: "unit", foodName: "Tortilla (Flour)" }
        ]
    }
];

module.exports = recipes;
