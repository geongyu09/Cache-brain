"use client";
import { useState } from "react";
import useSWR from "swr";
import { Card } from "@/model/card";
import CardList from "./CardList";
import CardDetail from "./CardDetail";
import { Loading } from "./ui/icon";
import { GET_ALL_CARDS_URL, GET_OWN_CARDS_URL } from "@/utils/urls";

type Props = {
  typeOwn: boolean;
  username: string;
};

export default function CardListContent({
  typeOwn,
  username,
}: Readonly<Props>) {
  const [focus, setFocus] = useState(""); //cardId
  const GET_CARDS_URL = typeOwn ? GET_OWN_CARDS_URL : GET_ALL_CARDS_URL;

  const { data: cards, isLoading, error } = useSWR<Card[]>(GET_CARDS_URL);

  return (
    <section className="flex flex-col w-full h-full">
      {isLoading && <Loading />}
      {cards && (
        <div className="h-full md:flex">
          <CardList cards={cards} modify={setFocus} />
          <CardDetail id={focus} username={username} />
        </div>
      )}
    </section>
  );
}
