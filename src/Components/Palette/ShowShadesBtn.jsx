"use client";
import React, { useState } from "react";
import { LuTable } from "react-icons/lu";
import ColorShades from "./ColorShades";

const ShowShadesBtn = ({ color, textColor, idx }) => {
  const [showShades, setShowShades] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowShades(true)}
        style={{ color: textColor }}
        className="text-xl sm:text-2xl p-2 hover:bg-black/10 rounded-md cursor-pointer transition-all duration-200"
      >
        <LuTable />
      </button>
      {showShades ? <ColorShades color={color} setShowShades={setShowShades} idx={idx} /> : null}
    </>
  );
};

export default ShowShadesBtn;
