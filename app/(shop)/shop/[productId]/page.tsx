import productList from "@/app/products.json";
import { ProductItem } from "@/components/productItem";
import React from "react";

export async function generateStaticParams() {
  return productList.map(product => ({
    productId: product.id.toString(),
  }));
}

const ProductPage = ({ params: { productId } }: { params: { productId: string } }) => {
  const formattedProduct = productList.find(item => item.id.toString() === productId);
  return <ProductItem product={formattedProduct} />;
};

export default ProductPage;
