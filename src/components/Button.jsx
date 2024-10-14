import React from "react";

const Button = ({ text }) => {
  return (
    <button
      className={
        "w-full bg-slate-400 hover:bg-slate-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded  "
      }
    >
      {text}
    </button>
  );
};

export default Button;
