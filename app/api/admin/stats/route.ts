import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Get total number of blogs
    const totalBlogs = await prisma.blog.count();

    // Get blogs by category
    const blogsByCategory = await prisma.blog.groupBy({
      by: ['category'],
      _count: {
        category: true,
      },
    }).then(results => 
      results.map(result => ({
        category: result.category,
        count: result._count.category,
      }))
    );

    // Get recent blogs
    const recentBlogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
    });

    return NextResponse.json({
      totalBlogs,
      blogsByCategory,
      recentBlogs,
    });
  } catch (error) {
    console.error('Error fetching blog stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog statistics' },
      { status: 500 }
    );
  }
} 