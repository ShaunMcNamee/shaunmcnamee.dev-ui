import React from 'react'
import { Main } from '../../../components/Main'
import { Post } from '../../../components/Post'

async function getContent(slug: string) {
  return fetch(process.env.CMS_URL, {
    method: 'POST',
    body: JSON.stringify({
      query: `
      query Blog {
       blogs(where: {slug: "${slug}"}) {
          id
          title
          post
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
export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const {
    data: { blogs },
  } = await getContent(params.slug)

  return (
    <Main>
      <Post title={blogs[0].title} post={blogs[0].post} />
    </Main>
  )
}
