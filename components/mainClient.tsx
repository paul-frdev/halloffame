'use client'

import React from 'react'
import { Slider } from './ui/slider'
import { History } from './history'
import { UpcomingEvents } from './upcomingEvents'
import { SubscribeForm } from './forms/subscribeForm'
import { mainSlider } from '@/constants'

export const MainClient = () => {
  return (
    <>
      <Slider slides={mainSlider} />
      <History />
      <UpcomingEvents />
      <SubscribeForm />
    </>
  )
}
