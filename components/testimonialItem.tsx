"use client";

import { Typography } from "./ui/typography";
import { Testimonial } from "@/types";
import Image from "next/image";
import React from "react";

interface TestimonialItemProps {
  testimonial: Testimonial;
}
export const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial }) => {
  return (
    <div className="flex justify-start items-start gap-x-8 mb-12 h-full">
      <div className="w-full">
        <Image src={testimonial?.src as any} alt="image" width={438} height={349} style={{ width: 438 }} />
      </div>
      <div className="flex flex-col justify-between h-full items-start">
        <Typography className="text-[22px] tracking-wide leading-snug flex-grow pb-10 border-b border-[##999999]">
          {testimonial.description}
        </Typography>
        <div>
          <Typography className="text-[18px] font-SFPBold mb-2">{testimonial.author}</Typography>
          <Typography>{testimonial.dignity}</Typography>
        </div>
      </div>
    </div>
  );
};
