"use client";

import { locations } from './map/config';
import { GoogleMap } from "./map/googleMap";
import { Container } from "./ui/container";
import { Title } from "./ui/title";
import { Typography } from "./ui/typography";
import { footerNav } from "@/constants";
import { Logo } from "@/icons/logo";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className=" h-auto bg-gray">
      <Container className="justify-between items-start flex-wrap desktop:flex-nowrap  py-12">
        <div className='order-4 tablet:order-[0]'>
          <Link href="/">
            <Logo width={283} height={282} />
          </Link>
        </div>
        <div className="pt-3">
          <Title className="text-[24px] leading-[33.6px] font-SFPRegular text-start mb-8 ">
            <span className="pb-1 border-b-[2px] border-white">Про Нас</span>
          </Title>
          <ul className="flex flex-col justify-center items-start">
            {footerNav.map(link => (
              <li className="text-lg leading-normal font-SFPRegular mb-3" key={link.id}>
                <Link href={link.src}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-3">
          <Title className="text-[24px] leading-[33.6px] font-SFPRegular text-left mb-8">
            <span className="pb-1 border-b-[2px] border-white">Наші контакти:</span>
          </Title>
          <Typography className="text-lg leading-normal font-SFPRegular">
            <span className="mb-3 inline-block">Адреса: м. Київ, вул. Михайлівська, 13</span>
            <br />
            <span className="mb-3 inline-block">Тел: +380 (97) 390-39-49</span>
            <br />
            <span className="mb-3 inline-block">Години роботи: Вт. - Зб. 11:00 – 18:00</span>
            <br />
            <Link className="mb-3 inline-block" href="mailto:ubhov.kyiv@gmail.com">
              Email: ubhov.kyiv@gmail.com
            </Link>
            <br />
            <Link className="mb-3 inline-block" href="/">
              Політика конфіденційності
            </Link>
          </Typography>
        </div>
        <div className="pt-3 hidden [@media(min-width:1150px)]:block">
          <Title className="text-[24px] leading-[33.6px] font-SFPRegular text-left mb-8">
            <span className="pb-1 border-b-[2px] border-white">Як дістатися до нас?</span>
          </Title>
            <GoogleMap locations={locations} mapId="map_id" />
        </div>
      </Container>
    </footer>
  );
};
