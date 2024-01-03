"use client";

import { MobileMenu } from "./mobileMenu";
import { MobileNav } from "./mobileNav";
import { CartWidget } from "./ui/cartWidget";
import { Container } from "./ui/container";
import { LanguageSwitcher } from "./ui/languageSwitcher";
import { Typography } from "./ui/typography";
import { mainNav, secondNav } from "@/constants";
import { Facebook } from "@/icons/facebook";
import { Instagram } from "@/icons/instagram";
import { Logo } from "@/icons/logo";
import { Twitter } from "@/icons/twitter";
import { Youtube } from "@/icons/youtube";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import debounce from "lodash.debounce";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { SlMenu } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";
import { useMediaQuery } from "react-responsive";
import { Squash as Hamburger } from 'hamburger-react'
import { SocialMediaLinks } from './ui/socialMediaLinks';

export const socialMediaData = [
  {
    id: 1,
    social: <Facebook />,
    link: "https://www.facebook.com",
  },
  {
    id: 2,
    social: <Twitter />,
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    social: <Instagram />,
    link: "https://www.facebook.com",
  },
  {
    id: 4,
    social: <Youtube />,
    link: "https://www.facebook.com",
  },
];

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const pathname = usePathname();
  const params = useParams();
  const tr = useTranslations("header");

  const isBigScreen = useMediaQuery({ query: "(min-width: 1400px)" });

  const match = pathname.match(/^\/events\/(\d+)$/);
  const eventId = match ? match[1] : null;
  const matchProductId = pathname.match(/^\/shop\/(\d+)$/);
  const productId = matchProductId ? matchProductId[1] : null;

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 30) {
        setIsFixed(true);
      } else {
        if (window.scrollY < 60) {
          setIsFixed(false);
        }
      }
    }, 0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.to(".logo-container svg", {
      width: !isFixed && isBigScreen ? 150 : 70,
      height: !isFixed && isBigScreen ? 150 : 70,
      duration: !isFixed && isBigScreen ? 0.3 : 0.3,
      ease: "Power4.ease",
    });
  }, [isFixed, isBigScreen]);


  const toggleOpenMobileNav = () => {
    setIsOpenMobileNav(prev => !prev)
  }

  //logs 

  return (
    <>
      <header
        className={cn(
          `transition-all fixed top-0 left-0 right-0 duration-300 bg-basic z-[12] pb-0 lDesktop:pt-6  lDesktop:pb-6`,
          isFixed ? "lDesktop:pb-4 lDesktop:pt-4" : ""
        )}
      >
        <Container className={cn(`flex justify-between w-full items-center lDesktop:items-end translate-all duration-300 h-[80px] lDesktop:h-auto [@media(min-width:1064px)]:gap-x-12`)}>
          <Link
            href="/"
            className={cn(` mr-auto pt-[10px]`, isFixed ? "mt-0" : "lDesktop:-mt-[12px]")}
          >
            <span className="logo-container">
              <Logo />
            </span>
          </Link>
          <div
            className={cn(
              `flex w-full max-w-[1200px] lDesktop:max-w-[1289px] flex-col justify-end items-start ml-auto transition-all duration-300`,
              isFixed ? "gap-y-0" : " lDesktop:gap-y-[40px]"
            )}
          >
            <div className={cn(`z-[14] w-full transition-all duration-300`, isFixed ? "hidden" : " visible ")}>
              <div className={cn(`hidden lDesktop:flex w-full  justify-between items-center`)}>
                <LanguageSwitcher />
                <ul className="flex justify-between items-end  gap-x-[60px]">
                  {secondNav.map(item => {
                    const isActive = `/${params.locale}${item.src}` === pathname || `/${params.locale}${item.src}/${params.mediaId}` === pathname;

                    return (
                      <li
                        key={item.id}
                        className={cn(
                          `text-lg leading-[20px] font-SFPRegular text-link transition-all duration-300 hover:text-white whitespace-nowrap py-1 `,
                          isActive ? "border-b border-[#ffffff] text-white" : "border-b border-transparent"
                        )}
                      >
                        <Link href={item.src}>{tr(item.title)}</Link>
                      </li>
                    );
                  })}
                </ul>
                <SocialMediaLinks />
                {eventId || productId || pathname === "/cart" ? null : (
                  <Link href="/cart" className="flex justify-start items-start gap-x-[17px]">
                    <Typography className=" inline-block mb-0">{tr("Кошик")}</Typography>
                    <CartWidget className="relative" widthNumber={17} heightNumber={17} />
                  </Link>
                )}
              </div>
            </div>

            <div
              className={cn(
                `flex  w-full gap-x-2 tablet:gap-x-12 items-center ml-auto justify-end lDesktop:justify-between`,
              )}
            >
              <ul className=" hidden tablet:flex justify-between items-start gap-x-[35px] desktop:gap-x-[50px] lDesktop:gap-x-[92px]">
                {mainNav.map(item => {
                  const isActive =
                    `/${params.locale}${item.src}` === pathname ||
                    `/${params.locale}${item.src}/${params.eventId}` === pathname ||
                    `/${params.locale}${item.src}/${params.productId}` === pathname ||
                    `/${params.locale}${item.src}/${params.newsId}` === pathname;
                  return (
                    <li
                      className={cn(`text-[27px] font-SFPRegular leading-normal`, isActive ? "border-b border-white" : "border-b border-transparent")}
                      key={item.id}
                    >
                      <Link className={cn(`pb-2`)} href={item.src}>
                        {tr(item.title)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-end items-end">
                {eventId || productId || pathname === "/cart" ? (
                  <Link href="/cart" className="relative">
                    <CartWidget width={35} height={35} className="mr-8 pr-1" />
                  </Link>
                ) : (
                  <Link
                    href="/events"
                    className="bg-white hover:bg-blue  text-basic transition-all px-4 lDesktop:px-12 duration-300 inline-flex items-center justify-center rounded-md font-medium ring-offset-background hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[12px]  tablet:text-lg lDesktop::text-2xl uppercase font-oswaldBold h-[40px] tablet:h-[50px] lDesktop:h-[69px] w-full max-w-[200px] tablet:max-w-[220px] desktop:max-w-[305px] mobile:text-sm"
                  >
                    {tr("Замовити квиток")}
                  </Link>
                )}
              </div>
              <div className="block tablet:hidden pt-[1px]">
                <Hamburger toggled={isOpenMobileNav} toggle={toggleOpenMobileNav} size={40} color='#fff' />
              </div>
            </div>
          </div>
        </Container>
        <MobileNav isOpen={isOpenMobileNav} setIsOpen={setIsOpenMobileNav} />
        <div className="hidden items-start items-center tablet:flex lDesktop:hidden  bg-basic h-auto w-full py-[5px] border-t mt-2 border-white">
          <Container className="items-start flex-col justify-start text-white font-oswaldBold py-2">
            <div className="w-full" onClick={() => setIsExpanded(prev => !prev)}>
              <div className='flex w-[96px] justify-between items-center'>
                <span className="text-[16px] tracking-wider leading-relaxed uppercase pl-6">Menu</span>
                {!isExpanded ? <AiOutlineDown /> : <AiOutlineUp />}
              </div>
            </div>
            <MobileMenu isOpen={isExpanded} setIsExpanded={setIsExpanded} />
          </Container>
        </div>
      </header>
    </>
  );
};
