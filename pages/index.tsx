import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { lisService, Programmers } from '@/servicios/lisService';

export default function Home() {
  const router = useRouter();
  const { locale } = router
  const { t } = useTranslation('index')
  const programmers = lisService(locale);
  return (
    <>
      <main>
        {t('title')}
      </main>
      <Link href={router.pathname} locale={locale === 'es' ? "en" : "es"}>{t('btn')}</Link>
      <p>{t('p')}: <span>{locale}</span></p>
      <section>
        <h1>{t('service')}</h1>
        
          {
          programmers.map( (programmer, index) => ( 
            <div key={index}>
              <p>{programmer.name}</p>
              <p>{programmer.charge}</p>
            </div>
          ))
          }

      </section>
    </>
  )
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'index'
      ])),
    },
  };
};





