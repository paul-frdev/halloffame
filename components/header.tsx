"use client";

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
import { gsap } from "gsap";
import debounce from "lodash.debounce";
import { useTranslations } from "next-intl";
import Link from 'next-intl/link';
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { SlMenu } from 'react-icons/sl'
import { TfiClose } from 'react-icons/tfi'
import { MobileMenu } from './mobileMenu';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { MobileNav } from './mobileNav';
import { AnimatePresence } from 'framer-motion';

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
  const route = useRouter();
  const tr = useTranslations("header");

  const isBigScreen = useMediaQuery({ query: '(min-width: 1400px)' })

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
      width: !isFixed && isBigScreen ? 150 : 90,
      height: !isFixed && isBigScreen ? 150 : 90,
      duration: !isFixed && isBigScreen ? 0.3 : 0.3,
      ease: "Power4.ease",
    });
  }, [isFixed, isBigScreen]);

  return (
    <>
      <header
        className={cn(
          `transition-all fixed top-0 left-0 right-0 duration-300 bg-basic z-[12] pb-0  pt-4 lDesktop:pt-6  lDesktop:pb-6`,
          isFixed ? "lDesktop:pb-4 lDesktop:pt-4" : ""
        )}
      >
        <Container className={cn(`flex justify-between w-full items-end lDesktop:items-end translate-all duration-300 h-[80px] lDesktop:h-auto`)}>
          <Link href="/" className={cn(` [@media(max-width:340px)]:mr-[15px] mr-[40px] desktop:mr-[90px] pt-[10px]`, isFixed ? "mt-0" : "lDesktop:-mt-[12px]")}>
            <span className="logo-container">
              <Logo width={150} height={150} />
            </span>
          </Link>
          <div className={cn(`flex flex-col justify-end items-start w-full ml-auto transition-all duration-300`, isFixed ? "gap-y-0" : " lDesktop:gap-y-[40px]")}>
            <div
              className={cn(
                `z-[14] max-w-[1632px] m-auto w-full transition-all duration-300`,
                isFixed ? "hidden" : " visible "
              )}
            >
              <div className={cn(`hidden lDesktop:flex w-full ml-auto max-w-[1360px] justify-between items-center`)}>
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
                <ul className="flex justify-between items-center gap-x-[20px] w-full max-w-[328px] px-[50px]">
                  {socialMediaData.map(item => (
                    <li key={item.id}>
                      <Link href={item.link} style={{ fill: "#000" }}>
                        {item.social}
                      </Link>
                    </li>
                  ))}
                </ul>
                {eventId || productId || pathname === "/cart" ? null : (
                  <Link href="/cart" className="flex justify-start items-start gap-x-[17px]">
                    <Typography className=" inline-block">{tr("Кошик")}</Typography>
                    <CartWidget className="relative" widthNumber={17} heightNumber={17} />
                  </Link>
                )}
              </div>
            </div>


            <div className={cn(`flex  w-full items-start  tablet:items-center ml-auto max-w-[1360px] pb-[15px] desktop:pb-0`, isFixed ? "justify-end" : "justify-between")}>
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
              <div className="w-full ml-auto flex justify-end items-end mr-4 tablet:mr-0">
                {eventId || productId || pathname === "/cart" ? (
                  <Link href="/cart" className="relative">
                    <CartWidget width={35} height={35} className="mr-8 pr-1" />
                  </Link>
                ) : (
                  <Link
                    href='/events'
                    className="bg-white hover:bg-blue  text-basic transition-all duration-300 inline-flex items-center justify-center rounded-md font-medium ring-offset-background hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[12px]  tablet:text-lg desktop:text-2xl uppercase font-oswaldBold h-[40px] tablet:h-[50px] desktop:h-[69px] w-full max-w-[200px] tablet:max-w-[220px] desktop:max-w-[305px] mobile:text-sm"
                  >
                    {tr("Замовити квиток")}
                  </Link>
                )}
              </div>
              <div
                className='block tablet:hidden pt-[1px]' onClick={() => setIsOpenMobileNav(prev => !prev)}
              >
                {isOpenMobileNav ? <TfiClose size={35} /> : <SlMenu size={35} />}
              </div>
            </div>
          </div>
        </Container>
        <AnimatePresence>
          <MobileNav isOpen={isOpenMobileNav} setIsOpen={setIsOpenMobileNav} />
        </AnimatePresence>
        <div className='hidden items-start items-center tablet:flex lDesktop:hidden  bg-basic h-auto w-full py-[5px] border-t mt-4 border-white'>
          <Container className='items-start flex-col justify-start text-white font-oswaldBold my-2'>
            <div className='flex w-[96px] flex justify-between items-center' onClick={() => setIsExpanded(prev => !prev)}>
              <span className='text-[16px] tracking-wider leading-relaxed uppercase pl-6'>Menu</span>
              {!isExpanded ? <AiOutlineDown /> : <AiOutlineUp />}
            </div>
            <AnimatePresence>
              <MobileMenu isOpen={isExpanded} setIsExpanded={setIsExpanded} />
            </AnimatePresence>
          </Container>
        </div>
      </header>
    </>
  );
};
