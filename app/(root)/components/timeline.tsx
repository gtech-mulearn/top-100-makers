// import Image from "next/image";
import React from "react";
import Lines from "./lines";
import BlinkText from "./blinkText";
import Image from "next/image";
import Tiltbutton from "./tiltbutton";

const Timeline = () => {
  return (
    <div className="bg-bg4 p-12 text-black flex flex-col gap-5 justify-center items-center md:min-h-screen relative md:pb-64">
      <BlinkText>
        <h1 className="title">What’s the Game Plan?</h1>
      </BlinkText>
      <div className="flex max-md:flex-col justify-center items-center absolute h-[80%] md:translate-y-[15%] ">
        <div className="relative shadow-2xl shadow-bg1 flex flex-col justify-center md:p-12 p-4 items-center bg-[#1E1E1E] text-center gap-5 max-w-[300px] md:max-w-[500px] xl:max-w-[600px] min-h-[250px] text-white">
          <h2 className="font-ndot text-2xl xl:text-4xl">Maker Challenges</h2>
          <p className="text-lg xl:text-3xl font-nats leading-7">
            Jump into a series of thrilling challenges! Whether it’s a
            high-speed Hardware Hackathon, a thoughtful Sustainable Design
            Challenge, an innovative IoT Challenge, or creative 3D Printing &
            Prototyping, this is where you shine and prove your skills!
          </p>
          <Image
            src="/attach.png"
            alt="maker"
            width={100}
            height={100}
            draggable={false}
            className="absolute top-1/2 -translate-y-1/2 -right-12"
          ></Image>
        </div>
        {/* vertical line*/}
        <div className="w-1 bg-[#999999] h-[80%] max-md:hidden"></div>
        {/* vertical line*/}
        <div className="md:h-full flex flex-col justify-between">
          <div className="relative flex flex-col shadow-2xl shadow-bg1 justify-center md:p-12 p-4 items-center bg-[#1E1E1E] text-center gap-5 max-w-[300px] md:max-w-[500px] xl:max-w-[600px] min-h-[250px] text-white">
            <h2 className="font-ndot text-2xl xl:text-4xl">Maker Challenges</h2>
            <p className="text-lg xl:text-3xl font-nats leading-7">
              Jump into a series of thrilling challenges! Whether it’s a
              high-speed Hardware Hackathon, a thoughtful Sustainable Design
              Challenge, an innovative IoT Challenge, or creative 3D Printing &
              Prototyping, this is where you shine and prove your skills!
            </p>
            <Image
              src="/attach.png"
              alt="maker"
              width={100}
              height={100}
              draggable={false}
              className="absolute top-1/2 -translate-y-1/2 -left-12"
            ></Image>
          </div>

          {/* Third Step */}
          <div className="relative flex flex-col shadow-2xl shadow-bg1 justify-center md:p-12 p-4 items-center bg-[#1E1E1E] text-center gap-5 max-w-[300px] md:max-w-[500px] xl:max-w-[600px] min-h-[250px] text-white">
            <h2 className="font-ndot text-2xl xl:text-4xl">Maker Challenges</h2>
            <p className="text-lg xl:text-3xl font-nats leading-7">
              Jump into a series of thrilling challenges! Whether it’s a
              high-speed Hardware Hackathon, a thoughtful Sustainable Design
              Challenge, an innovative IoT Challenge, or creative 3D Printing &
              Prototyping, this is where you shine and prove your skills!
            </p>
            <Image
              src="/attach.png"
              alt="maker"
              width={100}
              height={100}
              draggable={false}
              className="absolute top-1/2 -translate-y-1/2 -left-12"
            ></Image>
          </div>
        </div>
      </div>
      <div className="">
        <Lines />
      </div>
      <div className="absolute bottom-24 left-40">
        <Tiltbutton />
      </div>
    </div>
  );
};

export default Timeline;
