"use client";
import React from "react";
import { useSelector } from "react-redux";

const WebsiteVisualizerTwo = () => {
  const palette = useSelector((state) => state.palette.palette);

  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
      className="w-full min-h-[70vh] md:min-h-[80vh] rounded-lg overflow-hidden shadow-lg bg-white flex flex-col"
    >
      {/* Header Navbar */}
      <div
        className="w-full h-14 px-6 flex items-center justify-between text-white text-sm md:text-base"
        style={{ backgroundColor: palette[0] }}
      >
        <div className="font-bold">GenPalette</div>
        <ul className="flex space-x-6">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hero Section */}
      <div
        className="w-full py-10 px-6 text-center text-white"
        style={{ backgroundColor: palette[0] }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Welcome to GenPalette
        </h1>
        <p className="text-base md:text-lg mb-5">
          Instantly visualize and test your color themes for any UI.
        </p>
        <button
          className="px-6 py-2 font-semibold rounded-md text-sm"
          style={{ backgroundColor: palette[1], color: "white" }}
        >
          Get Started
        </button>
      </div>

      {/* Features */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 text-gray-800 flex-1"
        style={{ backgroundColor: palette[4] }}
      >
        {[
          {
            title: "Dynamic Previews",
            desc: "See your palette applied instantly in live UI mockups.",
          },
          {
            title: "Smart Suggestions",
            desc: "AI-enhanced adjustments to improve color contrast and harmony.",
          },
          {
            title: "Export & Share",
            desc: "Download your themes or share links with your team or clients.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white/30 rounded-lg p-5 shadow-md"
            style={{ borderLeft: `4px solid ${palette[index + 1]}` }}
          >
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div
        className="px-6 py-10 text-center text-white"
        style={{ backgroundColor: palette[2] }}
      >
        <p className="text-lg italic max-w-2xl mx-auto">
          “GenPalette helped our team experiment with themes way faster and improved our design consistency.”
        </p>
        <p className="mt-4 text-sm font-medium">— A Happy Designer</p>
      </div>

      {/* Footer */}
      <div
        className="w-full h-12 text-center flex items-center justify-center text-white text-sm"
        style={{ backgroundColor: palette[3] }}
      >
        &copy; GenPalette Landing Page
      </div>
    </div>
  );
};

export default WebsiteVisualizerTwo;
