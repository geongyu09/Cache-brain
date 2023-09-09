import { Card } from "@/model/card";
import React from "react";

type Props = {
  card: Card;
  modify: (id: string) => void;
};

export default function List({ card, modify }: Props) {
  const onClick = () => {
    modify(card.id);
  };
  return (
    <li
      className="flex justify-between items-center gap-10 border-b-2 p-5"
      onClick={onClick}
    >
      <div>
        <h4>{`${card.title} / ${card.owner?.name}`}</h4>
        <p>{card.description}</p>
      </div>
      <div>{">"} </div>
    </li>
  );
}
