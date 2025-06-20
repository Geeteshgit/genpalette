import React from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Information from "@/Components/Dashboard/Information";
import LogoutButton from "@/Components/LogoutButton";
import SavedColorsContainer from "@/Components/Dashboard/SavedColorsContainer";
import SavedPalettesContainer from "@/Components/Dashboard/SavedPalettesContainer";

export const metadata = {
  title: "Dashboard - GenPalette",
  description:
    "View and manage your saved color palettes in one place. Access your creative history, favorite combinations, and export for future use.",
};

const Dashboard = async () => {
  const session = await auth();
  if (!session) redirect("/sign-in");
  const user = session?.user;
  return (
    <main className="flex flex-col flex-1 gap-10 sm:gap-15 px-4 sm:px-12 lg:px-36 mt-5">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2">
        <Information name={user.name} email={user.email} />
        <LogoutButton />
      </div>
      <h2 className="font-anton text-center text-4xl sm:text-5xl lg:text-6xl font-bold">
        SAVED COLORS
      </h2>
      <SavedColorsContainer />
      <h2 className="font-anton text-center text-4xl sm:text-5xl lg:text-6xl font-bold">
        SAVED PALETTES
      </h2>
      <SavedPalettesContainer />
    </main>
  );
};

export default Dashboard;
