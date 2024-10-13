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
        <h1 className="title text-center">What’s the Game Plan?</h1>
      </BlinkText>
      <div className="flex max-md:flex-col justify-center items-center absolute h-[80%] md:translate-y-[15%] ">
        <div className="relative shadow-2xl shadow-bg1 flex flex-col justify-center md:p-12 p-4 items-center bg-[#1E1E1E] text-center gap-5 max-w-[90%] md:max-w-[500px] xl:max-w-[600px] min-h-[250px] text-white max-md:-translate-x-[25%] max-sm:-translate-x-[15%]">
          <h2 className="font-ndot text-2xl xl:text-4xl">Maker Challenges</h2>
          <p className="text-base xl:text-3xl font-nats leading-none max-md:w-3/4 md:leading-7">
            Jump into a series of thrilling challenges! Whether it’s a
            high-speed Hardware Hackathon, a thoughtful Sustainable Design
            Challenge, an innovative IoT Challenge, or creative 3D Printing &
            Prototyping, this is where you shine and prove your skills!
          </p>
          <Image
            src="/attach1.webp"
            alt="maker"
            width={100}
            height={100}
            draggable={false}
            style={{
              filter: "drop-shadow(0px 12px 12px rgba(0, 0, 0, 1))",
            }}
            className="absolute md:top-1/2 -translate-y-1/2 -right-12 w-[100px] max-md:w-[90px]"
          ></Image>
        </div>
        {/* vertical line*/}
        <div className="w-1 bg-[#999999] h-[70%] max-md:hidden"></div>
        {/* vertical line*/}
        <div className="md:h-full flex flex-col justify-between items-center">
          <div className="relative flex flex-col shadow-2xl shadow-bg1 justify-center md:p-12 p-4 items-center bg-[#1E1E1E] text-center gap-5 max-w-[90%] [300px] md:max-w-[500px] xl:max-w-[600px] min-h-[250px] text-white max-md:translate-x-[25%] max-sm:translate-x-[15%]">
            <h2 className="font-ndot text-2xl xl:text-4xl">
              Initial Build Challenge
            </h2>
            <p className="text-base xl:text-3xl font-nats leading-none max-md:w-3/4 md:leading-7">
              Kick things off by creating a hardware project that tackles a
              real-world problem. Show us what you’ve got with a demo video and
              detailed project documentation.
            </p>
            <Image
              src="/attach1.webp"
              alt="maker"
              width={100}
              height={100}
              draggable={false}
              style={{
                filter: "drop-shadow(0px 12px 12px rgba(0, 0, 0, 1))",
              }}
              className="absolute md:top-1/2 -translate-y-1/2 -left-12 w-[100px] max-md:w-[90px]"
            ></Image>
          </div>

          {/* Third Step */}
          <div className="relative flex flex-col shadow-2xl shadow-bg1 justify-center md:p-12 p-4 items-center bg-[#1E1E1E] text-center gap-5 max-w-[90%] md:max-w-[500px] xl:max-w-[600px] min-h-[250px] text-white max-md:-translate-x-[25%] max-sm:-translate-x-[15%]">
            <h2 className="font-ndot text-2xl xl:text-4xl">
              Final Camp & Evaluation
            </h2>
            <p className="text-base xl:text-3xl font-nats leading-none max-md:w-3/4 md:leading-7">
              Join us for an intense 3-day maker camp! Work on advanced
              projects, get mentorship from industry experts, and take your
              skills to the next level for the final showdown.
            </p>
            <Image
              src="/attach1.webp"
              alt="maker"
              width={100}
              height={100}
              draggable={false}
              style={{
                filter: "drop-shadow(0px 12px 12px rgba(0, 0, 0, 1))",
              }}
              className="absolute md:top-1/2 -translate-y-1/2 md:-left-12 -right-12 w-[100px] max-md:w-[90px] justify-self-end"
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
