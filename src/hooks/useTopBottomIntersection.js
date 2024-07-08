import React, { useEffect, useState } from "react";

export default function useTopBottomIntersection(
  elem1Ref,
  elem2Ref,
  intersectionMargin = 0
) {
  const [isElementsIntersecting, setIsElementsIntersecting] = useState(false);
  useEffect(() => {
    function checkIntersection() {
      const elem1Top = elem1Ref.current.getBoundingClientRect().top;
      const elem2Botttom = elem2Ref.current.getBoundingClientRect().bottom;
      const isCurrentlyIntersecting =
        elem2Botttom > elem1Top - intersectionMargin;
      if (isCurrentlyIntersecting === isElementsIntersecting) {
        return;
      }
      console.log("Something Changed!");
      setIsElementsIntersecting(!isElementsIntersecting);
    }

    window.addEventListener("scroll", checkIntersection);
    return () => removeEventListener("scroll", checkIntersection);
  }, [isElementsIntersecting]);

  return isElementsIntersecting;
}
