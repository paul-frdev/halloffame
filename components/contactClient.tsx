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
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="relative w-full h-[824px] text-white pt-12">
      <span className="absolute -z-[1] bg-contactBg top-0 left-0 w-full h-[824px] bottom-0 right-0 bg-no-repeat object-cover object-center" />
      <Container className=" justify-start items-start flex-col w-full">
        <div className="mt-12 flex justify-between items-start w-full">
          <div className="w-full">
            <Title className="text-[48px] mb-12">Наші контакти</Title>
            <Typography className="text-2xl mb-12">{contact.contacts_title}</Typography>
            <div className="text-2xl font-SFPRegular mb-4">
              <Typography className="mb-4 max-w-[550px] w-full">
                <span className="font-bold">Розташування:</span>
                {contact.contacts_address}
              </Typography>
              <Typography className="mb-4 flex justify-start items-center">
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
