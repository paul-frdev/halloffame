'use client'

import React from 'react'
import { Button } from './button'
import { Arrow } from '@/icons/arrow';

interface ButtonRightProps {
  quantity?: number;
  setQuantity?: (data: number) => void
}
export const ButtonRight: React.FC<ButtonRightProps> = ({ quantity, setQuantity }) => {
  return (
    <Button disabled={quantity === 5} onClick={() => setQuantity?.(quantity! + 1)} variant='outline' className='hover:bg-transparent border-none px-2'>
      <Arrow fill={quantity === 5 ? '#999999' : '#000'} />
    </Button>
  )
}
