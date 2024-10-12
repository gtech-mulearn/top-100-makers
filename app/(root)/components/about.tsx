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
      <div className="flex ">
        <div className="mask-image1 h-[250px] w-[400px] flex justify-center items-center relative translate-x-14">
          <Image
            src="/cards/attach1.png"
            alt="about1"
            width={50}
            height={50}
            draggable={false}
            className="object-contain absolute top-0 left-0"
          ></Image>
          <p className="text-lg font-nats w-[80%]">
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
        <div className="mask-image1 h-[250px] max-w-[400px] flex justify-center items-center relative translate-y-40">
          <Image
            src="/cards/attach2.png"
            alt="about1"
            width={50}
            height={50}
            draggable={false}
            className="object-contain absolute top-0 left-0"
          ></Image>
          <Image
            src="/cards/attach3.png"
            alt="about1"
            width={25}
            height={25}
            draggable={false}
            className="object-contain absolute top-10 right-2"
          ></Image>
          <p className="text-lg font-nats w-[80%]">
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
        <div className="mask-image2  h-[250px] max-w-[400px] flex justify-center items-center relative -translate-x-14">
          <Image
            src="/cards/attach4.png"
            alt="about1"
            width={25}
            height={25}
            draggable={false}
            className="object-contain absolute top-2 right-2"
          ></Image>
          <p className="text-lg font-nats w-[80%]">
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
      <div className="w-full font-ndot text-4xl absolute bottom-4">
        <BlinkText width="100%">
          Make it to the top, and you&apos;ll earn a spot among India&apos;s
          best makers!
        </BlinkText>
      </div>
    </div>
  );
};

export default About;
