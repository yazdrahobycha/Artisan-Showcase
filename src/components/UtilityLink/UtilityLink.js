"use client";
import React, { memo, useContext, useId, forwardRef, useContext } from "react";
import Link from "next/link";
import { UpdateCustomPointerContext } from "../CustomPointerProvider";
import { ExitAnimationContext } from "../ExitAnimationProvider";

function UtilityLink({ children, asButton, delayTime = 0, href, ...params }, ref) {
  const { startExitAnimation, setStartExitAnimation } =
    useContext(ExitAnimationContext);
  const setHovered = useContext(UpdateCustomPointerContext);
  const Tag = asButton ? "button" : Link;

  return (
    <Tag
      ref={ref}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      href={href}
      {...params}
    >
      {children}
    </Tag>
  );
}

export default memo(forwardRef(UtilityLink));
