"use client";
import React, { useState } from "react";
import PromptInput from "./PromptInput";
import NavLink from "./NavLink";
import PromptSuggestions from "./PromptSuggestions";
import Loader from "../Loader";
import dynamic from "next/dynamic";
const GeneratedPalettesContainer = dynamic(
  () => import("./GeneratedPalettesContainer"),
  {
    loading: () => <Loader />,
  }
);

const GenerateAIPalettesContainer = ({ session }) => {
  const [palettes, setPalettes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  return (
    <div className="w-full flex flex-col gap-6">
      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        setPalettes={setPalettes}
        session={session}
        loading={loading}
        setLoading={setLoading}
      />
      <div className="flex flex-col sm:flex-row items-center self-center gap-4">
        <NavLink link="/palette" text="Generate Custom Palette" />
        <NavLink link="/explore" text="Explore AI Generated Palettes" />
      </div>
      {loading && <Loader />}
      {!palettes && !loading && <PromptSuggestions setPrompt={setPrompt} />}
      {palettes && !loading && (
        <GeneratedPalettesContainer palettes={palettes} />
      )}
    </div>
  );
};

export default GenerateAIPalettesContainer;
