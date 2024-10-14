"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { useState } from "react";
import Tiltbutton from "./tiltbutton";
import Link from "next/link";
import { MdCancel } from "react-icons/md";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-20 sticky top-0 left-0 z-50 bg-[#424B54]"
    >
      <div className="flex items-center justify-between w-full h-full">
        <div className="bg-bg2 p-2 px-4 md:px-24 h-full flex-shrink-0">
          <Image
            height={100}
            width={100}
            src="/logos/main_logo.webp"
            alt="Main Logo"
          />
        </div>
        <nav className="flex gap-2 md:gap-12 xl:gap-20 xl:text-3xl text-lg max-md:hidden bg-[#424B54] py-2 md:py-4 font-ndot flex-1 justify-center items-center h-full px-12">
          <a href="/about" className="hover:underline">
            ABOUT
          </a>
          <a href="/prize" className="hover:underline">
            PRIZE
          </a>
          <a href="/faqs" className="hover:underline">
            FAQ&apos;s
          </a>
          <a href="/contact" className="hover:underline">
            CONTACT
          </a>
        </nav>

        {/* Right Section - Partner Logos */}
        <div className="hidden md:flex items-center px-4 md:px-24 h-full bg-bg4 flex-shrink-0 max-md:hidden">
          <Image
            height={100}
            width={100}
            src="/logos/second_logo.webp"
            alt="Partner Logo"
          />
        </div>
        <BsGrid3X3GapFill
          onClick={() => setIsActive(!isActive)}
          className="text-3xl text-bg2 mx-4 md:hidden"
        />
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isActive ? 0 : "100%" }}
        className="fixed md:hidden z-50 top-0 right-0 w-full min-h-screen bg-bg2"
      >
        <button
          onClick={() => setIsActive(!isActive)}
          className="absolute top-8 right-8"
        >
          <MdCancel className="text-5xl text-white" />
        </button>
        <ul className="flex flex-col min-w-60 py-28 text-3xl lg:gap-10 gap-4 items-center text-white">
          <li className="cursor-pointer hover:underline uppercase font-ndot my-4">
            <Link href="#about">About</Link>
          </li>
          <li className="cursor-pointer hover:underline uppercase font-ndot my-4">
            <Link href="#prize">prize</Link>
          </li>
          <li className="cursor-pointer hover:underline uppercase font-ndot my-4">
            <Link href="#Faq">Faq</Link>
          </li>
          <li className="cursor-pointer hover:underline uppercase font-ndot my-4">
            <Link href="#Contact">Contact</Link>
          </li>
          <Tiltbutton />
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Nav;
