import React from 'react'
import { socialMediaData } from '../header'
import Link from 'next/link'

export const SocialMediaLinks = () => {
  return (
    <ul className="flex  justify-center items-center gap-x-[50px] w-full max-w-[328px]">
      {socialMediaData.map(item => (
        <li className="transition-all duration-300" key={item.id}>
          <Link href={item.link} style={{ fill: "#000" }}>
            {item.social}
          </Link>
        </li>
      ))}
    </ul>
  )
}
