'use client'

import React from 'react'
import { Slider } from './ui/slider'
import { History } from './history'
import { UpcomingEvents } from './upcomingEvents'

export const MainClient = () => {
  return (
    <>
      <Slider />
      <History />
      <UpcomingEvents />
    </>
  )
}
