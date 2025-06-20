"use client";
import { useSaveColor } from "@/hooks/useSaveColor";
import { redirect } from "next/navigation";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const SaveColorBtn = ({ color, textColor, session }) => {
  const { isSaved, saveColor } = useSaveColor();
  return (
    <button
      onClick={() => {
        if (!session) {
          redirect("/sign-in");
        } else {
          saveColor(color, session);
        }
      }}
      style={{ color: textColor }}
      className="text-xl sm:text-2xl p-2 hover:bg-black/10 rounded-md cursor-pointer transition-all duration-200"
    >
      {isSaved ? (
        <FaHeart className="active:scale-115 transition-all duration-200" />
      ) : (
        <FaRegHeart className="active:scale-115 transition-all duration-200" />
      )}
    </button>
  );
};

export default SaveColorBtn;
