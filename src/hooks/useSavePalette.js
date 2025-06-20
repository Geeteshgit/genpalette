"use client";

import axios from "axios";

export const useSavePalette = () => {
  const savePalette = async (palette, setPaletteId, setIsLiked) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/palette`,
        palette
      );
      setIsLiked(true);
      setPaletteId(response.data.savedPalette._id);
    } catch (err) {
      console.error(err.message);
    }
  };

  const removePalette = async (paletteId, setIsLiked) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/palette/${paletteId}`
      );
      setIsLiked(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  return { savePalette, removePalette };
};
