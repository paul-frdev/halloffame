'use client'

import { locales } from "@/constants";
import Image from "next/image";
import Link from "next-intl/link";
import React from "react";

export const LanguageSwitcher = () => {
  
  return (
    <div className="flex justify-between w-full gap-x-[31px] max-w-[122px] mr-[60px] items-center">
      {locales.map(locale => (
        <Link key={locale.id} href={locale.href} locale={locale.locate} className='hover:scale-150 transition-all duration-300'>
          <Image src={locale.src} alt="image" />
        </Link>
      ))}
    </div>
  );
};
