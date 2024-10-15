import Button from "@/components/Button";
import React from "react";

const settings = () => {
  return (
    <div
      className={
        "h-screen bg-slate-700 flex flex-col justify-center items-center"
      }
    >
      <main
        className={
          "relative text-center h-[80vh] max-h-[894px] w-[90vw] max-w-[400px] bg-white bg-opacity-30 p-8 rounded-2xl shadow-lg flex flex-col justify-between border border-white border-opacity-20 backdrop-blur-md transition-all duration-100 ease-in-out overflow-hidden"
        }
      >
        <div>
          <h3>Theme</h3>
          <Button text={"Save Changes"} />
          <Button text={"Delete all cards"} />
        </div>
      </main>
    </div>
  );
};

export default settings;
