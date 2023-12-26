import React from 'react'
import { Markdown } from '../components/Markdown'
import { Main } from '../components/Main'

async function getContent() {
  return fetch(process.env.CMS_URL, {
    method: 'POST',
    body: JSON.stringify({
      query: 'query Home { home { content } }',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

export default async function Home() {
  const {
    data: {
      home: { content },
    },
  } = await getContent()

  return (
    <Main>
      <Markdown>{content}</Markdown>
    </Main>
  )
}
