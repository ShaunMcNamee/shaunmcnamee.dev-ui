import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { Main } from '../../components/Main'
import { BlogPostCard } from '../../components/BlogPostCard'

export default function Blog({ posts }) {
  return (
    <Main>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="flex-start">
        {posts.map((post) => (
          <BlogPostCard
            key={post.id}
            slug={post.slug}
            title={post.title}
            description={post.description}
            publishedAt={post.published_at}
          ></BlogPostCard>
        ))}
      </Flex>
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
        blogs(sort: "published_at:DESC") {
          id
          slug
          title
          description
          published_at
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
