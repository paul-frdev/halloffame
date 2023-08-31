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
import React, { useState } from "react";

interface ProductListProps {
  products: Product[];
  title?: string;
}
export const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    updateSearchResults(value);
  };

  const updateSearchResults = (query: string) => {
    const filteredResults = products.filter(
      product => product.title.toLowerCase().includes(query.toLowerCase()) || product.description.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "Магазин", url: "/shop" },
  ];
  return (
    <>
      <Slider slides={shopSlides} height={660} />
      <Container className=" flex-col justify-start items-start text-black py-8">
        <div className="flex w-full justify-between items-center mt-4">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Search searchQuery={searchQuery} handleSearchInputChange={handleSearchInputChange} />
        </div>
        <div className="my-12">
          <Filters />
        </div>
        <div className="grid grid-cols-4 gap-6 m-auto mb-12">
          {(searchQuery ? searchResults : products).map(product => (
            <ProductPreviewItem key={product.id} product={product} />
          ))}
        </div>
        <div>
          <Title className="text-3xl">Вам може бути цікаво :</Title>
          {/* suggested products based on the search params and categoryId */}
        </div>
      </Container>
    </>
  );
};
