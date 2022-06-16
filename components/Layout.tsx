// import { Suspense } from 'react'
// import Head from 'next/head'

// import { Loading } from './Loading'
import Header from './Header'

interface MainProps {
  children: React.ReactNode
}
const Layout = ({ children }: MainProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
export default Layout
