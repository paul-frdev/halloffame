"use client";

import { PageRight } from "@/icons/pageRight";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

interface Breadcrumb {
  label: string;
  url: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
  className?: string;
  id?: number;
  isWhite?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs, className, id, isWhite = false }) => {
  const pathname = usePathname();
  const params = useParams();

  return (
    <div className={cn(`flex justify-start items-center w-full max-w-[800px]`, className)}>
      {breadcrumbs.map((breadcrumb, index) => {
        const isActive = pathname === `/${params.locale}${breadcrumb.url}`;
        return (
          <span key={breadcrumb.url} className="flex justify-between items-center">
            {index > 0 && <PageRight />}
            <Link
              href={breadcrumb.url}
              className={cn(`pb-1 border-b-2 mx-6 text-2xl text-[#808080] border-[#808080]`, isActive ? "border-black text-black" : "")}
            >
              {`${breadcrumb.label}`}
            </Link>
          </span>
        );
      })}
    </div>
  );
};
