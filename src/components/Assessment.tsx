"use client";
import useCard from "@/hooks/useCard";
import { CardContent } from "@/model/card";
import React, { useState } from "react";

type Props = {
  params: string;
  item: CardContent;
};
export type Review = "none" | "good" | "soso" | "again";

export default function Assessment({ item, params }: Props) {
  const [clicked, setClicked] = useState<Review>("none");
  const { updateProgress } = useCard(params);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const updateNumber = event.currentTarget.id as Review;
    setClicked(updateNumber);
    updateProgress(item, updateNumber);
  };
  return (
    <div className="flex gap-5 items-center ml-5">
      <button
        className={`border-2 px-2 py-1 rounded-xl ${
          clicked == "good" ? "bg-indigo-600" : ""
        }`}
        onClick={onClick}
        id="good"
      >
        good
      </button>
      <button
        className={`border-2 px-2 py-1 rounded-xl ${
          clicked == "soso" ? "bg-indigo-600" : ""
        }`}
        onClick={onClick}
        id="soso"
      >
        soso
      </button>
      <button
        className={`border-2 px-2 py-1 rounded-xl ${
          clicked == "again" ? "bg-indigo-600" : ""
        }`}
        onClick={onClick}
        id="again"
      >
        again
      </button>
    </div>
  );
}
