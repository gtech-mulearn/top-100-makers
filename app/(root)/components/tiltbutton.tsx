"use client";

import { FaArrowRight } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const Tiltbutton = ({ title = "join now" }) => {
  return (
    <Tilt tiltAngleYInitial={15}>
      <Link
        href="https://airtable.com/appCAPOMQvpUnbWeb/pagk44KpzSAuTYiCR/form"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="cursor-none capitalize bg-[#2A2A2A] p-4 px-6 font-ndot text-3xl relative z-10 rounded-lg flex items-center justify-center gap-3 text-white shadow-2xl shadow-bg1">
          {" "}
          {title} <FaArrowRight />
        </button>
      </Link>
    </Tilt>
  );
};

export default Tiltbutton;
