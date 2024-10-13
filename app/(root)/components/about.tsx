import Image from "next/image";
import React from "react";
import BlinkText from "./blinkText";

const About = () => {
  return (
    <div className="flex justify-center items-center flex-col p-8 text-center gap-14 min-h-[150vh] relative">
      <BlinkText>
        <h1 className="title ">
          What’s in it for You? Prizes Worth <br /> ₹10,00,000!
        </h1>
      </BlinkText>
      <span className="p-4 rounded-3xl text-3xl bg-[rgba(62,62,62,0.55)]">
        Think you’ve got what it takes? Start by tackling our initial build
        challenges.
      </span>
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
            className="object-contain absolute top-5 left-5"
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
            className="object-contain absolute top-8 left-5"
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
            className="object-contain absolute top-12 right-4"
          ></Image>
          <p className=" font-nats w-[80%]">
             Submit your project video and documentation to prove your ingenuity
            and technical flair.
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
            className="object-contain absolute top-2 right-2"
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
      <div className="w-full font-ndot  absolute bottom-4">
        <BlinkText width="100%">
          Make it to the top, and you&apos;ll earn a spot among India&apos;s
          best makers!
        </BlinkText>
      </div>
    </div>
  );
};

export default About;
