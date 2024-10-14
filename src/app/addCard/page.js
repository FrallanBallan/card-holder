import Button from "@/components/Button";
import CardForm from "@/components/CardForm";
import Cog from "@/components/Cog";
import Link from "next/link";
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
          "relative text-center h-[97vh] w-full max-w-sm bg-white bg-opacity-30 p-8 rounded-2xl shadow-lg flex flex-col justify-between border border-white border-opacity-20 backdrop-blur-md transition-all duration-300 ease-in-out"
        }
      >
        <Cog />
        <CardForm />
      </main>
    </div>
  );
};

export default addCard;
