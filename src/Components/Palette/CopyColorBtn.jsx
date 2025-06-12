"use client"
import { useCopyColor } from "@/hooks/useCopyColor";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";

const CopyColorBtn = ({ color, textColor }) => {
  const { isCopied, copyColor } = useCopyColor(); 
  return (
    <button
      onClick={() => copyColor(color)}
      style={{ color: textColor }}
      className="text-xl sm:text-2xl p-2 hover:bg-black/10 active:scale-95 rounded-md cursor-pointer transition-all duration-200"
    >
      {isCopied ? <FaCheck /> : <MdContentCopy />}
    </button>
  );
};

export default CopyColorBtn;
