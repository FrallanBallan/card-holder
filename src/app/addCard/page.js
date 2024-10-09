import CardForm from "@/components/CardForm";
import React from "react";

const addCard = () => {
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
        <CardForm />
      </main>
    </div>
  );
};

export default addCard;
