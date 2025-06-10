import React from "react";

const FeatureCard = (props) => {
  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
      className="flex flex-col gap-4 items-center bg-neutral-100 p-6 rounded-lg"
    >
      <span className="text-4xl lg:text-5xl">{props.icon}</span>
      <h3 className="text-xl lg:text-2xl font-semibold">{props.title}</h3>
      <p className="opacity-75">{props.description}</p>
    </div>
  );
};

export default FeatureCard;
