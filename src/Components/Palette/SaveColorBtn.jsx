"use client";
import axios from "axios";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const SaveColorBtn = ({ color, textColor, session }) => {
  const [isSaved, setIsSaved] = useState(false);
  const handleSave = async () => {
    if (!session) {
      redirect("/sign-in");
    }
    try {
      if (!isSaved) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/color`,
          { color }
        );
        setIsSaved(true);
      } else {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/color/${encodeURIComponent(color)}`
        );
        setIsSaved(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <button
      onClick={handleSave}
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
