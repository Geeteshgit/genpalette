import { getBestContrastColor } from "@/lib/getTextColor";
import React from "react";
import CopyColorBtn from "./CopyColorBtn";
import SaveColorBtn from "./SaveColorBtn";
import ShowShadesBtn from "./ShowShadesBtn";

const ColorTools = ({
  color,
  showShades,
  setShowShades,
  session,
  idx = { idx },
}) => {
  const textColor = getBestContrastColor(color);

  return (
    <div className="flex lg:flex-col items-center gap-4">
      <CopyColorBtn color={color} textColor={textColor} />
      <SaveColorBtn color={color} textColor={textColor} session={session} />
      <ShowShadesBtn
        color={color}
        showShades={showShades}
        setShowShades={setShowShades}
        textColor={textColor}
        idx={idx}
      />
    </div>
  );
};

export default ColorTools;
