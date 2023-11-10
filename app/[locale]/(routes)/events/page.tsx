import { EventsClient } from "@/components/eventsClient";
import React from "react";
import { publishedEvents } from '@/requests/events';


const EventsPage = async () => {

  const getPublishedEvents = await publishedEvents();

  return <EventsClient events={getPublishedEvents} />;
};

export default EventsPage;
