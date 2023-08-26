import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import SlideImage from '/public//images/slider.png'
import React from 'react'
import { Slider as SliderType } from '@/types';
import { cn } from '@/lib/utils';

interface SliderProps {
  slides?: SliderType[]
  height?: number;
}

export const Slider: React.FC<SliderProps> = ({ slides, height = 930 }) => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      infiniteLoop={false}
      autoPlay={true}
      interval={5000}
      transitionTime={500}
      stopOnHover={true}
    >
      {slides?.map((slide: any) => (
        <div key={slide.id} className='relative'>
          <Image src={SlideImage} alt={slide.title} height={height} style={{ height: height }} />
          <span className={cn(` absolute text-[64px] font-SFPSemibold leading-normal top-[40%] left-0`, height < 930 ? ' inline-block top-[30%] w-[95%] mx-auto' : 'top-[40%] w-full')}>{slide.title}</span>
        </div>
      ))}
    </Carousel>
  );
}
