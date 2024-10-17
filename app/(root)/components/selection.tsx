"use client";
import React from "react";
import BlinkText from "./blinkText";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Tiltbutton from "./tiltbutton";
import useIsMobile from "@/app/hooks/isMobile";

const Selection = () => {
  const cardData = [
    {
      heading: "Innovation and Creativity",
      description:
        "Can you think outside the box and bring fresh, unique ideas to life?",
    },
    {
      heading: "Technical Skills",
      description: "Are you a pro at hardware design, coding, and prototyping?",
    },
    {
      heading: "Problem-Solving",
      description:
        "How do you tackle complex challenges and turn them into functional solutions?",
    },
    {
      heading: "Sustainability",
      description:
        "Are you incorporating eco-friendly practices and materials into your designs?",
    },
    {
      heading: "Teamwork and Collaboration",
      description:
        "Can you effectively work with others and contribute to a community of makers?",
    },
  ];

  const isMobile = useIsMobile();

  return (
    <div className="text-center relative min-h-screen">
      <div className="bg-bg5 p-8">
        <BlinkText width="100%">
          <h1 className="title">How Do We Choose the Top Makers?</h1>
        </BlinkText>
        <p className="mt-8 font-nats text-3xl">
          We’re looking for creators who excel in:
        </p>
        <div className="flex justify-center items-center mt-32 mb-20 max-lg:flex-col relative z-[1]">
          {cardData.map((item, i) => (
            <React.Fragment key={i}>
              {isMobile ? (
                <div
                  style={{
                    filter: `drop-shadow(0px 12px 12px rgba(0, 0, 0, 0.25))`,
                  }}
                  className="h-[400px] bg-gradient-to-tr from-[#2A2A2A] to-[rgb(34,40,52)] p-5 rounded-lg border border-[rgba(0,0,0,0.2)] max-w-[300px] flex flex-col items-center gap-3"
                >
                  <Image
                    src={`/abouticons/icon${i + 1}.webp`}
                    width={100}
                    height={100}
                    alt="innovation"
                  />
                  <h1 className="font-ndot text-3xl mb-4">{item.heading}</h1>
                  <p className="pb-16 text-2xl font-nats leading-none">
                    {item.description}
                  </p>
                </div>
              ) : (
                <Tilt tiltAngleYInitial={-30} className="relative z-10">
                  <div
                    style={{
                      filter: `drop-shadow(0px 12px 12px rgba(0, 0, 0, 0.25))`,
                    }}
                    className="h-[400px] bg-gradient-to-tr from-[#2A2A2A] to-[rgb(34,40,52)] p-5 rounded-lg border border-[rgba(0,0,0,0.2)] max-w-[300px] flex flex-col items-center gap-3"
                  >
                    <Image
                      src={`/abouticons/icon${i + 1}.webp`}
                      width={100}
                      height={100}
                      alt="innovation"
                    />
                    <h1 className="font-ndot text-3xl mb-4">{item.heading}</h1>
                    <p className="pb-16 text-2xl font-nats leading-none">
                      {item.description}
                    </p>
                  </div>
                </Tilt>
              )}
              {i < 4 && (
                <Image
                  src="/abouticons/attachpipe.webp"
                  alt="maker"
                  width={50}
                  height={50}
                  draggable={false}
                  className="max-lg:hidden scale-x-150"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="min-h-80 w-full bg-bg1 lg:absolute bottom-0 flex flex-col justify-end pb-12 items-center gap-8">
        <h1 className="text-4xl font-nats">Ready to Innovate?</h1>
        <Tiltbutton title="register" />
      </div>
    </div>
  );
};

export default Selection;
