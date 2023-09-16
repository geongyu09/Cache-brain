"use client";

import React from "react";

type Props = {
  text: string;
  style?: string;
  handler?: () => void;
};

export default function StyledButton({ text, handler, style }: Props) {
  return (
    <button
      onClick={handler}
      className={`px-4 py-2 rounded-lg ring-1 ring-slate-400 hover:opacity-80 text-slate-200 ${
        style ? `${style}` : "bg-indigo-600"
      }`}
    >
      {text}
    </button>
  );
}
