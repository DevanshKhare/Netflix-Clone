import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import { nonAccessibleRoutes, signedNonAccessibleRoutes } from "./Constants"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if(!req.nextauth.token && nonAccessibleRoutes.includes(req.nextUrl.pathname)){
        return NextResponse.redirect(new URL('/login', req.url))
    }
    if(req.nextauth.token && signedNonAccessibleRoutes.includes(req.nextUrl.pathname)){
        return NextResponse.redirect(new URL('/', req.url))
    }
  },
  {
    callbacks: {
      authorized: () => {
        return true
        },
    },
  }
)

export const config = {
  matcher: ["/login", "/loggedhome", "/signup"],
}