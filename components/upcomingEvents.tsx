import React, { useState } from 'react'
import { Container } from './ui/container'
import { Title } from './ui/title'
import { Typography } from './ui/typography'
import { Button } from './ui/button'
import { ArrowRight } from '@/icons/arrowRight'
import { UpcomingCarousel } from './upcomingCarousel'
import { upcomingEvents } from '@/constants'
import { useRouter } from 'next/navigation'

export const UpcomingEvents = () => {

  const [isHovered, setIsHovered] = useState(false);
  const route = useRouter()

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className='relative h-[580px] w-full max-w-[1930px]'>
      <Container className='justify-between items-start'>
        <div className='z-10 w-full max-w-[40%] py-24'>
          <Title className='pb-6 border-b-4 border-white mb-20'>НАЙБЛИЖЧІ ПОДІЇ</Title>
          <Typography className='w-full max-w-[80%] text-2xl font-SFPRegular mb-12'>
            Наші заходи порадують шанувальників та фанатів боксу
          </Typography>
          <Button
            className='flex justify-center items-center gap-x-4 text-2xl leading-[33.6px]'
            variant='outline'
            size='lg'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => route.push('/events')}
          >
            <span>Дивитись усі події</span>
            <span className='pt-1'>
              <ArrowRight color={isHovered ? '#fff' : '#000'} />
            </span>
          </Button>
        </div>
        <div className='absolute top-0 right-0 w-[55%]  py-20'>
          <UpcomingCarousel data={upcomingEvents} />
        </div>
      </Container>
    </section>
  )
}
