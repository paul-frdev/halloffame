"use client";

import useEventCart from "@/hooks/useEventCart";
import useProductCart from "@/hooks/useProductCart";
import { Basket } from "@/icons/basket";
import { cn } from "@/lib/utils";
import React from "react";

interface CartWidgetProps {
  width?: number;
  height?: number;
  className?: string;
  widthNumber?: number;
  heightNumber?: number;
}
export const CartWidget: React.FC<CartWidgetProps> = ({ width = 17, height = 17, className, widthNumber = 24, heightNumber = 24 }) => {
  const { events } = useEventCart();
  const { totalQuantity } = useProductCart();

  return (
    <span className={cn(`w-full`, className)}>
      {events.length > 0 || totalQuantity! > 0 ? (
        <span
          style={{ width: widthNumber, height: heightNumber, display: "flex", justifyContent: "center", alignItems: "center" }}
          className={cn(`absolute -top-[7px] -right-[2px] bg-white rounded-full text-black flex justify-center items-center`)}
        >
          {events.length || totalQuantity}
        </span>
      ) : null}
      <Basket width={width} height={height} />
    </span>
  );
};
