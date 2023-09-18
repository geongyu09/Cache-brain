import { DetailCard } from "@/model/card";
import React from "react";
import useSWR from "swr";
import StudyButton from "./StudyButton";
import DetailSection from "./DetailSection";

type Props = {
  id: string;
};

export default function CardDetail({ id }: Props) {
  const GET_CARD_URL = `/api/card/detail/${id}`;
  const { data: card, isLoading, error } = useSWR<DetailCard>(GET_CARD_URL);
  return (
    <section className="bg-slate-100 w-full max-w-sm h-[90%] overflow-auto ">
      {isLoading && id !== "" ? <p>Loading...</p> : null}
      {card && (
        <DetailSection card={card} btn={<StudyButton cardId={card.id} />} />
      )}
    </section>
  );
}
