"use client";
import React from "react";
import StyledButton from "./ui/StyledButton";
import { useRouter } from "next/navigation";

type Props = {
  cardId: string;
};
export default function StudyButton({ cardId }: Props) {
  const naviate = useRouter();
  const onClick = () => {
    naviate.push(`/study/${cardId}`);
  };
  return (
    <StyledButton text="학습하기" style="mb-2" handler={() => onClick()} />
  );
}
