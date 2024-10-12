"use client";
import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
interface Props {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

const FadeIn = ({ children, width = "100%", delay = 0 }: Props) => {
  const ref = useRef(null!);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  return (
    <motion.div
      style={{
        width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.5,
        delay: 0.1 + delay,
        //   ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
