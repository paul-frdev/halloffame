"use client";

import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { Title } from "./ui/title";
import { Typography } from "./ui/typography";
import useEventCart from "@/hooks/useEventCart";
import { Close } from "@/icons/close";
import { calculateTicketCost } from "@/lib/utils";
import { UpcomingEvent } from "@/types";
import Image from "next/image";
import React from "react";

export const CartClient = () => {
  const { events, removeItem } = useEventCart();

  return (
    <section className="bg-white py-12 px-8">
      <Container className=" justify-start items-center">
        {events ? (
          <div className="flex flex-col justify-start items-start w-full gap-y-12">
            {events?.map((event: UpcomingEvent) => {
              const currentLocation = event.location.map(location => location.street);
              const totalPrice = calculateTicketCost(event.forAdults, event.forChildren, event.price);
              return (
                <div key={event.id} className="w-full h-full flex justify-start items-start mr-auto">
                  <div className="mr-16">
                    <Image src={event.src} alt="image" width={200} height={200} />
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
                    <Typography className="text-lg text-black font-SFPSemibold">Для дорослих : {event.price[0]}</Typography>
                    <Typography className="text-lg text-black font-SFPSemibold">Для дітей : {event.price[1]}</Typography>
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
                      onClick={() => removeItem(event.id.toString())}
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
        ) : (
          <div>
            
          </div>
        )}
      </Container>
    </section>
  );
};
