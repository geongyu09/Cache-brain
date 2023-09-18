"use client";
import React, { useState } from "react";
import StyledButton from "./ui/StyledButton";
import { CardContent, CardState } from "@/model/card";
import NewCardTextarea from "./NewCardTextarea";

type Props = {
  card: CardState;
  setCard: React.Dispatch<React.SetStateAction<CardState>>;
};

const DEFAULT_CONTENT: CardContent = {
  _key: "",
  problem: "",
  answer: "",
};

export default function NewCardContentForm({ card, setCard }: Props) {
  const [content, setContent] = useState<CardContent>(DEFAULT_CONTENT);
  const textareaItem = [
    {
      title: "문제",
      text: content.problem,
      contentMofify: (problem: string) => {
        setContent((prev) => ({ ...prev, problem }));
      },
    },
    {
      title: "답",
      text: content.answer,
      contentMofify: (answer: string) => {
        setContent((prev) => ({ ...prev, answer }));
      },
    },
  ];
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newContentArray = [...card.content, content];
    setCard((prev) => ({ ...prev, content: newContentArray }));
    setContent(DEFAULT_CONTENT);
  };
  return (
    <form
      className="flex flex-col w-full h-full rounded xl px-5"
      onSubmit={handleSubmit}
    >
      <NewCardTextarea
        title={textareaItem[0].title}
        text={textareaItem[0].text}
        contentMofify={textareaItem[0].contentMofify}
      />
      <NewCardTextarea
        title={textareaItem[1].title}
        text={textareaItem[1].text}
        style="grow"
        contentMofify={textareaItem[1].contentMofify}
      />
      <StyledButton text="add problem" />
    </form>
  );
}
