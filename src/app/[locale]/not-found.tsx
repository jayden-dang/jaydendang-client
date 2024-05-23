'use client'

import { Navbar } from '@/systems'
import {useTranslations} from 'next-intl'

export default function NotFound() {
  const t = useTranslations('404Page')

  return (
    <div className="h-screen">
      <Navbar/>
      <div className="flex h-full items-center justify-center">
        {t('subText')}
      </div>
    </div>
  )
}
