import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation } from 'swiper';

import { UpcomingCart } from './ui/upcomingCart';
import { Event } from '@/types';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ArrowRight } from '@/icons/arrowRight';


import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

interface UpcomingCarouselProps {
  data: Event[]
}

interface CustomArrowPrev {
  onClick: () => void;

}

type Variant = "outline" | "link" | "default" | "destructive" | "secondary" | "ghost" | null | undefined;

interface CustomArrowNext {
  onClick: () => void;
  className?: string;
  icon?: React.ReactNode;
  text?: string;
  variant?: Variant
}

const CustomPrevArrow: React.FC<CustomArrowPrev> = ({ onClick }) => (
  <Button onClick={onClick} className="custom-prev-arrow">
    Previous
  </Button>
);

const CustomNextArrow: React.FC<CustomArrowNext> = ({ onClick, className, icon, text, variant = 'outline' }) => (
  <Button variant={variant} onClick={onClick} className={cn(`custom-next-arrow`, className)}>
    {text && <span>{text}</span>}
    {icon}
  </Button>
);

export const UpcomingCarousel: React.FC<UpcomingCarouselProps> = ({ data }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleNextClick = () => {
    setActiveSlideIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <div className='relative'>
      <Swiper
        navigation={{
          prevEl: '.custom-prev-arrow',
          nextEl: '.custom-next-arrow',
        }}
        slidesPerView={2}
        spaceBetween={150}
        slidesOffsetBefore={60}
        grabCursor={true}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        loop={true}
      >
        {data?.map((event) => (
          <SwiperSlide key={event.id}>
            <UpcomingCart event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomNextArrow
        className=' hover:bg-transparent bg-transparent absolute top-[40%] left-[50%] z-[11]  w-[150px] h-[150px] border-[2px] border-white rounded-full'
        icon={<ArrowRight color='#2451CE' width={50} height={50} />}
        onClick={handleNextClick}
      />
    </div>
  )
}
