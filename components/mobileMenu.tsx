import React from 'react'
import { Container } from './ui/container';
import Link from 'next/link';
import { secondNav } from '@/constants';
import { useTranslations } from 'next-intl';
import { useParams, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { socialMediaData } from './header';
import { LanguageSwitcher } from './ui/languageSwitcher';


interface MobileMenuProps {
  isOpen?: boolean;
}
export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  const tr = useTranslations("header");
  const pathname = usePathname();
  const params = useParams();

  return (
    <Container className={cn(`items-start flex-col justify-start text-white font-oswaldBold bg-basic pt-4`, isOpen ? 'flex' : 'hidden')}>
      <ul className=" relative flex flex-col justify-start items-start text-white  gap-y-[20px] pb-7 px-2">
        {secondNav.map(item => {
          const isActive = `/${params.locale}${item.src}` === pathname || `/${params.locale}${item.src}/${params.mediaId}` === pathname;

          return (
            <li
              key={item.id}
              className={cn(
                `text-[20px] leading-[20px] font-SFPRegular transition-all duration-300  whitespace-nowrap py-1 `,
                isActive ? "border-b border-[#ffffff] " : "border-b border-transparent"
              )}
            >
              <Link href={item.src}>{tr(item.title)}</Link>
            </li>
          );
        })}
      </ul>
      <div className='flex w-[350px] justify-between items-start'>
        <ul className="flex  justify-start items-start gap-x-[20px] w-full max-w-[328px] pb-4">
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
    </Container>
  )
}
