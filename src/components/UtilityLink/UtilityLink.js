"use client";
import React, { memo, useContext, useId, forwardRef } from "react";
import Link from "next/link";
import { UpdateCustomPointerContext } from "../CustomPointerProvider";

function UtilityLink({ children, asButton, ...params }, ref) {
  const setHovered = useContext(UpdateCustomPointerContext);
  const Tag = asButton ? "button" : Link;

  return (
    <Tag
      ref={ref}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      {...params}
    >
      {children}
    </Tag>
  );
}

export default memo(forwardRef(UtilityLink));
