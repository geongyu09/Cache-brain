import React from "react";
import NavListComponent from "./NavListComponent";
import { Brain } from "./ui/icon";

export type NavList = {
  title: string;
  list: { text: string }[];
};

export default function NavigateSection() {
  const Navigation: NavList = {
    title: "Navigation",
    list: [
      { text: "All cards" },
      { text: "Own cards" },
      { text: "in study" },
      { text: "준비중..." },
    ],
  };
  const Bookmarks: NavList = {
    title: "Bookmarks",
    list: [
      { text: "abcd" },
      { text: "efghijkl" },
      { text: "in study" },
      { text: "준비중..." },
    ],
  };
  return (
    <section className="w-80 bg-slate-100 flex flex-col justify-betweenv border-r-2">
      <div className="flex w-full gap-7 p-5">
        <Brain />
        <h1>Cache Brain</h1>
      </div>
      <NavListComponent content={Navigation} />
      <NavListComponent content={Bookmarks} />
      <div>user</div>
    </section>
  );
}
