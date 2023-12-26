import React from 'react'
import { Main } from '../../components/Main'
import { Jobs } from '../../components/Jobs'

async function getContent() {
  return fetch(process.env.CMS_URL, {
    method: 'POST',
    body: JSON.stringify({
      query: `
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
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
export default async function Resume({ jobs }) {
  const {
    data: { works },
  } = await getContent()

  return (
    <Main>
      <Jobs jobs={works} />
    </Main>
  )
}
