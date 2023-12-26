'use client'

import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Job, JobType } from './Job'

type JobsType = {
  jobs: Array<JobType & { id: string }>
}

export const Jobs: React.FC<JobsType> = ({ jobs }) => {
  return (
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
  )
}
