"use client";
import React from "react";
import StyledButton from "./ui/StyledButton";
import { useRouter } from "next/navigation";

export default function NewCardButton() {
  const naviate = useRouter();
  const onClick = () => {
    naviate.push("/new");
  };
  return <StyledButton text={"+ new card"} handler={() => onClick()} />;
}
