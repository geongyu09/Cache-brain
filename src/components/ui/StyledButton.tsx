"use client";

import React from "react";

type Props = {
  text: string;
  style?: string;
  disabled?: boolean;
  handler?: () => void;
};

export default function StyledButton({
  text,
  handler,
  style,
  disabled,
}: Props) {
  return (
    <button
      onClick={handler}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg ring-1 ring-slate-600 hover:opacity-80 text-slate-200 overflow-hidden ${
        style ? `${style}` : "bg-indigo-600"
      }`}
    >
      {text}
    </button>
  );
}
