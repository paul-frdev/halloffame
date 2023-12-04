"use client";

import CustomImage from "./customImage";
import { cn } from "@/lib/utils";
import { SlidesProps } from "@/types";
import { useTranslations } from "next-intl";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface SliderProps {
  slides?: SlidesProps[];
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
    <Swiper pagination={pagination} modules={[Pagination]} autoplay loop className="mySwiper">
      {slides?.map((slide: SlidesProps) => (
        <SwiperSlide key={slide.id} className="relative">
          <CustomImage photoUrl={slide.image?.[0].url} />
          <span
            className={cn(
              ` absolute text-[45px] tablet:text-[64px] font-SFPSemibold leading-normal top-[40%] left-0`,
              height < 930 ? " inline-block top-[30%] w-[95%] mx-auto" : "top-[40%] w-full"
            )}
          >
            {slide.title}
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
