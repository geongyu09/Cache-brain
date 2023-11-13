import { Card } from "@/model/card";
import React from "react";
import Tag from "../../Tag";

type Props = {
  card: Card;
  modify: (id: string) => void;
};

export default function List({ card, modify }: Readonly<Props>) {
  const onClick = () => {
    modify(card.id);
  };
  return (
    <li
      className="flex justify-between items-center gap-10 border-b-2 p-5"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div>
        <h4 className="text-lg">{`${card.title} / ${card.owner?.name}`}</h4>
        <div className="flex gap-3 my-3">
          {card.tags?.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
        <p className="text-gray-400">{card.description}</p>
      </div>
      <div>{">"}</div>
    </li>
  );
}
