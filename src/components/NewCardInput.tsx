import React from "react";

type Props = {
  title: string;
};
export default function NewCardInput({ title }: Props) {
  return (
    <>
      <h3>{title}</h3>
      <input
        type="text"
        className="w-full p-3 ring-1 ring-indigo-50 rounded-lg outline-none mb-4 focus:ring-2 focus:ring-indigo-600"
      />
    </>
  );
}
