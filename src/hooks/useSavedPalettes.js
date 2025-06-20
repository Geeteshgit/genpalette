"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export const useSavedPalettes = () => {
  const [palettes, setPalettes] = useState(null);

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

  const removePalette = async (id) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/palette/${id}`
      );
      setPalettes((prev) => prev.filter((palette) => palette._id !== id));
    } catch (err) {
      console.error(err.response.message);
    }
  };

  useEffect(() => {
    getSavedPalettes();
  }, []);

  return { palettes, removePalette };
};
