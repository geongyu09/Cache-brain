"use client";
import React, { useState } from "react";
import NewPageForm from "./NewPageForm";
import NewCardContentForm from "./NewCardContentForm";
import { CardState } from "@/model/card";

const DEFAULT_CARD: CardState = {
  title: "",
  description: "",
  tags: [],
  content: [],
};

export default function NewPageSection() {
  const [card, setCard] = useState<CardState>(DEFAULT_CARD);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };
  const setDone = (done: boolean) => {
    setIsDone(done);
  };

  return (
    <section
      className={`w-full h-5/6 bg-slate-100 grid grid-cols-[1fr_2fr] p-7 rounded-xl ${
        isLoading ? "opacity-30 cursor-wait" : ""
      }`}
    >
      <NewPageForm
        card={card}
        isDone={isDone}
        isLoading={isLoading}
        setCard={setCard}
        setDone={(done: boolean) => setDone(done)}
        setLoading={(loading: boolean) => setLoading(loading)}
      />
      <NewCardContentForm
        card={card}
        isDone={isDone}
        isLoading={isLoading}
        setCard={setCard}
      />
    </section>
  );
}
