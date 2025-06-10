import React from "react";
import Color from "./Color";
import { FaEye } from "react-icons/fa6";
import { getBestContrastColor } from "@/lib/getTextColor";

const ColorPalette = ({ palette }) => {
  return (
    <div className="border rounded-xl overflow-hidden">
      <div className="w-full flex">
        {palette.map((color, idx) => {
          const textColor = getBestContrastColor(color);
          return <Color key={idx} color={color} textColor={textColor} />;
        })}
      </div>
      <div className="flex justify-between items-center gap-2 p-2 text-sm sm:text-base text-center border-t flex-wrap">
        <button className="px-4 py-1 bg-red-400 rounded-md text-white cursor-pointer hover:scale-102 transition duration-300">
          Remove
        </button>
        <div className="flex items-center gap-2">
          <button className="cursor-pointer px-4 py-1 border border-gray-300 hover:border-blue-500 hover:scale-102 rounded-md text-blue-500 transition duration-300">
            Palette
          </button>
          <button className="flex items-center justify-center gap-2 cursor-pointer px-4 py-1 border border-transparent bg-blue-500 rounded-md text-white hover:bg-blue-600 hover:scale-102 transition duration-300">
            Visualize <FaEye />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
