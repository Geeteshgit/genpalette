"use client";

import axios from "axios";
import { useState } from "react";

export const useSaveColor = () => {
  const [isSaved, setIsSaved] = useState(false);
  const saveColor = async (color) => {
    try {
      if (!isSaved) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/color`,
          { color }
        );
        setIsSaved(true);
        setTimeout(() => {
          setIsSaved(false);
        }, 2000);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return { isSaved, saveColor }
};
