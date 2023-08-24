'use client'

import { Basket } from '@/icons/basket'
import { cn } from '@/lib/utils';
import React from 'react'

interface CartWidgetProps {
  width?: number;
  height?: number;
  className?: string;
  widthNumber?: number;
  heightNumber?: number;
}
export const CartWidget: React.FC<CartWidgetProps> = ({ width = 17, height = 17, className, widthNumber = 24, heightNumber = 24 }) => {
  return (
    <span className={cn(`w-full`, className)}>
      <span
        style={{ width: widthNumber, height: heightNumber, display: "flex", justifyContent: "center", alignItems: "center" }}
        className={cn(`absolute -top-[7px] -right-[2px] bg-white rounded-full text-black flex justify-center items-center`)}
      >
        0
      </span>
      <Basket width={width} height={height} />
    </span>
  )
}
