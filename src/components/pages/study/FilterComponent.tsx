"use client";
import React from "react";
import { Filter } from "./StudyComponent";

type Props = {
  modify: (filter: Filter) => void;
  filter: Filter;
};

export default function FilterComponent({ modify, filter }: Readonly<Props>) {
  return (
    <section className="pt-20 grow">
      <h3 className="mb-5">모아 보기</h3>
      <ul className="flex flex-col gap-2">
        <li
          onClick={() => modify("all")}
          onKeyDown={() => modify("all")}
          className={`cursor-pointer ${
            filter == "all" ? "text-purple-600" : ""
          }`}
        >
          all
        </li>
        <li
          onClick={() => modify("learned")}
          onKeyDown={() => modify("all")}
          className={`cursor-pointer ${
            filter == "learned" ? "text-purple-600" : ""
          }`}
        >
          learned
        </li>
        <li
          onClick={() => modify("learning")}
          onKeyDown={() => modify("all")}
          className={`cursor-pointer ${
            filter == "learning" ? "text-purple-600" : ""
          }`}
        >
          learning
        </li>
        <li
          onClick={() => modify("unlearned")}
          onKeyDown={() => modify("all")}
          className={`cursor-pointer ${
            filter == "unlearned" ? "text-purple-600" : ""
          }`}
        >
          unlearned
        </li>
      </ul>
    </section>
  );
}
