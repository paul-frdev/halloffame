"use client";

import { Button } from "./button";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

interface ButtonRightProps {
  quantity?: number;
  setQuantity?: (data: number) => void;
}
export const ButtonRight: React.FC<ButtonRightProps> = ({ quantity, setQuantity }) => {
  return (
    <Button
      disabled={quantity === 5}
      onClick={() => setQuantity?.(quantity! + 1)}
      variant="outline"
      className="hover:bg-transparent border-none px-2"
    >
      <FaChevronRight fill={quantity === 5 ? "#999999" : "#000"} />
    </Button>
  );
};
