"use client";

import { setPalette } from "@/redux/features/paletteSlice";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";

export const useOpenPalette = () => {
  const dispatch = useDispatch();
  const openPalette = (palette) => {
    dispatch(setPalette(palette));
    redirect("/palette");
  };
  return { openPalette };
};
