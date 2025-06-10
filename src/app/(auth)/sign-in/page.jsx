import SignInBackground from "@/Components/SignInBackground";
import SignInForm from "@/Components/SignInForm";
import React from "react";

const SignIn = () => {
  return (
    <main className="relative flex-1 flex flex-col">
      <SignInBackground />
      <SignInForm  />
    </main>
  );
};

export default SignIn;