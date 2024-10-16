import Button from "@/components/Button";
import CardForm from "@/components/CardForm";
import Cog from "@/components/Cog";
import HomeIcon from "@/components/HomeIcon";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

const addCard = () => {
  return (
    <Wrapper>
      <main
        className={
          "relative text-center h-[80vh] max-h-[894px] w-[90vw] max-w-[400px] bg-white bg-opacity-30 p-8 rounded-2xl shadow-lg flex flex-col justify-between border border-white border-opacity-20 backdrop-blur-md transition-all duration-100 ease-in-out overflow-hidden"
        }
      >
        <HomeIcon />
        <Cog />
        <CardForm />
      </main>
    </Wrapper>
  );
};

export default addCard;
