import { CardState, DetailCard } from "@/model/card";
import React from "react";
import EditButton from "./EditButton";

type Props = {
  card: DetailCard;
  btn?: React.ReactElement;
};

export default function DetailSection({ card, btn }: Props) {
  return (
    <section className="flex flex-col h-full p-5">
      <div>
        <div className="flex justify-between items-center">
          <h4 className="text-lg">{card?.title}</h4>
          {card.content.length !== 0 && card.title && card.description
            ? btn
            : null}
        </div>
        <hr className="my-1" />
        <p>{card?.description}</p>
      </div>
      <ul className="grow">
        {card?.content.map((item, index) => (
          <li key={index} className="bg-slate-200 rounded-xl p-4 my-2">
            <p className="mb-1">{`Q : ${item.problem}`}</p>
            <p>{`A : ${item.answer}`}</p>
          </li>
        ))}
      </ul>
      <EditButton cardId={card.id} />
    </section>
  );
}
