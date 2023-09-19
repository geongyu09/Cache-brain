import React from "react";
import StyledButton from "./ui/StyledButton";
import { CardState } from "@/model/card";

type Props = {
  card: CardState;
  setLoading: (loading: boolean) => void;
  setDone: (done: boolean) => void;
};
export default function CreateCardButton({ card, setLoading, setDone }: Props) {
  const MAKE_NEW_CARD_URL = "/api/card/create";
  const makeNewCard = (card: CardState) => {
    fetch(MAKE_NEW_CARD_URL, {
      method: "POST",
      body: JSON.stringify({ card }),
    }).then(() => {
      setLoading(false);
      setDone(true);
    });
  };
  return (
    <StyledButton
      text="create"
      handler={() => {
        setLoading(true);
        makeNewCard(card);
      }}
    />
  );
}
