import { NextRequest, NextResponse } from 'next/server'
import { pathToRegexp } from 'path-to-regexp'

import { locales } from '@/commons/i18n/constants'
// import { isAuthenticated } from '@/globals/auth/session.server'

interface Params {
  publicRoutes: (string | RegExp | RegExp[])[]
}

export function makePath(path: string): RegExp[] {
  return [
    // Generate regexp for the original path and possible locale path
    pathToRegexp(path),
    pathToRegexp(`/(${locales.join('|')})${path}`)
  ]
}

export default function createAuthHandler(params: Params) {
  const publicRoutes = params.publicRoutes.flat()

  return function handleAuth(request: NextRequest) {
    const isPublicRoute = publicRoutes.some((pathOrRegex) =>
      typeof pathOrRegex === 'string'
        ? pathOrRegex === request.nextUrl.pathname
        : pathOrRegex.test(request.nextUrl.pathname)
    )

    // if (!isPublicRoute && !isAuthenticated(request.cookies)) {
    if (!isPublicRoute) {
      // Redirect to the home page if the user is not authenticated
      // There will an extra redirect if there is a locale specified in the URL
      return NextResponse.redirect(new URL('/', request.url), 302)
    }
    
    return null
  }
}
