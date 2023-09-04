import newsList from "@/app/news.json";
import { NewsList } from "@/components/newsList";
import React from "react";

const NewsPage = () => {
  return <NewsList news={newsList} />;
};

export default NewsPage;
