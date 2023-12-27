import { EmailIcon } from "@/icons/emailIcon";
import { Facebook } from "@/icons/facebook";
import { Pinterest } from "@/icons/pinterest";
import { Twitter } from "@/icons/twitter";
import { cn } from '@/lib/utils';
import Link from "next/link";
import React from "react";

type ActivitiesProps = {
  className?: string;
}
export const Activities = ({ className }: ActivitiesProps) => {
  return (
    <div className={cn(`w-[150px] flex justify-between items-center cursor-pointer`, className)}>
      <Twitter fill="#2451CE" />
      <Facebook fill="#2451CE" />
      <Pinterest />
      <Link className=" inline-block" href="mailto:some@gmailcom">
        <EmailIcon />
      </Link>
    </div>
  );
};
