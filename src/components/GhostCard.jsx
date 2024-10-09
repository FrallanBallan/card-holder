import React from "react";

const GhostCard = () => {
  return (
    <>
      <div className="w-full max-w-sm h-[150px] bg-gradient-to-r from-gray-300 to-gray-500 rounded-lg shadow-lg flex flex-col justify-between p-6 opacity-70">
        <div className="flex items-center justify-between">
          <i className="text-2xl opacity-50">⚔️</i>{" "}
          <h5 className="text-lg font-semibold opacity-50">Placeholder</h5>{" "}
        </div>

        <div className="my-4 text-center text-xl tracking-widest opacity-50">
          <p>XXXX XXXX XXXX XXXX</p>
        </div>

        <div className="flex items-center justify-between">
          <h5 className="text-base font-medium opacity-50">John Doe</h5>{" "}
          <p className="text-sm opacity-50">Valid Thru: --/--</p>{" "}
        </div>
      </div>
    </>
  );
};

export default GhostCard;
