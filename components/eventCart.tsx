'use client'

import { UpcomingEvent } from '@/types'
import React from 'react'
import { Container } from './ui/container'
import { Breadcrumbs } from './breadcrumbs'
import { Title } from './ui/title'
import { Typography } from './ui/typography'
import { SelectForm } from './forms/selectForm'
import { Button } from './ui/button'
import Image from 'next/image'

interface EventCartProps {
  event: UpcomingEvent
}
export const EventCart: React.FC<EventCartProps> = ({ event }) => {

  const breadcrumbs = [
    { label: 'Головна', url: '/' },
    { label: 'Події', url: '/events' },
    { label: 'Сторінка Події', url: `/events/${event.id}` }
  ];

  const currentLocation = event.location.map(item => item.street)
  return (
    <section className='bg-white py-12'>
      <Container className='flex-col justify-start items-start'>
        <Breadcrumbs breadcrumbs={breadcrumbs} id={event.id} className=' mt-8 text-black mb-12' />
        <div className='text-black flex justify-between w-full items-start gap-x-10'>
          {/* timeline */}
          <div className='flex flex-col justify-start items-start'>
            <Title className='mb-12'>Про подію</Title>
            <div className='mb-12'>
              <Typography className='text-2xl font-oswaldBold mb-4'>Дата:</Typography>
              <Typography className='text-2xl font-SFPRegular mb-4 pb-4 border-b  w-[310px] border-black'>{`${event.date.getMonth()}.${event.date.getDate()}.${event.date.getFullYear()}`}</Typography>
            </div>
            <div className='mb-12'>
              <SelectForm event={event} />
            </div>
            <div className='mb-12'>
              <Typography className='text-2xl font-oswaldBold mb-4'>Локація / Адреса:</Typography>
              <p className='text-2xl font-SFPRegular mb-4 pb-4 border-b w-[310px] border-black'>{currentLocation}</p>
            </div>
            <div className='mb-12'>
              <Typography className='text-2xl font-oswaldBold mb-4'>Ціна:</Typography>
              <Typography className='text-2xl font-SFPRegular mb-4 pb-4 border-b  w-[310px] border-black'>{event.price} ₴</Typography>
            </div>
            <div className='w-[310px] flex justify-center items-center'>
              <Button className='w-[303px] h-[60px] text-2xl leading-[33.6px] text-white bg-black border border-transparent hover:border-black transition-colors duration-300'>Купити білети</Button>
            </div>
          </div>
          {/* description */}
          <div className='w-full ml-8'>
            <Title className='mb-12'>{event.title}</Title>
            <div className='w-full mb-12'>
              <Image src={event.src} alt='image' className=' w-full object-cover object-top ' style={{ maxWidth: 1200, height: 374, width: '100%' }} width={1200} height={374} />
            </div>
            <Typography className='text-2xl font-SFPRegular leading-[33.6px]'>
              {event.description}
            </Typography>
          </div>
        </div>
      </Container>

    </section>
  )
}
