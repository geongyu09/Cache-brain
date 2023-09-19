import React from "react";
import StyledButton from "./ui/StyledButton";
import { CardState } from "@/model/card";
import { useSWRConfig } from "swr";

type Props = {
  card: CardState;
  setLoading: (loading: boolean) => void;
  setDone: (done: boolean) => void;
};
export default function CreateCardButton({ card, setLoading, setDone }: Props) {
  const MAKE_NEW_CARD_URL = "/api/card/create";
  const GET_ALL_CARD_URL = "/api/card/all";
  const GET_OWN_CARD_URL = "/api/card/own";
  const { mutate } = useSWRConfig();

  const makeNewCard = (card: CardState) => {
    fetch(MAKE_NEW_CARD_URL, {
      method: "POST",
      body: JSON.stringify({ card }),
    }).then(() => {
      setLoading(false);
      setDone(true);
      mutate(GET_ALL_CARD_URL);
      mutate(GET_OWN_CARD_URL);
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
