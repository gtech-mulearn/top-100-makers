// import Image from "next/image";
import React from "react";
import Lines from "./lines";

const Timeline = () => {
  return (
    <div className="bg-bg4 p-12 text-black flex flex-col gap-5 justify-center items-center min-h-screen relative">
      <h1 className="title">What’s the Game Plan?</h1>
      {/* <Image
        src="/bgpattern.svg"
        alt="logo"
        width={1000}
        height={1000}
        draggable={false}
        className="absolute top-0 right-0 h-full w-full"
      ></Image> */}
      <div className="">
        <Lines />
      </div>
    </div>
  );
};

export default Timeline;
