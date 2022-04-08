import Head from 'next/head'
import { Container } from '@mantine/core'
import { HeaderArzivre } from './Header'

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
          { link: '/about', label: 'about' },
        ]}
      />
      <Container size={'xl'}>{children}</Container>
    </>
  )
}
export default Main
