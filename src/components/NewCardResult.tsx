import { DetailCard } from "@/model/card";
import React from "react";

type Props = {
  card: DetailCard;
};

export default function NewCardResult({ card }: Props) {
  return (
    <section className="bg-slate-200 p-2">
      <h3>{card.title}</h3>
      <hr />
      <p>{card.description}</p>
      <ul className="bg-gray-400">
        {card.content.map((item) => (
          <li key={item._key}>{item.problem}</li>
        ))}
      </ul>
    </section>
  );
}
