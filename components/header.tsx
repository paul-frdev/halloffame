'use client'

import { Logo } from '@/icons/logo'
import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap';
import { Container } from './ui/container'
import { LanguageSwitcher } from './ui/languageSwitcher'
import { mainNav, secondNav } from '@/constants'
import Link from 'next/link'
import { Facebook } from '@/icons/facebook'
import { Instagram } from '@/icons/instagram'
import { Twitter } from '@/icons/twitter'
import { Youtube } from '@/icons/youtube'
import { Typography } from './ui/typography'
import { Basket } from '@/icons/basket'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import debounce from 'lodash.debounce';

const socialMediaData = [
  {
    id: 1,
    social: <Facebook />,
    link: 'https://www.facebook.com'
  },
  {
    id: 2,
    social: <Twitter />,
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    social: <Instagram />,
    link: 'https://www.facebook.com'
  },
  {
    id: 4,
    social: <Youtube />,
    link: 'https://www.facebook.com'
  },
];


export const Header = () => {

  const [isHover, setIsHover] = useState(false)
  const [header, setHeader] = useState(false);


  const pathname = usePathname()


  useEffect(() => {
    const scrollBody = debounce(() => {
      if (window.scrollY > 30) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    }, 0);

    window.addEventListener('scroll', scrollBody);

    return () => window.removeEventListener('scroll', scrollBody);
  }, [header]);



  useEffect(() => {
    gsap.to('.logo-container svg', {
      width: header ? 90 : 150,
      height: header ? 90 : 150,
      duration: header ? 0.3 : 0.3,
      ease: 'Power4.easeInOut',
    });
  }, [header]);

  return (
    <>
      <div className='relative h-[44px] z-10 max-w-[1632px] px-4 m-auto w-full transition-all duration-300'>
        <div
          className={cn(`w-full ml-auto max-w-[1360px] h-[98px] flex justify-between items-center`)}
        >
          <LanguageSwitcher />
          <ul className=' relative flex justify-between items-end  gap-x-[60px]'>
            <span className='absolute top-0 left-0 w-[1px] h-[59px] border-l-1 border-link' />
            {secondNav.map((item) => (
              <li key={item.id} className={cn(`text-lg leading-[20px] font-SFPRegular text-link transition-all duration-300 hover:text-white whitespace-nowrap`,)}>
                <Link href='/'>{item.title}</Link>
              </li>
            )
            )}
            <span className='absolute top-0 right-0 w-[1px] h-[59px] border-l-1 border-link' />
          </ul>
          <ul className='flex justify-between items-center gap-x-[20px] w-full max-w-[328px] px-[50px]'>
            {socialMediaData.map((item) => (
              <li className='transition-all duration-300' key={item.id} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <Link href={item.link} style={{fill: '#000'}}>{item.social}</Link>
              </li>
            ))}
          </ul>
          <Link href='/' className='flex justify-start items-start gap-x-[17px]'>
            <Typography className=' inline-block'>Кошик</Typography>
            <span>
              <Basket />
            </span>
          </Link>
        </div>
      </div>
      <header className={cn(`header z-20 h-[174px] transition-all duration-300 bg-basic z-[9]`, header ? 'h-[122px] fixed top-0 left-0 right-0 bg-basic pt-4' : '')}>
        <Container className={cn(`flex justify-between w-full items-end`, header ? 'pb-4' : 'pb-9')}>
          <Link href='/' className={cn(`mr-[103px]`, header ? 'mt-0' : '-mt-[12px]')}>
            <div className="logo-container">
              <Logo width={150} height={150} />
            </div>
          </Link>
          <div className={cn(`flex flex-col justify-end items-start gap-y-[30px] w-full ml-auto`, header ? 'gap-y-0' : 'gap-y-[30px]')}>
            <div className={cn(`flex  w-full items-center ml-auto`, header ? 'justify-end' : 'justify-between')}>
              <ul className='flex justify-between items-start gap-x-[92px]'>
                {mainNav.map((item) => {
                  const isActive = pathname === item.src
                  return (
                    <li className={cn(`text-[27px] font-SFPRegular leading-normal`, isActive ? 'border-b border-white' : 'border-b border-transparent')} key={item.id}>
                      <Link className={cn(`pb-2`)} href={item.src}>{item.title}</Link>
                    </li>
                  )
                })}
              </ul>
              <div className='w-full ml-auto flex justify-end'>
                <Button variant='outline' className='text-2xl uppercase font-oswaldBold h-[69px] w-full max-w-[305px]'>Замовити квиток</Button>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}
