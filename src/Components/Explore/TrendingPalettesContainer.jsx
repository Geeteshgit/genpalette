"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";
import TrendingPalette from "./TrendingPalette";

const TrendingPalettesContainer = () => {
  const [palettes, setPalettes] = useState(null);
  useEffect(() => {
    const getTrendingPalettes = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/palettes`
        );
        setPalettes(response.data.palettes);
      } catch (err) {
        console.error(err.message);
      }
    };
    getTrendingPalettes();
  }, []);

  if (!palettes) return <Loader />;

  return (
    <>
      {palettes.length > 0 ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {palettes.map((palette, idx) => {
            return <TrendingPalette key={idx} palette={palette} />;
          })}
        </div>
      ) : (
        <h2 className="text-center text-2xl sm:text-3xl opacity-50">
          No Saved Colors Yet!
        </h2>
      )}
    </>
  );
};

export default TrendingPalettesContainer;
