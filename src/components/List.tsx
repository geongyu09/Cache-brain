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
        <h4 className="text-lg">{`${card.title} / ${card.owner?.name}`}</h4>
        <div className="flex gap-3 my-3">
          {card.tags?.map((item, index) => (
            <div key={index} className="bg-teal-200 px-2 rounded-2xl text-sm">
              {item}
            </div>
          ))}
        </div>
        <p className="text-gray-400">{card.description}</p>
      </div>
      <div>{">"}</div>
    </li>
  );
}
