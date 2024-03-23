import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')
    const isAuthorizatedUrl = !(request.nextUrl.pathname == '/' || request.nextUrl.pathname.endsWith("/auth"))
    if (!token && isAuthorizatedUrl) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    if (token && !isAuthorizatedUrl) {
        return NextResponse.redirect(new URL('/dags', request.url))
    }
  }



export const config = {
    // matcher solution for public, api, assets and _next exclusion
    matcher: "/((?!api|static|.*\\..*|_next).*)",
  };