import { EventsClient } from '@/components/eventsClient'
import React from 'react'
import eventList from "@/app/events.json";


const EventsPage = () => {
  const formattedEvents = eventList.map((event) => ({
    id: event.id,
    title: event.title,
    description: event.description,
    src: event.src,
    date: new Date()
  }))
  return (
    <EventsClient events={formattedEvents} />
  )
}

export default EventsPage