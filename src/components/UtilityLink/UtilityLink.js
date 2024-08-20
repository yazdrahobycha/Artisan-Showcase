"use client";
import React, { memo, useContext, forwardRef } from "react";
import Link from "next/link";
import { UpdateCustomPointerContext } from "../CustomPointerProvider";
import { ExitAnimationContext } from "../ExitAnimationProvider";
import { useRouter } from "next/navigation";

function UtilityLink(
  { children, asButton, delayTime = 0, href, ...params },
  ref
) {
  const router = useRouter();
  const { startExitAnimation, setStartExitAnimation } =
    useContext(ExitAnimationContext);
  const setHovered = useContext(UpdateCustomPointerContext);
  const Tag = asButton ? "button" : Link;

  function handleClick(e) {
    // after clicking make the custom pointer small
    setHovered(false);
    // in case is clicked while animating and if clicked when it is a button
    // and doesnt need a delayed routing
    if (startExitAnimation || asButton) {
      return;
    }

    // when theres a route transition but it is doesnt require delay
    if (delayTime === 0) {
      router.push(href);
      // router.push(href);
      console.log(delayTime);

      // early return for theres no need in animation
      return;
    }
    // give command to start exiting animation
    setStartExitAnimation(true);

    //setting a route transition after delay time and reseting the animation state
    setTimeout(() => {
      router.push(href);
      setStartExitAnimation(false);
    }, delayTime);
  }

  return (
    <Tag
      ref={ref}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      href={href}
      {...params}
    >
      {children}
    </Tag>
  );
}

export default memo(forwardRef(UtilityLink));
