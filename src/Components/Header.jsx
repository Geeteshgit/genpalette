import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { auth } from "../lib/auth";
import Image from "next/image";

const Header = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <header
      className="sticky top-0 w-full bg-[#FAFAFA] flex justify-between items-center px-4 sm:px-12 lg:px-36 py-3 z-[999]"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <Link href="/">
        <Logo />
      </Link>
      {user ? (
        <Link
          href="/dashboard"
          className="relative h-10 w-10 border border-blue-300 rounded-full overflow-hidden"
        >
          <Image src={user.image} alt="user-avatar" fill />
        </Link>
      ) : (
        <div className="flex items-center gap-1">
          <Link
            href="/sign-in"
            className="cursor-pointer px-4 py-1.5 border border-gray-300 hover:border-blue-500 hover:scale-102 rounded-sm text-blue-500 transition duration-300"
          >
            Sign In
          </Link>
          <Link
            href="/sign-in"
            className="cursor-pointer px-4 py-1.5 border border-transparent bg-blue-500 rounded-sm text-white hover:bg-blue-600 hover:scale-102 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
