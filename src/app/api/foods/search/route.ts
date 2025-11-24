import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
        return NextResponse.json({ foods: [] });
    }

    try {
        const foods = await prisma.foodItem.findMany({
            where: {
                name: {
                    contains: query,
                },
            },
            take: 10,
        });
        return NextResponse.json({ foods });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
