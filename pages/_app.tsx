import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '@/components/layout/layout'
import Head from 'next/head'

//@here also we can add head tags so that it will be available throughout all the pages

export default function App({ Component, pageProps }: AppProps) {
  return <Layout >
    <Head>
      <meta name="view" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </Layout>
}


// This component acts as the  root of all other components 