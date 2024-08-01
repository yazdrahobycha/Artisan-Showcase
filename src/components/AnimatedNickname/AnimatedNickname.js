"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./animatednickname.module.css";
import UtilityLink from "../UtilityLink";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hookz/web";

function AnimatedNickname({ children }) {
  const [linkIsHovered, setLinkIsHovered] = useState(false);
  const [secondLetterWidth, setSecondLetterWidth] = useState("3.5vw");
  const isSmall = useMediaQuery("only screen and (max-width : 768px)");
  const [loaded, setLoaded] = useState(false);
  const secondLetterRef = useRef();
  function handleHover() {
    setLinkIsHovered(true);
  }

  function handleUnhover() {
    setLinkIsHovered(false);
  }

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      return;
    }

    if (isSmall) {
      return;
    }
    console.log(secondLetterRef.current.offsetWidth);
    setSecondLetterWidth(secondLetterRef.current.offsetWidth + "px");

    function handleResize() {
      setSecondLetterWidth(secondLetterRef.current.offsetWidth + "px");
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [loaded, isSmall]);

  if (!loaded || isSmall) {
    return <IdleNickname>{children}</IdleNickname>;
  }

  return (
    <>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        className={styles.logoLetterWrapper}
      >
        <UtilityLink href="\">
          <span className={styles.mainLetter}>C</span>
          <motion.span
            className={styles.slided}
            initial="hidden"
            animate={linkIsHovered ? "visible" : "hidden"}
            transition={{ type: "spring", stiffness: 500, damping: 50 }}
            variants={{
              hidden: { x: "-150%" },
              visible: { x: 0 },
            }}

            // style={{ position: "absolute", left: 0 }}
          >
            ARLOS
          </motion.span>
        </UtilityLink>
      </div>
      {/*  */}
      {children}
      {/*  */}
      <motion.div
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        className={styles.logoLetterWrapper}
        initial="hidden"
        animate={linkIsHovered ? "visible" : "hidden"}
        transition={{ type: "spring", stiffness: 500, damping: 50 }}
        variants={{
          hidden: { x: `calc(100% - ${secondLetterWidth} )` },
          visible: { x: 0 },
        }}
      >
        <UtilityLink href="\">
          <span ref={secondLetterRef} className={`${styles.mainLetter}`}>
            G
          </span>
          <motion.span
            animate={linkIsHovered ? "visible" : "hidden"}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            variants={{
              hidden: { x: "50%" },
              visible: { x: 0 },
            }}
            className={styles.slided}
            initial="hidden"
          >
            UIGARRO
          </motion.span>
        </UtilityLink>
      </motion.div>
    </>
  );
}

function IdleNickname({ children }) {
  return (
    <>
      <div className={styles.logoLetterWrapper}>
        <UtilityLink href="\">
          <span className={styles.mainLetter}>C</span>
        </UtilityLink>
      </div>
      {/*  */}
      {children}
      {/*  */}
      <div className={styles.logoLetterWrapper}>
        <UtilityLink href="\">
          <span className={`${styles.mainLetter}`}>G</span>
        </UtilityLink>
      </div>
    </>
  );
}

export default AnimatedNickname;
