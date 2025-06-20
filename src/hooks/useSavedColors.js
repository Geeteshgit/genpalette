"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
      toast.success("Color Removed");
    } catch (err) {
      toast.error("Failed to Remove Color");
    }
  };

  useEffect(() => {
    getSavedColors();
  }, []);
  return { colors, removeColor };
};
