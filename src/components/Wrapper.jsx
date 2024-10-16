"use client";
import React from "react";
import { useSelector } from "react-redux";

const Wrapper = ({ children }) => {
  const currentTheme = useSelector((store) => store.themes.theme);
  console.log(currentTheme);

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${
        currentTheme === "darkmode"
          ? "bg-slate-800 text-black" // Example for dark mode
          : currentTheme === "bajen"
          ? "bg-green-500 text-black" // Example for bajen theme
          : "bg-slate-400 text-black" // Default for light mode
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
