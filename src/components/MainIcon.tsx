import React from "react";
import { Brain } from "./ui/icon";

type Props = {
  position: "header" | "nav";
};

export default function MainIcon({ position }: Props) {
  return (
    <div className={`flex gap-7 ${position == "nav" ? " w-full p-5" : ""}`}>
      <Brain />
      <h1>Cache Brain</h1>
    </div>
  );
}
