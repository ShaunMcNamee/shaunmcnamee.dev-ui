import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { Heading, Link as ChakraLink, Box } from '@chakra-ui/react'
import React from 'react'
import { Markdown } from '../../components/Markdown'
import { Main } from '../../components/Main'
import Link from 'next/link'

const client = new ApolloClient({
  uri: process.env.CMS_URL,
  cache: new InMemoryCache(),
})

export default function Post({ post }) {
  return (
    <Main>
      <Heading paddingBottom={8} as={'h1'} size={'2xl'}>
        {post.title}
      </Heading>
      <Markdown>{post.post}</Markdown>
      <Box display="flex" justifyContent="center">
        <Link href="/blog">
          <ChakraLink variant="body">{'<-- BACK TO BLOG'}</ChakraLink>
        </Link>
      </Box>
    </Main>
  )
}

export async function getStaticPaths() {
  const {
    data: { blogs },
  } = await client.query({
    query: gql`
      query Blog {
        blogs {
          slug
        }
      }
    `,
  })

  return {
    paths: blogs.map((blog) => ({
      params: {
        slug: blog.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const query = gql`
      query Blog {
       blogs(where: {slug: "${params.slug}"}) {
          id
          slug
          title
          post
        }
      }
    `
  const {
    data: { blogs },
  } = await client.query({
    query,
  })

  return {
    props: { post: blogs[0] },
    revalidate: 1,
  }
}
