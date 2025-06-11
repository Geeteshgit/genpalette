import React from "react"

const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center py-30">
      <div className="flex space-x-2">
        <div className="w-5 h-5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-5 h-5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-5 h-5 bg-gray-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
