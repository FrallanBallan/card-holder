"use client";
import Button from "@/components/Button";
import CardContainer from "@/components/CardContainer";
import Cog from "@/components/Cog";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
  const cards = useSelector((store) => store.cards.cards);
  console.log("Cards in state:", cards);

  const activeCards = cards.filter((card) => card.active);
  const inActiveCards = cards.filter((card) => !card.active);
  console.log("Active cards:", activeCards);
  console.log("Inactive cards", inActiveCards);

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
        <div className={"flex flex-col justify-start grow"}>
          <Cog />

          <div>
            <h4 className={"text-start font-bold text-gray-700"}>
              Active Cards
            </h4>
            <CardContainer cards={activeCards} />
          </div>
          <div className={"mt-4"}>
            <h4 className={"text-start font-bold text-gray-700"}>
              Inactive Cards
            </h4>
            <CardContainer cards={inActiveCards} />
          </div>
        </div>
        <div>
          <Link href="/addCard">
            <Button text={"Add New Card"} />
          </Link>
          {/* button ska ta mig till card/:id */}
          {/* button ska ta migt ill /settings */}
        </div>
      </main>
    </div>
  );
}
