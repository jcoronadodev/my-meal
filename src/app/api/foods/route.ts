import { NextResponse } from 'next/server';
// Force rebuild
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    try {
        let foods;
        if (query) {
            foods = await prisma.foodItem.findMany({
                where: {
                    OR: [
                        { name: { contains: query } }, // Case-insensitive handled by SQLite usually, or add mode: 'insensitive' for Postgres
                        { nameEs: { contains: query } },
                        { barcode: { contains: query } },
                    ],
                },
                orderBy: { name: 'asc' },
                take: 20,
            });
        } else {
            foods = await prisma.foodItem.findMany({
                orderBy: { name: 'asc' },
                take: 50,
            });
        }
        return NextResponse.json({ foods });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
