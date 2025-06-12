"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Loader from "../Loader";
import SavedColorPalette from './SavedColorPalette';

const SavedPalettesContainer = () => {
  const [palettes, setPalettes] = useState(null);
  useEffect(() => {
    const getSavedPalettes = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/palette`
        );
        setPalettes(response.data.palettes);
      } catch (err) {
        console.error(err.message);
      }
    };
    getSavedPalettes();
  }, []);

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
                setPalettes={setPalettes}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center text-center mb-10 sm:mb-15 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl opacity-50">
            No Saved Palettes Yet!
          </h2>
          <div className="flex flex-col gap-2 mt-10">
            <Link
              href="/generate"
              className="sm:text-lg cursor-pointer px-6 py-2 border border-transparent bg-blue-500 rounded-sm text-white hover:bg-blue-600 hover:scale-102 transition duration-300"
            >
              Generate A Palette
            </Link>
            <Link
              href="/explore"
              className="sm:text-lg cursor-pointer px-6 py-2 border border-gray-300 hover:border-blue-500 hover:scale-102 rounded-sm text-blue-500 transition duration-300"
            >
              Explore AI Made Palettes
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SavedPalettesContainer;
