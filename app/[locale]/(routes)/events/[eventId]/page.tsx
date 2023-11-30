import eventList from "@/app/events.json";
import { EventItem } from "@/components/eventItem";
import { getPublishedEventId } from '@/actions/events';
import React from "react";

export async function generateStaticParams() {
  return eventList.map(ev => ({
    eventId: ev.id.toString(),
  }));
}

const EventPage = async ({ params: { eventId } }: { params: { eventId: string } }) => {

  const eventById = await getPublishedEventId(eventId)

  return <EventItem event={eventById} />;
};

export default EventPage;
