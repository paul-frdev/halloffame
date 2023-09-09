"use client";

import { motion } from 'framer-motion';
import { ContactForm } from "./forms/contactForm";
import { Map } from "./map";
import { Container } from "./ui/container";
import { Title } from "./ui/title";
import { Typography } from "./ui/typography";
import React from "react";
import { fadeIn } from '@/constants';

export const ContactClient = () => {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className="relative w-full h-[824px] text-white pt-12"
    >
      <span className="absolute -z-[1] bg-contactBg top-0 left-0 w-full h-[824px] bottom-0 right-0 bg-no-repeat object-cover object-center" />
      <Container className=" justify-start items-start flex-col">
        <div className="mt-12 flex justify-between items-start w-full">
          <div>
            <Title className="text-[48px] mb-12">Наші контакти</Title>
            <Typography className="text-2xl mb-12">Зал Слави Українського Боксу</Typography>
            <div className="text-2xl font-SFPRegular mb-4">
              <Typography className="mb-4">
                <span className="font-bold">Розташування:</span> м. Київ, вул, Михайлівська, 13а
              </Typography>
              <Typography className="mb-4 flex justify-start items-center">
                <span className="font-bold mr-4">Контактний телефон:</span>
                <a href="tel:380123456789">380 (12) 345-67-89</a>
              </Typography>
              <Typography className="flex justify-start items-center">
                <span className="font-bold mr-4">Пошта для звязку:</span>
                <a href="mailto:380123456789">ubhov.kyiv@gmail.com</a>
              </Typography>
            </div>
            <Map isContact={true} />
          </div>
          <ContactForm />
        </div>
      </Container>
    </motion.section>
  );
};
