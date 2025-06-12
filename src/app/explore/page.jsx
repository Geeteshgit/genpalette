import Loader from "@/Components/Loader";
import dynamic from "next/dynamic";
import React from "react";
const TrendingPalettesContainer = dynamic(
  () => import("@/Components/Explore/TrendingPalettesContainer"),
  {
    loading: () => <Loader />,
  }
);

export const metadata = {
  title: "Explore AI Made Palettes - GenPalette",
  description:
    "Explore hundreds of AI-generated color palettes tailored for designers and developers. Instantly preview and pick the perfect vibe for your project.",
};

const Explore = () => {
  return (
    <main className="flex-1 px-4 sm:px-12 lg:px-36 py-5 sm:py-10 lg:py-15">
      <h1 className="font-anton text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
        Explore Trending AI Generated Palettes
      </h1>
      <p className="font-klee text-center lg:text-lg font-semibold mt-5 sm:mt-8 mb-10 sm:mb-16">
        Explore unique palettes crafted by AI - fuel your imagination and start
        building!
      </p>
      <TrendingPalettesContainer />
    </main>
  );
};

export default Explore;
