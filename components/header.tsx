'use client'

import { Logo } from '@/icons/logo'
import React, { useState } from 'react'
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
import { useParams } from 'next/navigation'


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
  const params = useParams()


  return (
    <header className='w-full mb-10'>
      <Container className='flex justify-between w-full items-start pt-[50px]'>
        <Link href='/' className='mr-[103px]'>
          <Logo />
        </Link>
        <div className='flex flex-col justify-end items-start gap-y-[30px] w-full ml-auto'>
          <div className='flex justify-between items-start w-full'>
            <LanguageSwitcher />
            <ul className=' relative flex justify-between items-center gap-x-[60px]'>
              <span className='absolute top-0 left-0 w-[1px] h-[59px] border-l-1 border-link' />
              {secondNav.map((item) => (
                <li key={item.id} className={cn(`text-lg leading-[20px] font-SFPRegular text-link hover:text-white transition-all duration-300 whitespace-nowrap`,

                )}>
                  <Link href='/'>{item.title}</Link>
                </li>
              )
              )}
              <span className='absolute top-0 right-0 w-[1px] h-[59px] border-l-1 border-link' />
            </ul>
            <ul className='flex justify-between items-center gap-x-[20px] w-full max-w-[328px] px-[50px]'>
              {socialMediaData.map((item) => (
                <li key={item.id} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                  <Link href={item.link}>{item.social}</Link>
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
          <div className='flex justify-between w-full items-center ml-auto'>
            <ul className='flex justify-between items-start gap-x-[92px]'>
              {mainNav.map((item) => (
                <li className='text-[27px] font-SFPRegular leading-normal' key={item.id}>
                  <Link className={cn(`pb-2`)} href={item.src}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <div className='w-full ml-auto flex justify-end'>
              <Button variant='outline' className='text-2xl uppercase font-oswaldBold h-[69px] w-full max-w-[305px]'>Замовити квиток</Button>
            </div>
          </div>
        </div>
        <div>
        </div>
      </Container>
    </header>
  )
}
