import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function POST(request: Request) {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { foodName, calories, protein, carbs, fat, mealType, date } = body;

        if (!foodName || !calories || !mealType) {
            return NextResponse.json(
                { error: 'Food name, calories and meal type are required' },
                { status: 400 }
            );
        }

        const log = await prisma.foodLog.create({
            data: {
                userId: session.user.id,
                foodName,
                calories: parseInt(calories),
                protein: parseFloat(protein || 0),
                carbs: parseFloat(carbs || 0),
                fat: parseFloat(fat || 0),
                mealType,
                date: new Date(date || new Date()),
            },
        });

        return NextResponse.json({ log });
    } catch (error) {
        console.error('Food log error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function GET(request: Request) {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const dateStr = searchParams.get('date');

        let dateFilter = {};
        if (dateStr) {
            const start = new Date(dateStr);
            start.setHours(0, 0, 0, 0);
            const end = new Date(dateStr);
            end.setHours(23, 59, 59, 999);

            dateFilter = {
                date: {
                    gte: start,
                    lte: end,
                },
            };
        }

        const logs = await prisma.foodLog.findMany({
            where: {
                userId: session.user.id,
                ...dateFilter,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        return NextResponse.json({ logs });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
