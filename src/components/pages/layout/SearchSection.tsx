"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { Card } from "@/model/card";
import StyledButton from "../../ui/StyledButton";
import useDebounce from "@/hooks/useDebounce";
import SearchContentSectoin from "./SearchContentSectoin";
import { Loading } from "../../ui/icon";

type Props = {
  goBack: () => void;
};

export default function SearchSection({ goBack }: Readonly<Props>) {
  const [keyword, setKeyword] = useState("");
  const [focus, setFocus] = useState("");
  const debouncedKeyword = useDebounce(keyword, 1000);
  const {
    data: cards,
    isLoading,
    // error,
  } = useSWR<Card[]>(`api/card/search/${debouncedKeyword}`);
  useEffect(() => {
    setFocus("");
  }, [keyword]);
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
        <StyledButton
          text="x"
          handler={() => {
            goBack();
          }}
        />
      </form>
      <section className="w-full h-full max-w-6xl mx-auto overflow-y-auto">
        {isLoading ? <Loading /> : null}
        {cards ? (
          <SearchContentSectoin cards={cards} modify={setFocus} id={focus} />
        ) : null}
      </section>
    </section>
  );
}
