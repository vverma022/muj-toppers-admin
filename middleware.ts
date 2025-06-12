import { withAuth } from "next-auth/middleware"
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// CORS middleware function
function corsMiddleware(request: NextRequest) {
  const origin = request.headers.get('origin') || 'http://localhost:3000'
  
  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '86400', // 24 hours
      },
    })
  }

  const response = NextResponse.next()
  
  // Add CORS headers to the response
  response.headers.set('Access-Control-Allow-Origin', origin)
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')

  return response
}

// Combine auth and CORS middleware
export default withAuth({
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized: ({ token }) => {
      return !!token
    },
  },
})

// Handle CORS for API routes
export function middleware(request: NextRequest) {
  // Apply CORS middleware for API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    return corsMiddleware(request)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except public ones and static assets
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|ico|svg|css|js)$|signin|api/auth).*)',
    // Add API routes matcher
    '/api/:path*'
  ],
}