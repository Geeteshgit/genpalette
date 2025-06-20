"use client";
import React from "react";
import { getBestContrastColor } from "@/lib/getTextColor";
import SinglePaletteColor from "../SinglePaletteColor";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useVisualizer } from "@/hooks/useVisualizer";
import dynamic from "next/dynamic";
import { useOpenPalette } from "@/hooks/useOpenPalette";
const Visualizer = dynamic(() => import("../Visualizer/Visualizer"));

const SavedColorPalette = ({ palette, removePalette }) => {
  
  const { visualizer, openVisualizer, closeVisualizer } = useVisualizer();
  const { openPalette } = useOpenPalette();

  if (visualizer) return <Visualizer closeVisualizer={closeVisualizer} />;

  return (
    <div className="border border-gray-400 rounded-xl overflow-hidden">
      <div className="w-full flex">
        {palette.colors.map((color, idx) => {
          const textColor = getBestContrastColor(color);
          return (
            <SinglePaletteColor key={idx} color={color} textColor={textColor} />
          );
        })}
      </div>
      <div className="flex justify-between items-center gap-2 p-2 text-sm lg:text-base text-center border-t border-gray-400 flex-wrap">
        <button
          onClick={() => removePalette(palette._id)}
          className="px-4 py-1 bg-red-400 rounded-md text-white cursor-pointer hover:scale-102 transition duration-300"
        >
          Remove
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => openPalette(palette.colors)}
            className="w-full cursor-pointer px-4 py-1 border border-gray-300 hover:border-blue-500 hover:scale-102 rounded-md text-blue-500 transition duration-300"
          >
            Palette
          </button>
          <button
            onClick={() => openVisualizer(palette.colors)}
            className="w-full flex items-center justify-center gap-1 cursor-pointer px-3 py-1 border border-transparent bg-blue-500 rounded-md text-white hover:bg-blue-600 hover:scale-102 transition duration-300"
          >
            Visualize <MdOutlineRemoveRedEye />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedColorPalette;
