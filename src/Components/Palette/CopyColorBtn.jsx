"use client"
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";

const CopyColorBtn = ({ color, textColor }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color.toUpperCase());
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <button
      onClick={handleCopy}
      style={{ color: textColor }}
      className="text-xl sm:text-2xl p-2 hover:bg-black/10 active:scale-95 rounded-md cursor-pointer transition-all duration-200"
    >
      {isCopied ? <FaCheck /> : <MdContentCopy />}
    </button>
  );
};

export default CopyColorBtn;
