import { Suspense } from 'react'
import Head from 'next/head'

import { Loading } from './Loading'
import { HeaderArzivre } from './Header'
import { FooterArzivre } from './Footer'

interface MainProps {
  children: React.ReactNode
}
const Main = ({ children }: MainProps) => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Web portfolio Muhammad Sony Fauzi / Arzivre'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Suspense fallback={<Loading />}>
        <HeaderArzivre
          links={[
            { link: '/blog', label: 'Blog' },
            { link: '/project', label: 'Project' },
            { link: '/contact', label: 'Contact' },
          ]}
        />
      </Suspense>
      {children}
      <Suspense fallback={<Loading />}>
        <FooterArzivre />
      </Suspense>
    </>
  )
}
export default Main
