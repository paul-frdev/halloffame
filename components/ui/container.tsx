import { cn } from "@/lib/utils";
import { AnimationProps, motion } from 'framer-motion';
import React, { forwardRef } from "react";


interface ContainerProps extends AnimationProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(({ children, className, ...props }, ref) => {

  return (
    <motion.div ref={ref} {...props} className={cn(`flex justify-center items-center w-full max-w-[1632px] px-4 mx-auto`, className)}>
      {children}
    </motion.div>
  );
});

Container.displayName = 'Container';