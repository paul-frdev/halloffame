import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  animate?: any;
  onClick?: () => void;
}
export const Title: React.FC<TitleProps> = ({ children, onClick, className, variants, animate }) => {
  return (
    <motion.h2 variants={variants} onClick={onClick} animate={animate} className={cn(`font-oswaldBold leading-normal`, className)}>
      {children}
    </motion.h2>
  );
};
