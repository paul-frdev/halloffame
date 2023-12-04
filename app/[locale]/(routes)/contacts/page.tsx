import { getContact } from "@/actions/content";
import { ContactClient } from "@/components/contactClient";
import React from "react";

const ContactPage = async () => {
  const contact = await getContact();

  return <ContactClient contact={contact} />;
};

export default ContactPage;
