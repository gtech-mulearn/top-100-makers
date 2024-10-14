import Image from "next/image";
import React from "react";
import BlinkText from "./blinkText";

const Projects = () => {
  return (
    <div className="lg:min-h-screen flex justify-center flex-col items-center gap-12 lg:px-32 md:p-12 py-8 bg-bg5">
      <BlinkText>
        <h1 className="title max-md:text-center max-md:px-8 md:mb-24">
          Focus Areas for Your Projects
        </h1>
      </BlinkText>
      <Image
        src="/projects.png"
        alt="projects"
        width={1000}
        height={1000}
        draggable={false}
        className="object-contain"
      ></Image>
    </div>
  );
};

export default Projects;
