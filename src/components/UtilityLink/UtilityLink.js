"use client";
import React, { memo, useContext, useId } from "react";
import Link from "next/link";
import { UpdateCustomPointerContext } from "../CustomPointerProvider";

function UtilityLink({ children, asButton, ...params }) {
  const setHovered = useContext(UpdateCustomPointerContext);
  const Tag = asButton ? "button" : Link;
  const id = useId();
  console.log("rerender" + " " + id);

  return (
    <Tag
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      {...params}
    >
      {children}
    </Tag>
  );
}

export default memo(UtilityLink);
