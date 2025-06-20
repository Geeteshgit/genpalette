"use client";
import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import dynamic from "next/dynamic";
import { useVisualizer } from "@/hooks/useVisualizer";
import { useGetCurrentPalette } from "@/hooks/useGetCurrentPalette";
const Visualizer = dynamic(() => import("../Visualizer/Visualizer"));

const VisualizePaletteBtn = () => {
  const { visualizer, openVisualizer, closeVisualizer } = useVisualizer();
  const { palette } = useGetCurrentPalette();
  if (visualizer) return <Visualizer closeVisualizer={closeVisualizer} />;

  return (
    <button
      onClick={() => openVisualizer(palette)}
      className="p-2 hover:bg-neutral-200 rounded-md cursor-pointer"
    >
      <MdOutlineRemoveRedEye />
    </button>
  );
};

export default VisualizePaletteBtn;
