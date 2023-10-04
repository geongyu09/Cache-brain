"use client";
import React, { useState } from "react";
import LearningCardDetail from "./LearningCardDetail";
import LearningCardContent from "./LearningCardContent";
import { Content } from "@/model/learningCard";
import CreatePortal from "./CreatePortal";
import useSWR from "swr";
import { DetailCard } from "@/model/card";
export type Progress = "unlearned" | "learned" | "learning";
export type Filter = "all" | Progress;

export default function StudyComponent({ params }: { params: string }) {
  // const MAKE_NEW_LEARNINGCARD = "/api/study";

  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Content[]>([]);
  const [showModal, setShowModal] = useState(false);
  const GET_CARD_DETAIL_URL = `/api/card/detail/${params}`;
  const {
    data: card,
    isLoading,
    error,
  } = useSWR<DetailCard>(GET_CARD_DETAIL_URL);

  // useEffect(() => {
  //   const fetching = async () => {
  //     await fetch(MAKE_NEW_LEARNINGCARD, {
  //       method: "POST",
  //       body: JSON.stringify({ cardId: params }),
  //     });
  //   };
  //   fetching();
  // }, [params]);

  return (
    <section className="grid grid-cols-[4fr_11fr]">
      {card && (
        <>
          <LearningCardDetail
            // params={params}
            card={card}
            isLoading={isLoading}
            error={error}
            filter={filter}
            selected={selected}
            modify={(filter: Filter) => setFilter(filter)}
            handleShowModal={() => setShowModal(true)}
          />
          <LearningCardContent
            params={params}
            filter={filter}
            selected={selected}
            showModal={showModal}
            selectedModify={(selected: Content, remove?: boolean) => {
              if (remove) {
                setSelected((prev) =>
                  prev.filter((item) => item._key !== selected._key)
                );
                return;
              }
              setSelected((prev) => [...prev, selected]);
            }}
          />
          <CreatePortal
            showModal={showModal}
            handleShowModal={() => setShowModal(false)}
            selected={selected}
            params={params}
          />
        </>
      )}
    </section>
  );
}
