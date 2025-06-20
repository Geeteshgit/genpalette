"use client";
import React from "react";
import { useSelector } from "react-redux";

const ShapeVisualizerTwo = () => {
  const palette = useSelector((state) => state.palette.palette);

  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
      className="relative w-full h-72 sm:h-96 aspect-square overflow-hidden bg-white rounded-lg"
    >
      {/* Triangle in top-left corner */}
      <div
        className="absolute w-full h-full"
        style={{
          backgroundColor: palette[0],
          clipPath: "polygon(0 0, 0% 100%, 100% 0%)",
        }}
      />

      {/* Diagonal rectangle over the hypotenuse */}
      <div
        className="absolute w-[140%] h-16"
        style={{
          top: "42%",
          left: "-20%",
          backgroundColor: palette[1],
          transform: "rotate(-75deg)",
          transformOrigin: "center",
        }}
      />

      {/* Rotated square (diamond shape) */}
      <div
        className="absolute w-42 h-42"
        style={{
          top: "10%",
          left: "70%",
          backgroundColor: palette[2],
          transform: "rotate(45deg)",
        }}
      />

      {/* Semi-circle bottom right */}
      <div
        className="absolute w-1/2 h-1/2"
        style={{
          bottom: 0,
          right: 0,
          backgroundColor: palette[3],
          borderTopLeftRadius: "100%",
        }}
      />

      {/* Extra blob shape for artistic balance */}
      <div
        className="absolute w-36 h-36"
        style={{
          top: "60%",
          left: "5%",
          backgroundColor: palette[4],
          borderRadius: "60% 40% 30% 70% / 50% 60% 40% 60%",
        }}
      />
    </div>
  );
};

export default ShapeVisualizerTwo;
