"use client";
import useStudy from "@/hooks/useStudy";
import { Content } from "@/model/learningCard";
import React, { useState } from "react";
import ReviewButton from "./ReviewButton";

type Props = {
  params: string;
  item: Content;
};
export type Review = "none" | "good" | "soso" | "again";

export default function Assessment({ item, params }: Props) {
  const [clicked, setClicked] = useState<Review>("none");
  const { updateProgress } = useStudy(params);
  const onClick = (text: Review) => {
    setClicked(text);
    updateProgress(item, text);
  };
  return (
    <div className="flex gap-5 items-center ml-5">
      <ReviewButton
        clicked={clicked}
        onClick={(text) => onClick(text)}
        text="good"
      />
      <ReviewButton clicked={clicked} onClick={onClick} text="soso" />
      <ReviewButton clicked={clicked} onClick={onClick} text="again" />
    </div>
  );
}
