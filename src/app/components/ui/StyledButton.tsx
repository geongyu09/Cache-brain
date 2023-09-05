"use client";

import React from "react";
import { Text } from "../LoginButton";

type Props = {
  text: Text;
  handler: () => {};
};

export default function StyledButton({ text, handler }: Props) {
  return (
    <button onClick={handler} className="px-4 py-4 rounded-lg bg-indigo-300">
      {text}
    </button>
  );
}
