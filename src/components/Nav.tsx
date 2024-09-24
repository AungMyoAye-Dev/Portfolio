"use client";
import React from "react";
import ThemeChanger from "./ThemeChanger";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-4 bg-opacity-95 sticky top-0 right-0 left-0 z-40 backdrop-blur-md">
      <div>
        <a
          href="/"
          className="hover:text-purple-400 hover:underline  hover:underline-offset-8"
        >
          <h1 className="text-2xl md:text-3xl font-serif font-bold">
            Aung Myo Aye{" "}
          </h1>
        </a>
      </div>
      <div className="flex items-center gap-8 text-xl ">
        <ThemeChanger />
        <a
          href="/"
          className="hover:text-purple-400 hover:underline  hover:underline-offset-8"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-purple-400 hover:underline  hover:underline-offset-8"
        >
          About
        </a>
        <a
          href="#eduction"
          className="hover:text-purple-400 hover:underline  hover:underline-offset-8"
        >
          Eduction
        </a>
        <a
          href="#contact"
          className="hover:text-purple-400 hover:underline  hover:underline-offset-8"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
