import Link from 'next/link'
import { Text, Box, Heading } from '@chakra-ui/react'
import React from 'react'

export const BlogPostCard = ({ slug, title, description }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Box
        padding={8}
        borderColor="brand.mintCream"
        borderWidth={1}
        borderRadius="lg"
        maxWidth="300px"
        cursor="pointer"
      >
        <Heading paddingBottom={8}>{title}</Heading>
        <Text>{description}</Text>
      </Box>
    </Link>
  )
}
