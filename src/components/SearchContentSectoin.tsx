"use client";
import React, { Dispatch, SetStateAction } from "react";
import CardList from "./CardList";
import CardDetail from "./CardDetail";
import { Card } from "@/model/card";
import { useSession } from "next-auth/react";

type Props = {
  cards: Card[];
  modify: Dispatch<SetStateAction<string>>;
  id: string;
};

export default function SearchContentSectoin({ cards, modify, id }: Props) {
  const session = useSession();
  const username = session.data?.user.username;
  return (
    <section className="flex w-full h-full">
      <CardList cards={cards} modify={modify} />
      <CardDetail id={id} username={username} />
    </section>
  );
}
