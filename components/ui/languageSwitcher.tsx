"use client";

import { locales } from "@/constants";
import { useRouter } from 'next-intl/client';
import { usePathname } from 'next-intl/client';
import Image from "next/image";
import React from "react";

export const LanguageSwitcher = () => {

  const router = useRouter();
  const pathname = usePathname();


  return (
    <div className="flex justify-between w-full gap-x-[31px] max-w-[122px] mr-[60px] items-center">
      {locales.map(locale => (
        <span key={locale.id} onClick={() => router.push(pathname, { locale: locale.locate })} className="hover:scale-150 transition-all duration-300 cursor-pointer">
          <Image src={locale.src} alt="image" />
        </span>
      ))}
    </div>
  );
};
