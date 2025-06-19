"use client";
import React, { useState } from "react";
import VisualizerHeader from "./VisualizerHeader";
import VisualizerTabs from "./VisualizerTabs";
import WebsiteVisualizer from "./WebsiteVisualizer";
import ShapesVisualizer from "./ShapesVisualizer";

const Visualizer = ({ toggleVisualizer }) => {
  const [isSelected, setIsSelected] = useState("website");
  return (
    <div className="fixed inset-0 bg-[#FAFAFA] z-[99999] overflow-auto">
      <VisualizerHeader toggleVisualizer={toggleVisualizer} />
      <div className="px-4 sm:px-12 lg:px-36">
        <VisualizerTabs isSelected={isSelected} setIsSelected={setIsSelected} />
        {isSelected === "website" && <WebsiteVisualizer />}
        {isSelected === "shapes" && <ShapesVisualizer />}
      </div>
    </div>
  );
};

export default Visualizer;
