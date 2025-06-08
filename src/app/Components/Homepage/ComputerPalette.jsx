"use client";
import { explorePaletteColors } from "@/app/hooks/homepagePaletteSet";
import Link from "next/link";
import React from "react";

const ComputerPalette = () => {
  return (
    <div className="flex flex-col items-center">
      <Link
        href="/explore"
        className="relative w-full sm:w-3/4 lg:w-1/2 h-60 sm:h-72 lg:h-80 border-10 rounded-lg overflow-hidden"
      >
        <span className="text-center hidden opacity-0 hover:opacity-100 h-full w-full bg-white/20 backdrop-blur-md lg:flex justify-center items-center absolute text-xl font-klee hover:text-3xl transition-all duration-300">
          Explore AI Generated Palettes
        </span>
        <div className="w-full grid grid-cols-4 gap-4 p-2">
          {explorePaletteColors.map((palette, idx) => {
            return (
              <div
                key={idx}
                className="flex w-full h-8 sm:h-10 rounded-sm overflow-hidden"
              >
                {palette.map((color, idx) => {
                  return (
                    <div
                      key={idx}
                      style={{ backgroundColor: color }}
                      className="flex w-full"
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </Link>
      <div className="w-24 sm:w-30 lg:w-36 h-16 sm:h-20 lg:h-24 bg-gray-300" />
      <div className="w-42 sm:w-48 lg:w-58 h-3 bg-gray-400 rounded-b-3xl" />
    </div>
  );
};

export default ComputerPalette;
