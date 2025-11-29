const recipes = [
    // Breakfast
    {
        name: "Oatmeal with Berries",
        nameEs: "Avena con Frutos Rojos",
        description: "A healthy and filling breakfast with fiber and antioxidants.",
        instructions: "1. Cook oats with water or milk.\n2. Top with fresh berries and a drizzle of honey.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 300,
        protein: 10,
        carbs: 50,
        fat: 6,
        tags: "Breakfast,Vegetarian,HighFiber",
        ingredients: [
            { name: "Oats", amount: 50, unit: "g", foodName: "Oats" },
            { name: "Strawberries", amount: 50, unit: "g", foodName: "Strawberries" },
            { name: "Blueberries", amount: 30, unit: "g", foodName: "Blueberries" },
            { name: "Milk (Skim)", amount: 200, unit: "ml", foodName: "Milk (Skim)" }
        ]
    },
    {
        name: "Scrambled Eggs with Toast",
        nameEs: "Huevos Revueltos con Tostadas",
        description: "Classic protein-packed breakfast.",
        instructions: "1. Whisk eggs and cook in a pan.\n2. Serve with toasted whole wheat bread.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 350,
        protein: 20,
        carbs: 30,
        fat: 15,
        tags: "Breakfast,HighProtein",
        ingredients: [
            { name: "Egg", amount: 2, unit: "unit", foodName: "Egg" },
            { name: "Whole Wheat Bread", amount: 2, unit: "slice", foodName: "Whole Wheat Bread" },
            { name: "Butter", amount: 5, unit: "g", foodName: "Butter" }
        ]
    },
    {
        name: "Greek Yogurt Parfait",
        nameEs: "Parfait de Yogurt Griego",
        description: "High protein yogurt with granola and fruit.",
        instructions: "1. Layer yogurt, granola, and fruit in a glass.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 250,
        protein: 20,
        carbs: 30,
        fat: 5,
        tags: "Breakfast,HighProtein,NoCook",
        ingredients: [
            { name: "Greek Yogurt (Non-fat)", amount: 200, unit: "g", foodName: "Greek Yogurt (Non-fat)" },
            { name: "Banana", amount: 1, unit: "unit", foodName: "Banana" },
            { name: "Almonds", amount: 10, unit: "g", foodName: "Almonds" }
        ]
    },
    {
        name: "Avocado Toast with Egg",
        nameEs: "Tostada con Palta y Huevo",
        description: "Trendy and nutritious breakfast.",
        instructions: "1. Toast bread.\n2. Mash avocado and spread on toast.\n3. Top with a fried or poached egg.",
        prepTime: 10,
        cookTime: 5,
        servings: 1,
        calories: 400,
        protein: 15,
        carbs: 35,
        fat: 20,
        tags: "Breakfast,Vegetarian,HealthyFats",
        ingredients: [
            { name: "Whole Wheat Bread", amount: 2, unit: "slice", foodName: "Whole Wheat Bread" },
            { name: "Avocado", amount: 100, unit: "g", foodName: "Avocado" },
            { name: "Egg", amount: 1, unit: "unit", foodName: "Egg" }
        ]
    },
    {
        name: "Protein Pancakes",
        nameEs: "Panqueques de Proteína",
        description: "Fluffy pancakes made with protein powder and oats.",
        instructions: "1. Blend oats, egg, protein powder, and banana.\n2. Cook on a griddle.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 350,
        protein: 30,
        carbs: 40,
        fat: 8,
        tags: "Breakfast,HighProtein",
        ingredients: [
            { name: "Oats", amount: 40, unit: "g", foodName: "Oats" },
            { name: "Egg", amount: 1, unit: "unit", foodName: "Egg" },
            { name: "Banana", amount: 0.5, unit: "unit", foodName: "Banana" }
        ]
    },

    // Lunch
    {
        name: "Grilled Chicken Salad",
        nameEs: "Ensalada de Pollo a la Parrilla",
        description: "Light and fresh salad with grilled chicken breast.",
        instructions: "1. Grill chicken breast.\n2. Toss lettuce, cucumber, and tomato.\n3. Top with chicken and dressing.",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 350,
        protein: 40,
        carbs: 10,
        fat: 15,
        tags: "Lunch,HighProtein,LowCarb",
        ingredients: [
            { name: "Chicken Breast", amount: 150, unit: "g", foodName: "Chicken Breast" },
            { name: "Lettuce", amount: 100, unit: "g", foodName: "Lettuce" },
            { name: "Tomato", amount: 1, unit: "unit", foodName: "Tomato" },
            { name: "Cucumber", amount: 50, unit: "g", foodName: "Cucumber" },
            { name: "Olive Oil", amount: 10, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    {
        name: "Quinoa Bowl with Veggies",
        nameEs: "Bowl de Quinua con Verduras",
        description: "Nutritious bowl with quinoa and roasted vegetables.",
        instructions: "1. Cook quinoa.\n2. Roast bell peppers and zucchini.\n3. Combine and serve.",
        prepTime: 10,
        cookTime: 20,
        servings: 1,
        calories: 400,
        protein: 12,
        carbs: 60,
        fat: 10,
        tags: "Lunch,Vegetarian,Vegan,HighFiber",
        ingredients: [
            { name: "Quinoa (Cooked)", amount: 150, unit: "g", foodName: "Quinoa (Cooked)" },
            { name: "Bell Pepper", amount: 100, unit: "g", foodName: "Bell Pepper" },
            { name: "Zucchini", amount: 100, unit: "g", foodName: "Zucchini" },
            { name: "Olive Oil", amount: 5, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    {
        name: "Tuna Salad Sandwich",
        nameEs: "Sándwich de Ensalada de Atún",
        description: "Quick and easy tuna sandwich.",
        instructions: "1. Mix tuna with a bit of mayo or yogurt.\n2. Serve on whole wheat bread with lettuce.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 25,
        carbs: 35,
        fat: 10,
        tags: "Lunch,HighProtein",
        ingredients: [
            { name: "Tuna (Canned in Water)", amount: 100, unit: "g", foodName: "Tuna (Canned in Water)" },
            { name: "Whole Wheat Bread", amount: 2, unit: "slice", foodName: "Whole Wheat Bread" },
            { name: "Lettuce", amount: 20, unit: "g", foodName: "Lettuce" }
        ]
    },
    {
        name: "Lentil Soup",
        nameEs: "Sopa de Lentejas",
        description: "Hearty and warming lentil soup.",
        instructions: "1. Sauté onions and carrots.\n2. Add lentils and broth.\n3. Simmer until tender.",
        prepTime: 10,
        cookTime: 30,
        servings: 1,
        calories: 300,
        protein: 15,
        carbs: 45,
        fat: 5,
        tags: "Lunch,Vegan,HighFiber",
        ingredients: [
            { name: "Lentils (Cooked)", amount: 200, unit: "g", foodName: "Lentils (Cooked)" },
            { name: "Carrot", amount: 50, unit: "g", foodName: "Carrot" },
            { name: "Onion", amount: 50, unit: "g", foodName: "Onion" }
        ]
    },
    {
        name: "Chicken Burrito Bowl",
        nameEs: "Bowl de Burrito de Pollo",
        description: "Deconstructed burrito with rice, beans, and chicken.",
        instructions: "1. Assemble rice, beans, and grilled chicken.\n2. Top with salsa and avocado.",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 500,
        protein: 40,
        carbs: 55,
        fat: 15,
        tags: "Lunch,HighProtein",
        ingredients: [
            { name: "Chicken Breast", amount: 150, unit: "g", foodName: "Chicken Breast" },
            { name: "White Rice (Cooked)", amount: 100, unit: "g", foodName: "White Rice (Cooked)" },
            { name: "Avocado", amount: 50, unit: "g", foodName: "Avocado" }
        ]
    },

    // Dinner
    {
        name: "Baked Salmon with Asparagus",
        nameEs: "Salmón al Horno con Espárragos",
        description: "Healthy fats and protein dinner.",
        instructions: "1. Season salmon and asparagus.\n2. Bake at 200°C for 15-20 mins.",
        prepTime: 5,
        cookTime: 20,
        servings: 1,
        calories: 450,
        protein: 35,
        carbs: 5,
        fat: 30,
        tags: "Dinner,HighProtein,Keto,HealthyFats",
        ingredients: [
            { name: "Salmon", amount: 150, unit: "g", foodName: "Salmon" },
            { name: "Olive Oil", amount: 10, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    {
        name: "Beef Stir-Fry",
        nameEs: "Salteado de Carne",
        description: "Quick beef stir-fry with vegetables.",
        instructions: "1. Slice beef and veggies.\n2. Stir-fry in a hot pan with soy sauce.",
        prepTime: 15,
        cookTime: 10,
        servings: 1,
        calories: 400,
        protein: 30,
        carbs: 15,
        fat: 20,
        tags: "Dinner,HighProtein",
        ingredients: [
            { name: "Beef (Lean)", amount: 150, unit: "g", foodName: "Beef (Lean)" },
            { name: "Broccoli", amount: 100, unit: "g", foodName: "Broccoli" },
            { name: "Bell Pepper", amount: 50, unit: "g", foodName: "Bell Pepper" },
            { name: "Onion", amount: 30, unit: "g", foodName: "Onion" }
        ]
    },
    {
        name: "Spaghetti Bolognese (Lean)",
        nameEs: "Espagueti a la Boloñesa (Magro)",
        description: "Classic pasta dish made with lean ground beef.",
        instructions: "1. Brown beef with onions.\n2. Add tomato sauce and simmer.\n3. Serve over pasta.",
        prepTime: 10,
        cookTime: 30,
        servings: 1,
        calories: 500,
        protein: 30,
        carbs: 60,
        fat: 12,
        tags: "Dinner,HighProtein",
        ingredients: [
            { name: "Ground Beef (5% fat)", amount: 100, unit: "g", foodName: "Ground Beef (5% fat)" },
            { name: "Pasta (Cooked)", amount: 150, unit: "g", foodName: "Pasta (Cooked)" },
            { name: "Tomato", amount: 100, unit: "g", foodName: "Tomato" },
            { name: "Onion", amount: 50, unit: "g", foodName: "Onion" }
        ]
    },
    {
        name: "Tofu Stir-Fry",
        nameEs: "Salteado de Tofu",
        description: "Vegetarian stir-fry with tofu and veggies.",
        instructions: "1. Press tofu and cube.\n2. Stir-fry with veggies and soy sauce.",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 350,
        protein: 15,
        carbs: 20,
        fat: 20,
        tags: "Dinner,Vegetarian,Vegan",
        ingredients: [
            { name: "Tofu", amount: 150, unit: "g", foodName: "Tofu" },
            { name: "Broccoli", amount: 100, unit: "g", foodName: "Broccoli" },
            { name: "Carrot", amount: 50, unit: "g", foodName: "Carrot" }
        ]
    },
    {
        name: "Chicken Curry with Rice",
        nameEs: "Curry de Pollo con Arroz",
        description: "Flavorful chicken curry served with rice.",
        instructions: "1. Cook chicken with curry spices and coconut milk.\n2. Serve over rice.",
        prepTime: 15,
        cookTime: 30,
        servings: 1,
        calories: 550,
        protein: 35,
        carbs: 50,
        fat: 20,
        tags: "Dinner,HighProtein",
        ingredients: [
            { name: "Chicken Thigh", amount: 150, unit: "g", foodName: "Chicken Thigh" },
            { name: "White Rice (Cooked)", amount: 150, unit: "g", foodName: "White Rice (Cooked)" },
            { name: "Onion", amount: 50, unit: "g", foodName: "Onion" }
        ]
    },

    // Snacks
    {
        name: "Apple with Peanut Butter",
        nameEs: "Manzana con Mantequilla de Maní",
        description: "Simple and satisfying snack.",
        instructions: "1. Slice apple.\n2. Dip in peanut butter.",
        prepTime: 2,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 5,
        carbs: 25,
        fat: 10,
        tags: "Snack,Vegetarian",
        ingredients: [
            { name: "Apple", amount: 1, unit: "unit", foodName: "Apple" },
            { name: "Peanut Butter", amount: 15, unit: "g", foodName: "Peanut Butter" }
        ]
    },
    {
        name: "Hard Boiled Eggs",
        nameEs: "Huevos Duros",
        description: "Protein snack on the go.",
        instructions: "1. Boil eggs for 10 mins.\n2. Peel and eat.",
        prepTime: 1,
        cookTime: 10,
        servings: 1,
        calories: 140,
        protein: 12,
        carbs: 1,
        fat: 10,
        tags: "Snack,HighProtein,Keto",
        ingredients: [
            { name: "Egg", amount: 2, unit: "unit", foodName: "Egg" }
        ]
    },
    {
        name: "Almonds and Cheese",
        nameEs: "Almendras y Queso",
        description: "Savory snack combo.",
        instructions: "1. Serve almonds with cheese cubes.",
        prepTime: 1,
        cookTime: 0,
        servings: 1,
        calories: 250,
        protein: 10,
        carbs: 5,
        fat: 20,
        tags: "Snack,Keto,LowCarb",
        ingredients: [
            { name: "Almonds", amount: 20, unit: "g", foodName: "Almonds" },
            { name: "Cheese (Cheddar)", amount: 30, unit: "g", foodName: "Cheese (Cheddar)" }
        ]
    },
    {
        name: "Protein Shake",
        nameEs: "Batido de Proteína",
        description: "Quick post-workout shake.",
        instructions: "1. Mix protein powder with water or milk.",
        prepTime: 2,
        cookTime: 0,
        servings: 1,
        calories: 150,
        protein: 25,
        carbs: 5,
        fat: 2,
        tags: "Snack,HighProtein",
        ingredients: [
            { name: "Milk (Skim)", amount: 250, unit: "ml", foodName: "Milk (Skim)" }
        ]
    },
    {
        name: "Carrot Sticks with Hummus",
        nameEs: "Bastones de Zanahoria con Hummus",
        description: "Crunchy and creamy snack.",
        instructions: "1. Cut carrots into sticks.\n2. Serve with hummus.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 150,
        protein: 5,
        carbs: 20,
        fat: 7,
        tags: "Snack,Vegetarian,Vegan",
        ingredients: [
            { name: "Carrot", amount: 100, unit: "g", foodName: "Carrot" }
        ]
    },
    // More Lunch/Dinner
    {
        name: "Turkey Meatballs with Zucchini Noodles",
        nameEs: "Albóndigas de Pavo con Tallarines de Zapallo Italiano",
        description: "Low carb alternative to spaghetti and meatballs.",
        instructions: "1. Form turkey meatballs and bake.\n2. Spiralize zucchini and sauté.\n3. Serve with marinara sauce.",
        prepTime: 20,
        cookTime: 20,
        servings: 1,
        calories: 350,
        protein: 35,
        carbs: 10,
        fat: 15,
        tags: "Dinner,LowCarb,HighProtein",
        ingredients: [
            { name: "Turkey Breast", amount: 150, unit: "g", foodName: "Turkey Breast" },
            { name: "Zucchini", amount: 200, unit: "g", foodName: "Zucchini" },
            { name: "Tomato", amount: 100, unit: "g", foodName: "Tomato" }
        ]
    },
    {
        name: "Shrimp Stir-Fry",
        nameEs: "Salteado de Camarones",
        description: "Quick and light seafood dinner.",
        instructions: "1. Stir-fry shrimp with snap peas and bell peppers.\n2. Season with soy sauce and ginger.",
        prepTime: 10,
        cookTime: 5,
        servings: 1,
        calories: 250,
        protein: 25,
        carbs: 10,
        fat: 5,
        tags: "Dinner,HighProtein,LowCarb",
        ingredients: [
            { name: "Shrimp (Cooked)", amount: 150, unit: "g", foodName: "Shrimp (Cooked)" },
            { name: "Bell Pepper", amount: 100, unit: "g", foodName: "Bell Pepper" },
            { name: "Green Beans", amount: 100, unit: "g", foodName: "Green Beans" }
        ]
    },
    {
        name: "Vegetable Omelette",
        nameEs: "Omelette de Verduras",
        description: "Breakfast for dinner or a hearty start.",
        instructions: "1. Whisk eggs.\n2. Sauté spinach, onions, and mushrooms.\n3. Cook omelette with veggies inside.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 300,
        protein: 18,
        carbs: 5,
        fat: 20,
        tags: "Breakfast,Dinner,Vegetarian,Keto",
        ingredients: [
            { name: "Egg", amount: 3, unit: "unit", foodName: "Egg" },
            { name: "Spinach", amount: 50, unit: "g", foodName: "Spinach" },
            { name: "Onion", amount: 30, unit: "g", foodName: "Onion" }
        ]
    },
    {
        name: "Chicken and Rice Soup",
        nameEs: "Sopa de Pollo con Arroz",
        description: "Comforting soup for any day.",
        instructions: "1. Simmer chicken, rice, carrots, and celery in broth.",
        prepTime: 10,
        cookTime: 30,
        servings: 1,
        calories: 350,
        protein: 25,
        carbs: 40,
        fat: 8,
        tags: "Lunch,Dinner,HighProtein",
        ingredients: [
            { name: "Chicken Breast", amount: 100, unit: "g", foodName: "Chicken Breast" },
            { name: "White Rice (Cooked)", amount: 100, unit: "g", foodName: "White Rice (Cooked)" },
            { name: "Carrot", amount: 50, unit: "g", foodName: "Carrot" }
        ]
    },
    {
        name: "Cottage Cheese Bowl",
        nameEs: "Bowl de Queso Cottage",
        description: "High protein snack or light meal.",
        instructions: "1. Top cottage cheese with fruit or nuts.",
        prepTime: 2,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 20,
        carbs: 10,
        fat: 5,
        tags: "Snack,HighProtein",
        ingredients: [
            { name: "Cottage Cheese", amount: 150, unit: "g", foodName: "Cottage Cheese" },
            { name: "Blueberries", amount: 50, unit: "g", foodName: "Blueberries" }
        ]
    },
    {
        name: "Beef Tacos (Lettuce Wrap)",
        nameEs: "Tacos de Carne (Envoltura de Lechuga)",
        description: "Low carb tacos using lettuce leaves.",
        instructions: "1. Cook ground beef with taco seasoning.\n2. Serve in lettuce leaves with salsa.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 300,
        protein: 25,
        carbs: 5,
        fat: 15,
        tags: "Dinner,LowCarb,HighProtein",
        ingredients: [
            { name: "Ground Beef (5% fat)", amount: 100, unit: "g", foodName: "Ground Beef (5% fat)" },
            { name: "Lettuce", amount: 50, unit: "g", foodName: "Lettuce" },
            { name: "Tomato", amount: 50, unit: "g", foodName: "Tomato" }
        ]
    },
    {
        name: "Chia Pudding",
        nameEs: "Pudín de Chía",
        description: "Prepare ahead breakfast or snack.",
        instructions: "1. Mix chia seeds with milk and sweetener.\n2. Let sit overnight.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 250,
        protein: 10,
        carbs: 20,
        fat: 15,
        tags: "Breakfast,Snack,Vegetarian,HighFiber",
        ingredients: [
            { name: "Chia Seeds", amount: 30, unit: "g", foodName: "Chia Seeds" },
            { name: "Milk (Skim)", amount: 150, unit: "ml", foodName: "Milk (Skim)" }
        ]
    },
    {
        name: "Baked Sweet Potato",
        nameEs: "Camote al Horno",
        description: "Simple side or light meal.",
        instructions: "1. Bake sweet potato until tender.\n2. Top with a bit of butter or cinnamon.",
        prepTime: 2,
        cookTime: 45,
        servings: 1,
        calories: 150,
        protein: 2,
        carbs: 35,
        fat: 0,
        tags: "Snack,Side,Vegetarian",
        ingredients: [
            { name: "Sweet Potato (Boiled)", amount: 150, unit: "g", foodName: "Sweet Potato (Boiled)" }
        ]
    },
    {
        name: "Fruit Salad",
        nameEs: "Ensalada de Frutas",
        description: "Refreshing mix of seasonal fruits.",
        instructions: "1. Chop all fruits.\n2. Mix in a bowl.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 150,
        protein: 2,
        carbs: 35,
        fat: 0,
        tags: "Snack,Dessert,Vegan",
        ingredients: [
            { name: "Apple", amount: 0.5, unit: "unit", foodName: "Apple" },
            { name: "Banana", amount: 0.5, unit: "unit", foodName: "Banana" },
            { name: "Orange", amount: 0.5, unit: "unit", foodName: "Orange" }
        ]
    },
    {
        name: "Caprese Salad",
        nameEs: "Ensalada Caprese",
        description: "Fresh tomato and mozzarella salad.",
        instructions: "1. Slice tomatoes and mozzarella.\n2. Layer with basil and drizzle with olive oil.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 300,
        protein: 15,
        carbs: 5,
        fat: 20,
        tags: "Lunch,Snack,Vegetarian,Keto",
        ingredients: [
            { name: "Tomato", amount: 150, unit: "g", foodName: "Tomato" },
            { name: "Cheese (Mozzarella)", amount: 50, unit: "g", foodName: "Cheese (Mozzarella)" },
            { name: "Olive Oil", amount: 10, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    // Batch 2: Smoothies, Salads, Wraps
    {
        name: "Green Detox Smoothie",
        nameEs: "Batido Verde Detox",
        description: "Packed with greens and fruit.",
        instructions: "1. Blend spinach, apple, cucumber, and water.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 120,
        protein: 2,
        carbs: 28,
        fat: 0,
        tags: "Snack,Breakfast,Vegan,Detox",
        ingredients: [
            { name: "Spinach", amount: 50, unit: "g", foodName: "Spinach" },
            { name: "Apple", amount: 1, unit: "unit", foodName: "Apple" },
            { name: "Cucumber", amount: 50, unit: "g", foodName: "Cucumber" }
        ]
    },
    {
        name: "Berry Blast Smoothie",
        nameEs: "Batido de Frutos Rojos",
        description: "Antioxidant rich smoothie.",
        instructions: "1. Blend mixed berries, yogurt, and milk.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 10,
        carbs: 35,
        fat: 2,
        tags: "Snack,Breakfast,Vegetarian",
        ingredients: [
            { name: "Strawberries", amount: 50, unit: "g", foodName: "Strawberries" },
            { name: "Blueberries", amount: 50, unit: "g", foodName: "Blueberries" },
            { name: "Yogurt (Plain)", amount: 100, unit: "g", foodName: "Yogurt (Plain)" },
            { name: "Milk (Skim)", amount: 100, unit: "ml", foodName: "Milk (Skim)" }
        ]
    },
    {
        name: "Chicken Caesar Wrap",
        nameEs: "Wrap César de Pollo",
        description: "Classic Caesar salad in a wrap.",
        instructions: "1. Toss lettuce and chicken with caesar dressing.\n2. Wrap in a tortilla.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 450,
        protein: 30,
        carbs: 35,
        fat: 20,
        tags: "Lunch,HighProtein",
        ingredients: [
            { name: "Chicken Breast", amount: 100, unit: "g", foodName: "Chicken Breast" },
            { name: "Tortilla (Flour)", amount: 1, unit: "unit", foodName: "Tortilla (Flour)" },
            { name: "Lettuce", amount: 50, unit: "g", foodName: "Lettuce" },
            { name: "Cheese (Mozzarella)", amount: 20, unit: "g", foodName: "Cheese (Mozzarella)" }
        ]
    },
    {
        name: "Veggie Hummus Wrap",
        nameEs: "Wrap de Vegetales y Hummus",
        description: "Fresh and crunchy vegan wrap.",
        instructions: "1. Spread hummus on tortilla.\n2. Add sliced veggies and roll.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 10,
        carbs: 45,
        fat: 12,
        tags: "Lunch,Vegan,Vegetarian",
        ingredients: [
            { name: "Tortilla (Flour)", amount: 1, unit: "unit", foodName: "Tortilla (Flour)" },
            { name: "Cucumber", amount: 50, unit: "g", foodName: "Cucumber" },
            { name: "Bell Pepper", amount: 50, unit: "g", foodName: "Bell Pepper" },
            { name: "Spinach", amount: 30, unit: "g", foodName: "Spinach" }
        ]
    },
    {
        name: "Mediterranean Quinoa Salad",
        nameEs: "Ensalada Mediterránea de Quinua",
        description: "Quinoa with cucumber, tomato, and olives.",
        instructions: "1. Mix cooked quinoa with chopped veggies.\n2. Dress with olive oil and lemon.",
        prepTime: 15,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 8,
        carbs: 45,
        fat: 15,
        tags: "Lunch,Vegan,Vegetarian,GlutenFree",
        ingredients: [
            { name: "Quinoa (Cooked)", amount: 150, unit: "g", foodName: "Quinoa (Cooked)" },
            { name: "Cucumber", amount: 50, unit: "g", foodName: "Cucumber" },
            { name: "Tomato", amount: 50, unit: "g", foodName: "Tomato" },
            { name: "Olive Oil", amount: 10, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    {
        name: "Cobb Salad (Light)",
        nameEs: "Ensalada Cobb (Ligera)",
        description: "Lighter version of the classic Cobb.",
        instructions: "1. Assemble greens, chicken, egg, and avocado.\n2. Drizzle with light dressing.",
        prepTime: 15,
        cookTime: 0,
        servings: 1,
        calories: 400,
        protein: 35,
        carbs: 10,
        fat: 25,
        tags: "Lunch,Dinner,HighProtein,Keto",
        ingredients: [
            { name: "Chicken Breast", amount: 100, unit: "g", foodName: "Chicken Breast" },
            { name: "Egg", amount: 1, unit: "unit", foodName: "Egg" },
            { name: "Avocado", amount: 50, unit: "g", foodName: "Avocado" },
            { name: "Lettuce", amount: 100, unit: "g", foodName: "Lettuce" }
        ]
    },
    {
        name: "Pasta Primavera",
        nameEs: "Pasta Primavera",
        description: "Pasta with fresh spring vegetables.",
        instructions: "1. Cook pasta.\n2. Sauté veggies.\n3. Toss together with olive oil.",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 400,
        protein: 12,
        carbs: 65,
        fat: 10,
        tags: "Dinner,Vegetarian",
        ingredients: [
            { name: "Pasta (Cooked)", amount: 150, unit: "g", foodName: "Pasta (Cooked)" },
            { name: "Broccoli", amount: 50, unit: "g", foodName: "Broccoli" },
            { name: "Carrot", amount: 50, unit: "g", foodName: "Carrot" },
            { name: "Bell Pepper", amount: 50, unit: "g", foodName: "Bell Pepper" }
        ]
    },
    {
        name: "Pesto Chicken Pasta",
        nameEs: "Pasta con Pollo al Pesto",
        description: "Flavorful pasta with chicken and pesto.",
        instructions: "1. Cook pasta and chicken.\n2. Toss with pesto sauce.",
        prepTime: 10,
        cookTime: 20,
        servings: 1,
        calories: 500,
        protein: 35,
        carbs: 50,
        fat: 20,
        tags: "Dinner,HighProtein",
        ingredients: [
            { name: "Pasta (Cooked)", amount: 100, unit: "g", foodName: "Pasta (Cooked)" },
            { name: "Chicken Breast", amount: 100, unit: "g", foodName: "Chicken Breast" },
            { name: "Olive Oil", amount: 10, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    {
        name: "Rice and Beans",
        nameEs: "Arroz con Porotos",
        description: "Simple and complete protein meal.",
        instructions: "1. Mix cooked rice and beans.\n2. Season to taste.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 12,
        carbs: 65,
        fat: 2,
        tags: "Lunch,Dinner,Vegan,Vegetarian",
        ingredients: [
            { name: "White Rice (Cooked)", amount: 150, unit: "g", foodName: "White Rice (Cooked)" },
            { name: "Lentils (Cooked)", amount: 100, unit: "g", foodName: "Lentils (Cooked)" }
        ]
    },
    {
        name: "Fried Rice with Egg",
        nameEs: "Arroz Chaufa con Huevo",
        description: "Quick fried rice with veggies and egg.",
        instructions: "1. Stir-fry veggies and rice.\n2. Scramble egg into the mix.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 400,
        protein: 15,
        carbs: 55,
        fat: 12,
        tags: "Dinner,Vegetarian",
        ingredients: [
            { name: "White Rice (Cooked)", amount: 150, unit: "g", foodName: "White Rice (Cooked)" },
            { name: "Egg", amount: 2, unit: "unit", foodName: "Egg" },
            { name: "Onion", amount: 30, unit: "g", foodName: "Onion" },
            { name: "Carrot", amount: 30, unit: "g", foodName: "Carrot" }
        ]
    },
    {
        name: "Lemon Herb Chicken",
        nameEs: "Pollo a las Hierbas y Limón",
        description: "Zesty grilled chicken.",
        instructions: "1. Marinate chicken in lemon and herbs.\n2. Grill until cooked.",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 200,
        protein: 30,
        carbs: 0,
        fat: 8,
        tags: "Dinner,HighProtein,LowCarb,Keto",
        ingredients: [
            { name: "Chicken Breast", amount: 150, unit: "g", foodName: "Chicken Breast" },
            { name: "Olive Oil", amount: 5, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    {
        name: "Chicken Fajitas",
        nameEs: "Fajitas de Pollo",
        description: "Sizzling chicken and peppers.",
        instructions: "1. Sauté chicken strips with peppers and onions.\n2. Serve with tortillas.",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 450,
        protein: 35,
        carbs: 40,
        fat: 15,
        tags: "Dinner,HighProtein",
        ingredients: [
            { name: "Chicken Breast", amount: 150, unit: "g", foodName: "Chicken Breast" },
            { name: "Bell Pepper", amount: 100, unit: "g", foodName: "Bell Pepper" },
            { name: "Onion", amount: 50, unit: "g", foodName: "Onion" },
            { name: "Tortilla (Flour)", amount: 2, unit: "unit", foodName: "Tortilla (Flour)" }
        ]
    },
    {
        name: "Baked Cod",
        nameEs: "Bacalao al Horno",
        description: "Light white fish dinner.",
        instructions: "1. Season cod with herbs.\n2. Bake at 200°C for 15 mins.",
        prepTime: 5,
        cookTime: 15,
        servings: 1,
        calories: 150,
        protein: 30,
        carbs: 0,
        fat: 1,
        tags: "Dinner,HighProtein,LowCarb",
        ingredients: [
            { name: "Tuna (Canned in Water)", amount: 150, unit: "g", foodName: "Tuna (Canned in Water)" } // Placeholder for white fish
        ]
    },
    {
        name: "Tuna Patties",
        nameEs: "Hamburguesas de Atún",
        description: "Easy canned tuna patties.",
        instructions: "1. Mix tuna, egg, and breadcrumbs.\n2. Form patties and pan-fry.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 250,
        protein: 30,
        carbs: 10,
        fat: 8,
        tags: "Lunch,Dinner,HighProtein",
        ingredients: [
            { name: "Tuna (Canned in Water)", amount: 150, unit: "g", foodName: "Tuna (Canned in Water)" },
            { name: "Egg", amount: 1, unit: "unit", foodName: "Egg" }
        ]
    },
    {
        name: "Stuffed Bell Peppers",
        nameEs: "Pimentones Rellenos",
        description: "Peppers stuffed with meat and rice.",
        instructions: "1. Mix ground beef and rice.\n2. Stuff into peppers and bake.",
        prepTime: 20,
        cookTime: 40,
        servings: 1,
        calories: 400,
        protein: 25,
        carbs: 30,
        fat: 15,
        tags: "Dinner,HighProtein",
        ingredients: [
            { name: "Ground Beef (5% fat)", amount: 100, unit: "g", foodName: "Ground Beef (5% fat)" },
            { name: "White Rice (Cooked)", amount: 50, unit: "g", foodName: "White Rice (Cooked)" },
            { name: "Bell Pepper", amount: 200, unit: "g", foodName: "Bell Pepper" }
        ]
    },
    // Batch 3: More Variety
    {
        name: "Spinach and Feta Omelette",
        nameEs: "Omelette de Espinaca y Feta",
        description: "Savory breakfast omelette.",
        instructions: "1. Whisk eggs.\n2. Add spinach and feta cheese.\n3. Cook until set.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 300,
        protein: 18,
        carbs: 2,
        fat: 22,
        tags: "Breakfast,Keto,Vegetarian",
        ingredients: [
            { name: "Egg", amount: 3, unit: "unit", foodName: "Egg" },
            { name: "Spinach", amount: 50, unit: "g", foodName: "Spinach" },
            { name: "Cheese (Mozzarella)", amount: 30, unit: "g", foodName: "Cheese (Mozzarella)" } // Feta sub
        ]
    },
    {
        name: "Banana Pancakes",
        nameEs: "Panqueques de Plátano",
        description: "Simple 2-ingredient pancakes.",
        instructions: "1. Mash banana and mix with eggs.\n2. Cook on a griddle.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 250,
        protein: 14,
        carbs: 25,
        fat: 10,
        tags: "Breakfast,GlutenFree,Paleo",
        ingredients: [
            { name: "Banana", amount: 1, unit: "unit", foodName: "Banana" },
            { name: "Egg", amount: 2, unit: "unit", foodName: "Egg" }
        ]
    },
    {
        name: "Yogurt with Flax Seeds",
        nameEs: "Yogurt con Semillas de Linaza",
        description: "Gut-healthy snack.",
        instructions: "1. Mix yogurt with flax seeds.",
        prepTime: 1,
        cookTime: 0,
        servings: 1,
        calories: 150,
        protein: 12,
        carbs: 8,
        fat: 6,
        tags: "Snack,Vegetarian",
        ingredients: [
            { name: "Yogurt (Plain)", amount: 150, unit: "g", foodName: "Yogurt (Plain)" },
            { name: "Flax Seeds", amount: 10, unit: "g", foodName: "Flax Seeds" }
        ]
    },
    {
        name: "Cucumber Salad",
        nameEs: "Ensalada de Pepino",
        description: "Refreshing side salad.",
        instructions: "1. Slice cucumber and onion.\n2. Dress with vinegar and oil.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 100,
        protein: 1,
        carbs: 5,
        fat: 8,
        tags: "Side,Vegan,Keto",
        ingredients: [
            { name: "Cucumber", amount: 150, unit: "g", foodName: "Cucumber" },
            { name: "Onion", amount: 20, unit: "g", foodName: "Onion" },
            { name: "Olive Oil", amount: 5, unit: "ml", foodName: "Olive Oil" }
        ]
    },
    {
        name: "Pork Stir-Fry",
        nameEs: "Salteado de Cerdo",
        description: "Lean pork stir-fry with veggies.",
        instructions: "1. Slice pork loin strips.\n2. Stir-fry with broccoli and carrots.",
        prepTime: 15,
        cookTime: 10,
        servings: 1,
        calories: 350,
        protein: 30,
        carbs: 15,
        fat: 15,
        tags: "Dinner,HighProtein",
        ingredients: [
            { name: "Pork Loin", amount: 150, unit: "g", foodName: "Pork Loin" },
            { name: "Broccoli", amount: 100, unit: "g", foodName: "Broccoli" },
            { name: "Carrot", amount: 50, unit: "g", foodName: "Carrot" }
        ]
    },
    {
        name: "Grilled Pork Chops",
        nameEs: "Chuletas de Cerdo a la Parrilla",
        description: "Juicy grilled pork chops.",
        instructions: "1. Season pork chops.\n2. Grill until cooked through.",
        prepTime: 5,
        cookTime: 15,
        servings: 1,
        calories: 300,
        protein: 35,
        carbs: 0,
        fat: 15,
        tags: "Dinner,HighProtein,Keto",
        ingredients: [
            { name: "Pork Loin", amount: 200, unit: "g", foodName: "Pork Loin" }
        ]
    },
    {
        name: "Cauliflower Rice Stir-Fry",
        nameEs: "Salteado de Arroz de Coliflor",
        description: "Low carb fried rice alternative.",
        instructions: "1. Riced cauliflower sautéed with veggies and egg.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 200,
        protein: 10,
        carbs: 15,
        fat: 10,
        tags: "Dinner,LowCarb,Vegetarian",
        ingredients: [
            { name: "Broccoli", amount: 100, unit: "g", foodName: "Broccoli" }, // Cauliflower sub
            { name: "Egg", amount: 1, unit: "unit", foodName: "Egg" },
            { name: "Carrot", amount: 50, unit: "g", foodName: "Carrot" }
        ]
    },
    {
        name: "Zucchini Boats",
        nameEs: "Barcos de Zapallo Italiano",
        description: "Hollowed zucchini stuffed with meat.",
        instructions: "1. Hollow out zucchini.\n2. Stuff with cooked ground beef and tomato.\n3. Bake.",
        prepTime: 15,
        cookTime: 20,
        servings: 1,
        calories: 300,
        protein: 25,
        carbs: 10,
        fat: 15,
        tags: "Dinner,LowCarb,HighProtein",
        ingredients: [
            { name: "Zucchini", amount: 200, unit: "g", foodName: "Zucchini" },
            { name: "Ground Beef (5% fat)", amount: 100, unit: "g", foodName: "Ground Beef (5% fat)" },
            { name: "Tomato", amount: 50, unit: "g", foodName: "Tomato" }
        ]
    },
    {
        name: "Egg Salad",
        nameEs: "Ensalada de Huevo",
        description: "Creamy egg salad.",
        instructions: "1. Chop boiled eggs.\n2. Mix with mayo (or yogurt) and mustard.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 250,
        protein: 15,
        carbs: 2,
        fat: 18,
        tags: "Lunch,Snack,Keto,Vegetarian",
        ingredients: [
            { name: "Egg", amount: 2, unit: "unit", foodName: "Egg" },
            { name: "Yogurt (Plain)", amount: 30, unit: "g", foodName: "Yogurt (Plain)" }
        ]
    },
    {
        name: "Chocolate Protein Mousse",
        nameEs: "Mousse de Proteína de Chocolate",
        description: "Healthy dessert mousse.",
        instructions: "1. Blend avocado, cocoa powder, and sweetener.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 250,
        protein: 5,
        carbs: 15,
        fat: 20,
        tags: "Dessert,Vegan,Keto",
        ingredients: [
            { name: "Avocado", amount: 100, unit: "g", foodName: "Avocado" }
        ]
    },
    {
        name: "Baked Apple",
        nameEs: "Manzana Asada",
        description: "Warm and sweet dessert.",
        instructions: "1. Core apple and sprinkle with cinnamon.\n2. Bake until soft.",
        prepTime: 5,
        cookTime: 30,
        servings: 1,
        calories: 100,
        protein: 0,
        carbs: 25,
        fat: 0,
        tags: "Dessert,Vegan,LowFat",
        ingredients: [
            { name: "Apple", amount: 1, unit: "unit", foodName: "Apple" }
        ]
    },
    {
        name: "Frozen Grapes",
        nameEs: "Uvas Congeladas",
        description: "Simple frozen treat.",
        instructions: "1. Freeze grapes for 2 hours.",
        prepTime: 1,
        cookTime: 0,
        servings: 1,
        calories: 100,
        protein: 1,
        carbs: 25,
        fat: 0,
        tags: "Snack,Dessert,Vegan",
        ingredients: [
            { name: "Grapes", amount: 150, unit: "g", foodName: "Grapes" }
        ]
    },
    {
        name: "Peanut Butter Banana Smoothie",
        nameEs: "Batido de Plátano y Mantequilla de Maní",
        description: "Rich and creamy smoothie.",
        instructions: "1. Blend banana, peanut butter, and milk.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 15,
        carbs: 40,
        fat: 15,
        tags: "Breakfast,Snack,HighProtein",
        ingredients: [
            { name: "Banana", amount: 1, unit: "unit", foodName: "Banana" },
            { name: "Peanut Butter", amount: 30, unit: "g", foodName: "Peanut Butter" },
            { name: "Milk (Skim)", amount: 200, unit: "ml", foodName: "Milk (Skim)" }
        ]
    },
    {
        name: "Strawberry Spinach Salad",
        nameEs: "Ensalada de Espinaca y Frutillas",
        description: "Sweet and savory salad.",
        instructions: "1. Toss spinach and sliced strawberries.\n2. Add nuts and dressing.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 5,
        carbs: 15,
        fat: 15,
        tags: "Lunch,Side,Vegetarian",
        ingredients: [
            { name: "Spinach", amount: 50, unit: "g", foodName: "Spinach" },
            { name: "Strawberries", amount: 100, unit: "g", foodName: "Strawberries" },
            { name: "Walnuts", amount: 20, unit: "g", foodName: "Walnuts" }
        ]
    },
    {
        name: "Chicken Noodle Soup (Healthy)",
        nameEs: "Sopa de Pollo con Fideos (Saludable)",
        description: "Classic soup with whole wheat pasta.",
        instructions: "1. Simmer chicken, veggies, and pasta in broth.",
        prepTime: 10,
        cookTime: 20,
        servings: 1,
        calories: 300,
        protein: 25,
        carbs: 35,
        fat: 5,
        tags: "Lunch,Dinner,HighProtein",
        ingredients: [
            { name: "Chicken Breast", amount: 100, unit: "g", foodName: "Chicken Breast" },
            { name: "Pasta (Cooked)", amount: 50, unit: "g", foodName: "Pasta (Cooked)" },
            { name: "Carrot", amount: 50, unit: "g", foodName: "Carrot" }
        ]
    },
    {
        name: "Turkey Burger (No Bun)",
        nameEs: "Hamburguesa de Pavo (Sin Pan)",
        description: "Lean burger patty with salad.",
        instructions: "1. Grill turkey burger.\n2. Serve on a bed of lettuce.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 250,
        protein: 30,
        carbs: 5,
        fat: 10,
        tags: "Dinner,HighProtein,LowCarb",
        ingredients: [
            { name: "Turkey Breast", amount: 150, unit: "g", foodName: "Turkey Breast" }, // Ground turkey sub
            { name: "Lettuce", amount: 50, unit: "g", foodName: "Lettuce" },
            { name: "Tomato", amount: 50, unit: "g", foodName: "Tomato" }
        ]
    },
    {
        name: "Quinoa Porridge",
        nameEs: "Gachas de Quinua",
        description: "Warm breakfast alternative to oats.",
        instructions: "1. Cook quinoa with milk and cinnamon.",
        prepTime: 5,
        cookTime: 15,
        servings: 1,
        calories: 300,
        protein: 10,
        carbs: 45,
        fat: 6,
        tags: "Breakfast,Vegetarian,GlutenFree",
        ingredients: [
            { name: "Quinoa (Cooked)", amount: 150, unit: "g", foodName: "Quinoa (Cooked)" },
            { name: "Milk (Skim)", amount: 150, unit: "ml", foodName: "Milk (Skim)" },
            { name: "Apple", amount: 0.5, unit: "unit", foodName: "Apple" }
        ]
    },
    {
        name: "Tuna Melt (Open Face)",
        nameEs: "Tuna Melt (Abierto)",
        description: "Tuna and melted cheese on toast.",
        instructions: "1. Top toast with tuna and cheese.\n2. Broil until melted.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 350,
        protein: 30,
        carbs: 20,
        fat: 15,
        tags: "Lunch,HighProtein",
        ingredients: [
            { name: "Tuna (Canned in Water)", amount: 100, unit: "g", foodName: "Tuna (Canned in Water)" },
            { name: "Whole Wheat Bread", amount: 1, unit: "slice", foodName: "Whole Wheat Bread" },
            { name: "Cheese (Cheddar)", amount: 30, unit: "g", foodName: "Cheese (Cheddar)" }
        ]
    },
    {
        name: "Bell Pepper Nachos",
        nameEs: "Nachos de Pimentón",
        description: "Low carb nachos using pepper slices.",
        instructions: "1. Slice peppers.\n2. Top with beef and cheese.\n3. Bake.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 350,
        protein: 25,
        carbs: 15,
        fat: 20,
        tags: "Snack,Dinner,LowCarb,HighProtein",
        ingredients: [
            { name: "Bell Pepper", amount: 150, unit: "g", foodName: "Bell Pepper" },
            { name: "Ground Beef (5% fat)", amount: 100, unit: "g", foodName: "Ground Beef (5% fat)" },
            { name: "Cheese (Cheddar)", amount: 30, unit: "g", foodName: "Cheese (Cheddar)" }
        ]
    },
    {
        name: "Cottage Cheese Pancakes",
        nameEs: "Panqueques de Queso Cottage",
        description: "High protein pancakes.",
        instructions: "1. Blend cottage cheese, eggs, and oats.\n2. Cook on griddle.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 300,
        protein: 25,
        carbs: 30,
        fat: 8,
        tags: "Breakfast,HighProtein",
        ingredients: [
            { name: "Cottage Cheese", amount: 100, unit: "g", foodName: "Cottage Cheese" },
            { name: "Egg", amount: 2, unit: "unit", foodName: "Egg" },
            { name: "Oats", amount: 30, unit: "g", foodName: "Oats" }
        ]
    }
];

module.exports = recipes;
