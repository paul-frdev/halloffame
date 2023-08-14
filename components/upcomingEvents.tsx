import React from 'react'
import { Container } from './ui/container'
import { Title } from './ui/title'
import { Typography } from './ui/typography'
import { Button } from './ui/button'
import { ArrowRight } from '@/icons/arrowRight'

export const UpcomingEvents = () => {
  return (
    <section className='relative h-[680px] w-full'>
      <span className=' bg-upcoming absolute top-0 left-0 right-0 bottom-0 w-full h-[680px] object-cover bg-no-repeat' />
      <Container className='justify-between items-start'>
        <div className='z-10 w-full max-w-[40%] py-24'>
          <Title className='pb-6 border-b-4 border-white mb-6'>НАЙБЛИЖЧІ ПОДІЇ</Title>
          <Typography className='w-full max-w-[80%] text-2xl font-SFPRegular mb-12'>
            Наші заходи порадують шанувальників та фанатів боксу
          </Typography>
          <Button className='flex justify-center items-center gap-x-4 text-2xl leading-[33.6px]' variant='outline' size='lg'>
            <span>Дивитись усі події</span>
            <span className='pt-1'>
              <ArrowRight fill='#000' />
            </span>
          </Button>
        </div>
      </Container>
    </section>
  )
}
