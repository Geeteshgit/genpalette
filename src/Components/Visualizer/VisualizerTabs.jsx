import React from "react";

const VisualizerTabs = ({ isSelected, setIsSelected }) => {
  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
      className="w-full flex justify-center items-center gap-1 p-0.5 my-4 lg:my-6 rounded-md bg-blue-100 border border-blue-300"
    >
      <div
        onClick={() => setIsSelected("shapes")}
        className={`w-full text-center rounded-sm p-1 sm:p-1.5 cursor-pointer ${
          isSelected === "shapes" ? "bg-blue-500 text-white" : null
        }`}
      >
        Shapes
      </div>
      <div
        onClick={() => setIsSelected("website")}
        className={`w-full text-center rounded-sm p-1 sm:p-1.5 cursor-pointer ${
          isSelected === "website" ? "bg-blue-500 text-white" : null
        }`}
      >
        Website
      </div>
    </div>
  );
};

export default VisualizerTabs;
