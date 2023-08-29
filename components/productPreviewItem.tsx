import { Currency } from "./ui/currency";
import { Title } from "./ui/title";
import { Typography } from "./ui/typography";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ProductPreviewItemProps {
  product: Product;
}
export const ProductPreviewItem: React.FC<ProductPreviewItemProps> = ({ product }) => {
  const route = useRouter();
  return (
    <Link
      href={`/shop/${product.id}`}
      className="relative w-[350px] h-[552] bg-[#F4F4F4] rounded-md flex flex-col justify-start items-center cursor-pointer hover:shadow-lg transition-all duration-300 shadow-sm"
    >
      <span className="absolute top-0 right-0 text-4xl font-bold text-[#ef090d]">{product.discount}%</span>
      <div className="flex flex-col justify-start items-center py-10 py-8">
        <Image width={200} height={200} src={product.previewImage} alt="preview image" className="mb-8" />
        <Title className="text-lg font-SFPRegular mb-4">{product.title}</Title>
        <Currency price={product.price} discount={product.discount} isDiscount={product.isDiscount} />
      </div>
    </Link>
  );
};
