"use client";

import { PreviewEventCart } from "./previewEventCart";
import { Container } from "./ui/container";
import { Event } from "@/types";
import React from "react";

interface EventsListProps {
  eventsList: Event[];
}
export const EventsList: React.FC<EventsListProps> = ({ eventsList }) => {
  return (
    <Container className="w-full max-w-[1300] m-auto grid grid-cols-1 justify-center items-center tablet:grid-cols-2 tablet:gap-x-10 gap-y-10 px-0">
      {eventsList?.map(event => <PreviewEventCart key={event.event_id} event={event} />)}
    </Container>
  );
};
