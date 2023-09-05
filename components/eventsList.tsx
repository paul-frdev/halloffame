"use client";

import { PreviewEventCart } from "./previewEventCart";
import { Container } from "./ui/container";
import { UpcomingEvent } from "@/types";
import React from "react";

interface EventsListProps {
  eventsList: UpcomingEvent[];
}
export const EventsList: React.FC<EventsListProps> = ({ eventsList }) => {
  return (
    <Container className="w-full max-w-[1300] m-auto justify-center items-center flex-wrap gap-x-20 gap-y-10">
      {eventsList?.map(event => <PreviewEventCart key={event.id} event={event} />)}
    </Container>
  );
};
