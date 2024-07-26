"use client";
import React, { useContext } from "react";
import { CustomPointerContext } from "../CustomPointerProvider";

function CustomPointer() {
  const hovered = useContext(CustomPointerContext);
  console.log(hovered);
  return <div></div>;
}

export default CustomPointer;
