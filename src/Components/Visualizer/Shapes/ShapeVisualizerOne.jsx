"use client";
import React from "react";
import { useSelector } from "react-redux";

const ShapeVisualizerOne = () => {
  const palette = useSelector((state) => state.palette.palette);

  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
      className="relative w-full h-72 sm:h-96 aspect-square overflow-hidden bg-white rounded-lg"
    >
      {/* Top Left Quarter - Triangle */}
      <div
        className="absolute w-1/2 h-1/2"
        style={{
          top: 0,
          left: 0,
          backgroundColor: palette[0],
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />

      {/* Top Right Quarter - Semi Circle */}
      <div
        className="absolute w-1/2 h-1/2"
        style={{
          top: 0,
          right: 0,
          backgroundColor: palette[1],
          borderBottomLeftRadius: "100%",
        }}
      />

      {/* Bottom Left - Rectangle with Skew */}
      <div
        className="absolute w-1/2 h-1/2"
        style={{
          bottom: 0,
          left: 0,
          backgroundColor: palette[2],
          transform: "skewY(-10deg)",
        }}
      />

      {/* Bottom Right - Blob */}
      <div
        className="absolute w-1/2 h-1/2"
        style={{
          bottom: 0,
          right: 0,
          backgroundColor: palette[3],
          borderRadius: "40% 60% 50% 50% / 50% 50% 60% 40%",
        }}
      />

      {/* Center Circle Overlay */}
      <div
        className="absolute w-1/2 h-1/4 rounded-full"
        style={{
          top: "25%",
          left: "25%",
          backgroundColor: palette[4],
        }}
      />
    </div>
  );
};

export default ShapeVisualizerOne;
