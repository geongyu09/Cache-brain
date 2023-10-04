"use client";
import React, { useState } from "react";
import StyledButton from "./ui/StyledButton";
import { CardStateContent, CardState } from "@/model/card";
import NewCardTextarea from "./NewCardTextarea";
import AddProblemButton from "./AddProblemButton";

type Props = {
  card: CardState;
  isDone: boolean;
  setCard: React.Dispatch<React.SetStateAction<CardState>>;
  isLoading: boolean;
};

const DEFAULT_CONTENT: CardStateContent = {
  _key: "",
  problem: "",
  answer: "",
};

export default function NewCardStateContentForm({
  card,
  isDone,
  setCard,
  isLoading,
}: Props) {
  const [content, setContent] = useState<CardStateContent>(DEFAULT_CONTENT);
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
    const newContentArray = [
      ...card.content,
      { ...content, _key: Date.now().toString(), progress: 0 },
    ];
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
        readOnly={Boolean(isDone || isLoading)}
      />
      <NewCardTextarea
        title={textareaItem[1].title}
        text={textareaItem[1].text}
        style="grow"
        contentMofify={textareaItem[1].contentMofify}
        readOnly={Boolean(isDone || isLoading)}
      />
      <AddProblemButton isLoading={isLoading} isDone={isDone} />
    </form>
  );
}
