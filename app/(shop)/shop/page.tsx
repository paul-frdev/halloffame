import { ProductList } from '@/components/productList'
import React from 'react'
import productsList from "@/app/products.json"

const ProductsPage = () => {
  return (
    <section className=' bg-white'>
      <ProductList products={productsList} />
    </section>
  )
}

export default ProductsPage