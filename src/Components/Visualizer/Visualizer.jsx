"use client";
import React, { useState } from "react";
import VisualizerHeader from "./VisualizerHeader";
import VisualizerTabs from "./VisualizerTabs";
import WebsiteVisualizer from "./WebsiteVisualizer";
import ShapesVisualizer from "./ShapesVisualizer";
import SpacebarTrigger from "../SpacebarTrigger";
import { useGeneratePalette } from "@/hooks/useGeneratePalette";

const Visualizer = ({ closeVisualizer }) => {
  const [isSelected, setIsSelected] = useState("shapes");
  const { handleGenerateNewPalette } = useGeneratePalette();
  return (
    <>
      <SpacebarTrigger onSpacebarPress={handleGenerateNewPalette} />
      <div className="fixed inset-0 bg-[#FAFAFA] z-[99999] overflow-auto">
        <VisualizerHeader closeVisualizer={closeVisualizer} />
        <div className="px-4 sm:px-12 lg:px-36 py-5 sm:py-10 lg:py-15">
          <h2 className="font-anton text-center text-4xl sm:text-5xl lg:text-6xl font-bold">
            Visualize Colors
          </h2>
          <VisualizerTabs
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
          <p className="hidden lg:flex opacity-50 font-semibold mb-2">
            Press spacebar to generate new color palette!
          </p>
          {isSelected === "website" && <WebsiteVisualizer />}
          {isSelected === "shapes" && <ShapesVisualizer />}
        </div>
      </div>
    </>
  );
};

export default Visualizer;
