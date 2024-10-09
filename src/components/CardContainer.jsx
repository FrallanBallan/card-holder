import React from "react";
import Card from "./Card";
import GhostCard from "./GhostCard";
import Cog from "./Cog";

const CardContainer = () => {
  return (
    <>
      <div
        className={
          "flex flex-col overflow-y-auto h-60 mt-4 gap-2 scrollbar-hide"
        }
      >
        <Card />
        <Card />
        {/* Add ghost chard if no card */}
      </div>
    </>
  );
};

export default CardContainer;
