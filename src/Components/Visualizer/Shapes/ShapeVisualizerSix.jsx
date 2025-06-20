"use client";
import React from "react";
import { useSelector } from "react-redux";

const ShapeVisualizerSix = () => {
  const palette = useSelector((state) => state.palette.palette);

  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
      className="relative w-full h-72 sm:h-96 aspect-square overflow-hidden bg-white rounded-lg"
    >
      {/* Left-side vertical band */}
      <div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: "22%",      // increased width
          height: "100%",
          backgroundColor: palette[0],
          borderRadius: "6px",
        }}
      />

      {/* Top-left ellipse (fills remaining top space beside the band) */}
      <div
        className="absolute"
        style={{
          top: 0,
          left: "23%",
          width: "65%",      // increased width
          height: "75%",     // increased height
          backgroundColor: palette[1],
          borderBottomRightRadius: "100%",
        }}
      />

      {/* Bottom-right triangle */}
      <div
        className="absolute"
        style={{
          bottom: 0,
          right: 0,
          width: "60%",      // increased width
          height: "60%",     // increased height
          backgroundColor: palette[2],
          clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
        }}
      />

      {/* Center rotated square */}
      <div
        className="absolute"
        style={{
          top: "2%",        // shifted a bit higher
          right: "2%",       // shifted a bit left
          width: "40%",      // increased size
          height: "40%",     // increased size
          backgroundColor: palette[3],
          borderRadius: "8px",
        }}
      />

      {/* Organic blob adjusted closer to top band */}
      <div
        className="absolute"
        style={{
          bottom: "2%",         // moved slightly up
          left: "25%",        // moved slightly left
          width: "24%",      // bigger blob
          height: "24%",     // bigger blob
          backgroundColor: palette[4],
          borderRadius: "50% 40% 60% 40%",
        }}
      />
    </div>
  );
};

export default ShapeVisualizerSix;
