import { Content } from "@/model/learningCard";
import React from "react";
type Props = {
  item: Content;
  index: number;
  showAnswer: boolean;
  setShowAnswer: (_: boolean) => void;
};
export default function StudyContent({
  item,
  index,
  showAnswer,
  setShowAnswer,
}: Props) {
  return (
    <article
      className="min-w-full h-full flex justify-center items-center"
      id={index.toString()}
    >
      <div className="opacity-100 bg-white w-3/5 p-10 rounded-xl">
        <h3 className="text-xl font-semibold mb-7">{item.problem}</h3>
        {showAnswer ? (
          <p>{item.answer}</p>
        ) : (
          <p className="w-full text-center" onClick={() => setShowAnswer(true)}>
            정답 보기
          </p>
        )}
      </div>
    </article>
  );
}
