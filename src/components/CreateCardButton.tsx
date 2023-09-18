import React from "react";
import StyledButton from "./ui/StyledButton";
import { CardState } from "@/model/card";

type Props = {
  card: CardState;
  setIsLoading: (isLoading: boolean) => void;
};
export default function CreateCardButton({ card, setIsLoading }: Props) {
  const MAKE_NEW_CARD_URL = "/api/card/create";
  const makeNewCard = (card: CardState) => {
    fetch(MAKE_NEW_CARD_URL, {
      method: "POST",
      body: JSON.stringify({ card }),
    });
  };
  return (
    <StyledButton
      text="create"
      handler={() => {
        makeNewCard(card);
        setIsLoading(true);
      }}
    />
  );
}
