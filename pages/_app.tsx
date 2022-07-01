import { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/globals.css'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Arzivre</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
