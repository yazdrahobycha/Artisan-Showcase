"use client";
import React, { memo, useContext, forwardRef } from "react";
import Link from "next/link";
import { UpdateCustomPointerContext } from "../CustomPointerProvider";
import { ExitAnimationContext } from "../ExitAnimationProvider";
import { useRouter } from "next/navigation";
import sleep from "@/helpers/sleep";

function UtilityLink(
  { children, asButton, delayTime = 0, href, ...params },
  ref
) {
  const router = useRouter();
  const { startExitAnimation, setStartExitAnimation } =
    useContext(ExitAnimationContext);
  const setHovered = useContext(UpdateCustomPointerContext);
  const Tag = asButton ? "button" : Link;
  const handleClick = async (e) => {
    // prevent default href behavior
    e.preventDefault();
    // after clicking make the custom pointer small
    // in case is clicked while animating and if clicked when it is a button
    // and doesnt need a delayed routing
    if (
      startExitAnimation ||
      asButton ||
      "." + window.location.pathname === href
    ) {
      return;
    }

    // when theres a route transition but it is doesnt require delay
    // if (delayTime === 0) {
    //   router.push(href);
    //   // early return for theres no need in animation
    //   return;
    // }
    // give command to start exiting animation
    setStartExitAnimation(true);

    //setting a route transition after delay time and reseting the animation state after some delay
    // in case the page will load only after the second animation loop that set exit state to true
    // and shows contents of previous page once again
    await sleep(delayTime);
    router.push(href);
  };

  return (
    <Tag
      ref={ref}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => handleClick(e)}
      onMouseEnter={() => setHovered(true)}
      href={href}
      {...params}
    >
      {children}
    </Tag>
  );
}

export default memo(forwardRef(UtilityLink));
