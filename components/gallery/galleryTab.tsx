import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import React, { FC } from "react";

interface GalleryTabProps {
  image: ImageType;
}
export const GalleryTab: FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="w-full h-full absolute aspect-square inset-0 overflow-hidden rounded-md">
            <Image fill alt="image" src={image.src} className="object-cover object-center" />
          </span>
          <span
            className={cn(
              `
          absolute inset-0 rounded-md ring-2 ring-offset-2
          `,
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};
