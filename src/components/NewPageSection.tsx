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
  const [done, setDone] = useState(false);

  return (
    <section
      className={`w-full h-5/6 bg-slate-100 grid grid-cols-[1fr_2fr] p-7 rounded-xl ${
        isLoading ? "nonw" : ""
      }`}
    >
      <NewPageForm
        card={card}
        setCard={setCard}
        setIsLoading={(isLoading: boolean) => setIsLoading(isLoading)}
      />
      <NewCardContentForm card={card} setCard={setCard} isLoading={isLoading} />
    </section>
  );
}
