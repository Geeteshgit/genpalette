"use client";
import React from "react";
import { MdAutorenew } from "react-icons/md";

const GeneratePaletteBtn = ({ onGenerateClick }) => {
  return (
    <button
      onClick={onGenerateClick}
      className="p-2 hover:bg-neutral-200 rounded-md cursor-pointer active:scale-95 group"
    >
      <MdAutorenew className="group-hover:rotate-45 transition-all duration-300" />
    </button>
  );
};

export default GeneratePaletteBtn;
