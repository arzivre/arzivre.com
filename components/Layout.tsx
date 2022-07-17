import Header from './Header'
import Head from 'next/head'
type LayoutProps = {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Arzivre</title>
        <meta
          name='keywords'
          content='web developer, freelance web developer, web murah'
        />
      </Head>
      <Header />
      {children}
    </>
  )
}
export default Layout
