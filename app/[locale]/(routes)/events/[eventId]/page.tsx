import { getPublishedEventId } from "@/actions/events";
import { EventItem } from "@/components/eventItem";
import React from "react";

const EventPage = async ({ params: { eventId } }: { params: { eventId: string } }) => {
  const eventById = await getPublishedEventId(eventId);

  return <EventItem event={eventById} />;
};

export default EventPage;
