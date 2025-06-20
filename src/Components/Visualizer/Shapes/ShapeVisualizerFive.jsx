  "use client";
  import React from "react";
  import { useSelector } from "react-redux";

  const ShapeVisualizerFive = () => {
    const palette = useSelector((state) => state.palette.palette);

    return (
      <div
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        }}
        className="relative w-full h-72 sm:h-96 aspect-square overflow-hidden bg-white rounded-lg"
      >
        {/* Left skewed rectangle */}
        <div
          className="absolute w-1/2 h-full"
          style={{
            left: 0,
            top: 0,
            backgroundColor: palette[0],
            transform: "skewX(-15deg)",
          }}
        />

        {/* Right-side circle */}
        <div
          className="absolute w-1/2 h-1/2 rounded-full"
          style={{
            top: "25%",
            right: 0,
            backgroundColor: palette[1],
          }}
        />

        {/* Bottom horizontal band */}
        <div
          className="absolute w-full h-[18%]"
          style={{
            bottom: 0,
            backgroundColor: palette[2],
            borderRadius: "8px",
          }}
        />

        {/* Top-right triangle */}
        <div
          className="absolute w-[45%] h-[45%]"
          style={{
            top: 0,
            right: 0,
            backgroundColor: palette[3],
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }}
        />

        {/* Central rotated square */}
        <div
          className="absolute w-[28%] h-[28%]"
          style={{
            top: "38%",
            left: "36%",
            backgroundColor: palette[4],
            transform: "rotate(45deg)",
            borderRadius: "6px",
          }}
        />
      </div>
    );
  };

  export default ShapeVisualizerFive;
