import React from "react";
import NavListComponent from "./NavListComponent";

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
      <div className="flex w-full justify-between p-5">
        <div className="bg-purple-600">icon</div>
        <div className="bg-purple-600"> ... </div>
      </div>
      <NavListComponent content={Navigation} />
      <NavListComponent content={Bookmarks} />
      <div>user</div>
    </section>
  );
}
