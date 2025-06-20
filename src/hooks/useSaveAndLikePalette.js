"use client";

import axios from "axios";

export const useSaveAndLikePalette = () => {
  const saveAndLikePalette = async (id) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/palettes/${id}`
      );
    } catch (err) {
      console.error(err.message);
    }
  };
  return { saveAndLikePalette };
};
