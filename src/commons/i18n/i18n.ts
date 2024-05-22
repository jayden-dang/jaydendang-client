import { getRequestConfig } from 'next-intl/server'
import { locales } from './constants'

import { notFound } from 'next/navigation'

export default getRequestConfig(async function createRequestConfig({ locale }) {
  if (!locales.includes(locale as any)) {
    notFound()
  }

  return {
    messages: (await import(`@/../locales/${locales}.json`)).default
  }
})
