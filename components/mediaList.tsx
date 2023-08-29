"use client";

import { Breadcrumbs } from "./breadcrumbs";
import { MediaPreviewItem } from "./mediaPreviewItem";
import { Search } from "./search";
import { Container } from "./ui/container";
import { Title } from "./ui/title";
import { Media } from "@/types";
import React from "react";

interface MediaListProps {
  mediaList: Media[];
}
export const MediaList: React.FC<MediaListProps> = ({ mediaList }) => {
  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "ЗМІ про нас", url: "/media" },
  ];

  return (
    <section className="bg-white py-12">
      <Container className="flex-col justify-start items-start">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="flex justify-between items-center w-full my-12 pb-12 border-b-[2px] border-[#788191]">
          <div>
            <Title className="text-[48px] text-black font-oswaldBold uppercase">Новини</Title>
          </div>
          <div>
            <Search />
          </div>
        </div>
        <div className="w-full flex justify-center flex-col text-black items-center gap-y-6 last-of-type:mb-12">
          {mediaList.map(media => (
            <MediaPreviewItem key={media.id} mediaItem={media} />
          ))}
        </div>
      </Container>
    </section>
  );
};
