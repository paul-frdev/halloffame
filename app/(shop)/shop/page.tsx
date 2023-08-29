import productsList from "@/app/products.json";
import { ProductList } from "@/components/productList";
import React from "react";

const ProductsPage = () => {
  return (
    <section className=" bg-white">
      <ProductList products={productsList} />
    </section>
  );
};

export default ProductsPage;
