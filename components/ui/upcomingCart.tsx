import { Event } from '@/types'
import Image from 'next/image'
import React from 'react'
import { Typography } from './typography';
import { Button } from './button';
import { ArrowRight } from '@/icons/arrowRight';
import Link from 'next/link';


interface UpcomingCartProps {
  event: Event;
}
export const UpcomingCart: React.FC<UpcomingCartProps> = ({ event }) => {
  return (
    <div className='w-[475px] h-[475px] rounded-bl-[60px] bg-blue hover:shadow-shadowBlue transition-all duration-300'>
      <Link href='/'>
        <div className='w-full h-[239px] mb-5'>
          <Image src={event.src} alt='event-image' width={475} height={239} className='h-[239px]' />
        </div>
        <div className='flex justify-between items-start h-full'>
          <div className='w-[30%] flex justify-center items-center h-[200px]'>
            <Typography className='flex justify-center items-center flex-col text-4xl leading-normal'>
              <span>15</span>
              <span>Грд</span>
            </Typography>
          </div>
          <div className='w-full h-[200px] border-l-[1px] border-l-white'>
            <div className='flex flex-col justify-start items-start px-8'>
              <Button variant='outline' className='flex text-[24px] font-oswaldBold pl-0 mb-7 justify-center gap-x-2 hover:bg-transparent bg-transparent text-white hover:text-white'>
                <span>{event.title}</span>
                <span>
                  <ArrowRight color='#fff' />
                </span>
              </Button>
              <Typography className='pr-2'>{event.description}</Typography>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
