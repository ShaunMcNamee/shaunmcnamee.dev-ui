'use client'

import React from 'react'
import {
  Box,
  Heading,
  Stack,
  useBreakpointValue,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { Link } from '@chakra-ui/next-js'
import { title } from '../../content/meta'

export const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const open = () => setMobileMenuOpen(true)
  const close = () => setMobileMenuOpen(false)
  return (
    <Box as="header" backgroundColor="brand.blueJeans">
      <Box m="0 auto" maxW="1200" px="6" py="5">
        {isDesktop ? (
          <Stack justify="space-between" align="center" flexDirection="row">
            <Heading as="h1" m="0" color="brand.onyx">
              {title}
            </Heading>
            <Stack align="center" flexDirection="row" margin="0 !important">
              <Link href="/" variant="header">
                Home
              </Link>
              <Link href="/blog" variant="header">
                Blog
              </Link>
              <Link href="/resume" variant="header">
                Resume
              </Link>
              <Link href="/about" variant="header">
                About
              </Link>
            </Stack>
          </Stack>
        ) : (
          <>
            <Stack justify="space-between" align="center" flexDirection="row">
              <Heading as="h1" m="0" color="brand.onyx">
                {title}
              </Heading>
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.75rem" />}
                aria-label="Open Menu"
                color="brand.onyx"
                m="0 !important"
                onClick={open}
              />
            </Stack>
            <Modal onClose={close} size="full" isOpen={mobileMenuOpen}>
              <ModalOverlay />
              <ModalContent
                backgroundColor="brand.blueJeans"
                color="brand.onyx"
                m="0 !important"
              >
                <ModalCloseButton />
                <ModalBody>
                  <Stack
                    align="left"
                    flexDirection="column"
                    margin="0 !important"
                    justify="space-around"
                  >
                    <Link href="/" variant="hamburgerMenu" onClick={close}>
                      Home
                    </Link>
                    <Link href="/blog" variant="hamburgerMenu" onClick={close}>
                      Blog
                    </Link>
                    <Link
                      href="/resume"
                      variant="hamburgerMenu"
                      onClick={close}
                    >
                      Resume
                    </Link>
                    <Link href="/about" variant="hamburgerMenu" onClick={close}>
                      About
                    </Link>
                  </Stack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )}
      </Box>
    </Box>
  )
}
