import Image from "next/image";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-wrap max-md:flex-col">
      <div className="flex w-full  md:w-1/2">
        {[...Array(3)].map((_, index) => (
          <Image
            key={index}
            src={`/footer/footer_logo${index + 1}.webp`}
            alt="partener image"
            className="w-[100vw] "
            width={100}
            height={100}
            draggable={false}
          />
        ))}
      </div>
      <div className="md:flex-1 flex flex-col">
        <div className="flex flex-1 items-center justify-between  bg-bg2 text-xl p-8 md:px-12">
          <p className="text-[rgba(68,34,68,0.7333)] font-ndot text-xl md:text-3xl">
            SEE US ON
          </p>
          <div className="flex space-x-4 text-gray-600 text-xl md:text-3xl">
            <FaFacebookF className="hover:text-gray-800" />
            <FaInstagram className="hover:text-gray-800" />
            <FaDiscord className="hover:text-gray-800" />
            <FaYoutube className="hover:text-gray-800" />
            <BsTwitterX className="hover:text-gray-800" />
          </div>
        </div>
        <div className="flex items-center bg-bg4 h-1/2 justify-between p-8 md:px-12">
          <a
            href="/terms"
            className="text-gray-600 hover:text-gray-800 font-nats"
          >
            TERMS OF USE AND PRIVACY POLICY
          </a>
          <a
            href="/user-agreement"
            className="text-gray-600 hover:text-gray-800 font-nats flex items-center"
          >
            USER AGREEMENT
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
