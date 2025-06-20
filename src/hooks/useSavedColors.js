"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export const useSavedColors = () => {
  const [colors, setColors] = useState(null);

  const getSavedColors = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/color`
      );
      setColors(response.data.savedColors);
    } catch (err) {
      console.error(err.message);
    }
  };

  const removeColor = async (hex) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/color/${encodeURIComponent(
          hex
        )}`
      );
      setColors((prev) => prev.filter((color) => color !== hex));
    } catch (err) {
      console.error(err.response.message);
    }
  };

  useEffect(() => {
    getSavedColors();
  }, []);
  return { colors, removeColor };
};
