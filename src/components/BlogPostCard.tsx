'use client'

import Link from 'next/link'
import { Text, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { format } from 'date-fns'

export type BlogPostType = {
  slug: string
  title: string
  description: string
  publishedAt?: string
}

export const BlogPostCard: React.FC<BlogPostType> = ({
  slug,
  title,
  description,
  publishedAt,
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Container variant="blogPost">
        <Heading paddingBottom={8} variant="inherit">
          {title}
        </Heading>
        {/*<Text paddingBottom={4} fontSize="xs">*/}
        {/*  {format(new Date(publishedAt), 'MMM dd, yyyy')}*/}
        {/*</Text>*/}
        <Text variant="inherit">{description}</Text>
      </Container>
    </Link>
  )
}
