import newsList from "../app/news.json";
import { Typography } from "./ui/typography";
import { DateRageIcon } from "@/icons/dateRageIcon";
import { News } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ResentNewsProps {
  news?: News[];
}
export const ResentNews: React.FC<ResentNewsProps> = ({ news }) => {
  const route = useRouter();

  return (
    <div className=" w-full flex flex-col justify-start items-start">
      {newsList.map(item => (
        <Link
          key={item.id}
          href={`/blog/news/${item.id}`}
          className="w-full opacity-50 transition-all duration-300  hover:opacity-100 py-12 border-b border-[#d6d6d6]"
        >
          <div>
            <div className="flex justify-start items-start">
              <Image src={item.src} alt="image" width={435} height={253} className="mr-5" />
              <div>
                <div className="flex justify-start items-start mb-4 text-[20px] leading-snug tracking-wide">
                  <span className="mr-5">
                    <DateRageIcon />
                  </span>
                  <span>{item.date}</span>
                </div>
                <Typography className="text-[20px] leading-snug tracking-wide">{item.description}</Typography>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
