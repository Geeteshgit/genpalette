"use client";
import { getBestContrastColor } from "@/lib/getTextColor";
import React from "react";
import { MdOutlineRemoveRedEye, MdSaveAlt } from "react-icons/md";
import { IoColorPalette } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setPalette } from "@/redux/features/paletteSlice";
import { redirect } from "next/navigation";
import axios from "axios";
import SinglePaletteColor from "../SinglePaletteColor";

const SingleGeneratedPalette = ({ palette }) => {
  const dispatch = useDispatch();
  const openPalette = () => {
    dispatch(setPalette(palette.colors));
    redirect("/palette");
  };

  const saveAndLikePalette = async (id) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/palettes/${id}`
      );
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex rounded-xl border border-gray-300 overflow-hidden">
        {palette.colors.map((color, idx) => {
          const textColor = getBestContrastColor(color);
          return (
            <SinglePaletteColor key={idx} color={color} textColor={textColor} />
          );
        })}
      </div>
      <div className="w-full flex justify-end items-center gap-2 px-2 text-gray-600">
        <div className="text-xl flex items-center gap-3">
          <MdOutlineRemoveRedEye className="hover:scale-110 hover:text-black active:scale-95 transition-all duration-200 cursor-pointer" />
          <IoColorPalette
            onClick={openPalette}
            className="hover:scale-110 hover:text-black active:scale-95 transition-all duration-200 cursor-pointer"
          />
          <MdSaveAlt
            onClick={() => saveAndLikePalette(palette._id)}
            className="hover:scale-110 hover:text-black active:scale-95 transition-all duration-200 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleGeneratedPalette;
