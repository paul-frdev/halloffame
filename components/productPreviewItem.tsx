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
    <Link
      href={`/shop/${product.id}`}
      className="relative w-[350px] h-[552] bg-[#F4F4F4] rounded-md flex flex-col justify-start items-center cursor-pointer hover:shadow-lg transition-all duration-300 shadow-md rounded-sm"
    >
      <div className="flex flex-col justify-between h-full items-center py-10 py-8">
        <div className='w-full h-full mb-4'>
          <Image src={product.previewImage} width={200} height={200} alt="preview image" className="w-full" />
        </div>
        <div>
          <Title className="text-lg font-SFPRegular mb-4">{product.title}</Title>
          <Currency price={product.price} discount={product.discount} isDiscount={product.isDiscount} />
        </div>
      </div>
    </Link>
  );
};
