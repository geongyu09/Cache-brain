"use client";
import React from "react";
import { Filter } from "./StudyComponent";

type Props = {
  modify: (filter: Filter) => void;
  filter: Filter;
};

export default function FilterComponent({ modify, filter }: Props) {
  return (
    <ul>
      <li
        onClick={() => modify("all")}
        className={`${filter == "all" ? "text-purple-600" : ""}`}
      >
        all
      </li>
      <li
        onClick={() => modify("learned")}
        className={`${filter == "learned" ? "text-purple-600" : ""}`}
      >
        learned
      </li>
      <li
        onClick={() => modify("learning")}
        className={`${filter == "learning" ? "text-purple-600" : ""}`}
      >
        learning
      </li>
      <li
        onClick={() => modify("unlearned")}
        className={`${filter == "unlearned" ? "text-purple-600" : ""}`}
      >
        unlearned
      </li>
    </ul>
  );
}
