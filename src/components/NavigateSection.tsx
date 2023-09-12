import React from "react";
import NavListComponent from "./NavListComponent";
import { Book, Complete, Instudy, Own } from "./ui/icon";
import Hero from "./Hero";
import { getServerSession } from "next-auth";
import { authOptions } from "@/service/auth";
import MainIcon from "./MainIcon";

export type NavList = {
  title: string;
  list: { text: string; url: string; icon?: React.ReactElement }[];
};

export default async function NavigateSection() {
  const session = await getServerSession(authOptions);
  const username = session?.user.username;
  const Navigation: NavList = {
    title: "Navigation",
    list: [
      { text: "All cards", url: `/${username}/`, icon: <Book /> },
      { text: "Own cards", url: `/${username}/own`, icon: <Own /> },
      { text: "in study", url: `/${username}/instudy`, icon: <Instudy /> },
      { text: "complete", url: `/${username}/complete`, icon: <Complete /> },
    ],
  };

  //서버에서 북마크 정보 가지고 올 것.
  const Bookmarks: NavList = {
    title: "Bookmarks",
    list: [{ text: "준비중...", url: "/study/${cardid}" }],
  };
  return (
    <section className="w-80 bg-slate-100 flex flex-col justify-between border-r-2">
      <MainIcon position="nav" />
      <NavListComponent content={Navigation} />
      <NavListComponent content={Bookmarks} style="grow" />
      <Hero />
    </section>
  );
}
