import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import NextNProgress from 'nextjs-progressbar'
import Main from 'components/Main'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Arzivre</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
          fontFamily: 'Varela Round, sans-serif, Babylonica',
          other: {},
        }}
      >
        <NextNProgress />
        <Main>
          <Component {...pageProps} />
        </Main>
      </MantineProvider>
    </>
  )
}
