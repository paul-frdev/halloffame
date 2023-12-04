"use client";

import { Activities } from "./activities";
import { Breadcrumbs } from "./breadcrumbs";
import { Container } from "./ui/container";
import CustomImage from "./ui/customImage";
import { Title } from "./ui/title";
import { Typography } from "./ui/typography";
import { UpcomingEvents } from "./upcomingEvents";
import { fadeIn } from "@/constants";
import { DateRageIcon } from "@/icons/dateRageIcon";
import { Article } from "@/types";
import { motion } from "framer-motion";
import React from "react";

interface MediaItem {
  article: Article;
}
export const MediaItem: React.FC<MediaItem> = ({ article }) => {
  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "ЗМІ про нас", url: "/media" },
    { label: `${article?.title.length! >= 20 ? article?.title.slice(0, 20) + "..." : article?.title}`, url: `/media/${article?.id}` },
  ];
  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="bg-white pt-12 text-black">
      <Container className="flex-col justify-start items-start">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="w-full flex justify-between items-center mt-12 mb-4">
          <div className="flex gap-x-4">
            <DateRageIcon />
            <Typography className="text-[20px] leading-snug tracking-wide">{article?.publish_date}</Typography>
          </div>
          <div>
            <Title>{article?.title}</Title>
          </div>
          <div>
            <Activities />
          </div>
        </div>
        <div className="mb-12">
          <div className="w-full max-w-[1900px] h-full">
            <CustomImage height="450px" photoUrl={article?.image?.[0].url} />
          </div>
          <div className="h-[350px] !text-[22px] pt-4" dangerouslySetInnerHTML={{ __html: article?.description! }} />
        </div>
      </Container>
      <div className="bg-black text-white pb-20">
        <UpcomingEvents />
      </div>
    </motion.section>
  );
};
