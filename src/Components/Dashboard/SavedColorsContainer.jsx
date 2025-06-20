"use client";
import React from "react";
import Link from "next/link";
import Loader from "../Loader";
import SavedColor from "./SavedColor";
import { getBestContrastColor } from "@/lib/getTextColor";
import { useSavedColors } from "@/hooks/useSavedColors";
import SavedColorsFallback from "./SavedColorsFallback";

const SavedColorsContainer = () => {
  const { colors, removeColor } = useSavedColors();

  if (!colors) return <Loader />;
  
  return (
    <>
      {colors.length > 0 ? (
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-5 sm:mb-10 lg:mb-15">
          {colors.map((color, idx) => {
            const textColor = getBestContrastColor(color);
            return (
              <SavedColor
                key={idx}
                color={color}
                textColor={textColor}
                removeColor={removeColor}
              />
            );
          })}
        </div>
      ) : (
        <SavedColorsFallback />
      )}
    </>
  );
};

export default SavedColorsContainer;
