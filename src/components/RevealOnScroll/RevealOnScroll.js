"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function RevealOnScroll({
  children,
  stiffness = 120,
  damping = 25,
  delay = 0,
  ...delegated
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -200px 0px",
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    type: "spring",
    stiffness,
    damping,
    delay,
    restDelta: 0.01,
  };

  return (
    <div {...delegated} ref={ref}>
      <motion.div
        {...delegated}
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default RevealOnScroll;
