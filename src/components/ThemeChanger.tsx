"use client";
import { useTheme } from "next-themes";
import React, { useState } from "react";

import { PiSunDimFill } from "react-icons/pi";
import { BiSolidMoon } from "react-icons/bi";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <button
        className={`flex items-center justify-center w-6 h-6 text-dark  rounded-full transform 
          `}
        onClick={toggleTheme}
      >
        {theme === "light" ? <PiSunDimFill size={16} /> : <BiSolidMoon />}
      </button>
    </div>
  );
};

export default ThemeChanger;
