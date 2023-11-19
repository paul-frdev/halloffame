"use client";

import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { CountButtons } from "./ui/countButtons";
import { NoResults } from "./ui/noResults";
import { Title } from "./ui/title";
import { Typography } from "./ui/typography";
import { fadeIn } from "@/constants";
import useEventCart from "@/hooks/useEventCart";
import useProductCart from "@/hooks/useProductCart";
import { Close } from "@/icons/close";
import { calculateTicketCost } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { EventForm } from './forms/eventForm';
import { ProductForm } from './forms/productForm';
import { Event } from '@/types';

export const CartClient = () => {
  const { events, removeItem } = useEventCart();
  const { products, removeProduct, totalQuantity, totalCost, addProductQuantity, subtractProductQuantity } = useProductCart();

  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="bg-white py-12 px-8 text-black h-[80vh]">
      <Container className="justify-start flex-col items-start gap-y-8">
        {events.length > 0 ? (
          <>
            <div className="flex flex-col justify-start items-start w-full gap-y-12 border-b border-[#999999] pb-10">
              {events?.map((event: Event) => {
                const currentLocation = event.location_address
                const totalPrice = calculateTicketCost(event.forAdults, event.forChildren, event.adult_price, event.child_price);
                return (
                  <div key={event.event_id} className="w-full h-full flex justify-start items-start mr-auto">
                    <div className="mr-16">
                      <Image src={event.images[0].url} alt="image" width={200} height={200} />
                    </div>
                    <div className="flex flex-col justify-center mr-16">
                      <Title className="text-2xl text-black font-oswaldBold uppercase">Назва події</Title>
                      <Typography className="text-lg text-black font-SFPSemibold">{event.title}</Typography>
                    </div>
                    <div className="w-[200px] flex flex-col justify-center mr-16">
                      <Title className="text-2xl text-black font-oswaldBold uppercase">Місце</Title>
                      <Typography className="text-lg text-black font-SFPSemibold">{currentLocation}</Typography>
                    </div>
                    <div className="mr-16">
                      <Title className="text-2xl text-black font-oswaldBold uppercase">Ціна</Title>
                      <Typography className="text-lg text-black font-SFPSemibold">Для дорослих : {event.adult_price}</Typography>
                      <Typography className="text-lg text-black font-SFPSemibold">Для дітей : {event.child_price}</Typography>
                    </div>
                    <div className="mr-16">
                      <Title className="text-2xl text-black font-oswaldBold uppercase">кількість</Title>
                      <Typography className="text-lg text-black font-SFPSemibold">Для дорослих : {event.forAdults ? event.forAdults : "-"}</Typography>
                      <Typography className="text-lg text-black font-SFPSemibold">Для дітей : {event.forChildren ? event.forChildren : "-"}</Typography>
                    </div>
                    <div className="mr-16">
                      <Title className="text-2xl text-black font-oswaldBold uppercase">Час</Title>
                      <Typography className="text-lg text-black font-SFPSemibold">{event.selectedTime}</Typography>
                    </div>
                    <div className="mr-16">
                      <Title className="text-2xl text-black font-oswaldBold uppercase">Сума</Title>
                      <Typography className="text-lg text-black font-SFPSemibold">{totalPrice} Грн</Typography>
                    </div>
                    <div className="flex justify-center items-center h-full">
                      <Button
                        onClick={() => removeItem(event.event_id.toString())}
                        variant="outline"
                        className="bg-transparent hover:bg-transparent hover:text-black hover:border hover:border-black border-transparent px-2 hover:"
                      >
                        <Close fill="#808080" width={28} height={28} />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
            <EventForm />
          </>
        ) : products.length > 0 ? (
          <>
            <div className="flex flex-col justify-start items-start w-full gap-y-12">
              {products.map(product => {
                return (
                  <div key={product.id} className="w-full h-full flex justify-start items-start mr-auto border-b border-[#999999] pb-8">
                    <div className="flex flex-col justify-start items-start gap-y-8">
                      <div className="flex flex-col justify-center mr-48 gap-y-3">
                        <Title className="text-2xl text-black font-oswaldBold uppercase">Назва сувеніру</Title>
                        <Typography className="text-lg text-black font-SFPSemibold">{product.title}</Typography>
                      </div>
                      <div className="mr-16">
                        <Image src={product.previewImage} alt="image" width={200} height={200} />
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-y-8">
                      <div className="flex flex-col justify-center mr-16 gap-y-3">
                        <Title className="text-2xl text-black font-oswaldBold uppercase">Категорія</Title>
                        <Typography className="text-lg text-black font-SFPSemibold">{product.category}</Typography>
                      </div>
                      <div className="flex flex-col justify-center mr-16 gap-y-3">
                        <Title className="text-2xl text-black font-oswaldBold uppercase">Pозмір</Title>
                        <Typography className="text-lg text-black font-SFPSemibold">{product.size}</Typography>
                      </div>
                      <div className="flex flex-col justify-center mr-16 gap-y-3">
                        <Title className="text-2xl text-black font-oswaldBold uppercase">Колір</Title>
                        <Typography className="text-lg text-black font-SFPSemibold">{product.color}</Typography>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center mr-16 gap-y-3">
                      <Title className="text-2xl text-black font-oswaldBold uppercase">Ціна товару</Title>
                      <Typography className="text-lg text-black font-SFPSemibold">{product.price}</Typography>
                    </div>
                    <div className="flex flex-col justify-center mr-16 gap-y-3">
                      <Title className="text-2xl text-black font-oswaldBold uppercase">Кількість</Title>
                      <CountButtons
                        product={product}
                        quantity={product.quantity}
                        addQuantity={addProductQuantity}
                        subtractQuantity={subtractProductQuantity}
                      />
                    </div>
                    <div className="flex justify-center items-center h-full pt-11 ml-12">
                      <Button
                        onClick={() => removeProduct(product?.id!.toString())}
                        variant="outline"
                        className="bg-transparent hover:bg-transparent hover:text-black hover:border hover:border-black border-transparent px-2 hover:"
                      >
                        <Close fill="#808080" width={28} height={28} />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
            <ProductForm />
          </>
        ) : (
          <NoResults />
        )}
        {events.length > 0 || products.length > 0 ? (
          <div className="my-6 text-2xl font-SFPBold">
            <p className="mb-4 pt-6">Загальна кількість : {totalQuantity}</p>
            <p>Загальна вартість : {totalCost?.toFixed(0)} грн.</p>
          </div>
        ) : null}
      </Container>
    </motion.section>
  );
};
