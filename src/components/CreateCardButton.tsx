import React from "react";
import StyledButton from "./ui/StyledButton";
import { DetailCard } from "@/model/card";

type Props = {
  card: DetailCard;
};
export default function CreateCardButton({ card }: Props) {
  return <StyledButton text="create" />;
}
