"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export const useGetTrendingPalettes = () => {
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

  return { palettes };
};
