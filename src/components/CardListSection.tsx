"use client";
import React, { useState } from "react";
import useSWR from "swr";
import { Card } from "@/model/card";
import CardList from "./CardList";
import CardDetail from "./CardDetail";

type Props = {
  typeOwn: boolean;
};

export default function CardListContent({ typeOwn }: Props) {
  const [focus, setFocus] = useState("");
  const GET_ALL_CARD_URL = `/api/card/${typeOwn ? "own" : "all"}`;
  const { data: cards, isLoading, error } = useSWR<Card[]>(GET_ALL_CARD_URL);
  if (!cards) return;

  return (
    <section className="flex flex-col w-full h-full">
      <div className="h-full md:flex">
        <CardList cards={cards} modify={setFocus} />
        <CardDetail id={focus} />
      </div>
    </section>
  );
}
