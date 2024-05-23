'use client'

import {useTranslations} from 'next-intl'

export default function NotFound() {
  const t = useTranslations('404Page')

  return (
    <div>
      {t('subText')}
    </div>
  )
}
