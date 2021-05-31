import { VStack } from '@chakra-ui/react'
import React from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { Main } from '../../components/Main'
import { BlogPostCard } from '../../components/BlogPostCard'

export default function Blog({ posts }) {
  return (
    <Main>
      <VStack>
        {posts.map((post) => (
          <BlogPostCard
            slug={post.slug}
            title={post.title}
            description={post.description}
          ></BlogPostCard>
        ))}
      </VStack>
    </Main>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.CMS_URL,
    cache: new InMemoryCache(),
  })

  const {
    data: { blogs },
  } = await client.query({
    query: gql`
      query Blog {
        blogs {
          id
          slug
          title
          description
        }
      }
    `,
  })

  return {
    props: {
      posts: blogs,
    },
  }
}
