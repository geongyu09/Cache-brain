import React from "react";
import StyledButton from "./ui/StyledButton";

export default function NewCardContentForm() {
  return (
    <form className="flex flex-col w-full h-full rounded xl px-5">
      <h3>문제</h3>
      <textarea className="w-full h-32 p-3 focus:ring-2 focus:ring-indigo-600 rounded-lg outline-none mb-4 resize-none" />
      <h3>답</h3>
      <textarea className="w-full p-3 mb-4 focus:ring-2 focus:ring-indigo-600 rounded-lg outline-none resize-none grow" />
      <StyledButton text="추가하기" />
    </form>
  );
}
