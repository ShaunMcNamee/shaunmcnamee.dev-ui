import Link from 'next/link'
import { Text, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { format } from 'date-fns'

export const BlogPostCard = ({ slug, title, description, publishedAt }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Container variant="blogPost">
        <Heading paddingBottom={8}>{title}</Heading>
        <Text paddingBottom={4} fontSize="xs">
          {format(new Date(publishedAt), 'MMM dd, yyyy')}
        </Text>
        <Text>{description}</Text>
      </Container>
    </Link>
  )
}
