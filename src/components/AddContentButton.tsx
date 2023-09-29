import React from "react";
import StyledButton from "./ui/StyledButton";
import { DetailCard } from "@/model/card";

type Props = {
  setEditCard: React.Dispatch<React.SetStateAction<DetailCard | undefined>>;
};

export default function AddContentButton({ setEditCard }: Props) {
  const onClick = () => {
    setEditCard((prev) => {
      if (
        prev?.content.find(
          (item) => item.problem.trim() == "" || item.answer.trim() == ""
        )
      )
        return { ...prev! };
      if (prev?.content.length! >= 30) return { ...prev! };
      return {
        ...prev!,
        content: [
          ...prev!.content,
          { _key: Date.now().toString(), problem: "", answer: "" },
        ],
      };
    });
  };
  return <StyledButton text="Add content" handler={onClick} />;
}
