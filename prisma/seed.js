const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const commonFoods = [
    { name: 'Chicken Breast (Cooked)', caloriesPer100g: 165, proteinPer100g: 31, carbsPer100g: 0, fatPer100g: 3.6, category: 'Protein' },
    { name: 'White Rice (Cooked)', caloriesPer100g: 130, proteinPer100g: 2.7, carbsPer100g: 28, fatPer100g: 0.3, category: 'Carbs' },
    { name: 'Broccoli (Steamed)', caloriesPer100g: 35, proteinPer100g: 2.4, carbsPer100g: 7.2, fatPer100g: 0.4, category: 'Vegetable' },
    { name: 'Egg (Large)', caloriesPer100g: 155, proteinPer100g: 13, carbsPer100g: 1.1, fatPer100g: 11, category: 'Protein' },
    { name: 'Oatmeal (Cooked)', caloriesPer100g: 71, proteinPer100g: 2.5, carbsPer100g: 12, fatPer100g: 1.5, category: 'Carbs' },
    { name: 'Banana', caloriesPer100g: 89, proteinPer100g: 1.1, carbsPer100g: 23, fatPer100g: 0.3, category: 'Fruit' },
    { name: 'Apple', caloriesPer100g: 52, proteinPer100g: 0.3, carbsPer100g: 14, fatPer100g: 0.2, category: 'Fruit' },
    { name: 'Salmon (Cooked)', caloriesPer100g: 206, proteinPer100g: 22, carbsPer100g: 0, fatPer100g: 12, category: 'Protein' },
    { name: 'Sweet Potato (Baked)', caloriesPer100g: 90, proteinPer100g: 2, carbsPer100g: 21, fatPer100g: 0.1, category: 'Carbs' },
    { name: 'Almonds', caloriesPer100g: 579, proteinPer100g: 21, carbsPer100g: 22, fatPer100g: 50, category: 'Fat' },
    { name: 'Greek Yogurt (Plain)', caloriesPer100g: 59, proteinPer100g: 10, carbsPer100g: 3.6, fatPer100g: 0.4, category: 'Protein' },
    { name: 'Avocado', caloriesPer100g: 160, proteinPer100g: 2, carbsPer100g: 9, fatPer100g: 15, category: 'Fat' },
];

async function main() {
    console.log('Start seeding ...');
    for (const food of commonFoods) {
        const existing = await prisma.foodItem.findUnique({
            where: { name: food.name },
        });
        if (!existing) {
            const created = await prisma.foodItem.create({
                data: food,
            });
            console.log(`Created food item: ${created.name}`);
        }
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
