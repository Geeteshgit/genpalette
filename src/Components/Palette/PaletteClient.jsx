"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Loader from "../Loader";
import PaletteNavbar from "./PaletteNavbar";
import { useGeneratePalette } from "@/hooks/useGeneratePalette";
import SpacebarTrigger from "../SpacebarTrigger";
const PaletteColorsContainer = dynamic(
  () => import("./PaletteColorsContainer"),
  { loading: () => <Loader />, ssr: false }
);

const PaletteClient = ({ session }) => {
  const { isLiked, setIsLiked, handleGenerateNewPalette } =
    useGeneratePalette();
  const [showShades, setShowShades] = useState(false);

  return (
    <main className="flex-1">
      <SpacebarTrigger onSpacebarPress={handleGenerateNewPalette} />
      <PaletteNavbar
        onGenerateClick={handleGenerateNewPalette}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        session={session}
      />
      <PaletteColorsContainer
        showShades={showShades}
        setShowShades={setShowShades}
        session={session}
      />
    </main>
  );
};

export default PaletteClient;
