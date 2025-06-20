import TrendingPalettesContainer from "@/Components/Explore/TrendingPalettesContainer";
import { auth } from "@/lib/auth";
import React from "react";

export const metadata = {
  title: "Explore AI Made Palettes - GenPalette",
  description:
    "Explore hundreds of AI-generated color palettes tailored for designers and developers. Instantly preview and pick the perfect vibe for your project.",
};  

const Explore = async () => {
  const session = await auth();
  return (
    <main className="flex-1 px-4 sm:px-12 lg:px-36 py-5 sm:py-10 lg:py-15">
      <h2 className="font-anton text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
        Explore Trending AI Generated Palettes
      </h2>
      <p className="font-klee text-center lg:text-lg font-semibold mt-5 sm:mt-8 mb-10 sm:mb-16">
        Explore unique palettes crafted by AI - fuel your imagination and start
        building!
      </p>
      <TrendingPalettesContainer session={session} />
    </main>
  );
};

export default Explore;
