"use client";
import { Content } from "@/model/learningCard";
import React, { useEffect, useState } from "react";
import StudyContent from "./StudyContent";
type Props = {
  selected: Content[];
  params: string;
};

export default function Carousel({ selected, params }: Props) {
  const [level, setLevel] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const scroolCard = (targetId: string) => {
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: "smooth" });
  };
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    const handle = event.currentTarget.id === "prev" ? false : true;
    let fakeLevel = level;
    setShowAnswer(false);
    if (handle) {
      fakeLevel++;
      setLevel(fakeLevel);
      if (level > selected.length - 1) setLevel(selected.length - 1);
      scroolCard(fakeLevel.toString());
      return;
    }
    fakeLevel--;
    setLevel(fakeLevel);
    if (level < 0) setLevel(0);
    scroolCard(fakeLevel.toString());
  };

  return (
    <div
      className="w-full overflow-x-hidden flex gap-[800px] opa"
      id="carousel"
    >
      {selected.map((item, index) => (
        <StudyContent
          key={index}
          item={item}
          index={index}
          params={params}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
        />
      ))}
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-lime-400 absolute top-1/2 left-32 -translate-y-1/2  ${
          level <= 0 ? "hidden" : ""
        }`}
        id="prev"
      >
        {`<`}
      </button>

      <button
        onClick={onClick}
        className={`px-4 py-2 bg-lime-400 absolute top-1/2 right-32 -translate-y-1/2 ${
          level >= selected.length - 1 ? "hidden" : ""
        }`}
      >
        {`>`}
      </button>
    </div>
  );
}
