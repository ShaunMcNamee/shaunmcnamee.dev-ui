import React from "react"
import {
  Box,
  Heading,
  Link as ChakraLink,
  Stack,
} from '@chakra-ui/react'
import Link from 'next/link'

export const Header = () => {
  return (
    <Box as="header" backgroundColor="brand.blueJeans">
      <Box m="0 auto" maxW="1440" px="6" py="5">
        <Stack justify="space-between" align="center" flexDirection="row">
          <Heading as="h1" m="0" color="brand.onyx">
            Shaun McNamee's personal site
          </Heading>
          <Stack align="center" flexDirection="row">
            <Link href="/" passHref><ChakraLink color="brand.onyx" margin="0 !important" px="4">Home</ChakraLink></Link>
            <Link href="/blog" passHref><ChakraLink color="brand.onyx" margin="0 !important" px="4">Blog</ChakraLink></Link>
            <Link href="/resume" passHref><ChakraLink color="brand.onyx" margin="0 !important" px="4">Resume</ChakraLink></Link>
            <Link href="/about" passHref><ChakraLink color="brand.onyx" margin="0 !important" px="4">About</ChakraLink></Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
