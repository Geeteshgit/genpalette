"use client";
import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const VisualizePaletteBtn = () => {
  return (
    <button className="p-2 hover:bg-neutral-200 rounded-md cursor-pointer">
      <MdOutlineRemoveRedEye />
    </button>
  );
};

export default VisualizePaletteBtn;
