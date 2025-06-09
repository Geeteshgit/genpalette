"use client";
import React, { useState } from "react";

const Color = ({ color, textColor }) => {
  const [text, setText] = useState(color);

  const copyColor = async () => {
    try {
      navigator.clipboard.writeText(color.toUpperCase());
      setText("Copied!");
      setTimeout(() => {
        setText(color);
      }, 2000);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div
      onClick={() => copyColor()}
      style={{ backgroundColor: text }}
      className="flex justify-center items-center text-center w-1/4 h-12 sm:h-18 lg:h-28 hover:w-1/2 p-1 cursor-pointer transition-all duration-300 group"
    >
      <span
        style={{ color: textColor }}
        className="text-xs sm:text-base lg:text-xl sm:font-semibold lg:opacity-0 group-hover:opacity-100 transition duration-300"
      >
        {text.toUpperCase()}
      </span>
    </div>
  );
};

export default Color;
