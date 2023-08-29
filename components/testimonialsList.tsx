'use client'

import { Testimonial } from '@/types'
import Image from 'next/image'
import React from 'react'
import { Container } from './ui/container'
import { Breadcrumbs } from './breadcrumbs'
import { Search } from './search'
import { Title } from './ui/title'
import { TestimonialItem } from './testimonialItem'
import { UpcomingEvents } from './upcomingEvents'


interface TestimonialsListProps {
  testimonials: Testimonial[]
}
export const TestimonialsList: React.FC<TestimonialsListProps> = ({ testimonials }) => {


  const breadcrumbs = [
    { label: 'Головна', url: '/' },
    { label: 'Відгуки', url: '/testimonials' },
  ];
  return (
    <section className='bg-white'>
      <div className='w-full'>
        <Image src='/images/ring.png' alt='image' width={1920} height={660} />
      </div>
      <Container className='flex-col justify-start items-start text-black py-8'>
        <div className='flex w-full justify-between items-center mb-12'>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Search />
        </div>
        <div className='mb-12'>
          <Title className='text-[48px] text-black font-oswaldBold uppercase'>Книга відгуків</Title>
        </div>
        {testimonials.map((item) => (
          <TestimonialItem key={item.id} testimonial={item} />
        ))}
      </Container>
      <div className='bg-black w-full pb-24'>
        <UpcomingEvents />
      </div>
    </section>
  )
}
