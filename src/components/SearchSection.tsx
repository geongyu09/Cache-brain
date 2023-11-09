"use client";
import useSWR from "swr";
import { useState } from "react";
import { Card } from "@/model/card";
import StyledButton from "./ui/StyledButton";

type Props = {
  goBack: () => void;
};

export default function SearchSection({ goBack }: Readonly<Props>) {
  const [keyword, setKeyword] = useState("");
  const {
    data: cards,
    // isLoading,
    // error,
  } = useSWR<Card[]>(`api/card/search/${keyword}`);

  return (
    <section className="w-full h-full absolute bg-white">
      <form className="w-full pl-60 pr-20 flex justify-center items-center py-2 border-b-2 ">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="input keyword"
          className="w-full text-xl px-6 py-3 mx-auto outline-none  border-l-2"
        />
        <StyledButton text="x" />
      </form>
      {cards?.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
      {/* <CardList cards={} /> */}
    </section>
  );
}
