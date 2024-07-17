"use client";
import React, { useEffect, useRef, useState } from "react";
import ListLine from "../ListLine";

function StickyListLine({ entry }) {
  const listLineRef = useRef();
  const [headerHeight, setHeaderHeight] = useState(null)
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (listLineRef.current) {
        const containerTop = listLineRef.current.getBoundingClientRect().top;
        const headerHeight = containerTop + window.scrollY;
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerHeight}px`
        );
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      document.documentElement.style.removeProperty("--header-height"); // Remove the CSS variable
    };
  }, []);

  return (
    <ListLine
      ref={listLineRef}
      inline
      startExitAnimation={true}
      itemData={entry}
    />
  );
}

export default StickyListLine;
