import { DetailCard } from "@/model/card";
import React from "react";
import useSWR from "swr";

type Props = {
  id: string;
};

export default function CardDetail({ id }: Props) {
  const GET_CARD_URL = `/api/card/detail/${id}`;
  const { data: card, isLoading, error } = useSWR<DetailCard>(GET_CARD_URL);
  return (
    <>
      <section className="bg-slate-100 w-full max-w-sm h-full">
        {isLoading && <p>Loading...</p>}
        <div>
          <h4>{card?.title}</h4>
          <p>{card?.description}</p>
        </div>
        <ul>
          {card?.content.map((item) => (
            <li key={item.id}>{`${item.problem} / ${item.answer}`}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
