"use client";

import SlideImage from "/public//images/slider.png";
import { cn } from "@/lib/utils";
import { Slider as SliderType } from "@/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


interface SliderProps {
  slides?: SliderType[];
  height?: number;
}

export const Slider: React.FC<SliderProps> = ({ slides, height = 930 }) => {
  const t = useTranslations("slider");


  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class=${className}></span>`;
    },
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      autoplay
      loop
      className="mySwiper"
    >
      {slides?.map((slide: any) => (
        <SwiperSlide key={slide.id} className="relative">
          <Image src={SlideImage} alt={slide.title} height={height} style={{ height: height }} />
          <span
            className={cn(
              ` absolute text-[45px] tablet:text-[64px] font-SFPSemibold leading-normal top-[40%] left-0`,
              height < 930 ? " inline-block top-[30%] w-[95%] mx-auto" : "top-[40%] w-full"
            )}
          >
            {t(slide.title)}
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
