import { EmailIcon } from '@/icons/emailIcon'
import { Facebook } from '@/icons/facebook'
import { Pinterest } from '@/icons/pinterest'
import { Twitter } from '@/icons/twitter'
import Link from 'next/link'
import React from 'react'

export const Activities = () => {
  return (
    <div className='w-[200px] flex justify-between items-center cursor-pointer'>
      <Twitter fill='#2451CE' />
      <Facebook fill='#2451CE' />
      <Pinterest/>
      <Link className=' inline-block' href="mailto:some@gmailcom">
        <EmailIcon />
      </Link>
    </div>
  )
}
