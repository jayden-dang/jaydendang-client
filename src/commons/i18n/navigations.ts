import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { localePrefix, locales } from './constants'

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })
