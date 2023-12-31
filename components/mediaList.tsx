"use client";

import { Breadcrumbs } from "./breadcrumbs";
import { MediaPreviewItem } from "./mediaPreviewItem";
import { Search } from "./search";
import { Container } from "./ui/container";
import { Title } from "./ui/title";
import { fadeIn } from "@/constants";
import { Article } from "@/types";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface MediaListProps {
  mediaList: Article[];
}
export const MediaList: React.FC<MediaListProps> = ({ mediaList }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Article[]>([]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    updateSearchResults(value);
  };

  const updateSearchResults = (query: string) => {
    const filteredResults = mediaList.filter(
      media => media.title.toLowerCase().includes(query.toLowerCase()) || media.description?.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "ЗМІ про нас", url: "/media" },
  ];

  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="bg-white py-12">
      <Container className="flex-col justify-start items-start">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="flex flex-col tablet:flex-row justify-between items-start tablet:items-center w-full my-12 pb-12 border-b-[2px] border-[#788191]">
          <div>
            <Title className="text-[48px] text-black font-oswaldBold uppercase">Новини</Title>
          </div>
          <Search className='-order-1 mb-8 tablet:mb-0 tablet:order-1' searchQuery={searchQuery} handleSearchInputChange={handleSearchInputChange} />
        </div>
        <div className="w-full flex justify-center flex-col text-black items-center gap-y-12 lDesktop:gap-y-6 last-of-type:mb-12">
          {(searchQuery ? searchResults : mediaList).map(media => (
            <MediaPreviewItem key={media.id} mediaItem={media} />
          ))}
        </div>
      </Container>
    </motion.section>
  );
};
