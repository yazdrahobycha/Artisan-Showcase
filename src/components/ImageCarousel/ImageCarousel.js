"use client";
import React, { useEffect, useState } from "react";

function ImageCarousel({ children }) {
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
              padding: "20vw",
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

export default ImageCarousel;
