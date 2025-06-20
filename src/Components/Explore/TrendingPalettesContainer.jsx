"use client";
import React from "react";
import Loader from "../Loader";
import TrendingPalette from "./TrendingPalette";
import { useGetTrendingPalettes } from "@/hooks/useGetTrendingPalettes";

const TrendingPalettesContainer = () => {
  const { palettes } = useGetTrendingPalettes();
  if (!palettes) return <Loader />;

  return (
    <>
      {palettes.length > 0 ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {palettes.map((palette, idx) => {
            return <TrendingPalette key={idx} palette={palette} />;
          })}
        </div>
      ) : (
        <h2 className="text-center text-2xl sm:text-3xl opacity-50">
          No Palettes Yet!
        </h2>
      )}
    </>
  );
};

export default TrendingPalettesContainer;
