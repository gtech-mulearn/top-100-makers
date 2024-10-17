"use client";

import Image from "next/image";
import React from "react";
import BlinkText from "./blinkText";
import Marquee from "react-fast-marquee";
import useIsMobile from "@/app/hooks/isMobile";

const Parteners = () => {
  const isMobile = useIsMobile();
  return (
    <div className="md:p-20 p-4 pt-16 md:px-0 flex flex-col gap-3 mb-20">
      <BlinkText width="100%">
        <h1 className="title md:ml-20 max-md:text-center mb-16 md:mb-20">
          OUR PARTNERS
        </h1>
      </BlinkText>
      <Marquee
        gradient
        gradientColor="#0a0a0a"
        gradientWidth={isMobile ? 50 : 125}
        className="flex justify-center items-center w-full"
      >
        {[...Array(7)].map((_, index) => (
          <Image
            key={index}
            src={`/parteners/partener${index + 1}.webp`}
            alt="partener image"
            className="md:w-[10vw] w-[25vw] h-auto mr-14"
            width={100}
            height={100}
            draggable={false}
          />
        ))}
        {[...Array(7)].map((_, index) => (
          <Image
            key={index}
            src={`/parteners/partener${index + 1}.webp`}
            alt="partener image"
            className="md:w-[10vw] w-[25vw] h-auto mr-14"
            width={100}
            height={100}
            draggable={false}
          />
        ))}
        {[...Array(7)].map((_, index) => (
          <Image
            key={index}
            src={`/parteners/partener${index + 1}.webp`}
            alt="partener image"
            className="md:w-[10vw] w-[25vw] h-auto mr-14"
            width={100}
            height={100}
            draggable={false}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Parteners;
