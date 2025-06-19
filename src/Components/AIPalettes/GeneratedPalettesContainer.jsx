import React from "react";
import SingleGeneratedPalette from "./SingleGeneratedPalette";

const GeneratedPalettesContainer = ({ palettes }) => {
  return (
    <>
      {palettes ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
          {palettes.map((palette, idx) => {
            return <SingleGeneratedPalette key={idx} palette={palette} />;
          })}
        </div>
      ) : (
        null
      )}
    </>
  );
};

export default GeneratedPalettesContainer;
