import React from "react";

const ProgressBar = ({ progress = 40 }) => {
  return (
    <div className="bg-gray-400 w-full mt-4 h-4 rounded-full">
      <div
        className="h-4 text-[12px] text-white bg-primary rounded-full"
        style={{ width: `${progress}%` }}
      >
        {`${Number(progress).toFixed(0)}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
