'use client'

import { UpcomingEvent } from '@/types'
import Image from 'next/image'
import React from 'react'

interface EventCartProps {
  event: UpcomingEvent
}
export const EventCart: React.FC<EventCartProps> = ({ event }) => {
  return (
    <div className='w-[585px] h-[502px]'>
      <div>
        <Image src={event.src} alt='image-event' width={585} height={238} />
      </div>
    </div>
  )
}
