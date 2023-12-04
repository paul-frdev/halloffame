import { getPublishedEvents } from "@/actions/events";
import { EventsClient } from "@/components/eventsClient";
import React from "react";

const EventsPage = async () => {
  const publishedEvents = await getPublishedEvents();

  return <EventsClient events={publishedEvents} />;
};

export default EventsPage;
