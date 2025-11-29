const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const foods = [
    // Proteins
    { name: 'Chicken Breast', nameEs: 'Pechuga de Pollo', caloriesPer100g: 165, proteinPer100g: 31, carbsPer100g: 0, fatPer100g: 3.6, category: 'Protein' },
    { name: 'Chicken Thigh', nameEs: 'Muslo de Pollo', caloriesPer100g: 209, proteinPer100g: 26, carbsPer100g: 0, fatPer100g: 10.9, category: 'Protein' },
    { name: 'Beef (Lean)', nameEs: 'Carne de Vacuno (Magra)', caloriesPer100g: 250, proteinPer100g: 26, carbsPer100g: 0, fatPer100g: 15, category: 'Protein' },
    { name: 'Ground Beef (5% fat)', nameEs: 'Carne Molida (5% grasa)', caloriesPer100g: 137, proteinPer100g: 21.4, carbsPer100g: 0, fatPer100g: 5, category: 'Protein' },
    { name: 'Salmon', nameEs: 'Salmón', caloriesPer100g: 208, proteinPer100g: 20, carbsPer100g: 0, fatPer100g: 13, category: 'Protein' },
    { name: 'Tuna (Canned in Water)', nameEs: 'Atún (en agua)', caloriesPer100g: 116, proteinPer100g: 26, carbsPer100g: 0, fatPer100g: 1, category: 'Protein' },
    { name: 'Egg', nameEs: 'Huevo', caloriesPer100g: 155, proteinPer100g: 13, carbsPer100g: 1.1, fatPer100g: 11, category: 'Protein', servingSize: 50, servingUnit: 'unit' },
    { name: 'Egg White', nameEs: 'Clara de Huevo', caloriesPer100g: 52, proteinPer100g: 11, carbsPer100g: 0.7, fatPer100g: 0.2, category: 'Protein', servingSize: 33, servingUnit: 'unit' },
    { name: 'Tofu', nameEs: 'Tofu', caloriesPer100g: 76, proteinPer100g: 8, carbsPer100g: 1.9, fatPer100g: 4.8, category: 'Protein' },
    { name: 'Lentils (Cooked)', nameEs: 'Lentejas (Cocidas)', caloriesPer100g: 116, proteinPer100g: 9, carbsPer100g: 20, fatPer100g: 0.4, category: 'Protein', servingSize: 200, servingUnit: 'cup' },
    { name: 'Chickpeas (Cooked)', nameEs: 'Garbanzos (Cocidos)', caloriesPer100g: 164, proteinPer100g: 8.9, carbsPer100g: 27, fatPer100g: 2.6, category: 'Protein', servingSize: 164, servingUnit: 'cup' },
    { name: 'Turkey Breast', nameEs: 'Pechuga de Pavo', caloriesPer100g: 135, proteinPer100g: 30, carbsPer100g: 0, fatPer100g: 1, category: 'Protein' },
    { name: 'Pork Loin', nameEs: 'Lomo de Cerdo', caloriesPer100g: 143, proteinPer100g: 26, carbsPer100g: 0, fatPer100g: 3.5, category: 'Protein' },
    { name: 'Shrimp (Cooked)', nameEs: 'Camarones (Cocidos)', caloriesPer100g: 99, proteinPer100g: 24, carbsPer100g: 0.2, fatPer100g: 0.3, category: 'Protein' },
    { name: 'Greek Yogurt (Non-fat)', nameEs: 'Yogurt Griego (Descremado)', caloriesPer100g: 59, proteinPer100g: 10, carbsPer100g: 3.6, fatPer100g: 0.4, category: 'Protein', servingSize: 170, servingUnit: 'cup' },
    { name: 'Cottage Cheese', nameEs: 'Queso Cottage', caloriesPer100g: 98, proteinPer100g: 11, carbsPer100g: 3.4, fatPer100g: 4.3, category: 'Protein', servingSize: 226, servingUnit: 'cup' },

    // Carbs / Grains
    { name: 'White Rice (Cooked)', nameEs: 'Arroz Blanco (Cocido)', caloriesPer100g: 130, proteinPer100g: 2.7, carbsPer100g: 28, fatPer100g: 0.3, category: 'Carbs', servingSize: 158, servingUnit: 'cup' },
    { name: 'Brown Rice (Cooked)', nameEs: 'Arroz Integral (Cocido)', caloriesPer100g: 111, proteinPer100g: 2.6, carbsPer100g: 23, fatPer100g: 0.9, category: 'Carbs', servingSize: 195, servingUnit: 'cup' },
    { name: 'Oats', nameEs: 'Avena', caloriesPer100g: 389, proteinPer100g: 16.9, carbsPer100g: 66, fatPer100g: 6.9, category: 'Carbs', servingSize: 40, servingUnit: 'cup' },
    { name: 'Quinoa (Cooked)', nameEs: 'Quinua (Cocida)', caloriesPer100g: 120, proteinPer100g: 4.4, carbsPer100g: 21, fatPer100g: 1.9, category: 'Carbs', servingSize: 185, servingUnit: 'cup' },
    { name: 'Potato (Boiled)', nameEs: 'Papa (Cocida)', caloriesPer100g: 87, proteinPer100g: 1.9, carbsPer100g: 20, fatPer100g: 0.1, category: 'Carbs', servingSize: 150, servingUnit: 'unit' },
    { name: 'Sweet Potato (Boiled)', nameEs: 'Camote (Cocido)', caloriesPer100g: 86, proteinPer100g: 1.6, carbsPer100g: 20, fatPer100g: 0.1, category: 'Carbs', servingSize: 150, servingUnit: 'unit' },
    { name: 'Pasta (Cooked)', nameEs: 'Pasta (Cocida)', caloriesPer100g: 131, proteinPer100g: 5, carbsPer100g: 25, fatPer100g: 1.1, category: 'Carbs', servingSize: 140, servingUnit: 'cup' },
    { name: 'Whole Wheat Bread', nameEs: 'Pan Integral', caloriesPer100g: 247, proteinPer100g: 13, carbsPer100g: 41, fatPer100g: 3.4, category: 'Carbs', servingSize: 30, servingUnit: 'slice' },
    { name: 'Marraqueta', nameEs: 'Marraqueta', caloriesPer100g: 267, proteinPer100g: 8.5, carbsPer100g: 56, fatPer100g: 1.5, category: 'Carbs', barcode: '780000000001', servingSize: 100, servingUnit: 'unit' },
    { name: 'Hallulla', nameEs: 'Hallulla', caloriesPer100g: 309, proteinPer100g: 7.8, carbsPer100g: 54, fatPer100g: 7.2, category: 'Carbs', barcode: '780000000002', servingSize: 100, servingUnit: 'unit' },
    { name: 'Couscous (Cooked)', nameEs: 'Cuscús (Cocido)', caloriesPer100g: 112, proteinPer100g: 3.8, carbsPer100g: 23, fatPer100g: 0.2, category: 'Carbs', servingSize: 157, servingUnit: 'cup' },
    { name: 'Corn', nameEs: 'Choclo', caloriesPer100g: 86, proteinPer100g: 3.2, carbsPer100g: 19, fatPer100g: 1.2, category: 'Carbs', servingSize: 164, servingUnit: 'cup' },
    { name: 'Tortilla (Corn)', nameEs: 'Tortilla de Maíz', caloriesPer100g: 218, proteinPer100g: 5.7, carbsPer100g: 45, fatPer100g: 2.9, category: 'Carbs', servingSize: 24, servingUnit: 'unit' },
    { name: 'Tortilla (Flour)', nameEs: 'Tortilla de Harina', caloriesPer100g: 299, proteinPer100g: 8.3, carbsPer100g: 49, fatPer100g: 7.7, category: 'Carbs', servingSize: 30, servingUnit: 'unit' },

    // Fats
    { name: 'Avocado', nameEs: 'Palta', caloriesPer100g: 160, proteinPer100g: 2, carbsPer100g: 8.5, fatPer100g: 14.7, category: 'Fat', barcode: '780000000003', servingSize: 200, servingUnit: 'unit' },
    { name: 'Olive Oil', nameEs: 'Aceite de Oliva', caloriesPer100g: 884, proteinPer100g: 0, carbsPer100g: 0, fatPer100g: 100, category: 'Fat', servingSize: 14, servingUnit: 'tbsp' },
    { name: 'Almonds', nameEs: 'Almendras', caloriesPer100g: 579, proteinPer100g: 21, carbsPer100g: 22, fatPer100g: 50, category: 'Fat', servingSize: 28, servingUnit: 'handful' },
    { name: 'Walnuts', nameEs: 'Nueces', caloriesPer100g: 654, proteinPer100g: 15, carbsPer100g: 14, fatPer100g: 65, category: 'Fat', servingSize: 28, servingUnit: 'handful' },
    { name: 'Peanut Butter', nameEs: 'Mantequilla de Maní', caloriesPer100g: 588, proteinPer100g: 25, carbsPer100g: 20, fatPer100g: 50, category: 'Fat', servingSize: 32, servingUnit: 'tbsp' },
    { name: 'Chia Seeds', nameEs: 'Semillas de Chía', caloriesPer100g: 486, proteinPer100g: 17, carbsPer100g: 42, fatPer100g: 31, category: 'Fat', servingSize: 15, servingUnit: 'tbsp' },
    { name: 'Flax Seeds', nameEs: 'Semillas de Linaza', caloriesPer100g: 534, proteinPer100g: 18, carbsPer100g: 29, fatPer100g: 42, category: 'Fat', servingSize: 15, servingUnit: 'tbsp' },
    { name: 'Butter', nameEs: 'Mantequilla', caloriesPer100g: 717, proteinPer100g: 0.9, carbsPer100g: 0.1, fatPer100g: 81, category: 'Fat', servingSize: 14, servingUnit: 'tbsp' },
    { name: 'Coconut Oil', nameEs: 'Aceite de Coco', caloriesPer100g: 862, proteinPer100g: 0, carbsPer100g: 0, fatPer100g: 100, category: 'Fat', servingSize: 14, servingUnit: 'tbsp' },

    // Fruits
    { name: 'Banana', nameEs: 'Plátano', caloriesPer100g: 89, proteinPer100g: 1.1, carbsPer100g: 22.8, fatPer100g: 0.3, category: 'Fruit', servingSize: 118, servingUnit: 'unit' },
    { name: 'Apple', nameEs: 'Manzana', caloriesPer100g: 52, proteinPer100g: 0.3, carbsPer100g: 14, fatPer100g: 0.2, category: 'Fruit', servingSize: 182, servingUnit: 'unit' },
    { name: 'Orange', nameEs: 'Naranja', caloriesPer100g: 47, proteinPer100g: 0.9, carbsPer100g: 12, fatPer100g: 0.1, category: 'Fruit', servingSize: 131, servingUnit: 'unit' },
    { name: 'Strawberries', nameEs: 'Frutillas', caloriesPer100g: 32, proteinPer100g: 0.7, carbsPer100g: 7.7, fatPer100g: 0.3, category: 'Fruit', servingSize: 150, servingUnit: 'cup' },
    { name: 'Blueberries', nameEs: 'Arándanos', caloriesPer100g: 57, proteinPer100g: 0.7, carbsPer100g: 14, fatPer100g: 0.3, category: 'Fruit', servingSize: 148, servingUnit: 'cup' },
    { name: 'Grapes', nameEs: 'Uvas', caloriesPer100g: 69, proteinPer100g: 0.7, carbsPer100g: 18, fatPer100g: 0.2, category: 'Fruit', servingSize: 151, servingUnit: 'cup' },
    { name: 'Pineapple', nameEs: 'Piña', caloriesPer100g: 50, proteinPer100g: 0.5, carbsPer100g: 13, fatPer100g: 0.1, category: 'Fruit', servingSize: 165, servingUnit: 'cup' },
    { name: 'Watermelon', nameEs: 'Sandía', caloriesPer100g: 30, proteinPer100g: 0.6, carbsPer100g: 8, fatPer100g: 0.2, category: 'Fruit', servingSize: 152, servingUnit: 'cup' },
    { name: 'Melon', nameEs: 'Melón', caloriesPer100g: 34, proteinPer100g: 0.8, carbsPer100g: 8, fatPer100g: 0.2, category: 'Fruit', servingSize: 177, servingUnit: 'cup' },
    { name: 'Peach', nameEs: 'Durazno', caloriesPer100g: 39, proteinPer100g: 0.9, carbsPer100g: 10, fatPer100g: 0.3, category: 'Fruit', servingSize: 150, servingUnit: 'unit' },
    { name: 'Pear', nameEs: 'Pera', caloriesPer100g: 57, proteinPer100g: 0.4, carbsPer100g: 15, fatPer100g: 0.1, category: 'Fruit', servingSize: 178, servingUnit: 'unit' },
    { name: 'Kiwi', nameEs: 'Kiwi', caloriesPer100g: 61, proteinPer100g: 1.1, carbsPer100g: 15, fatPer100g: 0.5, category: 'Fruit', servingSize: 69, servingUnit: 'unit' },

    // Veggies
    { name: 'Broccoli', nameEs: 'Brócoli', caloriesPer100g: 34, proteinPer100g: 2.8, carbsPer100g: 7, fatPer100g: 0.4, category: 'Vegetable', servingSize: 91, servingUnit: 'cup' },
    { name: 'Spinach', nameEs: 'Espinaca', caloriesPer100g: 23, proteinPer100g: 2.9, carbsPer100g: 3.6, fatPer100g: 0.4, category: 'Vegetable', servingSize: 30, servingUnit: 'cup' },
    { name: 'Carrot', nameEs: 'Zanahoria', caloriesPer100g: 41, proteinPer100g: 0.9, carbsPer100g: 10, fatPer100g: 0.2, category: 'Vegetable', servingSize: 61, servingUnit: 'unit' },
    { name: 'Tomato', nameEs: 'Tomate', caloriesPer100g: 18, proteinPer100g: 0.9, carbsPer100g: 3.9, fatPer100g: 0.2, category: 'Vegetable', servingSize: 123, servingUnit: 'unit' },
    { name: 'Lettuce', nameEs: 'Lechuga', caloriesPer100g: 15, proteinPer100g: 1.4, carbsPer100g: 2.9, fatPer100g: 0.2, category: 'Vegetable', servingSize: 36, servingUnit: 'cup' },
    { name: 'Cucumber', nameEs: 'Pepino', caloriesPer100g: 15, proteinPer100g: 0.7, carbsPer100g: 3.6, fatPer100g: 0.1, category: 'Vegetable', servingSize: 52, servingUnit: 'cup' },
    { name: 'Bell Pepper', nameEs: 'Pimentón', caloriesPer100g: 20, proteinPer100g: 0.9, carbsPer100g: 4.6, fatPer100g: 0.2, category: 'Vegetable', servingSize: 92, servingUnit: 'cup' },
    { name: 'Zucchini', nameEs: 'Zapallo Italiano', caloriesPer100g: 17, proteinPer100g: 1.2, carbsPer100g: 3.1, fatPer100g: 0.3, category: 'Vegetable', servingSize: 124, servingUnit: 'cup' },
    { name: 'Onion', nameEs: 'Cebolla', caloriesPer100g: 40, proteinPer100g: 1.1, carbsPer100g: 9, fatPer100g: 0.1, category: 'Vegetable', servingSize: 110, servingUnit: 'unit' },
    { name: 'Green Beans', nameEs: 'Porotos Verdes', caloriesPer100g: 31, proteinPer100g: 1.8, carbsPer100g: 7, fatPer100g: 0.2, category: 'Vegetable', servingSize: 100, servingUnit: 'cup' },

    // Dairy
    { name: 'Milk (Whole)', nameEs: 'Leche Entera', caloriesPer100g: 61, proteinPer100g: 3.2, carbsPer100g: 4.8, fatPer100g: 3.3, category: 'Dairy', servingSize: 244, servingUnit: 'cup' },
    { name: 'Milk (Skim)', nameEs: 'Leche Descremada', caloriesPer100g: 34, proteinPer100g: 3.4, carbsPer100g: 5, fatPer100g: 0.1, category: 'Dairy', servingSize: 245, servingUnit: 'cup' },
    { name: 'Yogurt (Plain)', nameEs: 'Yogurt Natural', caloriesPer100g: 59, proteinPer100g: 10, carbsPer100g: 3.6, fatPer100g: 0.4, category: 'Dairy', servingSize: 170, servingUnit: 'cup' },
    { name: 'Cheese (Cheddar)', nameEs: 'Queso Cheddar', caloriesPer100g: 402, proteinPer100g: 25, carbsPer100g: 1.3, fatPer100g: 33, category: 'Dairy', servingSize: 28, servingUnit: 'slice' },
    { name: 'Cheese (Mozzarella)', nameEs: 'Queso Mozzarella', caloriesPer100g: 280, proteinPer100g: 28, carbsPer100g: 3.1, fatPer100g: 17, category: 'Dairy', servingSize: 28, servingUnit: 'slice' },
    { name: 'Cream Cheese', nameEs: 'Queso Crema', caloriesPer100g: 342, proteinPer100g: 6, carbsPer100g: 4, fatPer100g: 34, category: 'Dairy', servingSize: 28, servingUnit: 'tbsp' },
];

async function main() {
    console.log('Start seeding ...');

    // Clear existing foods to avoid conflicts and ensure clean state
    await prisma.foodItem.deleteMany({});
    console.log('Deleted existing foods.');

    for (const food of foods) {
        await prisma.foodItem.create({
            data: food,
        });
        console.log(`Created food: ${food.name}`);
    }

    // Seed Recipes
    const recipes = require('./recipes');
    await prisma.recipeIngredient.deleteMany({}); // Clear existing ingredients first
    await prisma.recipe.deleteMany({}); // Clear existing recipes
    console.log('Deleted existing recipes.');

    for (const recipe of recipes) {
        const { ingredients, ...recipeData } = recipe;
        const createdRecipe = await prisma.recipe.create({
            data: recipeData,
        });

        for (const ingredient of ingredients) {
            let foodItem = null;
            if (ingredient.foodName) {
                foodItem = await prisma.foodItem.findUnique({
                    where: { name: ingredient.foodName },
                });
            }

            await prisma.recipeIngredient.create({
                data: {
                    recipeId: createdRecipe.id,
                    name: ingredient.name,
                    amount: ingredient.amount,
                    unit: ingredient.unit,
                    foodId: foodItem ? foodItem.id : undefined,
                },
            });
        }
        console.log(`Created recipe: ${recipe.name}`);
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
