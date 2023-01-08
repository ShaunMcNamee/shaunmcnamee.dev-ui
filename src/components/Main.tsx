import { Box } from '@chakra-ui/react'
import React from 'react'

export const Main: React.FC = ({ children }) => (
  <Box
    margin="0 !important"
    as="main"
    backgroundColor="brand.onyx"
    flex="1"
    overflow="scroll"
  >
    <Box m="0 auto" maxW="1200" py="16">
      {children}
    </Box>
  </Box>
)
