import PaletteClient from "@/Components/Palette/PaletteClient";
import { auth } from "@/lib/auth";
import React from "react";

const Palette = async () => {
  const session = await auth();
  return (
    <PaletteClient session={session} />    
  );
};

export default Palette;