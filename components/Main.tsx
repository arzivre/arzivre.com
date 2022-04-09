import Head from 'next/head'
import { Container } from '@mantine/core'
import { HeaderArzivre } from './Header'
import FooterArzivre from './Footer'

const Main: React.FC = ({ children }) => {
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
      <Container size={'xl'}>{children}</Container>
      <FooterArzivre />
    </>
  )
}
export default Main
