import Header from './Header'

type LayoutProps = {
  children: React.ReactNode
}
const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
export default Layout
