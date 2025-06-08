import React from "react";

const steps = [
  {
    step: "1.",
    title: "Describe Your Vibe",
    description:
      "Tell the AI what you're going for—vibrant summer tones, dark cyberpunk theme, or pastel tech startup—in a simple prompt.",
  },
  {
    step: "2.",
    title: "Generate Your Palette",
    description:
      "With a single click, GenPalette uses AI to create a stunning 5-color palette based on your input.",
  },
  {
    step: "3.",
    title: "Preview in Real-Time",
    description:
      "Instantly see your palette applied to a live website layout so you know exactly how it looks in context.",
  },
  {
    step: "4.",
    title: "Explore, Refine & Save",
    description:
      "Browse other palettes, tweak your favorites, and save the ones that fit your brand best.",
  },
];

const HowToUse = () => {
  return (
    <section className="text-center mb-15 sm:mb-20 lg:mb-25">
      <h2 className="text-3xl sm:text-5xl font-semibold lg:text-6xl my-15 sm:my-20 lg:my-25">
        How Does <span className="font-klee text-blue-500">GenPalette</span> Work?
      </h2>
      <div
        className="grid sm:grid-cols-2 gap-6"
      >
        {steps.map((step, idx) => {
          return (
            <div
              key={idx}
              style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
              className="flex flex-col gap-4 p-10 bg-neutral-100"
            >
              <div className="flex justify-center items-end gap-2">
                <span className="text-4xl font-extrabold text-blue-500">{step.step}</span>
                <h3 className="text-2xl">{step.title}</h3>
              </div>
              <p className="sm:text-lg opacity-75">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowToUse;
