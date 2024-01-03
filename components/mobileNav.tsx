import { MobileMenu } from "./mobileMenu";
import { CartWidget } from "./ui/cartWidget";
import { Typography } from "./ui/typography";
import { mainNav, mobileNav } from "@/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { LanguageSwitcher } from './ui/languageSwitcher';
import { SocialMediaLinks } from './ui/socialMediaLinks';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen?: (data: boolean) => void;
}
export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const params = useParams();
  const tr = useTranslations("header");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            `w-full z-20  absolute h-[100vh] top-[86px] bottom-0 right-0 left-0 flex flex-col justify-start items-center  bg-basic transition-all duration-300`
          )}
        >
          <ul className="flex flex-col w-full justify-start items-start gap-y-[20px] py-8 px-6  bg-basic">
            {mobileNav.map((item, index) => {
              const isActive =
                `/${params.locale}${item.src}` === pathname ||
                `/${params.locale}${item.src}/${params.eventId}` === pathname ||
                `/${params.locale}${item.src}/${params.productId}` === pathname ||
                `/${params.locale}${item.src}/${params.newsId}` === pathname;
              return (
                <motion.li
                  className={cn(` font-SFPRegular leading-normal`,
                    index === 4 || index === 8 ? ' mb-4' : '',
                    index > 4 ? ' text-[22px] text-link' : 'text-[27px]',
                    isActive ? "border-b border-white" : "border-b border-transparent",
                    isActive && index > 4 ? "border-b border-white text-white" : "border-b border-transparent"
                    )
                  }
                  key={item.id}
                  onClick={() => setIsOpen?.(false)}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + index / 10,
                  }}
                >
                  <Link className={cn(`pb-2`)} href={item.src}>
                    {tr(item.title)}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 35,
              delay: 1.1,
            }}
            className='w-full flex justify-start items-start pl-6'
          >
            <LanguageSwitcher />
            <SocialMediaLinks />
          </motion.div>
          <Link
            href="/cart"
            onClick={() => setIsOpen?.(false)}
            className="flex tablet:hidden lDesktop:hidden absolute top-[40px] right-[36px] flex justify-start items-start gap-x-[17px]"
          >
            <Typography className=" inline-block">{tr("Кошик")}</Typography>
            <CartWidget />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
