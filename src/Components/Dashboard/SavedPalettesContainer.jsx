"use client";
import React from "react";
import Loader from "../Loader";
import SavedColorPalette from './SavedColorPalette';
import SavedPalettesFallback from "./SavedPalettesFallback";
import { useSavedPalettes } from "@/hooks/useSavedPalettes";

const SavedPalettesContainer = () => {
  const { palettes, removePalette } = useSavedPalettes();

  if (!palettes) return <Loader />;

  return (
    <>
      {palettes.length > 0 ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-10 sm:mb-15 lg:mb-20">
          {palettes.map((palette) => {
            return (
              <SavedColorPalette
                key={palette._id}
                palette={palette}
                palettes={palettes}
                removePalette={removePalette}
              />
            );
          })}
        </div>
      ) : (
        <SavedPalettesFallback />
      )}
    </>
  );
};

export default SavedPalettesContainer;
