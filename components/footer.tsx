import React from 'react'
import { Container } from './ui/container'
import Link from 'next/link'
import { Logo } from '@/icons/logo'
import { footerNav } from '@/constants'
import { Title } from './ui/title'
import { Typography } from './ui/typography'

export const Footer = () => {
  return (
    <footer className='h-[387px] bg-gray'>
      <Container className=' justify-between items-start py-12'>
        <div>
          <Link href='/'>
            <Logo width={283} height={282} />
          </Link>
        </div>
        <div className='pt-3'>
          <Title className='text-[24px] leading-[33.6px] font-SFPRegular text-start mb-8 underline'>Про Нас</Title>
          <ul className='flex flex-col justify-center items-start'>
            {footerNav.map((link) => (
              <li className='text-lg leading-normal font-SFPRegular mb-3' key={link.id}>
                <Link href={link.src}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='pt-3'>
          <Title className='text-[24px] leading-[33.6px] font-SFPRegular text-left mb-8 underline'>Наші контакти:</Title>
          <Typography className='text-lg leading-normal font-SFPRegular'>
            <span className='mb-3 inline-block'>Адреса: м. Київ, вул. Михайлівська, 13</span><br />
            <span className='mb-3 inline-block'>Тел: +380 (97) 390-39-49</span><br />
            <span className='mb-3 inline-block'>Години роботи: Вт. - Зб. 11:00 – 18:00</span><br />
            <Link className='mb-3 inline-block' href='mailto:ubhov.kyiv@gmail.com'>Email: ubhov.kyiv@gmail.com</Link><br />
            <Link className='mb-3 inline-block' href='/'>Політика конфіденційності</Link>
          </Typography>
        </div>
        <div className='pt-3'>
          <Title className='text-[24px] leading-[33.6px] font-SFPRegular text-left mb-8'>Як дістатися до нас?</Title>
        </div>
      </Container>
    </footer>
  )
}