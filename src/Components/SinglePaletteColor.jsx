"use client";
import { useCopyColor } from "@/hooks/useCopyColor";
import React from "react";

const SinglePaletteColor = ({ color, textColor }) => {
  const { isCopied, copyColor } = useCopyColor();
  return (
    <div
      onClick={() => copyColor(color)}
      style={{ backgroundColor: color }}
      className="flex justify-center items-center text-center w-1/5 h-18 lg:h-24 hover:w-full p-1 cursor-pointer transition-all duration-300 group"
    >
      <span
        style={{ color: textColor }}
        className="font-roboto text-xs lg:text-sm xl:text-base sm:font-semibold opacity-0 group-hover:opacity-100 transition duration-300"
      >
        {isCopied ? "COPIED!" : color.slice(1).toUpperCase()}
      </span>
    </div>
  );
};

export default SinglePaletteColor;
