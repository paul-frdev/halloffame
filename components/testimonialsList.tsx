"use client";

import { Breadcrumbs } from "./breadcrumbs";
import { Search } from "./search";
import { TestimonialItem } from "./testimonialItem";
import { Container } from "./ui/container";
import CustomImage from './ui/customImage';
import { Title } from "./ui/title";
import { UpcomingEvents } from "./upcomingEvents";
import { fadeIn } from "@/constants";
import { Testimonial } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface TestimonialsListProps {
  testimonials: Testimonial[];
}
export const TestimonialsList: React.FC<TestimonialsListProps> = ({ testimonials }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Testimonial[]>([]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    updateSearchResults(value);
  };

  const updateSearchResults = (query: string) => {
    const filteredResults = testimonials.filter(
      testimonial =>
        testimonial.author.toLowerCase().includes(query.toLowerCase()) || testimonial.desriptiontext.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };
  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "Відгуки", url: "/testimonials" },
  ];
  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="bg-white">
      <div className="w-full max-w-[1900px] h-full mb-8">
        <CustomImage height="374px" photoUrl='/images/ring.png' />
      </div>
      <Container className="flex-col justify-start items-start text-black py-8">
        <div className="flex flex-col mobileMap:flex-row  gap-y-8 mobileMap:gap-y-0 w-full justify-between items-center mb-4 mobileMap:mb-12">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Search searchQuery={searchQuery} handleSearchInputChange={handleSearchInputChange} />
        </div>
        <div className=" mb-4 tablet:mb-12">
          <Title className="text-[48px] text-black font-oswaldBold uppercase">Книга відгуків</Title>
        </div>
        {(searchQuery ? searchResults : testimonials).map(item => (
          <TestimonialItem key={item.id} testimonial={item} />
        ))}
      </Container>
      <div className="bg-black w-full">
        <UpcomingEvents />
      </div>
    </motion.section>
  );
};
