"use client";
import React from "react";
import StyledButton from "../../ui/StyledButton";
import { useRouter } from "next/navigation";

type Props = {
  cardId: string;
};
export default function StudyButton({ cardId }: Readonly<Props>) {
  const navigate = useRouter();
  const onClick = () => {
    navigate.push(`/study/${cardId}`);
  };
  return (
    <StyledButton
      text="학습하기"
      style="mb-2 bg-indigo-600"
      handler={() => onClick()}
    />
  );
}
