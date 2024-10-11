import Image from "next/image";
import React from "react";
import BlinkText from "./blinkText";

const Parteners = () => {
  return (
    <div className="md:p-20 p-4 flex flex-col gap-3 mb-20">
      <BlinkText>
        <h1 className="title md:ml-20 max-md:text-center mb-20">
          OUR PARTNERS
        </h1>
      </BlinkText>
      <div className="flex flex-wrap justify-center items-center gap-10 w-full">
        {[...Array(7)].map((_, index) => (
          <Image
            key={index}
            src={`/parteners/partener${index + 1}.webp`}
            alt="partener image"
            className="w-[10vw] h-auto"
            width={100}
            height={100}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Parteners;
