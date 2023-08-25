'use client'

import { monthNames } from '@/constants'
import { ArrowRight } from '@/icons/arrowRight'
import { UpcomingEvent } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface EventCartProps {
  event: UpcomingEvent | undefined;
}
export const PreviewEventCart: React.FC<EventCartProps> = ({ event }) => {

  const monthIndex = event?.date.getMonth() as any;
  return (
    <div className='w-[585px] h-[502px] shadow rounded-md hover:shadow-lg transition-all duration-200 cursor-pointer text-black'>
      <Link href={`/events/${event?.id}`}>
        <div className='w-[585px] h-[238px]'>
          <Image src={event?.src as any} alt='image-event' width={585} className='h-[238px] object-cover object-top' height={238} />
        </div>
        <div className='p-9 flex h-[52%] justify-between items-center'>
          <div className='flex flex-col justify-center items-center h-full w-[20%] border-r border-[#e8edf0] p-4'>
            <div className='relative h-[50%] flex justify-center items-center'>
              <span className='absolute -top-[7px] -left-[25px] text-2xl font-oswaldBold font-extrabold text-[#007ac7]'>{monthNames[monthIndex]}</span>
              <span className='text-[4.5625rem] font-SFPSemibold'>{event?.date.getDay()}</span>
            </div>
          </div>
          <div className='flex flex-col justify-start items-start h-full pl-8'>
            <div className='inline-flex items-center justify-start w-full text-3xl font-SFPBold mb-8 mt-4'>
              <span> {event?.title}</span>
              <span className='pl-4 inline'>
                <ArrowRight color='#ef090d' width={24} height={24} />
              </span>
            </div>
            <p className='text-2xl font-SFPSemibold'>
              {event?.description!.length! > 100 ? event?.description.slice(100) + '...' : event?.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
