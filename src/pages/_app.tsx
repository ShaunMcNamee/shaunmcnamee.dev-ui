import { ThemeProvider, CSSReset, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'
import theme from '../../styles/theme'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <CSSReset />
    <Head>
      <title>Shaun McNamee</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Stack dir="column" height="100vh" width="100vw">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Stack>
  </ThemeProvider>
}

export default MyApp
