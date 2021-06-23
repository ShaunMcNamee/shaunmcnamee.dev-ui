import React from 'react'
import { Box, Heading, Link as ChakraLink, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { title } from '../../content/meta'

export const Header = () => {
  return (
    <Box as="header" backgroundColor="brand.blueJeans">
      <Box m="0 auto" maxW="1200" px="6" py="5">
        <Stack
          justify="space-between"
          align="center"
          flexDirection={['column', 'row']}
        >
          <Heading as="h1" m="0" color="brand.onyx">
            {title}
          </Heading>
          <Stack
            align="center"
            flexDirection={['column', 'row']}
            margin="0 !important"
          >
            <Stack flexDirection="row">
              <Link href="/" passHref>
                <ChakraLink variant="header">Home</ChakraLink>
              </Link>
              <Link href="/blog" passHref>
                <ChakraLink variant="header">Blog</ChakraLink>
              </Link>
            </Stack>
            <Stack flexDirection="row" margin="0 !important">
              <Link href="/resume" passHref>
                <ChakraLink variant="header">Resume</ChakraLink>
              </Link>
              <Link href="/about" passHref>
                <ChakraLink variant="header">About</ChakraLink>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
