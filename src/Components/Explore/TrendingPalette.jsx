"use client";
import { getBestContrastColor } from "@/lib/getTextColor";
import React, { useState } from "react";
import SinglePaletteColor from "../SinglePaletteColor";
import { MdOutlineRemoveRedEye, MdSaveAlt } from "react-icons/md";
import { IoColorPalette } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { useVisualizer } from "@/hooks/useVisualizer";
import dynamic from "next/dynamic";
import { useOpenPalette } from "@/hooks/useOpenPalette";
import { useSaveAndLikePalette } from "@/hooks/useSaveAndLikePalette";
import { redirect } from "next/navigation";
const Visualizer = dynamic(() => import("../Visualizer/Visualizer"));

const TrendingPalette = ({ palette, session }) => {
  const [likes, setLikes] = useState(palette.likes);
  const { visualizer, openVisualizer, closeVisualizer } = useVisualizer();
  const { openPalette } = useOpenPalette();
  const { saveAndLikePalette } = useSaveAndLikePalette();

  if (visualizer) return <Visualizer closeVisualizer={closeVisualizer} />;

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
      <div className="w-full flex justify-between items-center gap-2 px-2 text-gray-600">
        <span className="font-roboto flex items-center gap-1">
          <FaRegHeart />
          {likes}
        </span>
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
            onClick={() => {
              if (!session) {
                redirect("/sign-in");
              } else {
                saveAndLikePalette(palette._id);
                setLikes(likes + 1);
              }
            }}
            className="hover:scale-110 hover:text-black active:scale-95 transition-all duration-200 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingPalette;
