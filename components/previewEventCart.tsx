"use client";

import { monthNames } from "@/constants";
import { ArrowRight } from "@/icons/arrowRight";
import { Event } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from 'react-responsive';

interface EventCartProps {
  event: Event | undefined;
}
export const PreviewEventCart: React.FC<EventCartProps> = ({ event }) => {
  const EventDate = new Date(event?.event_date as string)
  
  const eventDescription = event?.descriptiontext.replace(/<\/?[a-zA-Z]+>/gi, '')
  const monthIndex = EventDate.getMonth();
  const getDay = EventDate.getDate();
  const isTabletScreen = useMediaQuery({ query: '(min-width: 985px)' })
  
  return (
    <div className=" w-full tablet:max-w-[785px] h-full container-card  shadow rounded-md hover:shadow-lg transition-all duration-200 cursor-pointer text-black">
      <Link href={`/events/${event?.event_id}`}>
        <div className=" w-full tablet:max-w-[785px] h-[238px]">
          <Image src={event?.images[0].url as any} alt="image-event" width={isTabletScreen ? 785 : 1000} className="h-[238px] object-cover object-top" height={238} />
        </div>
        <div className="p-9 flex h-[52%] justify-between items-center">
          <div className="flex flex-col justify-center items-center h-full w-[20%] border-r border-[#e8edf0] p-4 pr-4">
            <div className="relative h-[50%] flex justify-center items-center">
              <span className="absolute -top-[7px] -left-[25px] text-2xl font-oswaldBold font-extrabold text-[#007ac7]">
                {monthNames[monthIndex]}
              </span>
              <span className="text-[4.5625rem] font-SFPSemibold">{getDay}</span>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start h-full pl-8">
            <div className="inline-flex items-center justify-start w-full text-3xl font-SFPBold mb-8 mt-4">
              <span className='text-[24px] font-semibold'> {event?.title.length! > 30 ? event?.title.slice(0, 35) + '...' : event?.title}</span>
              <div className="pl-4 inline arrow-icon">
                <ArrowRight color="#ef090d" width={24} height={24} />
              </div>
            </div>
            <p className="text-[20px] text-justify font-SFPSemibold">
              {eventDescription!.length! > 100 ? eventDescription?.slice(0, 200) + "..." : eventDescription}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
