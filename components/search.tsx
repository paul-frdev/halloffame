"use client";

import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Search as SearchIcon } from "lucide-react";
import React, { useState } from "react";

interface SearchProps {
  searchQuery: string;
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export const Search: React.FC<SearchProps> = ({ searchQuery, handleSearchInputChange, className }) => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[800px] relative">
        <Input
          className={cn(
            `w-full max-w-[800px] h-[60px] bg-[#E9E9E9] rounded-md placeholder:text-lg text-[20px] leading-snug tracking-wider`,
            className
          )}
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Пошук..."
        />
        <span className="absolute top-0 right-0 w-[60px] h-[60px] bg-black inline-block rounded-tr-md rounded-br-md">
          <SearchIcon color="#fff" width={30} height={30} className="absolute top-[14px] right-[14px]" />
        </span>
      </div>
    </div>
  );
};
