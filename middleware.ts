import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // If the user is not authenticated and trying to access a protected route
    if (!req.nextauth.token) {
      return NextResponse.redirect(new URL("/signin", req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

// Protect all routes except:
// - API routes (/api/*)
// - Sign in page (/signin)
// - Public assets (/_next/*, /favicon.ico, etc.)
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - signin (sign in page)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|signin).*)",
  ],
} 