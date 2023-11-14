"use client";
import React, { useEffect, useState } from "react";
import { Book, Complete, Instudy, Own } from "../../ui/icon";
import NavListComponent from "./NavListComponent";
import MainIcon from "./MainIcon";
import Hero from "./Hero";
import { usePathname } from "next/navigation";

export type NavBarList = {
  text: string;
  url: string;
  icon?: React.ReactElement;
  isOnUrl?: boolean;
};
export type NavBar = {
  title: string;
  list: NavBarList[];
};
const DefaultList = [
  {
    text: "All cards",
    url: `/`,
    icon: <Book />,
    isOnUrl: false,
  },
  {
    text: "Own cards",
    url: `/own`,
    icon: <Own />,
    isOnUrl: false,
  },
  {
    text: "in study",
    url: `/instudy`,
    icon: <Instudy />,
    isOnUrl: false,
  },
  {
    text: "complete",
    url: `/complete`,
    icon: <Complete />,
    isOnUrl: false,
  },
];

export default function NavigateSection() {
  const URL = usePathname().split("/").pop();
  const [Navigation, setNavigation] = useState<NavBar>({
    title: "Navigation",
    list: DefaultList,
  });
  useEffect(() => {
    setNavigation((prev) => ({
      ...prev,
      list: prev.list.map((item, index) => {
        if (index == 0) return { ...item, isOnUrl: URL == "cards" };
        if (index == 1) return { ...item, isOnUrl: URL == "own" };
        if (index == 2) return { ...item, isOnUrl: URL == "instudy" };
        if (index == 3) return { ...item, isOnUrl: URL == "complete" };
        return item;
      }),
    }));
  }, [URL]);
  //서버에서 북마크 정보 가지고 올 것.
  const Bookmarks: NavBar = {
    title: "Bookmarks",
    list: [{ text: "준비중...", url: "/study/${cardid}" }],
  };
  return (
    <section className="w-80 bg-slate-100 flex flex-col justify-between border-r-2">
      <MainIcon position="nav" />
      <NavListComponent content={Navigation} setNavigation={setNavigation} />
      <NavListComponent
        content={Bookmarks}
        style="grow"
        setNavigation={setNavigation}
      />
      <Hero />
    </section>
  );
}
