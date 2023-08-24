import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

function Navbar() {
    const router = useRouter();
    const { locale } = router
    const { t } = useTranslation('navbar')
    
    return (
        <>
            <Link href="/">{t('home')}</Link>
            <Link href="/about">{t('about')}</Link>
            <Link href={router.asPath} locale={locale === 'es' ? 'en' : 'es'}>{t('btnChange')}</Link>
        </>
    )
}

export default Navbar