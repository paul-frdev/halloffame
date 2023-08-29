"use client";

import { Button } from "./ui/button";
import { Typography } from "./ui/typography";
import { News } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface NewsPreviewItemProps {
  newsItem: News;
}
export const NewsPreviewItem: React.FC<NewsPreviewItemProps> = ({ newsItem }) => {
  const route = useRouter();
  return (
    <div className="w-full flex justify-between items-start">
      <div className="w-full min-w-[740px] mr-5">
        <Image src={newsItem.src} alt="image" width={738} height={453} />
      </div>
      <div>
        <Typography className="mb-8 tracking-wide leading-snug">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam
          lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet. Vitae ut
          diam amet diam. Amet tristique adipiscing tincidunt est mattis fermentum ornare accumsan, massa. Et gravida lorem fames leo. Hendrerit
          phasellus arcu odio sit turpis. Vitae, lacus, vestibulum pellentesque odio id cras.
        </Typography>
        <Typography className="tracking-wide leading-snug mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam
          lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet.
        </Typography>
        <Button
          onClick={() => route.push(`/blog/news/${newsItem.id}`)}
          variant="outline"
          className=" bg-black hover:bg-blue text-white uppercase hover:text-white w-[285px] h-[60px]"
        >
          Дізнатися більше
        </Button>
      </div>
    </div>
  );
};
