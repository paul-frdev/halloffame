import { cn } from '@/lib/utils';
import React from 'react'


interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
export const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h2 className={cn(`text-6xl font-oswaldBold leading-normal`, className)}>{children}</h2>
  )
}
