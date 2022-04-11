import Head from 'next/head'
import { Container } from '@mantine/core'
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
      <HeaderArzivre
        links={[
          { link: '/blog', label: 'Blog' },
          { link: '/project', label: 'Project' },
          { link: '/contact', label: 'Contact' },
        ]}
      />
        {children}
      <FooterArzivre />
    </>
  )
}
export default Main
