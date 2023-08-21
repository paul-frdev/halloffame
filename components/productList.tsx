'use client'

import { Product } from '@/types'
import React from 'react'
import { Container } from './ui/container'
import { Breadcrumbs } from './breadcrumbs'
import { Search } from './search'
import { Filters } from './filters'
import { Slider } from './ui/slider'
import { shopSlides } from '@/constants'


interface ProductListProps {
  products: Product[]
}
export const ProductList: React.FC<ProductListProps> = ({ products }) => {

  const breadcrumbs = [
    { label: 'Головна', url: '/' },
    { label: 'Магазин', url: '/shop' },
  ];
  return (
    <>
      <Slider slides={shopSlides} height={660} />
      <Container className=' flex-col justify-start items-start text-black py-8'>
        <div className='flex w-full justify-between items-center'>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Search />
        </div>
        <div>
          <Filters />
        </div>
      </Container>
    </>
  )
}
