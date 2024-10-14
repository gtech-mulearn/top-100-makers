"use client";
import React from "react";
import BlinkText from "./blinkText";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Tiltbutton from "./tiltbutton";

const Selection = () => {
  return (
    <div className=" text-center relative min-h-screen">
      <div className="bg-bg5 p-8">
        <BlinkText width="100%">
          <h1 className="title">How Do We Choose the Top Makers?</h1>
        </BlinkText>
        <p className="mt-8 font-nats text-3xl">
          We’re looking for creators who excel in:
        </p>
        <div className="flex justify-center items-center mt-32 mb-20 max-lg:flex-col relative z-[1]">
          {/* make some card div with a title and description */}
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <>
                <Tilt tiltAngleYInitial={-30} className="relative z-10">
                  <div
                    style={{
                      filter: `drop-shadow(0px 12px 12px rgba(0, 0, 0, 0.25))`,
                    }}
                    key={i}
                    className="bg-gradient-to-tr from-[#2A2A2A] to-[rgb(34,40,52)] p-5 rounded-lg border border-[rgba(0,0,0,0.2)] max-w-[300px] flex flex-col items-center gap-3"
                  >
                    <Image
                      src={`/abouticons/icon${i + 1}.webp`}
                      width={100}
                      height={100}
                      alt="innovation"
                    ></Image>
                    <h1 className="font-ndot text-3xl mb-4">
                      Innovation and Creativity
                    </h1>
                    <p className="pb-16 text-2xl font-nats leading-none">
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
                    className="max-lg:hidden scale-x-150"
                  ></Image>
                )}
              </>
            ))}
        </div>
      </div>
      <div className="min-h-80 w-full bg-bg1 lg:absolute bottom-0 flex flex-col justify-end pb-12 items-center gap-8">
        <h1 className="text-4xl font-nats">Ready to Innovate?</h1>
        <Tiltbutton />
      </div>
    </div>
  );
};

export default Selection;
