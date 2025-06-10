// This file can be empty or removed since we'll handle auth at the page level 

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Define public paths that don't require authentication
const PUBLIC_PATHS = [
  '/_next',
  '/api',
  '/signin',
  '/public',
] as const

// Define file extensions that should be allowed without auth
const ALLOWED_FILE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.ico', '.svg', '.css', '.js'] as const

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is public or a static asset
  const isPublicPath = PUBLIC_PATHS.some(path => pathname.startsWith(path))
  const isStaticAsset = ALLOWED_FILE_EXTENSIONS.some(ext => pathname.endsWith(ext))

  if (isPublicPath || isStaticAsset) {
    return NextResponse.next()
  }

  // Check authentication for protected routes
  const sessionToken = request.cookies.get('next-auth.session-token')
  
  if (!sessionToken) {
    const signInUrl = new URL('/signin', request.url)
    // Preserve the original URL as a redirect parameter
    signInUrl.searchParams.set('callbackUrl', request.url)
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files, images, and favicon
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|ico|svg|css|js)$).*)',
  ],
} 