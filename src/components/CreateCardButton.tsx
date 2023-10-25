import React from "react";
import StyledButton from "./ui/StyledButton";
import { CardState } from "@/model/card";
import { useSWRConfig } from "swr";
import {
  GET_ALL_CARDS_URL,
  GET_OWN_CARDS_URL,
  MAKE_NEW_CARD_URL,
} from "@/service/urls";

type Props = {
  card: CardState;
  setLoading: (loading: boolean) => void;
  setDone: (done: boolean) => void;
};
export default function CreateCardButton({ card, setLoading, setDone }: Props) {
  const { mutate } = useSWRConfig();
  const makeNewCard = (card: CardState) => {
    fetch(MAKE_NEW_CARD_URL, {
      method: "POST",
      body: JSON.stringify({ card }),
    }).then(() => {
      setLoading(false);
      setDone(true);
      mutate(GET_ALL_CARDS_URL);
      mutate(GET_OWN_CARDS_URL);
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
