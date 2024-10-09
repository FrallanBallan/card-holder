import React from "react";

const Card = () => {
  return (
    <>
      <div className="w-full max-w-sm h-[150px] bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <i className="text-2xl">⚔️</i>
          <h5 className="text-lg font-semibold">Handelsbanken</h5>
        </div>

        <div className="my-4 text-center text-xl tracking-widest">
          <p className="text-start">1234 5678 1234 5678</p>
        </div>

        <div className="flex items-center justify-between">
          <h5 className="text-base font-medium">John Doe</h5>
          <p className="text-sm">Valid Thru: 09/27</p>
        </div>
      </div>
    </>
  );
};

export default Card;
