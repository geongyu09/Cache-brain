"use client";
import { useState } from "react";
import CreateSearchSection from "./CreateSearchSection";

type Props = {
  style?: string;
};

export default function HeaderForm({ style }: Props) {
  const [focus, setFocus] = useState(false);
  return (
    <form className={`hidden lg:inline ${style}`}>
      <input
        type="text"
        className="block relative w-80 rounded-md border-0 py-1.5 px-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
        placeholder="Search Card"
        onClick={() => {
          setFocus(true);
        }}
      />
      <CreateSearchSection
        focus={focus}
        goBack={() => {
          setFocus(false);
        }}
      />
    </form>
  );
}
