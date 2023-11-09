import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  animate?: any;
}
export const Title: React.FC<TitleProps> = ({ children, className, variants, animate }) => {
  return (
    <motion.h2 variants={variants} animate={animate} className={cn(`font-oswaldBold leading-normal`, className)}>
      {children}
    </motion.h2>
  );
};
