"use client";

import { Breadcrumbs } from "./breadcrumbs";
import { Container } from "./ui/container";
import { Typography } from "./ui/typography";
import { fadeIn } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export type AboutUsProps = {
  about_title?: string;
  about_description: string
}
export const AboutUs: React.FC<AboutUsProps> = ({ about_description }) => {
  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "Про нас", url: "/about" },
  ];

  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="bg-white text-black flex flex-col justify-start pb-24">
      <div className="w-full h-[660px]">
        <Image src="/images/about.png" alt="image" width={2100} height={660} />
      </div>
      <Container className=" justify-start items-start flex-col pt-12">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="mt-12 w-full">
          <div className="text-[20px] tracking-wider leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: about_description }} />
        </div>
      </Container>
    </motion.section>
  );
};
