import { useState } from "react";

export const useCopyColor = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyColor = async (color) => {
    try {
      await navigator.clipboard.writeText(color.toUpperCase());
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err.message);
    }
  };
  return { isCopied, copyColor };
};
