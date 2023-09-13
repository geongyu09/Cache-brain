"use client";
import { Content } from "@/model/learningCard";
import React, { useState } from "react";
import StudyContent from "./StudyContent";
type Props = {
  selected: Content[];
  params: string;
};
export default function Carousel({ selected, params }: Props) {
  let level = 0;
  const [showAnswer, setShowAnswer] = useState(false);

  const scroolCard = (targetId: string) => {
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: "smooth" });
  };
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    setShowAnswer(false);
    const handle = event.currentTarget.id === "prev" ? false : true;
    if (handle) {
      level++;
      if (level > selected.length - 1) level--;
      scroolCard(level.toString());
      return;
    }
    level--;
    if (level < 0) level++;
    scroolCard(level.toString());
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
        className="px-4 py-2 bg-lime-400 absolute top-1/2 left-32 -translate-y-1/2"
        id="prev"
      >
        {`<`}
      </button>

      <button
        onClick={onClick}
        className="px-4 py-2 bg-lime-400 absolute top-1/2 right-32 -translate-y-1/2"
      >
        {`>`}
      </button>
    </div>
  );
}
