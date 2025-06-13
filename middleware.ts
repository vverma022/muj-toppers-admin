import { withAuth } from "next-auth/middleware"

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

export const config = {
  matcher: [
    // Match all paths except public ones, static assets, and /api/blogs
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|ico|svg|css|js)$|signin|api/auth|api/blogs).*)',
  ],
}