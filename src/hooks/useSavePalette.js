"use client";

import axios from "axios";
import toast from "react-hot-toast";

export const useSavePalette = () => {
  const savePalette = async (palette, setPaletteId, setIsLiked) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/palette`,
        palette
      );
      setIsLiked(true);
      setPaletteId(response.data.savedPalette._id);
      toast.success("Palette Saved");
    } catch (err) {
      toast.error("Failed to Save Palette");
    }
  };

  const removePalette = async (paletteId, setIsLiked) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/palette/${paletteId}`
      );
      setIsLiked(false);
      toast.success("Palette Unsaved");
    } catch (err) {
      toast.error("Failed to Remove Palette");
    }
  };

  return { savePalette, removePalette };
};
