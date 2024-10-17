"use client";
import Button from "@/components/Button";
import Cog from "@/components/Cog";
import HomeIcon from "@/components/HomeIcon";
import Wrapper from "@/components/Wrapper";
import { deleteAllInActive } from "@/redux/cardSlice";
import { changeTheme } from "@/redux/themeSlice";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const settings = () => {
  //Hämtar det nuvarande värdet från redux store
  const currentTheme = useSelector((store) => store.themes.theme);
  const [theme, setTheme] = useState(currentTheme);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  const handleTheme = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    console.log("Dispatching theme with", newTheme);
    dispatch(changeTheme(newTheme));
  };
  //DeleteAllInactive + route
  const handleDelete = () => {
    dispatch(deleteAllInActive());
    router.push("/");
  };
  return (
    <Wrapper>
      <main
        className={
          "relative text-center responsive-height max-h-[894px] w-[90vw] max-w-[400px] bg-white bg-opacity-30 p-8 rounded-2xl shadow-lg flex flex-col justify-between border border-white border-opacity-20 backdrop-blur-md transition-all duration-100 ease-in-out overflow-hidden"
        }
      >
        <HomeIcon />
        <Cog />
        <div className="h-full flex flex-col justify-around">
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-lg">Theme</h3>
            <select
              className="w-[50%] p-2 rounded-lg"
              onChange={handleTheme}
              value={theme}
              name="themeSelector"
              id="themeSelect"
            >
              <option value="darkmode">Darkmode</option>
              <option value="lightmode">Lightmode</option>
              <option value="bajen">Bajenmode</option>
            </select>
            <Button text={"Save Changes"} />
          </div>
          <Button text={"Delete all cards"} onClick={() => handleDelete()} />
        </div>
      </main>
    </Wrapper>
  );
};

export default settings;
