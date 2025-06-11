import { getBestContrastColor } from "@/lib/getTextColor";
import React from "react";
import Loader from "../Loader";
import { useGetPalette } from "@/hooks/useGetPalette";
import ColorTools from "./ColorTools";

const PaletteColorsContainer = ({ session }) => {
  const { palette } = useGetPalette();

  return (
    <div className="flex flex-col h-[80vh] lg:flex-row flex-1">
      {palette.length === 0 ? (
        <Loader />
      ) : (
        palette.map((color, idx) => {
          const textColor = getBestContrastColor(color);
          return (
            <div
              key={idx}
              style={{ backgroundColor: color }}
              className="h-1/5 lg:h-full w-full flex flex-col items-center justify-between sm:gap-8 lg:gap-16 py-5 sm:py-10 lg:py-20 group"
            >
              <span
                style={{ color: textColor }}
                className="font-roboto text-3xl sm:text-4xl font-semibold"
              >
                {color.slice(1).toUpperCase()}
              </span>
              <div className="lg:opacity-0 group-hover:opacity-100">
                <ColorTools color={color} session={session} idx={idx} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default PaletteColorsContainer;
