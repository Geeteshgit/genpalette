import Link from "next/link";
import React from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";

const CallToAction = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-between gap-10 mt-15 sm:mt-20 lg:mt-25">
      <div className="w-full sm:w-1/2 flex sm:flex-col gap-2 items-start">
        <Link
          href="/generate"
          className="flex items-center justify-center gap-2 w-3/4 text-center sm:text-lg cursor-pointer py-2.5 border border-transparent bg-blue-500 rounded-sm text-white hover:bg-blue-600 hover:scale-102 transition duration-300"
        >
          Generate Palettes
          <FaWandMagicSparkles />
        </Link>
        <Link
          href="/explore"
          className="flex items-center justify-center gap-2 w-3/4 text-center sm:text-lg cursor-pointer py-2.5 border border-gray-300 hover:border-blue-500 hover:scale-102 rounded-sm text-blue-500 transition duration-300"
        >
          Explore Palettes
          <IoIosColorPalette />
        </Link>
      </div>
      <p className="w-full text-center sm:w-1/2 sm:text-lg lg:text-xl opacity-75">
        Let AI intelligently generate beautiful and cohesive color palettes for
        your designs, and instantly visualize how they look together in
        real-time. Completely free to use!
      </p>
    </section>
  );
};

export default CallToAction;
