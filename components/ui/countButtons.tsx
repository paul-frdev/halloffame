"use client";

import { Button } from "./button";
import { Minus } from "@/icons/minus";
import { Plus } from "@/icons/plus";
import { Product } from "@/types";
import React from "react";

interface CountButtonsProps {
  quantity: number | undefined;
  product: Product | undefined;
  addQuantity?: (data: Product) => void;
  subtractQuantity?: (data: Product) => void;
}
export const CountButtons: React.FC<CountButtonsProps> = ({ quantity, addQuantity, subtractQuantity: subtractQuantity, product }) => {
  return (
    <div className="flex justify-start items-center">
      <Button
        onClick={() => subtractQuantity?.(product!)}
        variant="outline"
        className=" bg-whiter hover:bg-blue text-black text-[20px] uppercase hover:text-white hover:border-transparent w-[50px] h-[40px] border border-black rounded-tl-md rounded-bl-md rounded-br-none rounded-tr-none"
      >
        <Minus />
      </Button>
      <span className="h-[40px] flex justify-center items-center text-[22px] w-[50px] border border-black">{quantity}</span>
      <Button
        onClick={() => addQuantity?.(product!)}
        variant="outline"
        className=" bg-whiter rounded-r-md rounded-br-md hover:bg-blue text-black text-[20px] uppercase hover:border-transparent hover:text-white w-[50px] h-[40px] border border-black rounded-tl-none rounded-bl-none"
      >
        <Plus />
      </Button>
    </div>
  );
};
