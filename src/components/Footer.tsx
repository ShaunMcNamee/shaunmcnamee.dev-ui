import { Box, Heading, Link as ChakraLink, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const Footer = () => (
  <Box as="footer" backgroundColor="brand.blueJeans">
    <Box m="0 auto" maxW="1440" px="6" py="5">
      <Stack justify="space-between" align="center" flexDirection="row">
        <Heading as="h4" size="md" color="brand.onyx">
          {`Shaun McNamee \u00A9 ${new Date().getFullYear()}`}
        </Heading>
        <Stack align="center" flexDirection="row">
          <Link href="https://twitter.com/shaunpmcnamee" passHref><ChakraLink color="brand.onyx" margin="0 !important" px="4" >Twitter</ChakraLink></Link>
          <Link href="https://github.com/shaunmcnamee/" passHref><ChakraLink color="brand.onyx" margin="0 !important" px="4">GitHub</ChakraLink></Link>
        </Stack>
      </Stack>
    </Box>
  </Box>
)