"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlinkText from "./blinkText";
import Tiltbutton from "./tiltbutton";
// import { useMediaQuery } from "react-responsive";

const About = () => {
  // const isTablet = useMediaQuery({ query: "(max-width: 1026px)" });
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1026px)");
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsTablet(event.matches);
    };

    // Set initial value
    setIsTablet(mediaQuery.matches);

    // Add event listener
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup event listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <div className="flex justify-start items-center flex-col p-8 text-center gap-14 lg:min-h-[140vh] relative">
      <BlinkText>
        <h1 className="title ">
          What’s in it for You? Prizes Worth <br /> ₹10,00,000!
        </h1>
      </BlinkText>
      <span className="p-4 rounded-3xl text-xl md:text-3xl bg-[rgba(62,62,62,0.55)]">
        Think you’ve got what it takes? Start by tackling our initial build
        challenges.
      </span>
      {!isTablet ? (
        <div className="flex mb-32">
          <div className="mask-image1 cardsize flex justify-center items-center relative translate-x-24">
            <Image
              style={{
                filter: `drop-shadow(0px 12px 12px rgba(0, 0, 0, 0.25))`,
              }}
              src="/cards/attach3.webp"
              alt="about1"
              width={50}
              height={50}
              draggable={false}
              className="object-contain absolute top-5 left-5 max-xl:w-[40px] w-[50px]"
            ></Image>
            <p className=" font-nats w-[80%]">
              Show off your skills in hardware, electronics, and physical
              computing.
            </p>
            <Image
              src="/cards/game1.png"
              alt="game1"
              width={200}
              height={200}
              draggable={false}
              className="object-contain absolute bottom-0 left-0 -z-10"
            ></Image>
          </div>
          <div className="mask-image1 cardsize flex justify-center items-center relative translate-y-3/4">
            <Image
              style={{
                filter: `drop-shadow(0px 12px 12px rgba(0, 0, 0, 0.25))`,
              }}
              src="/cards/attach2.webp"
              alt="about1"
              width={50}
              height={50}
              draggable={false}
              className="object-contain absolute top-8 left-5 max-xl:w-[40px] w-[50px]"
            ></Image>
            <Image
              style={{
                filter: `drop-shadow(0px 12px 12px rgba(0, 0, 0, 0.25))`,
              }}
              src="/cards/attach1.webp"
              alt="about1"
              width={50}
              height={50}
              draggable={false}
              className="object-contain absolute top-12 right-4 max-xl:w-[40px] w-[50px]"
            ></Image>
            <p className=" font-nats w-[80%]">
               Submit your project video and documentation to prove your
              ingenuity and technical flair.
            </p>
            <Image
              src="/cards/game2.png"
              alt="game1"
              width={200}
              height={200}
              draggable={false}
              className="object-contain absolute bottom-0 left-0 -z-10"
            ></Image>
          </div>
          <div className="mask-image2  cardsize flex justify-center items-center relative -z-10 -translate-x-24">
            <Image
              src="/cards/attach4.webp"
              alt="about1"
              width={50}
              height={50}
              draggable={false}
              className="object-contain absolute top-2 right-2 max-xl:w-[40px] w-[50px]"
            ></Image>
            <p className=" font-nats w-[80%]">
              Then, dive into our epic Maker Challenges: the Hardware Hackathon,
              Sustainable Design Challenge, IoT Challenge, and 3D Printing &
              Prototyping.
            </p>
            <Image
              src="/cards/game3.png"
              alt="game1"
              width={200}
              height={200}
              draggable={false}
              className="object-contain absolute bottom-0 right-0 -z-10"
            ></Image>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mb-4 justify-center items-center sm:px-32">
          <div className="mask-image1 mobilecard max-w-[90%] flex justify-center items-center relative translate-y-20">
            <Image
              style={{
                filter: `drop-shadow(0px 12px 12px rgba(0, 0, 0, 0.25))`,
              }}
              src="/cards/attach3.webp"
              alt="about1"
              width={60}
              height={60}
              draggable={false}
              className="object-contain absolute top-5 left-5"
            ></Image>
            <p className=" font-nats w-[80%] text-3xl leading-none">
              Show off your skills in hardware, electronics, and physical
              computing.
            </p>
            <Image
              src="/cards/game1.png"
              alt="game1"
              width={200}
              height={200}
              draggable={false}
              className="object-contain absolute top-4 right-4 -z-10"
            ></Image>
          </div>
          <div className="m-mask2 mobilecard flex justify-center items-center relative z-20">
            <Image
              style={{
                filter: `drop-shadow(0px 12px 12px rgba(0, 0, 0, 0.25))`,
              }}
              src="/cards/attach2.webp"
              alt="about1"
              width={50}
              height={50}
              draggable={false}
              className="object-contain absolute right-1/2 top-4 max-xl:w-[40px] w-[50px]"
            ></Image>
            <Image
              style={{
                filter: `drop-shadow(0px 12px 12px rgba(0, 0, 0, 0.25))`,
              }}
              src="/cards/attach1.webp"
              alt="about1"
              width={50}
              height={50}
              draggable={false}
              className="object-contain absolute bottom-4 right-1/2 max-xl:w-[40px] w-[50px]"
            ></Image>
            <p className=" font-nats w-[80%] text-3xl leading-none">
               Submit your project video and documentation to prove your
              ingenuity and technical flair.
            </p>
            <Image
              src="/cards/game2.png"
              alt="game1"
              width={200}
              height={200}
              draggable={false}
              className="object-contain absolute bottom-0 left-0 -z-10"
            ></Image>
          </div>
          <div className="m-mask3 max-w-[90%] mobilecard flex justify-center items-center relative z-10 -translate-y-24">
            <Image
              src="/cards/attach4.webp"
              alt="about1"
              width={50}
              height={50}
              draggable={false}
              className="object-contain absolute bottom-4 right-2 max-xl:w-[40px] w-[50px]"
            ></Image>
            <p className=" font-nats w-[80%] text-3xl leading-none">
              Then, dive into our epic Maker Challenges: the Hardware Hackathon,
              Sustainable Design Challenge, IoT Challenge, and 3D Printing &
              Prototyping.
            </p>
            <Image
              src="/cards/game3.png"
              alt="game1"
              width={200}
              height={200}
              draggable={false}
              className="object-contain absolute bottom-0 right-0 -z-10"
            ></Image>
          </div>
        </div>
      )}
      <div className="w-full font-ndot text-4xl lg:absolute bottom-4 flex flex-col justify-center items-center gap-12 py-8">
        <BlinkText width="100%">
          Make it to the top, and you&apos;ll earn a spot among India&apos;s
          best makers!
        </BlinkText>
        <Tiltbutton title="register" />
      </div>
    </div>
  );
};

export default About;
