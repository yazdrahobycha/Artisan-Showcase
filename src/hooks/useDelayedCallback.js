import { useEffect, useRef } from "react";

export function useDelayedCallback(callback, delay) {
  const timeoutRef = useRef();

  useEffect(() => {
    return () => {
      if (timeoutRef.current != null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function callbackWithDelay(...args) {
    if (timeoutRef.current != null) {
      clearTimeout(timeoutRef.current);
    }

    const timeoutId = setTimeout(() => {
      callback(...args);
      console.log("timeoutcallback fired");
      timeoutRef.current = undefined;
    }, delay);

    timeoutRef.current = timeoutId;
  }

  return callbackWithDelay;
}
