"use client";

import { useState } from "react";

export const useVisualizer = () => {
  const [visualizer, setVisualizer] = useState(false);
  const toggleVisualizer = () => {
    setVisualizer(!visualizer);
  };
  return { visualizer, toggleVisualizer };
};
