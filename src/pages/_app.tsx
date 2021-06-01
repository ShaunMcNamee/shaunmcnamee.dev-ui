import { ThemeProvider, CSSReset, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'
import theme from '../../styles/theme'
import { Footer } from '../components/Footer'

const title = 'Shaun 2.0'
const description = 'A web dev talking about the world around him.'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Head>
        <title>Shaun 2.0</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@shaunpmcnamee" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="prefetch" href="/me.jpg" />
      </Head>
      <Stack dir="column" height="100vh" width="100vw">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Stack>
    </ThemeProvider>
  )
}

export default MyApp
