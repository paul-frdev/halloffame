'use client'

import React, { useState } from 'react'
import { Breadcrumbs } from './breadcrumbs'
import { Container } from './ui/container'
import { Title } from './ui/title'
import { CalendarForm } from './forms/calendarForm'
import { EventsList } from './eventsList'
import { UpcomingEvent } from '@/types'


interface EventsClientProps {
  events: UpcomingEvent[]
}
export const EventsClient: React.FC<EventsClientProps> = ({ events }) => {


  const breadcrumbs = [
    { label: 'Головна', url: '/' },
    { label: 'Події', url: '/events' },
  ];

  return (
    <section className='relative bg-white pb-8'>
      <Container className='flex-col justify-start items-start'>
        <Breadcrumbs breadcrumbs={breadcrumbs} className=' mt-8 text-black' />
        <div className='flex justify-between items-center w-full my-12 pb-12 border-b-[2px] border-[#788191]'>
          <div>
            <Title className='text-[48px] text-black font-oswaldBold uppercase'>Майбутні події</Title>
          </div>
          <div>
            <CalendarForm />
          </div>
        </div>
        <EventsList eventsList={events} />
      </Container>
    </section >
  )
}
