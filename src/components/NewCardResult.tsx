import { CardState } from "@/model/card";
import React from "react";
import DetailSection from "./DetailSection";
import CreateCardButton from "./CreateCardButton";

type Props = {
  card: CardState;
  setIsLoading: (isLoading: boolean) => void;
};

export default function NewCardResult({ card, setIsLoading }: Props) {
  return (
    <DetailSection
      card={card}
      btn={<CreateCardButton card={card} setIsLoading={setIsLoading} />}
    />
  );
}
