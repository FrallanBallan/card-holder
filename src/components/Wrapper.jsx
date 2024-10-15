import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      className={
        "min-h-screen bg-slate-700 flex flex-col justify-center items-center"
      }
    >
      {children}
    </div>
  );
};

export default Wrapper;
