import { DetailCard } from "@/model/card";
import React from "react";

type Props = {
  card: DetailCard;
  editCard: DetailCard;
  setEditCard: React.Dispatch<React.SetStateAction<DetailCard | undefined>>;
};

export default function EditContentsSection({ card }: Props) {
  return <section></section>;
}
