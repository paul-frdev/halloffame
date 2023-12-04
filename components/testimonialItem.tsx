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
    <div className="flex justify-start items-start gap-x-8 mb-12 h-full">
      <CustomImage photoUrl={testimonial.image?.[0].url} />
      <div className="flex flex-col justify-between h-full items-start">
        <div dangerouslySetInnerHTML={{ __html: testimonial.desriptiontext }} />
        <div className=" w-full mt-5 mb-4 border-t border-[#acacac]">
          <Typography className="text-[18px] font-SFPBold my-2">{testimonial.author}</Typography>
          <Typography>{testimonial.dignity}</Typography>
        </div>
      </div>
    </div>
  );
};
