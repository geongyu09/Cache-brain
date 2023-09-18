import React from "react";
import StyledButton from "./ui/StyledButton";
import { CardState } from "@/model/card";

type Props = {
  card: CardState;
};
export default function CreateCardButton({ card }: Props) {
  const makeNewCard = (card: CardState) => {
    fetch("/api/card/create", {
      method: "POST",
      body: JSON.stringify({ card }),
    });
  };
  return <StyledButton text="create" handler={() => makeNewCard(card)} />;
}
