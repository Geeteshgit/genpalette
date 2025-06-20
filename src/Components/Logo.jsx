import Image from "next/image";
import React from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";

const Logo = () => {
  return (
    <div className="font-klee flex gap-1">
      <div className="relative h-10 w-10">
        <Image src='/logo.png' alt='logo' fill/>
      </div>
      <h1 className="font-bold text-2xl sm:text-3xl text-blue-500">GenPalette</h1>
    </div>
  );
};

export default Logo;
