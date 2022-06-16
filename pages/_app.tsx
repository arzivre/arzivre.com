import { AppProps } from 'next/app'
import { Suspense } from 'react'

import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import { LoadingFullScreen } from 'components/Loading'
import '../styles/globals.css'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Arzivre</title>
      </Head>
      <Suspense fallback={<LoadingFullScreen />}>
        <NextNProgress />
        <Component {...pageProps} />
      </Suspense>
    </>
  )
}
