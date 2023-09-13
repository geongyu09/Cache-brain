import { Content } from "@/model/learningCard";
import React from "react";
import Assessment from "./\bAssessment";
type Props = {
  item: Content;
  index: number;
  params: string;
  showAnswer: boolean;
  setShowAnswer: (_: boolean) => void;
};
export default function StudyContent({
  item,
  index,
  params,
  showAnswer,
  setShowAnswer,
}: Props) {
  return (
    <article
      className="min-w-full h-full flex justify-center items-center"
      id={index.toString()}
    >
      <div className="opacity-100 bg-white w-3/5 p-10 rounded-xl ">
        <div className="flex justify-start items-center mb-7">
          <h3 className="text-xl font-semibold ">{item.problem}</h3>
          <Assessment item={item} params={params} />
        </div>
        {showAnswer ? (
          <p>{item.answer}</p>
        ) : (
          <p
            className="w-full text-center font-semibold cursor-pointer"
            onClick={() => setShowAnswer(true)}
          >
            정답 보기
          </p>
        )}
      </div>
    </article>
  );
}
