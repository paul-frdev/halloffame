import { BASE_URL } from "./config";
import { Event } from "@/types";

export const getPublishedEvents = async (): Promise<Event[]> => {
  const res = await fetch(`${BASE_URL}/event/published`, { next: { revalidate: 0 } });

  return res.json();
};

export const getPublishedEventId = async (id: string): Promise<Event> => {
  const res = await fetch(`${BASE_URL}/event/published/${id}`, { next: { revalidate: 0 } });
  return res.json();
};
