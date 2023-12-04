"use client";

import { Breadcrumbs } from "./breadcrumbs";
import { SelectForm } from "./forms/selectForm";
import Map from "./map/map";
import { Button } from "./ui/button";
import { ButtonLeft } from "./ui/buttonLeft";
import { ButtonRight } from "./ui/buttonRight";
import { Container } from "./ui/container";
import CustomImage from "./ui/customImage";
import { Title } from "./ui/title";
import { Typography } from "./ui/typography";
import { fadeIn, monthNames } from "@/constants";
import useEventCart from "@/hooks/useEventCart";
import { calculateTicketCost, cn } from "@/lib/utils";
import { Event } from "@/types";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";

interface EventItemProps {
  event: Event;
}
export const EventItem: React.FC<EventItemProps> = ({ event }) => {
  const [quantityForAdults, setQuantityForAdults] = useState(0);
  const [quantityForChildren, setQuantityForChildren] = useState(0);
  const [onSelectedValue, setOnSelectedValue] = useState<string | undefined>("");
  const [selectFormTrigger, setSelectFormTrigger] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [locationCoordinates, setLocationCoordinates] = useState({ lat: 0, lng: 0 });

  const isTablet = useMediaQuery({ query: "(min-width: 667px)" });

  const route = useRouter();
  const { addItem } = useEventCart();

  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "Події", url: "/events" },
    {
      label: `${
        !isTablet && event?.title!.length > 20
          ? event?.title!.slice(0, 7) + "..."
          : event?.title!.length > 20
          ? event?.title!.slice(0, 30) + "..."
          : event?.title!
      }`,
      url: `/events/${event.event_id}`,
    },
  ];

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(event.location_address)}&key=${apiKey}`;

    fetch(geocodingUrl)
      .then(response => response.json())
      .then(data => {
        const location = data.results[0].geometry.location;
        setLocationCoordinates({ lat: location.lat, lng: location.lng });
      })
      .catch(error => {
        console.error("Error fetching location coordinates:", error);
      });
  }, [event.location_address]);

  useEffect(() => {
    setTotalPrice(calculateTicketCost(quantityForAdults, quantityForChildren, event.adult_price, event.child_price));
  }, [event, quantityForChildren, quantityForAdults]);

  const EventDate = new Date(event?.event_date as string);

  const monthIndex = EventDate.getMonth();
  const getDay = EventDate.getDate();

  const handleOrderTickets = async () => {
    if (selectFormTrigger) {
      const isValid = await selectFormTrigger("time");

      if (isValid) {
        if (totalPrice !== 0) {
          const formattedEvent = {
            ...event,
            selectedTime: onSelectedValue,
            forAdults: quantityForAdults,
            forChildren: quantityForChildren,
          };
          addItem(formattedEvent);
          route.push("/cart");
        } else {
          toast.error("Add tickets");
        }
      } else {
        toast.error("Please, pick out available time");
      }
    }
  };
  return (
    <motion.section initial="initial" animate="animate" variants={fadeIn} className="bg-white py-12">
      <Container className="flex-col justify-start items-start">
        <Breadcrumbs breadcrumbs={breadcrumbs} id={event.event_id} className=" mt-8 text-black mb-12" />
        <div className="text-black flex [@media(max-width:985px)]:flex-col justify-between w-full items-start gap-x-10">
          {/* timeline */}
          <div className="flex flex-col justify-start items-start order-2 w-full tablet:max-w-[360px] tablet:order-[0]">
            <Title className="text-3xl mobile:text-lg tablet:text-2xl mb-12">Про подію</Title>
            <div className="mb-12 w-full max-w-[650px]">
              <Typography className="text-2xl font-oswaldBold  w-full mb-4">Дата:</Typography>
              <Typography className="text-2xl font-SFPRegular mb-4 pb-4 border-b   w-full border-black">
                {`${monthNames[monthIndex]}.${getDay}.${EventDate.getFullYear()}`}
              </Typography>
            </div>
            <div className="mb-12 w-full max-w-[650px]">
              <SelectForm event={event} setTrigger={setSelectFormTrigger} onSelectedValue={setOnSelectedValue} selectedValue={onSelectedValue} />
            </div>
            <div className="mb-12 w-full max-w-[650px]">
              <Typography className="text-2xl font-oswaldBold mb-4 max-w-full">Локація / Адреса:</Typography>
              <p className="text-2xl font-SFPRegular mb-4 pb-4 border-b max-w-full border-black">{event.location_address}</p>
            </div>
            <div className="mb-4 w-full max-w-[650px]">
              <Typography className="text-2xl font-oswaldBold mb-4 max-w-full">Ціна:</Typography>
              <Typography className="text-2xl font-SFPRegular mb-4 pb-4 border-b max-w-full border-black">{event.adult_price} ₴</Typography>
            </div>
            <div
              className={cn(
                `border-b mb-8 pb-8 w-full max-w-[650px] border-black flex flex-col justify-start w-full items-start gap-y-4 transition-all duration-300`,
                totalPrice > 0 ? "flex" : "hidden"
              )}
            >
              <Typography className="text-2xl font-SFPBold uppercase max-w-full">Загальна вартість :</Typography>
              <Typography className="font-SFPRegular text-black text-2xl max-w-full">{totalPrice.toFixed(0)} грн</Typography>
            </div>
            <div className="w-[310px] flex justify-center items-center mb-12">
              <Button
                onClick={handleOrderTickets}
                className="w-[303px] h-[60px] text-2xl leading-[33.6px] text-white bg-black border border-transparent hover:border-black transition-colors duration-300"
              >
                Замовити квитки
              </Button>
            </div>
            <Map
              headline="Дізнатися маршут до події"
              title={event.location_address}
              center={locationCoordinates}
              containerStyle={{ height: "300px", width: "100%" }}
            />
          </div>
          {/* description */}
          <div className="w-full tablet:ml-8 [@media(max-width:985px)]:mb-8">
            <Title className="tablet:!text-3xl desktop:!text-4xl mb-12">{event.title}</Title>
            <div className="w-full max-w-[1900px] h-full mb-8">
              <CustomImage height="374px" photoUrl={event.images[0].url} />
            </div>

            <div
              className="font-SFPRegular leading-[33.6px] pb-12 w-full border-b border-black text-justify  [@media(max-width:985px)]:text-start"
              dangerouslySetInnerHTML={{ __html: event.descriptiontext }}
            />
            <div className="flex justify-between gap-x-4 [@media(max-width:985px)]:justify-start items-center w-full max-w-[60%] py-12">
              <Typography className="text-2xl font-SFPBold whitespace-nowrap">Ціна :</Typography>
              <div className="flex gap-x-8 whitespace-nowrap [@media(max-width:985px)]:flex-col [@media(max-width:985px)]:ml-4">
                <Typography className="text-lg font-SFPRegular">Для дорослих - {event.adult_price} грн.</Typography>
                <Typography className="text-lg font-SFPRegular">Для детей - {event.child_price} грн.</Typography>
              </div>
            </div>
            <div className="py-12 border-t border-black flex justify-between [@media(max-width:985px)]:justify-start w-full items-center">
              <Typography className="mb-0 mr-4 desktop:mr-0 text-[16px] desktop:text-2xl font-SFPBold uppercase">
                Оберіть кількість квитків:
              </Typography>
              <Typography className="text-[0.75rem] font-SFPRegular text-[#808080] uppercase">
                ПРИМІТКА: НА ОДНУ ЛЮДИНУ МОЖЛИВо купити НЕ БІЛЬШЕ 5 КВИТКІВ НА ОДНУ ПОДІЮ.
              </Typography>
            </div>
            <div className="flex flex-nowrap justify-start items-center [@media(max-width:473px)]:flex-col [@media(max-width:473px)]:items-start w-full max-w-[60%] [@media(max-width:473px)]:max-w-full">
              <div className="flex justify-between items-center w-[250px] mr-8 [@media(max-width:473px)]:mr-0">
                <Title className="text-2xl font-SFPBold whitespace-nowrap mb-0">Для взрослых:</Title>
                <div className="flex justify-center items-baseline">
                  <ButtonLeft quantity={quantityForAdults} setQuantity={setQuantityForAdults} />
                  <span className="text-lg font-oswaldBold">{quantityForAdults}</span>
                  <ButtonRight quantity={quantityForAdults} setQuantity={setQuantityForAdults} />
                </div>
              </div>
              <div className="flex justify-between items-center w-[250px]">
                <Title className="text-2xl font-SFPBold whitespace-nowrap mb-0">Для дітей:</Title>
                <div className="flex justify-center items-baseline">
                  <ButtonLeft quantity={quantityForChildren} setQuantity={setQuantityForChildren} />
                  <span className="text-lg font-oswaldBold">{quantityForChildren}</span>
                  <ButtonRight quantity={quantityForChildren} setQuantity={setQuantityForChildren} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};
