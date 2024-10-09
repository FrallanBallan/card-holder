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
          "relative text-center h-[97vh] w-full max-w-sm bg-slate-400 p-6 rounded-lg shadow-2xl flex flex-col justify-between"
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
