import { getShopSlides } from "@/actions/slides";
import productsList from "@/app/products.json";
import { ProductList } from "@/components/productList";
import React from "react";

const ProductsPage = async () => {
  const shopSlides = await getShopSlides();
  return (
    <section className=" bg-white">
      <ProductList products={productsList} slides={shopSlides} />
    </section>
  );
};

export default ProductsPage;
