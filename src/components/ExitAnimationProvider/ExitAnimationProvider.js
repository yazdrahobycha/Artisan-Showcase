"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const ExitAnimationContext = React.createContext();

function ExitAnimationProvider({ children }) {
  const [startExitAnimation, setStartExitAnimation] = useState(false);

  // reset the animation state on the route change
  // state stays true after elements exit and block appearence of new elements
  //but if the page loads slowly, if we were to reset it in place, the animation of the page we
  // want to exit will appear again
  // so we need to manually observe the route change and only on the route change reset this state

  // const dynamicRoute = usePathname();
  const params = usePathname();

  useEffect(() => {
    setStartExitAnimation(false);
  }, [params]);

  return (
    <ExitAnimationContext.Provider
      value={{ startExitAnimation, setStartExitAnimation }}
    >
      {children}
    </ExitAnimationContext.Provider>
  );
}

export default ExitAnimationProvider;
