"use client";
import React from "react";
import StyledButton from "./ui/StyledButton";
import { Content } from "@/model/learningCard";

type Props = {
  selected: Content[];
  handleShowModal: () => void;
};

export default function StartButton({ handleShowModal, selected }: Props) {
  if (selected.length == 0)
    return (
      <StyledButton
        text="학습하기"
        style="w-full pointer-events-none bg-gray-300 text-gray-600"
        handler={handleShowModal}
      />
    );
  return (
    <StyledButton text="학습하기" style="w-full" handler={handleShowModal} />
  );
}
