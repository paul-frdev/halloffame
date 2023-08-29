"use client";

import useProductCart from '@/hooks/useProductCart';
import { Breadcrumbs } from "./breadcrumbs";
import { SubscribeForm } from "./forms/subscribeForm";
import { Gallery } from "./gallery/gallery";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { Currency } from "./ui/currency";
import { Title } from "./ui/title";
import { Typography } from "./ui/typography";
import { Product } from "@/types";
import Link from "next/link";
import React from "react";
import { Minus } from '@/icons/minus';
import { Plus } from '@/icons/plus';

interface ProductItemProps {
  product: Product | undefined;
}
export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {

  const { addProduct, products } = useProductCart();

  const productInCart = products.find((item) => item.id === product?.id);

  console.log('productInCart', productInCart);

  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "Магазин", url: "/shop" },
    { label: `${product?.title?.length! > 20 ? product?.title?.slice(20) + "..." : product?.title}`, url: `/shop/${product?.id}` },
  ];

  return (
    <section className="bg-white pt-12 text-black">
      <Container className=" justify-start items-start flex-col">
        <Breadcrumbs breadcrumbs={breadcrumbs} className="mb-12" />
        <div className="w-full flex justify-start items-start gap-x-24 mb-12">
          <div className="mb-8 w-full max-w-[700px]">
            <Gallery images={product?.images} />
          </div>
          <div className="w-full flex flex-col justify-start items-start pt-8">
            <div className="mb-24">
              <Link
                href="/"
                className=" cursor-pointer hover:text-[#999999] transition-all duration-300 text-[36px] text-black whitespace-nowrap flex flex-col justify-start items-start gap-y-1"
              >
                <span className="text-sm text-[#999999] ">Категорія</span>
                {product?.category}
              </Link>
            </div>
            <div className="flex justify-between items-end gap-x-20 mb-12">
              <Title className="text-[48px] font-SFPRegular leading-snug tracking-wide">{product?.title}</Title>
              <Currency price={product?.price!} isDiscount={product?.isDiscount} discount={product?.discount} />
            </div>
            <Typography className="text-2xl tracking-wide leading-snug mb-20">{product?.description}</Typography>
            <div className="mb-12">
              {!productInCart ? (
                <Button onClick={() => addProduct(product!)} variant="outline" className=" bg-black hover:bg-blue text-white text-[20px] uppercase hover:text-white w-[285px] h-[60px]">
                  Додати до кошику
                </Button>
              ) : (
                <div className='flex justify-start items-center'>
                  <Button variant="outline" className=" bg-whiter hover:bg-blue text-black text-[20px] uppercase hover:text-white hover:border-transparent w-[50px] h-[40px] border border-black rounded-tl-md rounded-bl-md rounded-br-none rounded-tr-none">
                    <Minus />
                  </Button>
                  <span className='h-[40px] flex justify-center items-center text-[20px] w-[50px] border border-black'>{productInCart.quantity}</span>
                  <Button variant="outline" className=" bg-whiter rounded-r-md rounded-br-md hover:bg-blue text-black text-[20px] uppercase hover:border-transparent hover:text-white w-[50px] h-[40px] border border-black rounded-tl-none rounded-bl-none">
                    <Plus />
                  </Button>
                </div>
              )}

            </div>
            <div>
              <Title className="text-[48px] font-SFPRegular">Характеристики товару</Title>
            </div>
          </div>
        </div>
        <div>
          <Title className="text-[48px] font-SFPBold">Вам може сподобатися</Title>
        </div>
      </Container>
      <SubscribeForm />
    </section>
  );
};
