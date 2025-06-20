"use client";
import React from "react";
import { IoClose } from "react-icons/io5";

const VisualizerHeader = ({ closeVisualizer }) => {
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-36 py-4 border-b border-gray-300"
    >
      <h2 className="text-2xl text-blue-500 font-semibold">
        Palette Visualizer
      </h2>
      <span
        onClick={closeVisualizer}
        className="text-xl sm:text-2xl p-1 hover:bg-red-400/75 active:scale-95 rounded-md cursor-pointer transition-all duration-200"
      >
        <IoClose />
      </span>
    </div>
  );
};

export default VisualizerHeader;
