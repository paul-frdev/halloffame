"use client";

import { Button } from "./ui/button";
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
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const socialMediaData = [
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
  const [isHover, setIsHover] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const pathname = usePathname();
  const route = useRouter();

  const match = pathname.match(/^\/events\/(\d+)$/);
  const eventId = match ? match[1] : null;
  const matchProductId = pathname.match(/^\/shop\/(\d+)$/);
  const productId = matchProductId ? matchProductId[1] : null;

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 30) {
        setIsFixed(true);
        document.body.classList.add("fixed-header");
      } else {
        setIsFixed(false);
        document.body.classList.remove("fixed-header");
      }
    }, 0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.to(".logo-container svg", {
      width: isFixed ? 90 : 150,
      height: isFixed ? 90 : 150,
      duration: isFixed ? 0.2 : 0.2,
      ease: "Power4.ease",
    });
  }, [isFixed]);

  return (
    <>
      <div className={cn(`relative h-[44px] z-[14] max-w-[1632px] px-4 m-auto w-full transition-all duration-300`, isFixed ? " hidden" : "visible")}>
        <div className={cn(`w-full ml-auto max-w-[1360px] h-[98px] flex justify-between items-center`)}>
          <LanguageSwitcher />
          <ul className=" relative flex justify-between items-end  gap-x-[60px]">
            <span className="absolute top-0 left-0 w-[1px] h-[59px] border-l-1 border-link" />
            {secondNav.map(item => {
              const isActive = item.src === pathname;
              return (
                <li
                  key={item.id}
                  className={cn(
                    `text-lg leading-[20px] font-SFPRegular text-link transition-all duration-300 hover:text-white whitespace-nowrap py-1 `,
                    isActive ? "border-b border-[#ffffff] text-white" : "border-b border-transparent"
                  )}
                >
                  <Link href={item.src}>{item.title}</Link>
                </li>
              );
            })}
            <span className="absolute top-0 right-0 w-[1px] h-[59px] border-l-1 border-link" />
          </ul>
          <ul className="flex justify-between items-center gap-x-[20px] w-full max-w-[328px] px-[50px]">
            {socialMediaData.map(item => (
              <li className="transition-all duration-300" key={item.id} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <Link href={item.link} style={{ fill: "#000" }}>
                  {item.social}
                </Link>
              </li>
            ))}
          </ul>
          {eventId || productId || pathname === "/cart" ? null : (
            <Link href="/cart" className="flex justify-start items-start gap-x-[17px]">
              <Typography className=" inline-block">Кошик</Typography>
              <CartWidget className="relative" widthNumber={17} heightNumber={17} />
            </Link>
          )}
        </div>
      </div>
      <header
        className={cn(`h-[174px] transition-all duration-300 bg-basic z-[12]`, isFixed ? "h-[122px] fixed top-0 left-0 right-0 bg-basic pt-4" : "")}
      >
        <Container className={cn(`flex justify-between w-full items-end`, isFixed ? "pb-4" : "pb-9")}>
          <Link href="/" className={cn(`mr-[90px]`, isFixed ? "mt-0" : "-mt-[12px]")}>
            <span className="logo-container">
              <Logo width={150} height={150} />
            </span>
          </Link>
          <div className={cn(`flex flex-col justify-end items-start gap-y-[30px] w-full ml-auto`, isFixed ? "gap-y-0" : "gap-y-[30px]")}>
            <div className={cn(`flex  w-full items-center ml-auto max-w-[1360px]`, isFixed ? "justify-end" : "justify-between")}>
              <ul className="flex justify-between items-start gap-x-[92px]">
                {mainNav.map(item => {
                  const isActive = pathname === item.src;
                  return (
                    <li
                      className={cn(`text-[27px] font-SFPRegular leading-normal`, isActive ? "border-b border-white" : "border-b border-transparent")}
                      key={item.id}
                    >
                      <Link className={cn(`pb-2`)} href={item.src}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="w-full ml-auto flex justify-end items-end">
                {eventId || productId || pathname === "/cart" ? (
                  <Link href="/cart" className="relative">
                    <CartWidget width={35} height={35} className="mr-8 pr-1" />
                  </Link>
                ) : (
                  <Button
                    onClick={() => route.push("/events")}
                    variant="outline"
                    className="text-2xl uppercase font-oswaldBold h-[69px] w-full max-w-[305px]"
                  >
                    Замовити квиток
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
