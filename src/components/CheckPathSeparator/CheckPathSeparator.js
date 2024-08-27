"use client";
import React from "react";
import AnimatedSeparator from "../AnimatedSeparator";
import { usePathname } from "next/navigation";

function CheckPathSeparator({ ...delegated }) {
  const path = usePathname();
  console.log(path !== "/about");
  return (
    <AnimatedSeparator cancelAnimation={path !== "/about"} {...delegated} />
  );
}

export default CheckPathSeparator;
