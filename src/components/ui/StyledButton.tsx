"use client";

import React from "react";
import { Text } from "../LoginButton";

type Props = {
  text: string;
  handler?: () => {};
};

export default function StyledButton({ text, handler }: Props) {
  return (
    <button
      onClick={handler}
      className="px-4 py-2 rounded-lg bg-indigo-600 ring-1 ring-slate-400 hover:opacity-80 text-slate-200"
    >
      {text}
    </button>
  );
}
