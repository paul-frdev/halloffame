'use client'

import { Media } from '@/types'
import React from 'react'
import { Container } from './ui/container'
import { Breadcrumbs } from './breadcrumbs'
import { DateRageIcon } from '@/icons/dateRageIcon'
import { Typography } from './ui/typography'
import { Title } from './ui/title'
import { Activities } from './activities'
import Image from 'next/image'
import { UpcomingCarousel } from './upcomingCarousel'
import { upcomingEvents } from '@/constants'
import { UpcomingEvents } from './upcomingEvents'


interface MediaItem {
  media: Media | undefined
}
export const MediaItem: React.FC<MediaItem> = ({ media }) => {

  const breadcrumbs = [
    { label: 'Головна', url: '/' },
    { label: 'ЗМІ про нас', url: '/media' },
    { label: `${media?.title.length! >= 20 ? media?.title.slice(0, 20) + '...' : media?.title}`, url: `/media/${media?.id}` },
  ];
  return (
    <section className='bg-white pt-12 text-black'>
      <Container className='flex-col justify-start items-start'>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className='w-full flex justify-between items-center mt-12 mb-4'>
          <div className='flex gap-x-4'>
            <DateRageIcon />
            <Typography className='text-[20px] leading-snug tracking-wide'>{media?.date}</Typography>
          </div>
          <div>
            <Title>{media?.title}</Title>
          </div>
          <div>
            <Activities />
          </div>
        </div>
        <div className='mb-12'>
          <Image src='/images/mediaImg.png' alt='image' width={1600} height={600} style={{height: 600}} className='mb-12 object-cover object-center' />
          <Typography className='text-[20px] leading-snug tracking-wide'>
            {media?.description}
          </Typography>
        </div>
      </Container>
      <div className='bg-black text-white pb-20'>
      <UpcomingEvents />
      </div>
    </section>
  )
}
