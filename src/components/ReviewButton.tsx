import React from "react";
import { Review } from "./\bAssessment";

type Props = {
  clicked: Review;
  onClick: (text: Review) => void;
  text: Review;
};
export default function ReviewButton({ clicked, onClick, text }: Props) {
  return (
    <button
      className={`border-2 px-2 py-1 rounded-xl ${
        clicked == text ? "bg-indigo-600" : ""
      }`}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
}
