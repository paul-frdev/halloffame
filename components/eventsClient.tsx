'use client'

import React from 'react'
import { Breadcrumbs } from './breadcrumbs'
import { Container } from './ui/container'
import { Title } from './ui/title'

export const EventsClient = () => {

  const breadcrumbs = [
    { label: 'Головна', url: '/' },
    { label: 'Події', url: '/events' },
  ];

  return (
    <section className='relative mt-[157px] h-full'>
      <div className=' bg-ali absolute top-0 bottom-0 left-0 right-0 bg-no-repeat object-cover object-center h-full w-full'>
        <Container className='flex-col justify-start items-start'>
          <Breadcrumbs breadcrumbs={breadcrumbs} className=' mt-8' />
          <div className='flex justify-between items-center w-full my-12 pb-12 border-b-[2px] border-[#788191]'>
            <div>
              <Title className='text-[48px] font-oswaldBold'>КАЛЕНДАР ПОДІЙ</Title>
            </div>
            <div>
              Tabs
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
