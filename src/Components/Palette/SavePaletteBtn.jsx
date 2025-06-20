"use client";
import { useGetCurrentPalette } from "@/hooks/useGetCurrentPalette";
import { useSavePalette } from "@/hooks/useSavePalette";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const SavePaletteBtn = ({ isLiked, setIsLiked, session }) => {
  const [paletteId, setPaletteId] = useState(null);
  const { palette } = useGetCurrentPalette();
  const { savePalette, removePalette } = useSavePalette();

  return (
    <button
      onClick={() => {
        if(!session) redirect('/sign-in');
        else {
          if(!isLiked) {
            savePalette(palette, setPaletteId, setIsLiked);
          }
          else {
            removePalette(paletteId, setIsLiked);
          }
        }

      }}
      className="p-2 hover:bg-neutral-200 rounded-md cursor-pointer group"
    >
      {isLiked ? (
        <FaHeart className="text-red-500 group-active:scale-115 transition-all duration-200" />
      ) : (
        <FaRegHeart className="group-active:scale-115 transition-all duration-200" />
      )}
    </button>
  );
};

export default SavePaletteBtn;
