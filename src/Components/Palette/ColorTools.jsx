import { getBestContrastColor } from "@/lib/getTextColor";
import React from "react";
import CopyColorBtn from "./CopyColorBtn";
import SaveColorBtn from "./SaveColorBtn";
import ShowShadesBtn from "./ShowShadesBtn";
import ColorPickerBtn from "./ColorPickerBtn";

const ColorTools = ({ color, idx, session }) => {
  const textColor = getBestContrastColor(color);

  return (
    <div className="flex lg:flex-col items-center gap-4">
      <ColorPickerBtn color={color} textColor={textColor} idx={idx} />
      <CopyColorBtn color={color} textColor={textColor} />
      <SaveColorBtn color={color} textColor={textColor} session={session} />
      <ShowShadesBtn color={color} textColor={textColor} idx={idx} />
    </div>
  );
};

export default ColorTools;
