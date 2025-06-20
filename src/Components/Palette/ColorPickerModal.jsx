"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setPalette } from "@/redux/features/paletteSlice";
import { motion } from "motion/react";
import { useGetCurrentPalette } from "@/hooks/useGetCurrentPalette";

const ColorPickerModal = ({ currentColor, idx, setShowPicker }) => {
  const dispatch = useDispatch();
  const [newColor, setNewColor] = useState(currentColor);
  const { palette } = useGetCurrentPalette();

  const handleChange = (e) => {
    setNewColor(e.target.value.toUpperCase());
    const updated = [...palette];
    updated[idx] = newColor;
    dispatch(setPalette(updated));
  };

  const handleUpdate = () => {
    const updated = [...palette];
    updated[idx] = newColor;
    dispatch(setPalette(updated));
    setShowPicker(false);
  };

  return (
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
        className="absolute top-1/2 left-1/2 -translate-1/2 bg-white p-5 rounded-md z-50 w-[300px] sm:w-[400px] flex flex-col gap-2"
      >
        <div className="flex justify-end">
          <button
            onClick={() => setShowPicker(false)}
            className="text-2xl p-1 hover:bg-red-400/75 active:scale-95 rounded-md cursor-pointer transition-all duration-200"
          >
            <IoClose />
          </button>
        </div>

        <label className="font-semibold">Select Color:</label>
        <input
          type="color"
          value={newColor}
          onChange={handleChange}
          className="w-full h-12 cursor-pointer border-none"
        />

        <label className="font-semibold">Or Enter HEX:</label>
        <input
          type="text"
          value={newColor}
          onChange={handleChange}
          maxLength={7}
          className="w-full px-2 py-1 border rounded-md"
          placeholder="#FFFFFF"
        />

        <button
          onClick={handleUpdate}
          className="text-center cursor-pointer py-2 mt-2 border border-transparent bg-blue-500 rounded-sm text-white hover:bg-blue-600 hover:scale-102 transition duration-300"
        >
          Update Color
        </button>
      </motion.div>
  );
};

export default ColorPickerModal;
