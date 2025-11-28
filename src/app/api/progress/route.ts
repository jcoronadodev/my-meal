import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET(request: Request) {
    // Fetch progress logs
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const logs = await prisma.progressLog.findMany({
            where: { userId: session.user.id },
            orderBy: { date: 'desc' },
        });

        return NextResponse.json({ logs });
    } catch (error) {
        console.error('Progress GET error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { weight, waistSize, notes, date } = body;

        if (!weight || !date) {
            return NextResponse.json(
                { error: 'Weight and Date are required' },
                { status: 400 }
            );
        }

        // Use a transaction to update both ProgressLog and Profile
        const result = await prisma.$transaction(async (tx) => {
            const log = await tx.progressLog.create({
                data: {
                    userId: session.user.id,
                    date: new Date(date),
                    weight: parseFloat(weight),
                    waistSize: waistSize ? parseFloat(waistSize) : null,
                    notes: notes || null,
                },
            });

            // Update current weight in profile
            await tx.profile.update({
                where: { userId: session.user.id },
                data: { weight: parseFloat(weight) },
            });

            return log;
        });

        return NextResponse.json({ log: result });
    } catch (error) {
        console.error('Progress POST error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
