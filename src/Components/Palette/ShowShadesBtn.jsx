"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { LuTable } from "react-icons/lu";
import Loader from "../Loader";
const ColorShades = dynamic(() => import("./ColorShades"), {
  loading: () => <Loader />,
});
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
      {showShades && (
        <>
          <div
            onClick={() => setShowShades(false)}
            className="fixed inset-0 bg-black/30"
          />
          <ColorShades color={color} setShowShades={setShowShades} idx={idx} />
        </>
      )}
    </>
  );
};

export default ShowShadesBtn;
