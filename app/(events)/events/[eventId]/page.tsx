import eventList from "@/app/events.json";
import { EventItem } from "@/components/eventItem";
import React from "react";

export async function generateStaticParams() {
  return eventList.map(ev => ({
    eventId: ev.id.toString(),
  }));
}

const EventPage = ({ params: { eventId } }: { params: { eventId: string } }) => {
  const formattedEvents = eventList.map(event => ({
    id: event.id,
    title: event.title,
    description: event.description,
    src: event.src,
    price: event.price,
    time: event.time,
    location: event.location,
    date: new Date(),
  }));
  const formattedEvent = formattedEvents.find(elem => elem.id.toString() === eventId);
  if (!formattedEvent) {
    return "No id";
  }
  return <EventItem event={formattedEvent} />;
};

export default EventPage;
