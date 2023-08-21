'use client'

import React from 'react'
import { Container } from './ui/container'
import { eventsList } from '@/constants'
import { EventCart } from './eventCart'

export const EventsList = () => {
  return (
    <div>
      <Container className='w-full max-w-[1300] m-auto justify-center items-center flex-wrap gap-x-4'>
        {eventsList?.map((event) => (
          <EventCart key={event.id} event={event} />
        ))}
      </Container>
    </div>
  )
}
