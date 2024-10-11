"use client";
import Image from "next/image";
import LandingLines from "./landingLines";
import Tiltbutton from "./tiltbutton";
import BlinkText from "./blinkText";

const Landing = () => {
  return (
    <div className="min-h-[100dvh] flex justify-center items-center flex-col text-center gap-8 relative overflow-hidden z-10">
      <BlinkText>
        <Image
          src="/thm_landing.webp"
          alt="background"
          height={1080}
          width={1080}
          quality={100}
          draggable={false}
          priority={true}
          className="relative z-10"
        />
      </BlinkText>
      <div className=" w-full h-full absolute md:top-1/2 max-md:top-[35%] md:-translate-y-[15%] z-0">
        <LandingLines />
      </div>
      <div className="flex flex-col justify-center items-center w-full gap:gap-3 gap-5 relative Z-20">
        <h1 className="md:text-6xl text-3xl font-nats">
          Ready to Be One of the Top 100 Makers?
        </h1>
        <p className="text-center font-nats md:text-3xl text-lg md:w-3/4">
          Join the Top 100 Makers initiative, backed by ICFOSS, Netrasemi, and
          endorsed by industry giants. We&apos;re here to spot, challenge, and
          uplift India&apos;s most talented makers. If you live to build,
          innovate, and turn ideas into reality, you&apos;re in the right place!
        </p>
      </div>
      <Tiltbutton />
    </div>
  );
};

export default Landing;
