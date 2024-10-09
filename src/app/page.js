import Button from "@/components/Button";
import CardContainer from "@/components/CardContainer";
import Cog from "@/components/Cog";
import Link from "next/link";

export default function Home() {
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
        <div className={"flex flex-col justify-start grow"}>
          <Cog />

          <div>
            <h3 className={"text-start font-bold"}>Active Cards - startpage</h3>
            <CardContainer />
          </div>

          <div className={"mt-4"}>
            <h3 className={"text-start font-bold"}>Inactive Cards</h3>
            <CardContainer />
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
