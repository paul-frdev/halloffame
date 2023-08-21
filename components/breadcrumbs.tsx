import React from 'react'
import Link from 'next/link';
import { PageRight } from '@/icons/pageRight';
import { cn } from '@/lib/utils';

interface Breadcrumb {
  label: string;
  url: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs, className }) => {
  return (
    <div className={cn(`flex justify-start items-center w-full max-w-[400px]`, className)}>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.url} className='flex justify-between items-center'>
          {index > 0 && <PageRight />}
          <Link href={breadcrumb.url} className='pb-1 border-b-2 border-black mx-3 text-2xl'>
            {`${breadcrumb.label}`}
          </Link>
        </span>
      ))}
    </div>
  );
};
