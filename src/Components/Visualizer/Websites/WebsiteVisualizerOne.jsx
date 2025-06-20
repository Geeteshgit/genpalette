"use client";
import React from "react";
import { useSelector } from "react-redux";

const WebsiteVisualizerOne = () => {
  const palette = useSelector((state) => state.palette.palette);

  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
      className="w-full min-h-[70vh] md:min-h-[80vh] rounded-lg overflow-hidden shadow-lg bg-white flex flex-col"
    >
      {/* Header */}
      <div
        className="w-full h-14 flex items-center justify-between px-6"
        style={{ backgroundColor: palette[0] }}
      >
        <div className="text-white font-semibold text-lg">GenPalette</div>
        <div className="space-x-2 flex">
          {palette.slice(1, 4).map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <div
          className="w-full md:w-[20%] h-28 md:h-full p-4 text-sm text-white"
          style={{ backgroundColor: palette[1] }}
        >
          <ul className="flex flex-col items-center gap-6 font-medium">
            <li>Dashboard</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </div>

        {/* Content Area */}
        <div
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4"
          style={{ backgroundColor: palette[4] }}
        >
          {/* Bar Chart */}
          <div className="bg-white/30 rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-base mb-4">Monthly Visitors</h4>
            <div className="flex items-end justify-center gap-3 h-36">
              {[60, 80, 50, 70, 40].map((height, index) => {
                return (
                  <div key={index} className="h-full flex flex-col justify-end items-center px-5">
                    <div
                      className="w-6 rounded-md transition-all"
                      style={{
                        height: `${height}%`,
                        backgroundColor: palette[index],
                      }}
                    />
                    <span className="text-xs mt-2 font-medium text-gray-700">
                      M{index + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white/30 rounded-lg p-4 shadow-sm flex flex-col items-center justify-center">
            <h4 className="font-semibold text-base mb-4">User Segments</h4>
            <div className="relative w-36 h-36 rounded-full">
              <div
                className="absolute w-full h-full rounded-full"
                style={{
                  background: `conic-gradient(${palette[3]} 0% 35%, ${palette[2]} 35% 65%, ${palette[1]} 65% 100%)`,
                }}
              />
            </div>
          </div>

          {/* Summary Card */}
          <div className="col-span-1 md:col-span-2 bg-white/30 rounded-lg p-5 shadow-sm">
            <h4 className="font-semibold text-base mb-2">Project Summary</h4>
            <p className="text-sm text-gray-800 leading-relaxed">
              This layout gives a clean visual preview of your selected palette.
              Each component (header, sidebar, charts) utilizes a unique color,
              demonstrating how your theme might look in a real dashboard. You
              can extend this mock into a fully functional layout with chart
              libraries and live data.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="w-full h-12 text-center flex items-center justify-center text-white text-sm"
        style={{ backgroundColor: palette[3] }}
      >
        &copy; GenPalette Dashboard
      </div>
    </div>
  );
};

export default WebsiteVisualizerOne;
