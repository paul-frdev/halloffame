import React from 'react'
import eventList from "@/app/events.json";



export async function generateStaticParams() {
  return eventList.map((ev) => ({
    eventId: ev.id.toString(),
  }))
}


const EventPage = ({ params: { eventId } }: { params: { eventId: string } }) => {
  const event = eventList.find((elem) => elem.id.toString() === eventId)
  if (!event) {
    return 'No id'
  }
  return (
    <div>EventPage {event?.title}</div>
  )
}

export default EventPage