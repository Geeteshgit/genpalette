import Link from "next/link";
import React from "react";

const NavLink = ({ link, text }) => {
  return (
    <Link
      href={link}
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
      className="text-blue-500 border border-gray-300 px-4 py-2 rounded-full hover:scale-102 hover:border-blue-500 transition-all duration-300"
    >
       {text}
    </Link>
  );
};

export default NavLink;
