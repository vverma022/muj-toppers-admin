import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { companyName, mode, stipendMin, stipendMax, url } = await request.json();

    // Validate data if necessary
    if (!companyName || !mode || !stipendMin || !stipendMax || !url) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const internship = await prisma.internship.create({
      data: { companyName, mode, stipendMin, stipendMax, url },
    });

    return NextResponse.json(internship, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}