"use client";

import { SubscribeForm } from "./forms/subscribeForm";
import { History } from "./history";
import { Slider } from "./ui/slider";
import { UpcomingEvents } from "./upcomingEvents";
import { SlidesProps } from "@/types";
import React from "react";

export const MainClient = ({ slides }: { slides: SlidesProps[] }) => {
  return (
    <>
      <Slider slides={slides} />
      <History />
      <UpcomingEvents />
      <SubscribeForm />
    </>
  );
};
