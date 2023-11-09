import { Button } from "./button";
import { Typography } from "./typography";
import { ArrowRight } from "@/icons/arrowRight";
import { Event } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface UpcomingCartProps {
  event: Event;
}
export const UpcomingCart: React.FC<UpcomingCartProps> = ({ event }) => {
  const route = useRouter();

  return (
    <div className="w-[475px] h-[475px] rounded-bl-[60px] bg-[#0F0F0F] hover:bg-blue hover:shadow-shadowBlue transition-all duration-300">
      <Link href={`/events/${event.id}`}>
        <div className="w-full h-[239px] mb-5">
          <Image src={event.src} alt="event-image" width={475} height={239} className="h-[239px]" />
        </div>
        <div className="flex justify-between items-start h-full">
          <div className="w-[30%] flex justify-center items-center h-[200px]">
            <Typography className="flex justify-center items-center flex-col text-4xl leading-normal">
              <span>15</span>
              <span>Грд</span>
            </Typography>
          </div>
          <div className="w-full h-[200px] border-l-[1px] border-l-white">
            <div className="flex flex-col justify-start items-start px-8">
              <Button
                variant="outline"
                className="flex text-[24px] font-oswaldBold pl-0 mb-7 justify-center gap-x-2 hover:bg-transparent bg-transparent text-white hover:text-white"
              >
                <span>{event.title}</span>
                <span>
                  <ArrowRight color="#fff" />
                </span>
              </Button>
              <Typography className="pr-2 text-left">{event.description}</Typography>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
