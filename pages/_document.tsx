import Document, { Html, Head, Main, NextScript } from 'next/document'
import { createGetInitialProps } from '@mantine/next'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html>
        <Head>
          <meta name="google-site-verification" content="NNclv3S6PJeXK0BGpcNEtxwDodjEIP7mzUJy4ok-UAo" />
          <link
            href='https://fonts.googleapis.com/css2?family=Babylonica&family=Varela+Round&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
