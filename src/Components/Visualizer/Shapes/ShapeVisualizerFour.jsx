"use client";
import React from "react";
import { useSelector } from "react-redux";

const ShapeVisualizerFour = () => {
  const palette = useSelector((state) => state.palette.palette);

  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
      className="relative w-full h-72 sm:h-96 aspect-square overflow-hidden bg-white rounded-lg"
    >
      {/* Top-right triangle */}
      <div
        className="absolute"
        style={{
          top: "0%",
          right: "0%",
          width: "75%",
          height: "75%",
          backgroundColor: palette[0],
          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
        }}
      />

      {/* Large rotated square (diamond) at center */}
      <div
        className="absolute"
        style={{
          bottom: "10%",
          right: "0%",
          width: "60%",
          height: "40%",
          backgroundColor: palette[1],
          transform: "rotate(32deg)",
          borderRadius: "6px",
        }}
      />

      {/* Curved blob-like shape bottom-left */}
      <div
        className="absolute"
        style={{
          bottom: "0%",
          left: "5%",
          width: "40%",
          height: "60%",
          backgroundColor: palette[2],
          borderRadius: "60% 40% 30% 70% / 50% 60% 40% 60%",
        }}
      />

      {/* Narrow vertical strip far-left */}
      <div
        className="absolute"
        style={{
          top: "0%",
          left: "2%",
          width: "6%",
          height: "100%",
          backgroundColor: palette[3],
          borderRadius: "4px",
        }}
      />

      {/* Semi-circle resting on hypotenuse */}
      <div
        className="absolute"
        style={{
          top: "18%",
          left: "12%",
          width: "50%",
          height: "50%",
          backgroundColor: palette[4],
          clipPath: "ellipse(50% 50% at 50% 100%)",
          transform: "rotate(-148deg)",
          borderRadius: "50% 50% 0 0",
        }}
      />
    </div>
  );
};

export default ShapeVisualizerFour;
