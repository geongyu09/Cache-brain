import StyledButton from "./ui/StyledButton";
import { DetailCard } from "@/model/card";
import { updateCard } from "@/apis/card";
import { useState } from "react";

type Props = {
  editCard: DetailCard;
  isOk: boolean;
};

export default function EditSaveButton({ editCard, isOk }: Readonly<Props>) {
  const [isLoading, setIsLoading] = useState(false);
  let text = "save";
  if (isLoading) text = "저장중...";

  return (
    <StyledButton
      text={text}
      handler={() => updateCard(editCard, setIsLoading)}
      style={`${isLoading || !isOk ? "cursor-not-allowed bg-gray-600" : ""}`}
      disabled={isLoading}
    />
  );
}
