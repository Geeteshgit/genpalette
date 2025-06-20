"use client";

import { setPalette } from "@/redux/features/paletteSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const useVisualizer = () => {
  const [visualizer, setVisualizer] = useState(false);
  const dispatch = useDispatch();

  const openVisualizer = (colors) => {
    dispatch(setPalette(colors));
    setVisualizer(true);
  };

  const closeVisualizer = () => {
    setVisualizer(false);
  }

  return { visualizer, openVisualizer, closeVisualizer };
};
