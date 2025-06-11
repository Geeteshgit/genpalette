import React from "react";
import GeneratePaletteBtn from "./GeneratePaletteBtn";
import VisualizePaletteBtn from "./VisualizePaletteBtn";
import SavePaletteBtn from "./SavePaletteBtn";

const PaletteNavbar = ({ isLiked, setIsLiked, onGenerateClick, session }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-2 py-2 border-b border-gray-300 px-4 sm:px-12 lg:px-36">
      <p className="hidden lg:flex opacity-50 font-semibold">
        Press spacebar to generate new color palette!
      </p>
      <div className="flex items-center">
        <div className="text-xl px-3 ">
          <GeneratePaletteBtn onGenerateClick={onGenerateClick} />
        </div>
        <div className="flex items-center gap-2 text-xl px-3 border-x border-gray-400">
          <VisualizePaletteBtn />
          <SavePaletteBtn isLiked={isLiked} setIsLiked={setIsLiked} session={session} />
        </div>
      </div>
    </div>
  );
};

export default PaletteNavbar;