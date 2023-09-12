import { mainNav } from '@/constants';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react'
import { MobileMenu } from './mobileMenu';
import { Typography } from './ui/typography';
import { CartWidget } from './ui/cartWidget';


interface MobileNavProps {
  isOpen: boolean;
  setIsOpen?: (data: boolean) => void;
}
export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const params = useParams();
  const tr = useTranslations("header");
  
  return (
    <div
      className={cn(
        `w-full z-20  absolute top-[95px] bottom-0 right-0 left-0 flex flex-col justify-start items-center  bg-basic`,
        !isOpen ? "hidden" : "block"
      )}
    >
      <ul className="flex flex-col justify-start items-start gap-y-[20px] py-8 px-6  bg-basic">
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
              onClick={() => setIsOpen?.(false)}
            >
              <Link className={cn(`pb-2`)} href={item.src}>
                {tr(item.title)}
              </Link>
            </li>
          );
        })}
      </ul>
      <MobileMenu isOpen={isOpen} />
      <Link href='/cart' onClick={() => setIsOpen?.(false)} className='flex tablet:hidden lDesktop:hidden absolute top-[40px] right-[36px] flex justify-start items-start gap-x-[17px]'>
        <Typography className=" inline-block">{tr("Кошик")}</Typography>
        <CartWidget />
      </Link>
    </div>
  )
}
