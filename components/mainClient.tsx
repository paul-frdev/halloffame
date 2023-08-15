'use client'

import React from 'react'
import { Slider } from './ui/slider'
import { History } from './history'
import { UpcomingEvents } from './upcomingEvents'
import { SubscribeForm } from './forms/subscribeForm'

export const MainClient = () => {
  return (
    <>
      <Slider />
      <History />
      <UpcomingEvents />
      <SubscribeForm />
    </>
  )
}
