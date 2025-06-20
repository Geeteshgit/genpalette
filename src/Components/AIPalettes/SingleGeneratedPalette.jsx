"use client";
import { getBestContrastColor } from "@/lib/getTextColor";
import React from "react";
import { MdOutlineRemoveRedEye, MdSaveAlt } from "react-icons/md";
import { IoColorPalette } from "react-icons/io5";
import SinglePaletteColor from "../SinglePaletteColor";
import { useVisualizer } from "@/hooks/useVisualizer";
import dynamic from "next/dynamic";
import { useOpenPalette } from "@/hooks/useOpenPalette";
import { useSaveAndLikePalette } from "@/hooks/useSaveAndLikePalette";
const Visualizer = dynamic(() => import("../Visualizer/Visualizer"));

const SingleGeneratedPalette = ({ palette }) => {
  const { visualizer, openVisualizer, closeVisualizer } = useVisualizer();
  const { openPalette } = useOpenPalette();
  const { saveAndLikePalette } = useSaveAndLikePalette();

  if (visualizer) return <Visualizer closeVisualizer={closeVisualizer} />

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex rounded-xl border border-gray-300 overflow-hidden">
        {palette.colors.map((color, idx) => {
          const textColor = getBestContrastColor(color);
          return (
            <SinglePaletteColor key={idx} color={color} textColor={textColor} />
          );
        })}
      </div>
      <div className="w-full flex justify-end items-center gap-2 px-2 text-gray-600">
        <div className="text-xl flex items-center gap-3">
          <MdOutlineRemoveRedEye
            onClick={() => openVisualizer(palette.colors)}
            className="hover:scale-110 hover:text-black active:scale-95 transition-all duration-200 cursor-pointer"
          />
          <IoColorPalette
            onClick={() => openPalette(palette.colors)}
            className="hover:scale-110 hover:text-black active:scale-95 transition-all duration-200 cursor-pointer"
          />
          <MdSaveAlt
            onClick={() => saveAndLikePalette(palette._id)}
            className="hover:scale-110 hover:text-black active:scale-95 transition-all duration-200 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleGeneratedPalette;
