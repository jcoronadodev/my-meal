import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function POST(request: Request) {
    try {
        const session = await getSession();

        if (!session || !session.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const userId = session.user.id;

        const body = await request.json();
        const { recipeId, mealType, date } = body;

        if (!recipeId || !mealType || !date) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const recipe = await prisma.recipe.findUnique({
            where: { id: recipeId }
        });

        if (!recipe) {
            return NextResponse.json({ error: 'Recipe not found' }, { status: 404 });
        }

        // Log the recipe as a single food entry
        // We use the recipe name as the food name
        const log = await prisma.foodLog.create({
            data: {
                userId,
                date: new Date(date),
                mealType,
                foodName: recipe.name,
                calories: recipe.calories,
                protein: recipe.protein,
                carbs: recipe.carbs,
                fat: recipe.fat,
            }
        });

        return NextResponse.json(log);
    } catch (error) {
        console.error('Error logging recipe:', error);
        return NextResponse.json({ error: 'Failed to log recipe' }, { status: 500 });
    }
}
