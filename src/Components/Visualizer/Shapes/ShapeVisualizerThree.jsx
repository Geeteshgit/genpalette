"use client";
import React from "react";
import { useSelector } from "react-redux";

const ShapeVisualizerThree = () => {
  const palette = useSelector((state) => state.palette.palette);

  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
      className="relative w-full h-72 sm:h-96 aspect-square overflow-hidden bg-white rounded-lg"
    >
      {/* Large rectangle top-left */}
      <div
        className="absolute"
        style={{
          top: "2%",
          left: "2%",
          width: "48%",
          height: "45%",
          backgroundColor: palette[0],
          borderRadius: "8px",
        }}
      />

      {/* Tall ellipse right side (now a rounded rectangle instead) */}
      <div
        className="absolute"
        style={{
          top: "2%",
          right: "2%",
          width: "45%",
          height: "75%",
          backgroundColor: palette[1],
          borderRadius: "12px",
        }}
      />

      {/* Rotated rectangle center-bottom */}
      <div
        className="absolute"
        style={{
          bottom: "0%",
          left: "0%",
          width: "100%",
          height: "20%",
          backgroundColor: palette[2],
          borderRadius: "8px",
        }}
      />

      {/* Semi-circle in bottom-left (still a curved shape) */}
      <div
        className="absolute"
        style={{
          bottom: "22%",
          left: "30%",
          width: "20%",
          height: "20%",
          backgroundColor: palette[3],
          borderTopLeftRadius: "100px",
          borderTopRightRadius: "100px",
        }}
      />

      {/* Diamond overlapping center */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "0%",
          width: "28%",
          height: "28%",
          backgroundColor: palette[4],
          borderRadius: "6px",
        }}
      />
    </div>
  );
};

export default ShapeVisualizerThree;
