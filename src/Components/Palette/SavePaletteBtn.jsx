"use client";
import { useGetPalette } from "@/hooks/useGetPalette";
import axios from "axios";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const SavePaletteBtn = ({ isLiked, setIsLiked, session }) => {
  const [paletteId, setPaletteId] = useState(null);
  const { palette } = useGetPalette();

  const savePalette = async () => {
    if (!session) {
      redirect("/sign-in");
    }
    try {
      if (!isLiked) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/palette`,
          palette
        );
        setIsLiked(true);
        setPaletteId(response.data.savedPalette._id);
      } else {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/palette/${paletteId}`
        );
        setIsLiked(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <button
      onClick={savePalette}
      className="p-2 hover:bg-neutral-200 rounded-md cursor-pointer group"
    >
      {isLiked ? (
        <FaHeart className="text-red-500 group-active:scale-115 transition-all duration-200" />
      ) : (
        <FaRegHeart className="group-active:scale-115 transition-all duration-200" />
      )}
    </button>
  );
};

export default SavePaletteBtn;
