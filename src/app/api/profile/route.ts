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
        const { height, weight, activityLevel, goal, gender, birthDate, likedFoods } = body;

        if (!height || !weight || !activityLevel || !goal || !gender || !birthDate) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        const profile = await prisma.profile.upsert({
            where: { userId: session.user.id },
            update: {
                height: parseFloat(height),
                weight: parseFloat(weight),
                activityLevel,
                goal,
                gender,
                birthDate: new Date(birthDate),
                likedFoods: likedFoods || '',
                dailyMeals: body.dailyMeals ? parseInt(body.dailyMeals) : 4,
            },
            create: {
                userId: session.user.id,
                height: parseFloat(height),
                weight: parseFloat(weight),
                activityLevel,
                goal,
                gender,
                birthDate: new Date(birthDate),
                likedFoods: likedFoods || '',
                dailyMeals: body.dailyMeals ? parseInt(body.dailyMeals) : 4,
            },
        });

        return NextResponse.json({ profile });
    } catch (error) {
        console.error('Profile error:', error);
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

        const profile = await prisma.profile.findUnique({
            where: { userId: session.user.id },
        });

        return NextResponse.json({ profile });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
