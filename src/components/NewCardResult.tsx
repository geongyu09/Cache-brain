import { CardState } from "@/model/card";
import React from "react";
import DetailSection from "./DetailSection";
import CreateCardButton from "./CreateCardButton";
import GoStudyButton from "./GoStudyButton";

type Props = {
  card: CardState;
  isDone: boolean;
  setLoading: (loading: boolean) => void;
  setDone: (done: boolean) => void;
};

export default function NewCardResult({
  card,
  isDone,
  setLoading,
  setDone,
}: Props) {
  return (
    <DetailSection
      card={card}
      isNewPage={true}
      btn={
        !isDone ? (
          <CreateCardButton
            card={card}
            setLoading={setLoading}
            setDone={setDone}
          />
        ) : (
          <GoStudyButton />
        )
      }
    />
  );
}
