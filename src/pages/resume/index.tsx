import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { Main } from '../../components/Main'
import { Job } from '../../components/Job'

export default function Resume({ jobs }) {
  return (
    <Main>
      <Flex flexDirection="column">
        {jobs.map((job) => (
          <Job
            key={job.id}
            company={job.company}
            title={job.title}
            startDate={job.startDate}
            endDate={job.endDate}
            content={job.content}
          />
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
    data: { works },
  } = await client.query({
    query: gql`
      query Work {
        works(sort: "startDate:DESC") {
          id
          company
          title
          startDate
          endDate
          content
        }
      }
    `,
  })

  return {
    props: {
      jobs: works,
    },
  }
}
