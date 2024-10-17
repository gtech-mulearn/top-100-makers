import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="flex flex-wrap max-lg:flex-col">
      <div className="flex w-full  lg:w-1/2">
        {[...Array(3)].map((_, index) => (
          <Image
            key={index}
            src={`/footer/footer_logo${index + 1}.webp`}
            alt="partener image"
            className="w-[100vw] "
            width={250}
            height={250}
            draggable={false}
          />
        ))}
      </div>
      <div className="lg:flex-1 flex flex-col">
        <div className="flex flex-1 items-center justify-between  bg-bg2 text-xl p-8 md:px-12">
          <p className="text-[rgba(68,34,68,0.7333)] font-ndot text-xl md:text-3xl">
            SEE US ON
          </p>
          <div className="flex space-x-4 text-gray-600 text-xl md:text-3xl">
            <Link target="_blank" rel="noopener noreferrer" href={""}>
              <FaFacebookF className="hover:text-gray-800" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://www.instagram.com/mulearn.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
            >
              <FaInstagram className="hover:text-gray-800" />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href={""}>
              <FaDiscord className="hover:text-gray-800" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://youtube.com/@mulearn?si=mMpMm0TV0YbHX_rf"}
            >
              <FaYoutube className="hover:text-gray-800" />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href={""}>
              <BsTwitterX className="hover:text-gray-800" />
            </Link>
          </div>
        </div>
        <div className="flex items-center bg-bg4 h-1/2 justify-between p-8 md:px-12">
          <a className="text-gray-600 hover:text-gray-800 font-nats">
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
