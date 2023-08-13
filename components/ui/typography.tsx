import { cn } from '@/lib/utils'
import React from 'react'

export const Typography = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <p className={cn(`text-lg leading-[20px] font-SFPRegular`, className)}>{children}</p>
  )
}
