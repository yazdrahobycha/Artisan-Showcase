"use client";
import React, { createContext, useState } from "react";

export const CustomPointerContext = createContext();
export const UpdateCustomPointerContext = createContext();

function CustomPointerProvider({ children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <UpdateCustomPointerContext.Provider value={setHovered}>
      <CustomPointerContext.Provider value={hovered}>
        {children}
      </CustomPointerContext.Provider>
    </UpdateCustomPointerContext.Provider>
  );
}
export default CustomPointerProvider;
