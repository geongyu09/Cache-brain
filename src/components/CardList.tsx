import React from "react";
import List from "./List";
import { Card } from "@/model/card";

type Props = {
  cards: Card[];
  modify: (id: string) => void;
};

export default function CardList({ cards, modify }: Props) {
  return (
    <ul className="grow w-full h-5/6 mx-5 overflow-y-auto">
      {cards.map((card) => (
        <List
          key={card.id}
          card={card}
          modify={(id: string) => {
            modify(id);
          }}
        />
      ))}
    </ul>
  );
}
