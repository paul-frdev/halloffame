import { BASE_URL } from "./config";
import { Testimonial } from "@/types";

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const res = await fetch(`${BASE_URL}/testimonial/approved`, { next: { revalidate: 0 } });

  return res.json();
};
