import { BASE_URL } from "./config";
import { Article } from "@/types";

export const getMedia = async (): Promise<Article[]> => {
  const res = await fetch(`${BASE_URL}/media/articles`, { next: { revalidate: 0 } });

  return res.json();
};

export const getMediaArticleId = async (id: string): Promise<Article> => {
  const res = await fetch(`${BASE_URL}/media/article/${id}`, { next: { revalidate: 0 } });
  return res.json();
};
