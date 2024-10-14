"use client";
import Card from "@/components/Card";
import CardForm from "@/components/CardForm";
import Form from "@/components/Form";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const CardId = () => {
  const cards = useSelector((store) => store.cards.cards);
  const { id } = useParams();
  console.log(cards);
  const cardToChange = cards.find((card) => card.uniqueId === Number(id)); //!!BYT NAMN PÅ CARD.ID!!!
  console.log(cardToChange);

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
        <div>
          {id}
          {cardToChange ? (
            <Card key={cardToChange.uniqueId} {...cardToChange} />
          ) : (
            <div>Card no found</div>
          )}
        </div>
        <Form />
      </main>
    </div>
  );
};

export default CardId;
