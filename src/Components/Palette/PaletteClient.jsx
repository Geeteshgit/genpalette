"use client";
import React from "react";
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
  const { isLiked, setIsLiked, handleGenerateNewPalette } = useGeneratePalette();

  return (
    <main className="flex-1">
      <SpacebarTrigger onSpacebarPress={handleGenerateNewPalette} />
      <PaletteNavbar
        onGenerateClick={handleGenerateNewPalette}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        session={session}
      />
      <PaletteColorsContainer session={session} />
    </main>
  );
};

export default PaletteClient;
