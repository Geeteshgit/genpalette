"use client";
import React, { useState } from "react";
import PromptInput from "./PromptInput";
import GeneratedPalettesContainer from "./GeneratedPalettesContainer";
import NavLink from "./NavLink";

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
      <GeneratedPalettesContainer palettes={palettes} loading={loading} setPrompt={setPrompt} />
    </div>
  );
};

export default GenerateAIPalettesContainer;
