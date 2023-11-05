import { CardState, DetailCard } from "@/model/card";
import React from "react";
import EditButton from "./EditButton";

type Props =
  | {
      card: DetailCard;
      username: string;
      btn?: React.ReactElement;
      isNewPage: false;
    }
  | {
      card: CardState;
      username?: string;
      btn?: React.ReactElement;
      isNewPage: true;
    };

export default function DetailSection({
  card,
  btn,
  username,
  isNewPage,
}: Props) {
  return (
    <section className="flex flex-col h-[92vh] p-5 pb-[80px]">
      <div>
        <div className="flex justify-between items-center">
          <h4 className="text-lg">{card?.title}</h4>
          {card.content.length !== 0 && card.title && card.description
            ? btn
            : null}
        </div>
        <hr className="my-1" />
        <pre className="whitespace-pre-wrap">{card?.description}</pre>
      </div>
      <ul className="grow">
        {card?.content.map((item, index) => (
          <li key={index} className="bg-slate-200 rounded-xl p-4 my-2">
            <p className="mb-1">{`Q : ${item.problem}`}</p>
            <pre className="whitespace-pre-wrap">{`A : ${item.answer}`}</pre>
          </li>
        ))}
      </ul>
      {!isNewPage && username == card.owner?.username && (
        <EditButton cardId={card.id} />
      )}
    </section>
  );
}
