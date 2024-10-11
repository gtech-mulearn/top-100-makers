import React from "react";
import Terms from "./components/terms";
import Parteners from "./components/parteners";
import Timeline from "./components/timeline";
import Projects from "./components/projects";
import Landing from "./components/landing";
import About from "./components/about";

const Main = () => {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Timeline />
      <Parteners />
      <Terms />
    </>
  );
};

export default Main;
