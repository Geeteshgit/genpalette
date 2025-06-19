import React from "react";

const VisualizerTabs = ({ isSelected, setIsSelected }) => {
  return (
    <div className="w-full flex justify-center items-center gap-1 p-0.5 my-2 sm:my-4 lg:my-8 rounded-md bg-blue-100">
      <div
        onClick={() => setIsSelected("website")}
        className={`w-full text-center rounded-sm p-1 cursor-pointer ${isSelected === 'website' ? 'bg-blue-500 text-white' : ''}`}
      >
        Website
      </div>
      <div
        onClick={() => setIsSelected("shapes")}
        className={`w-full text-center rounded-sm p-1 cursor-pointer ${isSelected === 'shapes' ? 'bg-blue-500 text-white' : ''}`}
      >
        Shapes
      </div>
    </div>
  );
};

export default VisualizerTabs;
