'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import {
  Text,
  Code,
  Divider,
  Link,
  ListItem,
  Heading,
  Image,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

const headingSizes = {
  h1: '2xl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
  h5: 'sm',
  h6: 'xs',
}

const getHeading = (as, props) => (
  <Heading paddingBottom={8} as={as} size={headingSizes[as]} {...props} />
)

export const defaults = {
  p: ({ children }) => <Text paddingBottom={8}>{children}</Text>,
  em: ({ children }) => <Text as="em">{children}</Text>,
  blockquote: ({ children }) => <Code p={2}>{children}</Code>,
  code: () => null,
  hr: Divider,
  a: ({ href, children }) => (
    <Link variant="content" href={href}>
      {children}
    </Link>
  ),
  img: Image,
  text: ({ children }) => <Text as="span">{children}</Text>,
  ol: ({ children }) => (
    <OrderedList
      color="brand.mintCream"
      spacing={2}
      paddingBottom={8}
      paddingLeft={4}
    >
      {children}
    </OrderedList>
  ),
  ul: ({ children }) => (
    <UnorderedList
      color="brand.mintCream"
      spacing={2}
      paddingBottom={8}
      paddingLeft={4}
    >
      {children}
    </UnorderedList>
  ),
  li: ({ children }) => <ListItem>{children}</ListItem>,
  definition: () => null,
  h1: (props) => getHeading('h1', props),
  h2: (props) => getHeading('h2', props),
  h3: (props) => getHeading('h3', props),
  h4: (props) => getHeading('h4', props),
  h5: (props) => getHeading('h5', props),
  h6: (props) => getHeading('h6', props),
  inlineCode: () => null,
}

export const Markdown = ({ children }) => (
  <ReactMarkdown components={defaults}>{children}</ReactMarkdown>
)
