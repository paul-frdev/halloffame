"use client";

import { Button } from "./button";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";

interface ButtonLeftProps {
  quantity?: number;
  setQuantity?: (data: number) => void;
}
export const ButtonLeft: React.FC<ButtonLeftProps> = ({ quantity, setQuantity }) => {
  return (
    <Button
      disabled={quantity === 0}
      onClick={() => setQuantity?.(quantity! - 1)}
      variant="outline"
      className="hover:bg-transparent border-none px-2"
    >
      <FaChevronLeft fill={quantity === 0 ? "#999999" : "#000"} />
    </Button>
  );
};
