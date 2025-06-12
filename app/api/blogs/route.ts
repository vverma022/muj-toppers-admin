import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Helper function to add CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Max-Age': '86400',
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

    return new NextResponse(JSON.stringify(blogs), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    })
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch blogs' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
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
      return new NextResponse(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
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
    return new NextResponse(
      JSON.stringify(blog),
      { 
        status: 201,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    )
  } catch (error) {
    console.error('Error creating blog:', error)
    return new NextResponse(
      JSON.stringify({ error: 'Failed to create blog' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    )
  }
} 