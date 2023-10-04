import React from "react";
import StudyButton from "./StudyButton";
import DetailSection from "./DetailSection";
import { Loading } from "./ui/icon";
import useCard from "@/hooks/useCard";

type Props = {
  id: string;
  username: string;
};

export default function CardDetail({ id, username }: Props) {
  const { data: card, isLoading, error } = useCard(id);
  return (
    <section className="bg-slate-100 w-full max-w-sm h-[90%] overflow-auto ">
      {isLoading && <Loading />}
      {card && (
        <DetailSection
          card={card}
          isNewPage={false}
          username={username}
          btn={<StudyButton cardId={card.id} />}
        />
      )}
    </section>
  );
}
