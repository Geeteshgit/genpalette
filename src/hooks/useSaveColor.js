"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export const useSaveColor = () => {
  const [isSaved, setIsSaved] = useState(false);
  const saveColor = async (color) => {
    try {
      if (!isSaved) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/color`,
          { color }
        );
        setIsSaved(true);
        setTimeout(() => {
          setIsSaved(false);
        }, 2000);
        toast.success("Color Saved");
      } else {
        toast.error("Color Already Saved");
      }
    } catch (err) {
      toast.error("Failed to Save or Already Saved");
    }
  };
  return { isSaved, saveColor }
};
