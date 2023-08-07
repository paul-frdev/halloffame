import { Logo } from '@/icons/logo'
import React from 'react'
import { Container } from './ui/container'
import { LanguageSwitcher } from './ui/languageSwitcher'
import { secondNav } from '@/constants'
import Link from 'next/link'

export const Header = () => {
  return (
    <Container>
      <div className='flex justify-start w-full items-center gap-x-32'>
        <Logo />
        <div className='flex flex-col justify-between items-center'>
          <div>
            <div>
              <div>
                <LanguageSwitcher />
              </div>
              <div>
                <ul>
                  {secondNav.map((item) => (
                    <li key={item.id}>
                      <Link href='/'>{item.title}</Link>
                    </li>
                  )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </Container>
  )
}
