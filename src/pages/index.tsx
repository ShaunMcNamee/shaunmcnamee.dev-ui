import React from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { Markdown } from '../components/Markdown'
import { Main } from '../components/Main'

export default function Home({ content }) {
  return (
    <Main>
      <Markdown>{content}</Markdown>
    </Main>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.CMS_URL,
    cache: new InMemoryCache(),
  })

  const {
    data: {
      home: { content },
    },
  } = await client.query({
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
