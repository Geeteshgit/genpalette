"use client";
import { getColorShades } from "@/lib/getShades";
import { setPalette } from "@/redux/features/paletteSlice";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { motion } from "motion/react";
import { useGetCurrentPalette } from "@/hooks/useGetCurrentPalette";

const ColorShades = ({ color, setShowShades, idx }) => {
  const dispatch = useDispatch();
  const shades = getColorShades(color);
  const { palette } = useGetCurrentPalette();
  const setShadeToColor = (color) => {
    const updatedPalette = [...palette];
    updatedPalette[idx] = color;
    dispatch(setPalette(updatedPalette));
    setShowShades(false);
  };
  return (
    <>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        }}
        className="absolute w-4/5 sm:w-2/3 lg:w-1/2 top-1/2 left-1/2 -translate-1/2 justify-center items-center bg-neutral-100 flex rounded-md overflow-hidden z-[9999]"
      >
        <div className="w-full">
          <div className="flex justify-between items-center p-2 pl-4 border-b border-gray-500">
            <span className="text-xl font-semibold opacity-60">
              Select A Shade
            </span>
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
                className="cursor-pointer hover:scale-y-115 text-center sm:py-1 lg:py-[2px]"
              >
                <span className="font-roboto text-xs text-white/75">
                  {shade.slice(1).toUpperCase()}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default ColorShades;
