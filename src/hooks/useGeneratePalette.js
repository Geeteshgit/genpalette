"use client";
import { generateColorPalette } from "@/lib/getNewPalette";
import { setPalette } from "@/redux/features/paletteSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const useGeneratePalette = () => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const handleGenerateNewPalette = () => {
    const palette = generateColorPalette();
    dispatch(setPalette(palette));
    setIsLiked(false);
  };
  return { isLiked, setIsLiked, handleGenerateNewPalette };
};
