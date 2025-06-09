"use client";
import React from "react";
import { logout } from "../lib/actions/authActions";
import { RiLogoutBoxLine } from "react-icons/ri";

const LogoutButton = () => {
  return (
    <button
      onClick={() => logout()}
      className="flex items-center justify-center gap-2 text-center cursor-pointer px-4 sm:px-6 py-1.5 sm:py-2 border border-transparent bg-red-400 rounded-sm text-white hover:scale-102 transition duration-300"
    >
      Logout <RiLogoutBoxLine />
    </button>
  );
};

export default LogoutButton;
