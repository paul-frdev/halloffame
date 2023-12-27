"use client";

import { ContactForm } from "./forms/contactForm";
import Map from "./map/map";
import { Container } from "./ui/container";
import { Title } from "./ui/title";
import { Typography } from "./ui/typography";
import { fadeIn } from "@/constants";
import { Contact } from "@/types";
import { motion } from "framer-motion";
import React from "react";

interface ContactProps {
  contact: Contact;
}
export const ContactClient: React.FC<ContactProps> = ({ contact }) => {
  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="relative w-full h-[100vh] tablet:h-full text-white py-12">
      <span className="absolute -z-[1] bg-contactBg top-0 left-0 w-full h-full bottom-0 right-0 bg-no-repeat object-cover object-center" />
      <Container className=" justify-start items-start flex-col w-full h-full">
        <div className="flex flex-col tablet:flex-row justify-between gap-y-8 tablet:gap-y-0 tablet:gap-x-4 items-start h-full w-full">
          <div className="w-full">
            <Title className="text-[48px] mb-12">Наші контакти</Title>
            <Typography className="text-2xl mb-12">{contact.contacts_title}</Typography>
            <div className="text-2xl font-SFPRegular mb-10">
              <Typography className="mb-8 max-w-[550px] w-full">
                <span className="font-bold">Розташування:</span>{' '}
                {contact.contacts_address}
              </Typography>
              <Typography className="mb-8 flex justify-start items-center">
                <span className="font-bold mr-4">Контактний телефон:</span>
                <a href="tel:380123456789">{contact.contacts_phone}</a>
              </Typography>
              <Typography className="flex justify-start items-center">
                <span className="font-bold mr-4">Пошта для звязку:</span>
                <a href="mailto:380123456789">{contact.contacts_email}</a>
              </Typography>
            </div>
            <Map containerStyle={{ width: "100%", maxWidth: "600px", height: "370px" }} zoom={16} />
          </div>
          <ContactForm />
        </div>
      </Container>
    </motion.section>
  );
};
