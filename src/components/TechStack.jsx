import React from "react";

const TechStack = ({ stack }) => {
  return (
    <div className="w-10 flex  flex-col items-center ">
      <img src={`/assets/${stack}.png`} alt="" className="w-full" />
      <p className="mt-1 ">{stack}</p>
    </div>
  );
};

export default TechStack;
