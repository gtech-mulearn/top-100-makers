"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";

interface props {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

const BlinkText = ({ children, width = "fit-content" }: props) => {
  const ref = useRef(null!);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      style={{
        position: "relative",
        width: width,
        overflow: "hidden",
        // textAlign: "center",
      }}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: [0, 1, 0, 1],
        },
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default BlinkText;
