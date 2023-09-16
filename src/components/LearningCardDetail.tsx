"use client";
import { DetailCard } from "@/model/card";
import React from "react";
import useSWR from "swr";
import { Filter } from "./StudyComponent";
import FilterComponent from "./FilterComponent";
import { useRouter } from "next/navigation";
import StartButton from "./StartButton";
import { Content } from "@/model/learningCard";
import { BackArrow } from "./ui/icon";

type Props = {
  params: string;
  modify: (filter: Filter) => void;
  filter: Filter;
  selected: Content[];
  handleShowModal: () => void;
};

export default function LearningCardDetail({
  params,
  modify,
  filter,
  handleShowModal,
  selected,
}: Props) {
  const GET_CARD_DETAIL_URL = `/api/card/detail/${params}`;
  const router = useRouter();
  const {
    data: card,
    isLoading,
    error,
  } = useSWR<DetailCard>(GET_CARD_DETAIL_URL);

  return (
    <section className="flex flex-col bg-slate-100 px-5 h-screen pb-[100px]">
      <div onClick={() => router.back()} className="w-full border-b-2">
        <BackArrow />
      </div>
      {card && (
        <>
          <h2 className="my-4 text-lg ">{card?.title}</h2>
          <p>{card?.description}</p>
        </>
      )}
      <FilterComponent modify={modify} filter={filter} />
      <StartButton handleShowModal={handleShowModal} selected={selected} />
    </section>
  );
}
