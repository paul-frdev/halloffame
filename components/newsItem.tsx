"use client";

import { Activities } from "./activities";
import { Breadcrumbs } from "./breadcrumbs";
import { SubscribeForm } from "./forms/subscribeForm";
import { ResentNews } from "./resentNews";
import { Container } from "./ui/container";
import { Title } from "./ui/title";
import { Typography } from "./ui/typography";
import { DateRageIcon } from "@/icons/dateRageIcon";
import { News } from "@/types";
import Image from "next/image";
import React from "react";

interface NewsItemProps {
  newsItem: News | undefined;
}

export const NewsItem: React.FC<NewsItemProps> = ({ newsItem }) => {
  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "Новини", url: "/blog/news" },
    { label: `${newsItem?.title.length! >= 20 ? newsItem?.title.slice(0, 20) + "..." : newsItem?.title}`, url: `/blog/news/${newsItem?.id}` },
  ];

  return (
    <section className="bg-white pt-12 text-black">
      <Container className="flex-col justify-start items-start">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="w-full flex justify-between items-center mt-12 mb-4">
          <div className="flex gap-x-4">
            <DateRageIcon />
            <Typography className="text-[20px] leading-snug tracking-wide">{newsItem?.date}</Typography>
          </div>
          <div>
            <Title>{newsItem?.title}</Title>
          </div>
          <div>
            <Activities />
          </div>
        </div>
        <div className="mb-12">
          <Image src="/images/newsImage.png" alt="image" width={1600} height={600} className="mb-12" />
          <Typography className="text-[20px] leading-snug tracking-wide">{newsItem?.description}</Typography>
        </div>
        <div>
          <Title className="text-[48px]">Недавні статті:</Title>
          <ResentNews />
        </div>
      </Container>
      <SubscribeForm />
    </section>
  );
};
