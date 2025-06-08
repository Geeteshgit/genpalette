import React from "react";
import FeatureCard from "./FeatureCard";
import { IoIosColorPalette, IoIosTimer } from "react-icons/io";
import { HiMiniComputerDesktop } from "react-icons/hi2";

const features = [
  {
    title: "Design Faster",
    icon: <IoIosTimer />,
    description:
      "No more wasting hours trying out different color combinations. Let AI generate palettes instantly so you can decide and design faster.",
  },
  {
    title: "See The Colors In Effect",
    icon: <HiMiniComputerDesktop />,
    description:
      "Picking colors from a static palette is tough. GenPalette shows your colors in a realistic website layout—see them in action before you commit.",
  },
  {
    title: "Explore Endless Palettes",
    icon: <IoIosColorPalette />,
    description:
      "Discover a wide range of AI-generated color palettes on the Explore page. Get inspired, find the perfect fit, and make it yours.",
  },
];

const Features = () => {
  return (
    <section className="text-center mb-15 sm:mb-20 lg:mb-25">
      <h2 className="text-3xl sm:text-5xl font-semibold lg:text-6xl my-15 sm:my-20 lg:my-25">
        Why Choose <span className="font-klee text-blue-500">GenPalette?</span>
      </h2>
      <div className="grid lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => {
          return (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Features;
