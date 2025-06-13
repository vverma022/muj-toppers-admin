import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Helper function to add CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
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
          headers: corsHeaders
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
        headers: corsHeaders
      }
    )
  } catch (error) {
    console.error('Error deleting blog:', error)
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { 
        status: 500,
        headers: corsHeaders
      }
    )
  }
}

// GET /api/blogs/[id] - Get a blog by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
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
      return NextResponse.json(
        { error: 'Blog not found' },
        { 
          status: 404,
          headers: corsHeaders
        }
      )
    }

    return NextResponse.json(
      blog,
      { 
        status: 200,
        headers: corsHeaders
      }
    )
  } catch (error) {
    console.error('Error fetching blog:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { 
        status: 500,
        headers: corsHeaders
      }
    )
  }
} 