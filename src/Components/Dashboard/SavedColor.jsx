"use client";
import React from "react";
import axios from "axios";
import { useCopyColor } from "@/hooks/useCopyColor";

const SavedColor = ({ color, colors, textColor, setColors }) => {
  const { isCopied, copyColor } = useCopyColor();
  const removePalette = async (hex) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/color/${encodeURIComponent(
          hex
        )}`
      );
      setColors(colors.filter((color) => color !== hex));
    } catch (err) {
      console.error(err.response.message);
    }
  };
  return (
    <div className="border rounded-xl overflow-hidden">
      <div
        onClick={() => copyColor(color)}
        style={{ backgroundColor: color }}
        className="w-full flex px-2 pt-2 pb-8 sm:pb-14 cursor-pointer"
      >
        <span
          style={{ color: textColor }}
          className="font-roboto text-sm sm:text-lg font-semibold"
        >
          {isCopied ? "COPIED!" : color.slice(1).toUpperCase()}
        </span>
      </div>
      <div className="flex justify-between items-center gap-2 p-2 text-sm sm:text-base text-center border-t flex-wrap">
        <button
          onClick={() => removePalette(color)}
          className="w-full py-1 bg-red-400 rounded-md text-white cursor-pointer hover:scale-102 transition duration-300"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SavedColor;
