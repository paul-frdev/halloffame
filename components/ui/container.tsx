import { cn } from '@/lib/utils'
import React from 'react'

export const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn(`flex justify-center items-center w-full max-w-[1632px] px-4 mx-auto`, className)}>{children}</div>
  )
}
