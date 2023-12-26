'use client'

import { ChakraProvider, CSSReset, Stack } from '@chakra-ui/react'
import theme from '../../styles/theme'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Stack dir="column" height="100vh" width="100vw" spacing={0}>
        <Header />
        {children}
        <Footer />
      </Stack>
    </ChakraProvider>
  )
}
