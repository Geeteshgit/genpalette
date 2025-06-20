"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export const useCopyColor = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyColor = async (color) => {
    try {
      await navigator.clipboard.writeText(color.toUpperCase());
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      toast.success("Color Copied");
    } catch (err) {
      toast.error("Failed to Copy");
    }
  };
  return { isCopied, copyColor };
};
