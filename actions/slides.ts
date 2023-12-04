import { BASE_URL } from "./config";
import { SlidesProps } from "@/types";

export const getMainSlides = async (): Promise<SlidesProps[]> => {
  const res = await fetch(`${BASE_URL}/slides/main`, { next: { revalidate: 0 } });

  return res.json();
};

export const getShopSlides = async (): Promise<SlidesProps[]> => {
  const res = await fetch(`${BASE_URL}/slides/shop`, { next: { revalidate: 0 } });

  return res.json();
};
