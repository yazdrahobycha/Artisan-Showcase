"use client";
import React, { useEffect, useState } from "react";
import ImageCarouselDynamic from "../ImageCarouselDynamic";
import ImageCarouselStatic from "../ImageCarouselStatic";
import styles from "./imagecarousel.module.css";

function ImageCarousel({ children }) {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const Tag = isMobile ? ImageCarouselDynamic : ImageCarouselStatic;

  if (!isClient) {
    return <div style={{ padding: "0 20vw", opacity: 0 }}>{children[0]}</div>;
  }

  return (
    <div className={styles.wrapper}>
      <Tag>{children}</Tag>
    </div>
  );
}

export default ImageCarousel;
