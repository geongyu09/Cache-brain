"use client";
import React from "react";
import StyledButton from "./ui/StyledButton";

type Props = {
  handleShowModal: () => void;
};

export default function StartButton({ handleShowModal }: Props) {
  return (
    <StyledButton text="학습하기" style="w-full" handler={handleShowModal} />
  );
}
