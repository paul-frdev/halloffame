"use client";

import CustomImage from "./ui/customImage";
import { Typography } from "./ui/typography";
import { Testimonial } from "@/types";
import React from "react";

interface TestimonialItemProps {
  testimonial: Testimonial;
}
export const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col smallTablet:flex-row justify-between tablet:justify-start items-start gap-x-8 mb-12 h-full">
      <div className="w-full max-w-[100%] mb-4 smallTablet:mb-0 smallTablet:max-w-[300px] tablet:max-w-[350px] h-full">
        <CustomImage height="300px" photoUrl={testimonial?.image?.[0].url} />
      </div>
      <div className="flex flex-col justify-between w-full h-full items-start">
        <div className=' w-full text-justify tablet:text-left' dangerouslySetInnerHTML={{ __html: testimonial.desriptiontext }} />
        <div className="w-full mt-5 mb-4 border-t border-[#acacac]">
          <Typography className="text-[18px] font-SFPBold my-2">{testimonial.author}</Typography>
          <Typography>{testimonial.dignity}</Typography>
        </div>
      </div>
    </div>
  );
};
