"use client";
import React, { useState } from "react";

const SinglePaletteColor = ({ color, textColor }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyColor = async () => {
    try {
      navigator.clipboard.writeText(color.toUpperCase());
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div
      onClick={() => copyColor()}
      style={{ backgroundColor: color }}
      className="flex justify-center items-center text-center w-1/5 h-14 sm:h-18 lg:h-28 hover:w-1/2 p-1 cursor-pointer transition-all duration-300 group"
    >
      <span
        style={{ color: textColor }}
        className="font-roboto text-xs sm:text-base lg:text-xl sm:font-semibold lg:opacity-0 group-hover:opacity-100 transition duration-300"
      >
        {isCopied ? "COPIED!" : color.slice(1).toUpperCase()}
      </span>
    </div>
  );
};

export default SinglePaletteColor;
