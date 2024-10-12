import React from "react";
import Terms from "./components/terms";
import Parteners from "./components/parteners";
import Timeline from "./components/timeline";
import Projects from "./components/projects";
import Landing from "./components/landing";
import About from "./components/about";
import Selection from "./components/selection";
import Qa from "./components/qa";

const Main = () => {
  return (
    <>
      <Landing />
      <About />
      <Selection />
      <Projects />
      <Timeline />
      <Parteners />
      <Qa />
      <Terms />
    </>
  );
};

export default Main;
