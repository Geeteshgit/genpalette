import Link from "next/link";
import React from "react";

const SavedColorsFallback = () => {
  return (
    <div className="flex flex-col items-center text-center mb-5 lg:mb-10">
      <h2 className="text-2xl sm:text-3xl opacity-50">No Saved Colors Yet!</h2>
      <div className="flex flex-col gap-2 mt-10">
        <Link
          href="/palette"
          className="sm:text-lg cursor-pointer px-6 py-2 border border-transparent bg-blue-500 rounded-sm text-white hover:bg-blue-600 hover:scale-102 transition duration-300"
        >
          Generate New Colors
        </Link>
        <Link
          href="/explore"
          className="sm:text-lg cursor-pointer px-6 py-2 border border-gray-300 hover:border-blue-500 hover:scale-102 rounded-sm text-blue-500 transition duration-300"
        >
          Explore AI Made Palettes
        </Link>
      </div>
    </div>
  );
};

export default SavedColorsFallback;
