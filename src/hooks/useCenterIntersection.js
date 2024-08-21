import { useEffect } from "react";

export function useCenterIntersection(
  elmsToObserve,
  callbackOnIntersection,
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callbackOnIntersection(entry);
          }
        });
      },
      { rootMargin: "-50% 0% -50% 0%", threshold: 0 }
    );

    elmsToObserve.current.forEach((image) => {
        console.log(image)
      observer.observe(image);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [callbackOnIntersection, elmsToObserve]);
}
