"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cursor = () => {
  const ref = useRef(null);
  useGSAP(
    () => {
      window.addEventListener("mousemove", (e) => {
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        gsap.to(ref.current, {
          x: e.clientX + scrollX,
          y: e.clientY + scrollY,
          duration: 0.1,
          opacity: 1,
        });
      });
      window.addEventListener("mousedown", () => {
        gsap.to(ref.current, {
          scale: 1.5,
          duration: 0.1,
        });
      });
      window.addEventListener("mouseup", () => {
        gsap.to(ref.current, {
          scale: 1,
          duration: 0.1,
        });
      });
    },
    { scope: ref }
  );
  return (
    <div
      ref={ref}
      className="border-2 border-white rounded-full h-8 w-8 absolute z-[999999999] flex justify-center items-center pointer-events-none opacity-0"
    >
      <div className="border-2 border-white rounded-full h-6 w-6 inner"></div>
    </div>
  );
};

export default Cursor;
