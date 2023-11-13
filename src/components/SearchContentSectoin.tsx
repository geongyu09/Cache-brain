"use client";
import { Dispatch, SetStateAction } from "react";
import CardList from "./pages/cards/CardList";
import CardDetail from "./pages/cards/CardDetail";
import { Card } from "@/model/card";
import { useSession } from "next-auth/react";

type Props = {
  cards: Card[];
  modify: Dispatch<SetStateAction<string>>;
  id: string;
};

export default function SearchContentSectoin({
  cards,
  modify,
  id,
}: Readonly<Props>) {
  const session = useSession();
  const username = session.data?.user.username;
  return (
    <section className="flex w-full h-full">
      <CardList cards={cards} modify={modify} />
      <CardDetail id={id} username={username} />
    </section>
  );
}
