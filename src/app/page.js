"use client";
import Button from "@/components/Button";
import CardContainer from "@/components/CardContainer";
import Cog from "@/components/Cog";
import HomeIcon from "@/components/HomeIcon";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
  const cards = useSelector((store) => store.cards.cards);
  console.log("Cards in state:", cards);

  const activeCards = cards.filter((card) => card.active);
  const inActiveCards = cards.filter((card) => !card.active);

  return (
    <Wrapper>
      <main
        className={
          "relative text-center responsive-height max-h-[894px] w-[90vw] max-w-[400px] bg-white bg-opacity-30 p-8 rounded-2xl shadow-lg flex flex-col justify-between border border-white border-opacity-20 backdrop-blur-md transition-all duration-100 ease-in-out overflow-hidden"
        }
      >
        <div className={"flex flex-col justify-start grow overflow-auto"}>
          <Cog />
          <HomeIcon />

          <div>
            <h4 className={"text-center font-bold text-gray-700"}>
              Active Cards
            </h4>
            <CardContainer cards={activeCards} />
          </div>
          <div className={"mt-4"}>
            <h4 className={"text-center font-bold text-gray-700"}>
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
    </Wrapper>
  );
}
