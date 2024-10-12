"use client";

import { FaArrowRight } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const Tiltbutton = () => {
  return (
    <Tilt tiltAngleYInitial={15}>
      <button className=" bg-[#2A2A2A] p-4 px-6 font-ndot text-3xl relative z-10 rounded-lg flex items-center justify-center gap-3 text-white shadow-2xl shadow-bg1">
        {" "}
        join now <FaArrowRight />
      </button>
    </Tilt>
  );
};

export default Tiltbutton;
