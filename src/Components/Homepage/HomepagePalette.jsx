"use client";
import React, { useEffect, useState } from "react";
import { paletteColors } from "../../data/paletteSet";
import Link from "next/link";

const HomepagePalette = () => {
  const palettes = paletteColors;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % palettes.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link
      href="/generate"
      className="flex flex-col items-center w-full sm:w-2/5"
    >
      <div className="relative w-4/5 flex border-10 rounded-t-lg sm:h-full min-h-44 lg:min-h-52">
        <span
          className="text-center hidden opacity-0 hover:opacity-100 h-full w-full bg-white/20 backdrop-blur-md lg:flex justify-center items-center absolute text-xl font-klee hover:text-3xl transition-all duration-300"
        >
          Generate A Palette
        </span>
        <div
          style={{ backgroundColor: palettes[index][0] }}
          className="w-full"
        />
        <div
          style={{ backgroundColor: palettes[index][1] }}
          className="w-full"
        />
        <div
          style={{ backgroundColor: palettes[index][2] }}
          className="w-full"
        />
        <div
          style={{ backgroundColor: palettes[index][3] }}
          className="w-full"
        />
        <div
          style={{ backgroundColor: palettes[index][4] }}
          className="w-full"
        />
      </div>
      <div className="w-11/12 h-2 bg-gray-400 rounded-b-3xl" />
    </Link>
  );
};

export default HomepagePalette;
