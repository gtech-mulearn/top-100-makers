"use client";
import React from "react";
import BlinkText from "./blinkText";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const Selection = () => {
  return (
    <div className=" text-center relative">
      <div className="bg-bg5 p-8">
        <BlinkText width="100%">
          <h1 className="title">How Do We Choose the Top Makers?</h1>
        </BlinkText>
        <p className="mt-8 font-nats text-3xl">
          We’re looking for creators who excel in:
        </p>
        <div className="flex justify-end items-center mt-32 mb-20 max-md:flex-col relative z-[1]">
          {/* make some card div with a title and description */}
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <>
                <Tilt tiltAngleYInitial={-30} className="relative z-10">
                  <div
                    key={i}
                    className="bg-gradient-to-tr from-[#2A2A2A] to-[rgb(34,40,52)] p-5 rounded-lg border border-[rgba(0,0,0,0.2)] max-w-[300px] flex flex-col items-center gap-8"
                  >
                    <Image
                      src={`/abouticons/icon${i + 1}.webp`}
                      width={50}
                      height={50}
                      alt="innovation"
                    ></Image>
                    <h1 className="font-ndot text-xl">
                      Innovation and Creativity
                    </h1>
                    <p className="pb-16">
                       Can you think outside the box and bring fresh, unique
                      ideas to life?
                    </p>
                  </div>
                </Tilt>
                {i < 4 && (
                  <Image
                    src="/abouticons/attachpipe.webp"
                    alt="maker"
                    width={50}
                    height={50}
                    draggable={false}
                    className="max-md:rotate-90 scale-x-150"
                  ></Image>
                )}
              </>
            ))}
        </div>
      </div>
      <div className="h-40 w-full bg-bg1 absolute bottom-0 "></div>
    </div>
  );
};

export default Selection;
