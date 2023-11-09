import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { Title } from "./ui/title";
import { Typography } from "./ui/typography";
import { UpcomingCarousel } from "./swipper/upcomingCarousel";
import { fadeIn, upcomingEvents } from "@/constants";
import { ArrowRight } from "@/icons/arrowRight";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export const UpcomingEvents = () => {
  const [isHovered, setIsHovered] = useState(false);
  const route = useRouter();
  const pathname = usePathname();

  const isMain = pathname === "/" || pathname === "/en" || pathname === "/es";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className={cn(`relative h-full smallTablet:h-[680px] bg-upcoming object-center bg-no-repeat object-fill w-full max-w-[1930px]`, isMain ? "pb-20" : "mb-0")}
    >
      <Container className=" [@media(max-width:732px)]:flex-col justify-between items-start">
        <div className="z-10 w-full smallTablet:max-w-[40%] pt-12 pb-0 smallTablet:py-24">
          <Title className="text-3xl mobile:text-5xl tablet:text-6xl border-b-4 pb-3 smallTablet:pb-6 border-white mb-8 smallTablet:mb-20">НАЙБЛИЖЧІ ПОДІЇ</Title>
          <Typography className="w-full smallTablet:max-w-[80%] text-2xl font-SFPRegular mb-12">Наші заходи порадують шанувальників та фанатів боксу</Typography>
          {pathname === "/" ? (
            <Button
              className="flex justify-center items-center gap-x-4 text-2xl leading-[33.6px]"
              variant="outline"
              size="lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => route.push("/events")}
            >
              <span>Дивитись усі події</span>
              <span className="pt-1">
                <ArrowRight color={isHovered ? "#fff" : "#000"} />
              </span>
            </Button>
          ) : null}
        </div>
        <div className="block smallTablet:absolute top-0 right-0 w-full smallTablet:w-[55%]  py-20">
          <UpcomingCarousel data={upcomingEvents} />
        </div>
      </Container>
    </motion.div>
  );
};
