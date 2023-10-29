"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import EditDetailSection from "./EditDetailSection";
import EditContentsSection from "./EditContentsSection";
import { DetailCard } from "@/model/card";
import { GET_CARD_URL } from "@/utils/urls";

type Props = {
  cardId: string;
};

export default function EditPageSection({ cardId }: Props) {
  const {
    data: card,
    // isLoading,
    // error,
  } = useSWR<DetailCard>(GET_CARD_URL + cardId);
  const [editCard, setEditCard] = useState<DetailCard>();
  useEffect(() => {
    setEditCard(card);
  }, [card]);
  return (
    <>
      {card && editCard ? (
        <section className="grid grid-cols-[4fr_11fr]">
          <EditDetailSection editCard={editCard} setEditCard={setEditCard} />
          <EditContentsSection editCard={editCard} setEditCard={setEditCard} />
        </section>
      ) : null}
    </>
  );
}
