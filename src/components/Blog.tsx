'use client'

import { Flex } from '@chakra-ui/react'
import React from 'react'
import { BlogPostCard, BlogPostType } from './BlogPostCard'

type BlogType = {
  posts: Array<BlogPostType & { id: string }>
}

export const Blog: React.FC<BlogType> = ({ posts }) => {
  return (
    <Flex flexDirection="row" flexWrap="wrap" justifyContent="flex-start">
      {posts.map((post) => (
        <BlogPostCard
          key={post.id}
          slug={post.slug}
          title={post.title}
          description={post.description}
        />
      ))}
    </Flex>
  )
}
