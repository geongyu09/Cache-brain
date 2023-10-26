"use client";
import { useState } from "react";
import StyledButton from "./ui/StyledButton";
import { importCardToOwn } from "@/apis/card";

type Props = {
  cardId: string;
};

export default function ImportButton({ cardId }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const text = isLoading ? "Loading..." : "import";
  const onClick = () => {
    importCardToOwn(cardId, setIsLoading);
  };
  return (
    <StyledButton
      handler={onClick}
      text={text}
      style={`${isLoading ? "w-full bg-gray-600 " : ""}`}
      disabled={isLoading}
    />
  );
}
