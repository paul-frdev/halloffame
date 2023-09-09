"use client";

import { Breadcrumbs } from "./breadcrumbs";
import { EventsList } from "./eventsList";
import { CalendarForm } from "./forms/calendarForm";
import { SubscribeForm } from "./forms/subscribeForm";
import { Container } from "./ui/container";
import { Title } from "./ui/title";
import { fadeIn } from "@/constants";
import { UpcomingEvent } from "@/types";
import { motion } from "framer-motion";
import React from "react";

interface EventsClientProps {
  events: UpcomingEvent[];
}
export const EventsClient: React.FC<EventsClientProps> = ({ events }) => {
  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "Події", url: `/events` },
  ];

  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="relative bg-white">
      <Container className="flex-col justify-start items-start mb-12">
        <Breadcrumbs breadcrumbs={breadcrumbs} className=" mt-8 text-black" />
        <div className="flex justify-between items-center w-full my-12 pb-12 border-b-[2px] border-[#788191]">
          <div>
            <Title className="text-[48px] text-black font-oswaldBold uppercase">Майбутні події</Title>
          </div>
          <div>
            <CalendarForm />
          </div>
        </div>
        <EventsList eventsList={events} />
      </Container>
      <SubscribeForm />
    </motion.section>
  );
};
