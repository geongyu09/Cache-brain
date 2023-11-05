"use client";
import { useState } from "react";

type Props = {
  style?: string;
};

export default function HeaderForm({ style }: Props) {
  const [keyword, setKeyword] = useState("");
  return (
    <form className={`hidden lg:inline ${style}`}>
      <input
        type="text"
        className="block w-80 rounded-md border-0 py-1.5 px-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
        placeholder="Search Card"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </form>
  );
}
