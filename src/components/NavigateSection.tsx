"use client";
import React from "react";
import NavListComponent from "./NavListComponent";
import { Book, Complete, Instudy, Own } from "./ui/icon";
import Hero from "./Hero";
import MainIcon from "./MainIcon";
import { useSession } from "next-auth/react";

export type NavList = {
  title: string;
  list: {
    text: string;
    url: string;
    icon?: React.ReactElement;
    isOnUrl?: boolean;
  }[];
};

export default function NavigateSection() {
  const session = useSession();
  const username = session?.data?.user.username;
  const route = window.location.href.split("/");
  const Navigation: NavList = {
    title: "Navigation",
    list: [
      {
        text: "All cards",
        url: `/${username}/`,
        icon: <Book />,
        isOnUrl: route[route.length - 1] == username,
      },
      {
        text: "Own cards",
        url: `/${username}/own`,
        icon: <Own />,
        isOnUrl: route[route.length - 1] == "own",
      },
      {
        text: "in study",
        url: `/${username}/instudy`,
        icon: <Instudy />,
        isOnUrl: route[route.length - 1] == "instudy",
      },
      {
        text: "complete",
        url: `/${username}/complete`,
        icon: <Complete />,
        isOnUrl: route[route.length - 1] == "complete",
      },
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
