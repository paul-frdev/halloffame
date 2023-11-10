import eventList from "@/app/events.json";
import { EventItem } from "@/components/eventItem";
import { publishedEventId } from '@/requests/events';
import React from "react";

export async function generateStaticParams() {
  return eventList.map(ev => ({
    eventId: ev.id.toString(),
  }));
}

const EventPage = async ({ params: { eventId } }: { params: { eventId: string } }) => {

  const getEventById = await publishedEventId(eventId)

  return <EventItem event={getEventById} />;
};

export default EventPage;
