"use client";

import { Breadcrumbs } from "./breadcrumbs";
import { Container } from "./ui/container";
import { Title } from "./ui/title";
import { fadeIn } from "@/constants";
import { motion } from "framer-motion";
import React from "react";

export type RefundProps = {
  refund_text: string;
  refund_id: string;
};
type PaymentBackClientProps = {
  refund: RefundProps;
};

export const PaymentBackClient: React.FC<PaymentBackClientProps> = ({ refund }) => {
  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "Доставка та повернення товару", url: "/payment-back" },
  ];

  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="bg-white pt-12 text-black pb-12">
      <Container className="flex-col justify-start items-start">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="w-full flex justify-between items-center mt-8 border-b border-[#999999]">
          <Title className="uppercase text-[48px] text-black font-oswaldBold">Оплата, доставка та повернення</Title>
        </div>
        <div dangerouslySetInnerHTML={{ __html: refund.refund_text }} className="mt-8" />
      </Container>
    </motion.section>
  );
};
