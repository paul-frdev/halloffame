'use client'
import useEventCart from '@/hooks/useEventCart'
import React from 'react'
import { Container } from './ui/container'
import Image from 'next/image'
import { UpcomingEvent } from '@/types'
import { Title } from './ui/title'
import { Typography } from './ui/typography'
import { Button } from './ui/button'
import { Close } from '@/icons/close'
import { calculateTicketCost } from '@/lib/utils'


export const CartClient = () => {
  const { items, removeItem } = useEventCart()

  return (
    <section className='bg-white py-12 px-8'>
      <Container className=' justify-start items-center'>
        <div className='flex flex-col justify-start items-start w-full gap-y-12'>
          {items?.map((event: UpcomingEvent) => {
            const currentLocation = event.location.map((location) => location.street)
            const totalPrice = calculateTicketCost(event.forAdults, event.forChildren, event.price)
            return (
              <div key={event.id} className='w-full h-full flex justify-start items-start mr-auto'>
                <div className='mr-16'>
                  <Image src={event.src} alt='image' width={200} height={200} />
                </div>
                <div className='flex flex-col justify-center mr-16'>
                  <Title className='text-2xl text-black font-oswaldBold uppercase'>Назва події</Title>
                  <Typography className='text-lg text-black font-SFPSemibold'>{event.title}</Typography>
                </div>
                <div className='w-[200px] flex flex-col justify-center mr-16'>
                  <Title className='text-2xl text-black font-oswaldBold uppercase'>Місце</Title>
                  <Typography className='text-lg text-black font-SFPSemibold'>{currentLocation}</Typography>
                </div>
                <div className='mr-16'>
                  <Title className='text-2xl text-black font-oswaldBold uppercase'>Ціна</Title>
                  <Typography className='text-lg text-black font-SFPSemibold'>Для дорослих : {event.price[0]}</Typography>
                  <Typography className='text-lg text-black font-SFPSemibold'>Для дітей : {event.price[1]}</Typography>
                </div>
                <div className='mr-16'>
                  <Title className='text-2xl text-black font-oswaldBold uppercase'>кількість</Title>
                  <Typography className='text-lg text-black font-SFPSemibold'>Для дорослих : {event.forAdults ? event.forAdults : '-'}</Typography>
                  <Typography className='text-lg text-black font-SFPSemibold'>Для дітей : {event.forChildren ? event.forChildren : '-'}</Typography>
                </div>
                <div className='mr-16'>
                  <Title className='text-2xl text-black font-oswaldBold uppercase'>Час</Title>
                  <Typography className='text-lg text-black font-SFPSemibold'>{event.selectedTime}</Typography>
                </div>
                <div className='mr-16'>
                  <Title className='text-2xl text-black font-oswaldBold uppercase'>Сума</Title>
                  <Typography className='text-lg text-black font-SFPSemibold'>{totalPrice} Грн</Typography>
                </div>
                <div className='flex justify-center items-center h-full'>
                  <Button
                    onClick={() => removeItem(event.id.toString())}
                    variant='outline'
                    className='bg-transparent hover:bg-transparent hover:text-black hover:border hover:border-black border-transparent px-2 hover:'
                  >
                    <Close fill='#808080' width={28} height={28} />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
