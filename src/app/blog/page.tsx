import React from 'react'
import { Main } from '../../components/Main'
import { Blog as BlogList } from '../../components/Blog'

async function getContent() {
  return fetch(process.env.CMS_URL, {
    method: 'POST',
    body: JSON.stringify({
      query: `
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
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
export default async function Blog({ jobs }) {
  const {
    data: { blogs },
  } = await getContent()

  return (
    <Main>
      <BlogList posts={blogs} />
    </Main>
  )
}
