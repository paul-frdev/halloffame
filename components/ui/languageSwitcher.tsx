import { locates } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const LanguageSwitcher = () => {
  return (
    <div className='flex justify-between w-full gap-x-[31px] max-w-[122px] mr-[60px] items-center'>
      {locates.map((locate) => (
        <Link key={locate.id} href={locate.locate}>
          <Image src={locate.src} alt='image' />
        </Link>
      ))}
    </div>
  )
}
