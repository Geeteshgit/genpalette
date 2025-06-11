"use client";
import { getColorShades } from "@/lib/getShades";
import { setPalette } from "@/redux/features/paletteSlice";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const ColorShades = ({ color, setShowShades, idx }) => {
  const dispatch = useDispatch();
  const shades = getColorShades(color);
  const currentPalette = useSelector((state) => state.palette.palette);
  const setShadeToColor = (color) => {
    const updatedPalette = [...currentPalette];
    updatedPalette[idx] = color;
    console.log(updatedPalette);
    dispatch(setPalette(updatedPalette));
    setShowShades(false);
  };
  return (
    <div
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'
      }}
      className="absolute w-4/5 sm:w-2/3 top-1/2 left-1/2 -translate-1/2 justify-center items-center bg-neutral-100 flex rounded-md overflow-hidden z-[9999]"
    >
      <div className="w-full">
        <div className="flex justify-between items-center p-2 pl-4 border-b border-gray-500">
            <span className="text-xl font-semibold opacity-60">Select A Shade</span>
          <span
            onClick={() => setShowShades(false)}
            className="text-2xl p-1 hover:bg-red-400/75 active:scale-95 rounded-md cursor-pointer transition-all duration-200"
          >
            <IoClose />
          </span>
        </div>
        {shades.map((shade, idx) => {
          return (
            <div
              key={idx}
              onClick={() => setShadeToColor(shade)}
              style={{ backgroundColor: shade }}
              className="cursor-pointer group text-centers"
            >
              <span className="font-roboto opacity-0">
                {shade.slice(1).toUpperCase()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorShades;
