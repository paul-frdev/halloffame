"use client";

import { calculateDiscountedPrice, cn, formattedPriceInHryvnia } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface CurrencyProps {
  price: number;
  discount?: string;
  isDiscount?: boolean;
}
export const Currency: React.FC<CurrencyProps> = ({ price, discount, isDiscount }) => {
  const [productWithDiscount, setProductWithDiscount] = useState<number | null>(null);

  const priceToNumber = price;
  const discountToNumber = parseFloat(discount as string);

  useEffect(() => {
    if (isNaN(priceToNumber) || isNaN(discountToNumber)) {
      setProductWithDiscount(null);
      return;
    }
    const calculatedDiscountedPrice = calculateDiscountedPrice(priceToNumber, discountToNumber);
    setProductWithDiscount(calculatedDiscountedPrice);
  }, [discountToNumber, priceToNumber]);

  return (
    <div className="flex justify-center items-center">
      <p className={cn(`text-[20px] font-semibold text-black h-[45px]`, isDiscount && "line-through mr-4")}>{formattedPriceInHryvnia.format(priceToNumber)}</p>
      {isDiscount && productWithDiscount !== null && (
        <p className="text-3xl font-bold text-gray-600 pb-2 h-[45px]">{formattedPriceInHryvnia.format(productWithDiscount)}</p>
      )}
    </div>
  );
};
