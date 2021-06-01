import React from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { Markdown } from '../../components/Markdown'
import { Main } from '../../components/Main'

export default function About({ content }) {
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
      about: { content },
    },
  } = await client.query({
    query: gql`
      query About {
        about {
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
