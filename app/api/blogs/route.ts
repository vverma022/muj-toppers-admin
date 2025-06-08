import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Helper function to add CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  })
}

// GET /api/blogs - Get all blogs
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        title: true,
        content: true,
        category: true,
        tags: true,
        createdAt: true,
      }
    })

    return NextResponse.json(blogs, {
      headers: corsHeaders
    })
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { 
        status: 500,
        headers: corsHeaders
      }
    )
  }
}

// POST /api/blogs - Create a new blog
export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received request body:', body)
    const { title, content, category, tags } = body

    // Validate required fields
    if (!title || !content || !category) {
      console.log('Missing required fields:', { title, content, category })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { 
          status: 400,
          headers: corsHeaders
        }
      )
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        category,
        tags: tags || [],
      },
      select: {
        id: true,
        title: true,
        content: true,
        category: true,
        tags: true,
        createdAt: true,
      }
    })

    console.log('Blog created:', blog)
    return NextResponse.json(blog, { 
      status: 201,
      headers: corsHeaders
    })
  } catch (error) {
    console.error('Error creating blog:', error)
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { 
        status: 500,
        headers: corsHeaders
      }
    )
  }
} 