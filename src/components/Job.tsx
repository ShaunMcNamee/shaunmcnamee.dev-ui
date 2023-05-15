import { Text, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { format } from 'date-fns'
import { Markdown } from './Markdown'

export const Job = ({ company, title, startDate, endDate, content }) => {
  const heading = `${title} - ${company}`
  const startDateString = format(new Date(startDate), 'MMM yyyy')
  const endDateString =
    endDate === null || endDate === undefined
      ? 'present'
      : format(new Date(endDate), 'MMM yyyy')
  const dateString = `${startDateString} - ${endDateString}`

  return (
    <Container maxWidth="1440px" paddingBottom={6} px={0}>
      <Heading as="h3" paddingBottom={4}>
        {heading}
      </Heading>
      <Text fontWeight="bold" fontSize="xs" paddingBottom={2}>
        {dateString}
      </Text>
      <Markdown>{content}</Markdown>
    </Container>
  )
}
