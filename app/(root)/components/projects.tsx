import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="md:min-h-screen flex justify-center flex-col items-center gap-12 md:px-32 md:p-12 p-8 bg-bg5">
      <h1 className="title max-md:text-center">
        Focus Areas for Your Projects
      </h1>
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
