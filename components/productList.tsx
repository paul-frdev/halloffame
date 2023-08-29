"use client";

import { Breadcrumbs } from "./breadcrumbs";
import { Filters } from "./filters";
import { ProductPreviewItem } from "./productPreviewItem";
import { Search } from "./search";
import { Container } from "./ui/container";
import { Slider } from "./ui/slider";
import { Title } from "./ui/title";
import { shopSlides } from "@/constants";
import { Product } from "@/types";
import React from "react";

interface ProductListProps {
  products: Product[];
  title?: string;
}
export const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "Магазин", url: "/shop" },
  ];
  return (
    <>
      <Slider slides={shopSlides} height={660} />
      <Container className=" flex-col justify-start items-start text-black py-8">
        <div className="flex w-full justify-between items-center">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Search />
        </div>
        <div className="my-12">
          <Filters />
        </div>
        <div className="grid grid-cols-4 gap-6 m-auto mb-12">
          {products?.map(product => <ProductPreviewItem key={product.id} product={product} />)}
        </div>
        <div>
          <Title className="text-3xl">Вам може бути цікаво :</Title>
          {/* suggested products based on the search params and categoryId */}
        </div>
      </Container>
    </>
  );
};
