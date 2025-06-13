import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Simple CORS headers
function corsHeaders(origin: string | null) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Allow-Credentials': 'true',
  }
}

// Handle preflight OPTIONS request
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin')
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders(origin),
  })
}

// DELETE /api/blogs/[id] - Delete a blog
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    // Check if blog exists
    const blog = await prisma.blog.findUnique({
      where: { id },
    })

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { 
          status: 404,
          headers: corsHeaders(origin)
        }
      )
    }

    // Delete the blog
    await prisma.blog.delete({
      where: { id },
    })

    return NextResponse.json(
      { message: 'Blog deleted successfully' },
      { 
        status: 200,
        headers: corsHeaders(origin)
      }
    )
  } catch (error) {
    console.error('Error deleting blog:', error)
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { 
        status: 500,
        headers: corsHeaders(origin)
      }
    )
  }
}

// GET /api/blogs/[id] - Get a blog by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const origin = request.headers.get('origin')
  try {
    const { id } = params

    const blog = await prisma.blog.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        content: true,
        category: true,
        tags: true,
        createdAt: true,
      }
    })

    if (!blog) {
      return new NextResponse(
        JSON.stringify({ error: 'Blog not found' }),
        { 
          status: 404,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders(origin)
          }
        }
      )
    }

    return new NextResponse(
      JSON.stringify(blog),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders(origin)
        }
      }
    )
  } catch (error) {
    console.error('Error fetching blog:', error)
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch blog' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders(origin)
        }
      }
    )
  }
} 