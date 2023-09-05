"use client";

import { NotFound } from "@/icons/notFound";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { Container } from './container';
import { Title } from './title';
import { Typography } from './typography';
import { Button } from 'react-day-picker';

export const NotFoundClient = () => {
  const router = useRouter();
  const params = useParams()

  return (
    <Container className="flex flex-col justify-center items-center h-full">
      <div className=" mb-9 md:mb-14">
        <NotFound />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-4 mb-9">
        <Title className="text-center text-[26px] md:text-[32px] tracking-[0.5px]">Ooops! Page not found!</Title>
        <Typography className="text-center text-[16px] tracking-[0.15px] leading-6 font-sansRegular text-checkColor">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
      </div>
      <Button
        onClick={() => router.push(`/${params.locale}`)}
        className="w-full max-w-[328px] md:max-w-[264px] uppercase font-sansRegular tracking-[1px] leading-[16px]"
      >
        To main page
      </Button>
    </Container>
  );
};