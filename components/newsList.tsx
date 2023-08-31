"use client";

import { Breadcrumbs } from "./breadcrumbs";
import { SubscribeForm } from "./forms/subscribeForm";
import { NewsPreviewItem } from "./newsPreviewItem";
import { Search } from "./search";
import { Container } from "./ui/container";
import { Title } from "./ui/title";
import { News } from "@/types";
import React, { useState } from "react";

interface NewsListProps {
  news: News[];
}
export const NewsList: React.FC<NewsListProps> = ({ news }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<News[]>([]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    updateSearchResults(value);
  };

  const updateSearchResults = (query: string) => {
    const filteredResults = news.filter(
      news => news.title.toLowerCase().includes(query.toLowerCase()) || news.description.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "Новини", url: "/blog/news" },
  ];
  return (
    <section className="relative bg-white pt-12">
      <Container className="flex-col justify-start items-start">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="flex justify-between items-center w-full my-12 pb-12 border-b-[2px] border-[#788191]">
          <div>
            <Title className="text-[48px] text-black font-oswaldBold uppercase">Новини</Title>
          </div>
          <div className="w-full max-w-[800px] text-black">
            <Search searchQuery={searchQuery} handleSearchInputChange={handleSearchInputChange} />
          </div>
        </div>
        <div className="w-full flex justify-center flex-col text-black items-center gap-y-6 last-of-type:mb-12">
          {(searchQuery ? searchResults : news).map(item => (
            <NewsPreviewItem key={item.id} newsItem={item} />
          ))}
        </div>
      </Container>
      <SubscribeForm />
    </section>
  );
};
