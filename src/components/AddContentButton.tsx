"use client";
import { useEffect, useState } from "react";
import StyledButton from "./ui/StyledButton";
import { CardContent, DetailCard } from "@/model/card";

type Props = {
  content: CardContent[];
  setEditCard: React.Dispatch<React.SetStateAction<DetailCard | undefined>>;
};

export default function AddContentButton({ content, setEditCard }: Props) {
  const [isOkToCreate, setIsOkToCreate] = useState(false);
  useEffect(() => {
    if (
      !content.find(
        (item) => item.problem.trim() == "" || item.answer.trim() == ""
      ) &&
      content.length! < 30
    ) {
      setIsOkToCreate(true);
    } else setIsOkToCreate(false);
  }, [content]);
  const onClick = () => {
    setEditCard((prev) => {
      if (isOkToCreate)
        return {
          ...prev!,
          content: [
            ...prev!.content,
            {
              _key: Date.now().toString(),
              problem: "",
              answer: "",
              progress: 0,
            },
          ],
        };
      return { ...prev! };
    });
  };
  return (
    <StyledButton
      text="Add content"
      style={`w-full ${
        !isOkToCreate
          ? "bg-gray-600 hover:opacity-100 cursor-not-allowed shrink-0"
          : "shrink-0 bg-indigo-600"
      }`}
      handler={onClick}
    />
  );
}
