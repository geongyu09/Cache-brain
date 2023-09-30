import React from "react";
import StyledButton from "./ui/StyledButton";
import { DetailCard } from "@/model/card";

type Props = {
  editCard: DetailCard;
};

export default function EditSaveButton({ editCard }: Props) {
  const CARD_EDIT_URL = "/api/card/edit";
  fetch(CARD_EDIT_URL, { method: "PUT", body: JSON.stringify(editCard) });
  return <StyledButton text="save" />;
}
