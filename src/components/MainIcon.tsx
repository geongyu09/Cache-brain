import React from "react";
import { Brain } from "./ui/icon";

type Props = {
  position: "header" | "nav";
};

export default function MainIcon({ position }: Readonly<Props>) {
  return (
    <div
      className={`flex z-50 relative gap-7 cursor-default ${
        position == "nav" ? " w-full p-5" : ""
      }`}
    >
      <Brain />
      <h1>Cache Brain</h1>
    </div>
  );
}
