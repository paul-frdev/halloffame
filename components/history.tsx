import React from 'react'
import { Container } from './ui/container'
import { Title } from './ui/title'
import { Typography } from './ui/typography'
import { Button } from './ui/button'
import { ArrowRight } from '@/icons/arrowRight'

export const History = () => {
  return (
    <section className='relative h-full pb-[56px] w-full max-w-[1930px]'>
      <span className='bg-bg block absolute top-0 left-0 right-0 bottom-0 w-full h-[1094px] object-cover bg-no-repeat' />
      <Container className=' justify-between items-start relative '>
        <div className='w-full max-w-[60%] py-24'>
          <Title className='pb-6 border-b-4 border-white mb-6'>ІСТОРІЯ УКРАЇНСЬКОГО БОКСУ<br />
            В ОДНОМУ МІСЦІ...</Title>
          <Typography className='w-full max-w-[80%] text-2xl font-SFPRegular mb-12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed sed ullamcorper tellus risus tortor. Nisi, vitae sit dictumst tincidunt. Arcu eu massa ut arcu praesent arcu duis amet. Nunc sed et et, ipsum. Quam ornare viverra tincidunt etiam nisi, ullamcorper quis morbi malesuada. Diam lectus aliquam amet, justo quam orci, et consequat. Phasellus elementum sodales lacus in vivamus curabitur parturient. Sagittis sit id odio rhoncus, urna nisl egestas. Auctor sollicitudin quis in auctor tempus mollis nibh. Vitae, odio pretium quis lobortis rhoncus praesent nec velit magna. Malesuada dictum adipiscing tincidunt consequat gravida pharetra pulvinar. Rhoncus, neque hendrerit arcu, ullamcorper tellus quis. Congue fringilla a netus rhoncus, nisl ac vitae gravida donec. Dui nibh orci quisque neque feugiat pulvinar quis dignissim.
            Vestibulum pellentesque et blandit cursus pellentesque viverra iaculis. Massa a quis id leo consectetur aliquet nec in at. Nulla nec ipsum at suspendisse nunc. Adipiscing aenean fermentum vitae id et dolor eu. Pretim mattis ipsum, malesuada cursus risus, at.
          </Typography>
          <div className='w-[70%] flex justify-between items-center'>
            <Button className='flex justify-center items-center gap-x-4 text-2xl leading-[33.6px]' variant='outline' size='lg' >
              <span> ДЕТАЛЬНІШЕ</span>
              <ArrowRight fill='#000' />
            </Button>
            <Button className='flex justify-center items-center gap-x-4 text-2xl leading-[33.6px]' variant='default' size='lg'>
              <span> КНИГА ВІДГУКІВ</span>
                <ArrowRight fill='#fff' />
            </Button>
          </div>
        </div>
        <span className=' z-10 bg-person absolute right-[276px] bottom-[-56px] h-[635px] w-[526px] bg-no-repeat object-cover' />
      </Container>
      <span className=' bg-boxingBack absolute -top-[200px] right-0 bottom-0 h-[1300px] w-[733px] bg-no-repeat object-cover' />
    </section>
  )
}
