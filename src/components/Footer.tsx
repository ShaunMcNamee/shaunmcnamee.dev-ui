'use client'

import { Box, Heading, Stack } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import React from 'react'

export const Footer = () => (
  <Box margin="0 !important" as="footer" backgroundColor="brand.blueJeans">
    <Box m="0 auto" maxW="1200" px="6" py="5">
      <Stack
        justify="space-between"
        align="center"
        flexDirection={['column', 'row']}
      >
        <Heading as="h4" size="md" color="brand.onyx">
          {`Shaun McNamee \u00A9 ${new Date().getFullYear()}`}
        </Heading>
        <Stack align="center" flexDirection="row" margin="0 !important">
          <Link href="https://twitter.com/shaunpmcnamee" variant="header">
            Twitter
          </Link>
          <Link href="https://github.com/shaunmcnamee/" variant="header">
            GitHub
          </Link>
        </Stack>
      </Stack>
    </Box>
  </Box>
)
