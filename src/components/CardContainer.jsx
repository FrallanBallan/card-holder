"use client";
import React from "react";
import Card from "./Card";
import GhostCard from "./GhostCard";
import { useRouter } from "next/navigation";

const CardContainer = ({ cards }) => {
  const router = useRouter();
  const handleCardRoute = (uniqueId) => {
    router.push(`/cards/${uniqueId}`);
  };
  if (!cards || cards.length === 0) {
    return (
      <div
        className={
          "flex flex-col overflow-y-auto h-[40vh] mt-2 gap-2 scrollbar-hide rounded-md bg-opacity-80"
        }
      >
        <GhostCard />
      </div>
    );
  }
  return (
    <>
      <div
        className={
          "flex flex-col overflow-y-auto h-[25vh] mt-2 gap-2 scrollbar-hide rounded-md bg-opacity-80"
        }
      >
        {cards.map((card) => {
          console.log(card.uniqueId);
          return (
            <Card
              key={card.uniqueId}
              {...card}
              onClick={() => handleCardRoute(card.uniqueId)}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
