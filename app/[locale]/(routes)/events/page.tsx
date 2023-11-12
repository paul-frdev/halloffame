import { EventsClient } from "@/components/eventsClient";
import React from "react";
import { getPublishedEvents } from '@/requests/events';


const EventsPage = async () => {

  const publishedEvents = await getPublishedEvents();

  return <EventsClient events={publishedEvents} />;
};

export default EventsPage;
