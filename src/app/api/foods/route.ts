import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const foods = await prisma.foodItem.findMany({
            orderBy: { name: 'asc' },
        });
        return NextResponse.json({ foods });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
