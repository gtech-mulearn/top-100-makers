import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex">
      <div className="flex w-1/2">
        {[...Array(3)].map((_, index) => (
          <Image
            key={index}
            src={`/footer/footer_logo${index + 1}.webp`}
            alt="partener image"
            className="w-[100vw] h-auto"
            width={150}
            height={150}
            draggable={false}
          />
        ))}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex flex-1 items-center justify-between  bg-bg2 text-xl px-12">
          <p className="text-[rgba(68,34,68,0.7333)] font-ndot mb-4">
            SEE US ON
          </p>
          <div className="flex space-x-4 text-gray-600 text-3xl">
            <FaFacebookF className="hover:text-gray-800" />
            <FaInstagram className="hover:text-gray-800" />
            <FaDiscord className="hover:text-gray-800" />
            <FaYoutube className="hover:text-gray-800" />
            <FaTimes className="hover:text-gray-800" />
          </div>
        </div>
        <div className="flex items-center bg-bg4 h-1/2 justify-between px-12">
          <a href="/terms" className="text-gray-600 hover:text-gray-800 mb-2">
            TERMS OF USE AND PRIVACY POLICY
          </a>
          <a
            href="/user-agreement"
            className="text-gray-600 hover:text-gray-800 flex items-center"
          >
            USER AGREEMENT
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
