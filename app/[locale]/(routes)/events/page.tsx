import React from "react";
import { EventsClient } from "@/components/eventsClient";
import { getPublishedEvents } from '@/actions/events';


const EventsPage = async () => {

  const publishedEvents = await getPublishedEvents();
  
  return <EventsClient events={publishedEvents} />;
};

export default EventsPage;
