"use client";
import React, { useEffect, useRef, useState } from "react";
import { PRESS_DATA } from "@/constans";
import Grid from "../Grid";
import GridItem from "../GridItem";
import Image from "next/image";
import OverlayTitle from "../OverlayTitle";
import styles from "./pressdisplay.module.css";
import UtilityLink from "../UtilityLink";

function PressDisplay() {
  const [currentEntry, setCurrentEntry] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(null);
  const imagesRefsArray = useRef([]);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isSmallScreen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);
        if (intersectingEntry) {
          setCurrentEntry(intersectingEntry.target.dataset);
        }
      },
      { rootMargin: "-50% 0% -50% 0%", threshold: 0 }
    );

    imagesRefsArray.current.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [isSmallScreen]);

  const handleHover = (entry) => {
    if (isSmallScreen) return;
    setCurrentEntry(entry);
  };

  return (
    <Grid columnNum={3}>
      {PRESS_DATA.map((entry, index) => (
        <GridItem
          onMouseLeave={() => handleHover(null)}
          onMouseEnter={() =>
            handleHover({ name: entry.name, date: entry.date })
          }
          key={entry.name + entry.date}
        >
          <UtilityLink
            href={entry.link}
            ref={(ref) => (imagesRefsArray.current[index] = ref)}
            data-name={entry.name}
            data-date={entry.date}
            style={{
              opacity:
                currentEntry &&
                currentEntry.name !== entry.name &&
                currentEntry.date !== entry.date
                  ? 0.5
                  : 1,
            }}
            className={`line ${styles.itemWrapper}`}
          >
            <Image
              className={styles.itemImage}
              alt={entry.name}
              src={entry.image}
            />
          </UtilityLink>
        </GridItem>
      ))}
      <OverlayTitle titleData={currentEntry} />
    </Grid>
  );
}

export default PressDisplay;