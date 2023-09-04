import newsList from "@/app/news.json";
import { NewsItem } from "@/components/newsItem";
import { NewsList } from "@/components/newsList";
import React from "react";

export async function generateStaticParams() {
  return newsList.map(news => ({
    newsId: news.id.toString(),
  }));
}

const NewsItemPage = ({ params: { newsId } }: { params: { newsId: string } }) => {
  const formattedNewsItem = newsList.find(item => item.id.toString() === newsId);
  return <NewsItem newsItem={formattedNewsItem} />;
};

export default NewsItemPage;
