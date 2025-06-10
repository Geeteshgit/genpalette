"use client";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa6";
import { githubLogin, googleLogin } from "@/lib/actions/authActions";

const SignInForm = () => {
  return (
    <div className="absolute w-full h-full bg-black/25 backdrop-blur-xs flex justify-center items-center px-4 sm:px-12 lg:px-36">
      <div
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
        className="bg-white flex flex-col items-center text-center gap-5 px-6 py-8 rounded-2xl"
      >
        <h2 className="font-anton text-5xl font-semibold">Hello!</h2>
        <p className="opacity-75">
          Continue Using GenPalette with Gmail or GitHub
        </p>
        <div className="w-full flex flex-col items-center gap-3 text-lg font-semibold">
          <button
            onClick={() => googleLogin()}
            className="w-full flex justify-center items-center gap-4 bg-neutral-200 px-6 py-2 rounded-md cursor-pointer hover:bg-neutral-300 hover:scale-102 transition-all duration-300"
          >
            <FaGoogle />
            Continue with Google
          </button>
          <button
            onClick={() => githubLogin()}
            className="w-full flex justify-center items-center gap-4 bg-neutral-200 px-6 py-2 rounded-md cursor-pointer hover:bg-neutral-300 hover:scale-102 transition-all duration-300"
          >
            <AiFillGithub />
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;