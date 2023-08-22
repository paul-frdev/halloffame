import { cn } from '@/lib/utils'
import { Variants, motion } from 'framer-motion'
import React from 'react'

interface TypographyProps {
  className?: string;
  variants?: Variants;
  animate?: any;
  children: React.ReactNode;

}
export const Typography: React.FC<TypographyProps> = ({ className, children, variants, animate }) => {
  return (
    <motion.p variants={variants} animate={animate} className={cn(`text-lg leading-[20px] font-SFPRegular`, className)}>{children}</motion.p>
  )
}
