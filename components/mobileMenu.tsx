import { CartWidget } from "./ui/cartWidget";
import { LanguageSwitcher } from "./ui/languageSwitcher";
import { Typography } from "./ui/typography";
import { secondNav } from "@/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { SocialMediaLinks } from './ui/socialMediaLinks';

interface MobileMenuProps {
  isOpen?: boolean;
  setIsExpanded?: (data: boolean) => void;
}
export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsExpanded }) => {
  const tr = useTranslations("header");
  const pathname = usePathname();
  const params = useParams();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(`w-full relative mb-3`)}
        >
          <ul className=" flex flex-col w-full justify-start items-start gap-y-[20px] py-8 px-6  bg-basic">
            {secondNav.map((item, index) => {
              const isActive = `/${params.locale}${item.src}` === pathname || `/${params.locale}${item.src}/${params.mediaId}` === pathname;

              return (
                <motion.li
                  key={item.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + index / 10,
                  }}
                  className={cn(
                    `text-[20px] leading-[20px] font-SFPRegular  whitespace-nowrap py-1 text-link  `,
                    isActive ? "border-b border-[#ffffff] text-white " : "border-b border-transparent"
                  )}
                  onClick={() => setIsExpanded?.(false)}
                >
                  <Link href={item.src}>{tr(item.title)}</Link>
                </motion.li>
              );
            })}
          </ul>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 35,
              delay: 0.5,
            }}
            className="flex w-full pl-6 justify-start items-baseline gap-y-2"
          >
            <LanguageSwitcher />
            <SocialMediaLinks />
          </motion.div>
          <Link
            href="/cart"
            onClick={() => setIsExpanded?.(false)}
            className="hidden tablet:flex lDesktop:hidden absolute top-0 right-0 flex justify-start items-start gap-x-[17px]"
          >
            <Typography className="inline-block">{tr("Кошик")}</Typography>
            <CartWidget />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
