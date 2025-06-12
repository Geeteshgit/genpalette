"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { IoColorPalette } from "react-icons/io5";
import Loader from "../Loader";
const ColorPickerModal = dynamic(() => import("./ColorPickerModal"), {
  loading: () => <Loader />,
});

const ColorPickerBtn = ({ color, textColor, idx }) => {
  const [showPicker, setShowPicker] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowPicker(true)}
        style={{ color: textColor }}
        className="text-xl sm:text-2xl p-2 hover:bg-black/10 active:scale-95 rounded-md cursor-pointer transition-all duration-200"
      >
        <IoColorPalette />
      </button>
      {showPicker && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setShowPicker(false)}
          />
          <ColorPickerModal
            currentColor={color}
            idx={idx}
            setShowPicker={setShowPicker}
          />
        </>
      )}
    </>
  );
};

export default ColorPickerBtn;
