import { Card } from "@/model/card";
import React from "react";

type Props = {
  title: string;
  text: string;
  readOnly: boolean;
  setCard: (text: string) => void;
};

export default function NewCardInput({
  title,
  text,
  setCard,
  readOnly,
}: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const typedText = e.target.value as string;
    setCard(typedText);
  };
  return (
    <div className="px-1">
      <h3>{title}</h3>
      <input
        type="text"
        readOnly={readOnly}
        value={text}
        onChange={onChange}
        className={`w-full p-3 ring-1 ring-indigo-50 rounded-lg outline-none mb-4 ${
          readOnly ? "" : "focus:ring-2 focus:ring-indigo-600 "
        }`}
      />
    </div>
  );
}
