"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Loader from "../Loader";
import SavedColor from "./SavedColor";
import { getBestContrastColor } from "@/lib/getTextColor";

const SavedColorsContainer = () => {
  const [colors, setColors] = useState(null);
  useEffect(() => {
    const getSavedColors = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/color`
        );
        setColors(response.data.savedColors);
      } catch (err) {
        console.error(err.message);
      }
    };
    getSavedColors();
  }, []);

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
                colors={colors}
                textColor={textColor}
                setColors={setColors}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center text-center mb-5 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl opacity-50">
            No Saved Colors Yet!
          </h2>
          <div className="flex flex-col gap-2 mt-10">
            <Link
              href="/palette"
              className="sm:text-lg cursor-pointer px-6 py-2 border border-transparent bg-blue-500 rounded-sm text-white hover:bg-blue-600 hover:scale-102 transition duration-300"
            >
              Generate New Colors
            </Link>
            <Link
              href="/explore"
              className="sm:text-lg cursor-pointer px-6 py-2 border border-gray-300 hover:border-blue-500 hover:scale-102 rounded-sm text-blue-500 transition duration-300"
            >
              Explore AI Made Palettes
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SavedColorsContainer;
