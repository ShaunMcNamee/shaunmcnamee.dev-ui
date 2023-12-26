'use client'

import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Markdown } from './Markdown'
import { Link } from '@chakra-ui/next-js'

type PostType = {
  title: string
  post: string
}

export const Post: React.FC<PostType> = ({ title, post }) => {
  return (
    <>
      <Heading paddingBottom={8} as={'h1'} size={'2xl'}>
        {title}
      </Heading>
      {/*<Text paddingBottom={4} fontSize="xs">*/}
      {/*  {format(new Date(post.published_at), 'MMM dd, yyyy')}*/}
      {/*</Text>*/}
      <Markdown>{post}</Markdown>
      <Box display="flex" justifyContent="center">
        <Link href="/blog" variant="body">
          {'<-- BACK TO BLOG'}
        </Link>
      </Box>
    </>
  )
}
