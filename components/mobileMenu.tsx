import React from 'react'
import { Container } from './ui/container';
import Link from 'next/link';
import { secondNav } from '@/constants';
import { useTranslations } from 'next-intl';
import { useParams, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { socialMediaData } from './header';
import { LanguageSwitcher } from './ui/languageSwitcher';
import { CartWidget } from './ui/cartWidget';
import { Typography } from './ui/typography';
import { motion, MotionConfig } from "framer-motion";


interface MobileMenuProps {
  isOpen?: boolean;
  setIsExpanded?: (data: boolean) => void;
}
export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsExpanded }) => {
  const tr = useTranslations("header");
  const pathname = usePathname();
  const params = useParams();

  return (
    <MotionConfig>
      <motion.div
        variants={{
          hide: {
            opacity: 0,
            y: "0",
            transition: {
              type: "spring",
              bounce: 0.1,
              when: "afterChildren",
              staggerChildren: 0.25,
            },
          },
          show: {
            opacity: 1,
            x: "0%",
            transition: {
              type: "spring",
              bounce: 0.1,
              when: "beforeChildren",
              staggerChildren: 0.25,
            },
          },
        }}
        initial="hide"
        animate={isOpen ? "show" : 'hide'}
        exit="hide"
        className={cn(`w-full`)}>
        <Container className={cn(`flex items-start flex-col justify-start text-white font-oswaldBold bg-basic pt-4 pb-6 relative `, isOpen ? 'visible' : 'hidden')}>
          <ul className=" relative flex flex-col justify-start items-start text-white w-full  gap-y-[20px] pb-9 pt-4 px-2">
            {secondNav.map(item => {
              const isActive = `/${params.locale}${item.src}` === pathname || `/${params.locale}${item.src}/${params.mediaId}` === pathname;

              return (
                <li
                  key={item.id}
                  className={cn(
                    `text-[20px] leading-[20px] font-SFPRegular transition-all duration-300  whitespace-nowrap py-1 text-link tablet:text-white `,
                    isActive ? "border-b border-[#ffffff] text-white " : "border-b border-transparent"
                  )}
                  onClick={() => setIsExpanded?.(false)}
                >
                  <Link href={item.src}>{tr(item.title)}</Link>
                </li>
              );
            })}
          </ul>
          <div className='flex w-[350px] justify-between items-start'>
            <ul className="flex  justify-start items-start gap-x-[20px] w-full max-w-[328px] pb-4 pl-2">
              {socialMediaData.map(item => (
                <li className="transition-all duration-300" key={item.id}>
                  <Link href={item.link} style={{ fill: "#000" }}>
                    {item.social}
                  </Link>
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
          </div>
          <Link href='/cart' onClick={() => setIsExpanded?.(false)} className='hidden tablet:flex lDesktop:hidden absolute top-0 right-0 flex justify-start items-start gap-x-[17px]'>
            <Typography className="inline-block">{tr("Кошик")}</Typography>
            <CartWidget />
          </Link>
        </Container>
      </motion.div>
    </MotionConfig>
  )
}
