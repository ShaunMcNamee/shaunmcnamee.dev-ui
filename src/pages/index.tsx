import { Box } from '@chakra-ui/react'
import React from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { Markdown } from '../components/Markdown'

export default function Home({ content }) {
  return (
    <Box as='main' backgroundColor='brand.mintCream' flex='1' overflow='scroll'>
      <Box m='0 auto' maxW='1440' px='6' py='16'>
        <Markdown>{content}</Markdown>
      </Box>
    </Box>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.CMS_URL,
    cache: new InMemoryCache(),
  })

  const { data: {home: {content}} } = await client.query({
    query: gql`
      query Home {
        home {
          content
        }
      }
    `,
  })

  return {
    props: {
      content,
    },
  }
}

