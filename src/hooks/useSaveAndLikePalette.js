"use client";

import axios from "axios";
import toast from "react-hot-toast";

export const useSaveAndLikePalette = () => {
  const saveAndLikePalette = async (id) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/palettes/${id}`
      );
      toast.success("Palette Saved");
    } catch (err) {
      toast.error("Failed to Save Palette");
    }
  };
  return { saveAndLikePalette };
};
