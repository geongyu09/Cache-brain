"use client";
import useStudy from "@/hooks/useStudy";
import { Content } from "@/model/learningCard";
import React, { useState } from "react";

type Props = {
  params: string;
  item: Content;
};

export default function Assessment({ item, params }: Props) {
  const [clicked, setClicked] = useState(-1);
  const { updateProgress } = useStudy(params);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const updateNumber = +event.currentTarget.id;
    setClicked(updateNumber);
    updateProgress(item, updateNumber);
  };
  return (
    <div className="flex gap-5 items-center ml-5">
      <button
        className={`border-2 px-2 py-1 rounded-xl ${
          clicked == 2 ? "bg-indigo-600" : ""
        }`}
        onClick={onClick}
        id="2"
      >
        good
      </button>
      <button
        className={`border-2 px-2 py-1 rounded-xl ${
          clicked == 1 ? "bg-indigo-600" : ""
        }`}
        onClick={onClick}
        id="1"
      >
        soso
      </button>
      <button
        className={`border-2 px-2 py-1 rounded-xl ${
          clicked == 0 ? "bg-indigo-600" : ""
        }`}
        onClick={onClick}
        id="0"
      >
        again
      </button>
    </div>
  );
}
