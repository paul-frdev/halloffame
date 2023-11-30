import { BASE_URL } from './config';


export const getPublishedEvents = async (): Promise<Event[]> => {
  const res = await fetch(`${BASE_URL}/event/published`, { next: { revalidate: 0 } });

  return res.json();
};