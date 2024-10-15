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
          "relative text-center min-h-[844px] max-h-[894px] w-[390px] bg-white bg-opacity-30 p-8 rounded-2xl shadow-lg flex flex-col justify-between border border-white border-opacity-20 backdrop-blur-md transition-all duration-100 ease-in-out overflow-hidden"
        }
      >
        <Cog />
        <CardForm />
      </main>
    </div>
  );
};

export default addCard;
