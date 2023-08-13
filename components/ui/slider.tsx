import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { mainSlider } from '@/constants';
import SlideImage from '/public//images/slider.png'


import React from 'react'

export const Slider = () => {
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
      {mainSlider.map((slide) => (
        <div key={slide.id} className='relative'>
          <Image src={SlideImage} alt={slide.title} />
          <span className=" w-full absolute text-[96px] font-SFPSemibold leading-normal top-[40%] left-0">{slide.title}</span>
        </div>
      ))}
    </Carousel>
  );
}
