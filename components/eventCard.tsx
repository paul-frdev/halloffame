'use client'

import { UpcomingEvent } from '@/types'
import React, { useState } from 'react'
import { Container } from './ui/container'
import { Breadcrumbs } from './breadcrumbs'
import { Title } from './ui/title'
import { Typography } from './ui/typography'
import { SelectForm } from './forms/selectForm'
import { Button } from './ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ButtonLeft } from './ui/buttonLeft'
import { ButtonRight } from './ui/buttonRight'
import useEventCart from '@/hooks/useEventCart'
import { toast } from 'react-hot-toast';

interface EventCardProps {
  event: UpcomingEvent
}
export const EventCard: React.FC<EventCardProps> = ({ event }) => {

  const [quantityForAdults, setQuantityForAdults] = useState(0)
  const [quantityForChildren, setQuantityForChildren] = useState(0)
  const [onSelectedValue, setOnSelectedValue] = useState('')
  const [selectFormTrigger, setSelectFormTrigger] = useState<any>(null);
  const route = useRouter()
  const { addItem } = useEventCart()

  const breadcrumbs = [
    { label: 'Головна', url: '/' },
    { label: 'Події', url: '/events' },
    { label: 'Сторінка Події', url: `/events/${event.id}` }
  ];

  const currentLocation = event.location.map(item => item.street)


  const handleOrderTickets = async () => {
    if (selectFormTrigger) {
      const isValid = await selectFormTrigger('time');

      if (isValid) {
        const formattedEvent = {
          ...event,
          selectedTime: onSelectedValue,
          forAdults: quantityForAdults,
          forChildren: quantityForChildren
        }
        console.log('formattedEvent', formattedEvent);

        addItem(formattedEvent)
        route.push('/cart')
      }
    }
  };
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
              <SelectForm
                event={event}
                setTrigger={setSelectFormTrigger}
                onSelectedValue={setOnSelectedValue}
                selectedValue={onSelectedValue}
              />
            </div>
            <div className='mb-12'>
              <Typography className='text-2xl font-oswaldBold mb-4'>Локація / Адреса:</Typography>
              <p className='text-2xl font-SFPRegular mb-4 pb-4 border-b w-[310px] border-black'>{currentLocation}</p>
            </div>
            <div className='mb-12'>
              <Typography className='text-2xl font-oswaldBold mb-4'>Ціна:</Typography>
              <Typography className='text-2xl font-SFPRegular mb-4 pb-4 border-b  w-[310px] border-black'>{event.price[0]} ₴</Typography>
            </div>
            <div className='w-[310px] flex justify-center items-center'>
              <Button onClick={handleOrderTickets} className='w-[303px] h-[60px] text-2xl leading-[33.6px] text-white bg-black border border-transparent hover:border-black transition-colors duration-300'>Замовити квитки</Button>
            </div>
          </div>
          {/* description */}
          <div className='w-full ml-8'>
            <Title className='mb-12'>{event.title}</Title>
            <div className='w-full mb-12'>
              <Image src={event.src} alt='image' className=' w-full object-cover object-top ' style={{ maxWidth: 1200, height: 374, width: '100%' }} width={1200} height={374} />
            </div>
            <Typography className='text-2xl font-SFPRegular leading-[33.6px] pb-12 w-full border-b border-black'>
              {event.description}
            </Typography>
            <div className='flex justify-between items-center w-full max-w-[60%] py-12'>
              <Typography className='text-2xl font-SFPBold'>Ціна :</Typography>
              <Typography className='text-lg font-SFPRegular'>Для взрослых - {event.price[0]} грн.</Typography>
              <Typography className='text-lg font-SFPRegular'>Для детей - {event.price[1]} грн.</Typography>
            </div>
            <div className='py-12 border-t border-black flex justify-between w-full items-center'>
              <Typography className='text-2xl font-SFPBold uppercase'>Оберіть кількість квитків:</Typography>
              <Typography className=' font-SFPRegular text-[#808080] uppercase'>ПРИМІТКА: НА ОДНУ ЛЮДИНУ МОЖЛИВо купити НЕ БІЛЬШЕ 5 КВИТКІВ НА ОДНУ ПОДІЮ.</Typography>
            </div>
            <div className='flex justify-start items-center w-full max-w-[60%]'>
              <div className='flex justify-between items-center w-[250px] mr-8'>
                <Title className='text-2xl font-SFPBold'>Для взрослых:</Title>
                <div className='flex justify-center items-baseline'>
                  <ButtonLeft quantity={quantityForAdults} setQuantity={setQuantityForAdults} />
                  <span className='text-lg font-oswaldBold'>{quantityForAdults}</span>
                  <ButtonRight quantity={quantityForAdults} setQuantity={setQuantityForAdults} />
                </div>
              </div>
              <div className='flex justify-between items-center w-[250px]'>
                <Title className='text-2xl font-SFPBold'>Для дітей:</Title>
                <div className='flex justify-center items-baseline'>
                  <ButtonLeft quantity={quantityForChildren} setQuantity={setQuantityForChildren} />
                  <span className='text-lg font-oswaldBold'>{quantityForChildren}</span>
                  <ButtonRight quantity={quantityForChildren} setQuantity={setQuantityForChildren} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </section>
  )
}
