'use client'

import { Product } from '@/types'
import React from 'react'

interface ProductCartProps {
  product: Product
}
export const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <div>ProductCart</div>
  )
}
