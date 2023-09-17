"use client";
import React from "react";
import StyledButton from "./ui/StyledButton";
import { useRouter } from "next/navigation";

export default function RouteBackButton() {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return <StyledButton text="만들기" handler={onClick} />;
}
