"use client";

import { SubscribeForm } from "./forms/subscribeForm";
import { History } from "./history";
import { Slider } from "./ui/slider";
import { UpcomingEvents } from "./upcomingEvents";
import { mainSlider } from "@/constants";
import React from "react";

export const MainClient = () => {
  return (
    <>
      <Slider slides={mainSlider} />
      <History />
      <UpcomingEvents />
      <SubscribeForm />
    </>
  );
};
