"use client";
import React, { useState, useEffect } from "react";
import styles from "./imagecarouseldynamic.module.css";

function ImageCarouselDynamic({ children }) {
  const [imageShown, setImageShown] = useState(0);
  useEffect(() => {
    if (imageShown >= children.length - 1) {
      return;
    }
    const timeout = setTimeout(() => {
      setImageShown((imageShown) => (imageShown + 1) % children.length);
    }, 100);

    return () => clearInterval(timeout);
  }, [imageShown, children]);

  return (
    <div>
      {children.map((image, i) => {
        return (
          <div
            style={{
              display: i === imageShown ? "block" : "none",
            }}
            onClick={() => setImageShown(0)}
            key={i}
          >
            {image}
          </div>
        );
      })}
    </div>
  );
}

export default ImageCarouselDynamic;
