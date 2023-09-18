import { DetailCard } from "@/model/card";
import React from "react";
import StudyButton from "./StudyButton";

type Props = {
  card: DetailCard;
};

export default function NewCardResult({ card }: Props) {
  return (
    <section className="flex flex-col h-full p-5">
      <div>
        <div className="flex justify-between items-center">
          <h4 className="text-lg">{card?.title}</h4>
          <StudyButton cardId={card.id} />
        </div>
        <hr className="my-1" />
        <p>{card?.description}</p>
      </div>
      <ul className="grow">
        {card?.content.map((item) => (
          <li key={item._key} className="bg-slate-200 rounded-xl p-4 my-2">
            <p className="mb-1">{`Q : ${item.problem}`}</p>
            <p>{`A : ${item.answer}`}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
