"use client";

import { Button } from "./ui/button";
import { Typography } from "./ui/typography";
import { Media } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface MediaPreviewItemProps {
  mediaItem: Media | undefined;
}
export const MediaPreviewItem: React.FC<MediaPreviewItemProps> = ({ mediaItem }) => {
  const route = useRouter();
  return (
    <div className="flex justify-start items-start gap-x-2 h-full">
      <div className="w-full">
        <Image src={mediaItem?.src as any} alt="image" width={538} height={349} />
      </div>
      <div className="flex flex-col justify-between h-full items-start">
        <Typography className="text-2xl tracking-wide leading-snug flex-grow mb-12">
          {mediaItem?.description.length! > 150 ? mediaItem?.description.slice(150) + "..." : mediaItem?.description}
        </Typography>
        <div className="mt-auto">
          <Button
            onClick={() => route.push(`/media/${mediaItem?.id}`)}
            variant="outline"
            className=" bg-black hover:bg-blue text-white uppercase hover:text-white w-[265px] h-[60px]"
          >
            Читати Далі
          </Button>
        </div>
      </div>
    </div>
  );
};
