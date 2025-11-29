import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const tag = searchParams.get('tag');
        const query = searchParams.get('q');
        const limit = parseInt(searchParams.get('limit') || '50');

        const where: any = {};

        if (tag) {
            where.tags = {
                contains: tag
            };
        }

        if (query) {
            where.OR = [
                { name: { contains: query } },
                { nameEs: { contains: query } },
                { description: { contains: query } }
            ];
        }

        const recipes = await prisma.recipe.findMany({
            where,
            take: limit,
            include: {
                ingredients: true
            },
            orderBy: {
                createdAt: 'desc' // Or random if we implement that logic
            }
        });

        return NextResponse.json(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return NextResponse.json({ error: 'Failed to fetch recipes' }, { status: 500 });
    }
}
