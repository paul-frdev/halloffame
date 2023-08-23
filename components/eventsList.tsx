'use client'

import React from 'react'
import { Container } from './ui/container'
import { PreviewEventCart } from './previewEventCart'
import { UpcomingEvent } from '@/types'

interface EventsListProps {
  eventsList: UpcomingEvent[]
}
export const EventsList: React.FC<EventsListProps> = ({ eventsList }) => {
  return (
    <Container className='w-full max-w-[1300] m-auto justify-center items-center flex-wrap gap-x-12 gap-y-6'>
      {eventsList?.map((event) => (
        <PreviewEventCart key={event.id} event={event} />
      ))}
    </Container>
  )
}
