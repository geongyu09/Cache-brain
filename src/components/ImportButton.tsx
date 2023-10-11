import React, { useState } from "react";
import StyledButton from "./ui/StyledButton";

type Props = {
  cardId: string;
};

export default function ImportButton({ cardId }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const IMPORT_URL = "/api/card/importCard";
  const text = isLoading ? "Loading..." : "import";
  const onClick = () => {
    const postCard = async () => {
      setIsLoading(true);
      await fetch(IMPORT_URL, {
        method: "POST",
        body: JSON.stringify({ cardId }),
      });
      setIsLoading(false);
    };
    postCard();
  };
  return (
    <StyledButton
      text={text}
      style={`${isLoading ? "w-full bg-gray-600 " : ""}`}
      handler={onClick}
      disabled={!isLoading}
    />
  );
}
