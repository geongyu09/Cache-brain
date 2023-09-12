"use client";
import { DetailCard } from "@/model/card";
import React from "react";
import useSWR from "swr";
import { Filter } from "./StudyComponent";
import FilterComponent from "./FilterComponent";

type Props = {
  params: string;
  modify: (filter: Filter) => void;
  filter: Filter;
};

export default function LearningCardDetail({ params, modify, filter }: Props) {
  const GET_CARD_DETAIL_URL = `/api/card/detail/${params}`;
  const {
    data: card,
    isLoading,
    error,
  } = useSWR<DetailCard>(GET_CARD_DETAIL_URL);

  return (
    <section className="bg-slate-100 px-5 h-screen">
      <div className="w-full border-b-2"> {`<-`}</div>
      {card && (
        <>
          <h2 className="my-4 text-lg ">{card?.title}</h2>
          <p>{card?.description}</p>
        </>
      )}
      <FilterComponent modify={modify} filter={filter} />
    </section>
  );
}
