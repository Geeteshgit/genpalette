import { prompts } from "@/data/prompts";
import React from "react";

const PromptSuggestions = ({ setPrompt }) => {
  return (
    <div
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
      className="flex justify-center items-center flex-wrap gap-2 border border-gray-300 sm:mx-12 lg:mx-36 p-6 rounded-2xl"
    >
      {prompts.map((prompt, idx) => {
        return (
          <span
            key={idx}
            onClick={() => setPrompt(prompt)}
            className="border border-blue-500 rounded-full hover:scale-105 transition-all duration-300 px-3 py-1 cursor-pointer"
          >
            {prompt}
          </span>
        );
      })}
    </div>
  );
};

export default PromptSuggestions;
