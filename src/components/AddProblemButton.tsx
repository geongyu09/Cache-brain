import React from "react";
import StyledButton from "./ui/StyledButton";

type Props = {
  isLoading: boolean;
  isDone: boolean;
};

export default function AddProblemButton({ isLoading, isDone }: Props) {
  const disabled = Boolean(isLoading || isDone);
  return (
    <StyledButton
      text="add problem"
      disabled={disabled}
      style={`${
        disabled
          ? "bg-gray-600 hover:opacity-100 hover:bg-gray-600 cursor-not-allowed"
          : ""
      }`}
    />
  );
}
