import { ThemeProvider, CSSReset, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import theme from '../../styles/theme'
import { title, description, image, twitterHandle } from '../../content/meta'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={image} />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
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
