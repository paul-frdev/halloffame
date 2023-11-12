import { Event } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/event/`;

export const getPublishedEvents = async (): Promise<Event[]> => {
  const res = await fetch(`${URL}scheduled`, { next: { revalidate: 0 } });

  return res.json();
};

export const getPublishedEventId = async (id: string): Promise<Event> => {
  const res = await fetch(`${URL}/scheduled/${id}`, { next: { revalidate: 0 } });
  return res.json();
};
