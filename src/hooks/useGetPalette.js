"use client";

import { generateColorPalette } from "@/lib/getNewPalette";
import { setPalette } from "@/redux/features/paletteSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useGetPalette = () => {
  const dispatch = useDispatch();
  const palette = useSelector((state) => state.palette.palette);

  useEffect(() => {
    if (palette.length === 0) {
      const firstPalette = generateColorPalette();
      dispatch(setPalette(firstPalette));
    }
  }, []);
  return { palette };
};
