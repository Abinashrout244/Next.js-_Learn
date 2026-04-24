import React from "react";

const footer = () => {
  return (
    <div className="text-center p-5 bg-gray-300 text-sm font-sans font-semibold text-black">
      © {new Date().getFullYear()} Your Company. All rights reserved.
    </div>
  );
};

export default footer;
