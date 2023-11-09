import { Currency } from "./ui/currency";
import { Title } from "./ui/title";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductPreviewItemProps {
  product: Product;
}
export const ProductPreviewItem: React.FC<ProductPreviewItemProps> = ({ product }) => {
  return (
    <div className="relative w-[350px] h-[552px] bg-[#F4F4F4] rounded-md flex flex-col justify-start items-center cursor-pointer hover:shadow-lg transition-all duration-300 shadow-md rounded-sm">
      {product.isDiscount ? (
        <span className="absolute top-0 right-0">
          <Image src="/images/sale.png" width={50} height={50} alt="sale" />
        </span>
      ) : null}
      <Link href={`/shop/${product.id}`} className="h-full">
        <div className="flex flex-col justify-between h-full items-center py-8">
          <div className="w-full h-full mb-8">
            <Image src={product.images[0].src} width={200} height={200} alt="preview image" className="w-full" />
          </div>
          <div className="mt-auto">
            <Title className="text-[20px] leading-snug tracking-wider font-SFPRegular mb-6">{product.title}</Title>
            <Currency price={product.price} discount={product.discount} isDiscount={product.isDiscount} />
          </div>
        </div>
      </Link>
    </div>
  );
};
