import React from "react";
import NewCardInput from "./NewCardInput";

export default function NewPageForm() {
  return (
    <form className="flex flex-col gap-2 w-full pr-4 pb-4 h-full border-r-2">
      <NewCardInput title="카드 이름" />
      <NewCardInput title="카드 설명" />
      <NewCardInput title="카드 태그" />
    </form>
  );
}
