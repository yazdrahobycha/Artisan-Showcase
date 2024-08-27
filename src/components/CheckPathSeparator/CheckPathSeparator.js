"use client";
import React from "react";
import AnimatedSeparator from "../AnimatedSeparator";
import { usePathname } from "next/navigation";

function CheckPathSeparator({ ...delegated }) {
  const path = usePathname();
  return <AnimatedSeparator cancelAnimation={path === "/"} {...delegated} />;
}

export default CheckPathSeparator;
