import StyledButton from "./ui/StyledButton";
import { DetailCard } from "@/model/card";
import { updateCard } from "@/apis/card";
import { useState } from "react";

type Props = {
  editCard: DetailCard;
};

export default function EditSaveButton({ editCard }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  let text = "save";
  if (isLoading) text = "저장중...";

  return (
    <>
      <StyledButton
        text={text}
        handler={() => updateCard(editCard, setIsLoading)}
        style={`${isLoading ? "cursor-not-allowed bg-gray-600" : ""}`}
        disabled={isLoading}
      />
    </>
  );
}
