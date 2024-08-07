"use client";
import React, { useEffect, useRef, useState } from "react";
import { PRESS_DATA } from "@/constans";
import Grid from "../Grid";
import GridItem from "../GridItem";
import Image from "next/image";
import OverlayTitle from "../OverlayTitle";

function PressDisplay() {
  const [currentEntry, setCurrentEntry] = useState(null);
  const imagesRefsArray = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.dataset);
            setCurrentEntry(entry.target.dataset);
          }
        });
      },
      { rootMargin: "-50% 0% -50% 0%", threshold: 0 }
    );
    console.log(imagesRefsArray.current);

    imagesRefsArray.current.forEach((image) => {
      observer.observe(image);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };

  }, []);

  return (
    <Grid>
      {PRESS_DATA.map((entry) => {
        return (
          <GridItem key={entry.name+entry.date}>
            <div
              ref={(ref) => imagesRefsArray.current.push(ref)}
              data-name={entry.name}
              data-date={entry.date}
              style={{padding: '21vw'}}
              // className={styles.itemWrapper}
            >
              <Image
                style={{ objectFit: "cover", height: "auto" }}
                alt={entry.name}
                src={entry.image}
              />
            </div>
          </GridItem>
        );
      })}
      <OverlayTitle titleData={currentEntry}/>
    </Grid>
  );
}

export default PressDisplay;
