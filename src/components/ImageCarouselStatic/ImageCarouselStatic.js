import React from "react";
import styles from "./imagecarouselstatic.module.css";
import { motion } from "framer-motion";

function ImageCarouselStatic({ children }) {
  const valuesForTransition = [200, 100, 0, -100, -200];

  return (
    <div className={styles.wrapper}>
      {children.map((image, i) => (
        <motion.div
          initial={{ x: `${valuesForTransition[i]}%` }}
          animate={{ x: "0%" }}
          transition={{
            type: "spring",
            delay: 0.5,
            stiffness: 110,
            damping: 20,
          }}
          className={styles.imgWrapper}
          key={i}
        >
          {image}
        </motion.div>
      ))}
    </div>
  );
}

export default ImageCarouselStatic;
