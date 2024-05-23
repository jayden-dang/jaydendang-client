import {NextRequest, NextResponse} from 'next/server'
import createI18nRoutingHandler from 'next-intl/middleware'

import { defaultLocale, localePrefix, locales } from '@/commons/i18n/constants'

import createAuthHandler, {makePath as path} from '@/middleware/auth'

const handleAuth = createAuthHandler({
  publicRoutes: [
    path(''),
  ]
})

const handleI18nRouting = createI18nRoutingHandler  ({
  locales,
  defaultLocale,
  localePrefix
})

export default function middleware(request: NextRequest): NextResponse {
  const earlyResponse = handleAuth(request)
  if (earlyResponse) return earlyResponse
  return handleI18nRouting(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
