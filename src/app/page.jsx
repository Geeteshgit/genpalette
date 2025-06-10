import CallToAction from "@/Components/Homepage/CallToAction";
import ComputerPalette from "@/Components/Homepage/ComputerPalette";
import Features from "@/Components/Homepage/Features";
import HomepageHeading from "@/Components/Homepage/HomepageHeading";
import HomepagePalette from "@/Components/Homepage/HomepagePalette";
import HowToUse from "@/Components/Homepage/HowToUse";
import React from "react";

const Home = () => {
  return (
    <>
      <main className="px-4 sm:px-12 lg:px-36 mt-5 sm:mt-10 lg:mt-15">
        <div className="flex flex-col sm:flex-row items-center gap-12">
          <HomepageHeading />
          <HomepagePalette />
        </div>
        <CallToAction />
        <Features />
        <ComputerPalette />
        <HowToUse />
      </main>
    </>
  );
};

export default Home;
