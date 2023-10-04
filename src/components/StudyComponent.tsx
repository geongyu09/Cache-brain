"use client";
import React, { useState } from "react";
import LearningCardDetail from "./LearningCardDetail";
import LearningCardContent from "./LearningCardContent";
import { Content } from "@/model/learningCard";
import CreatePortal from "./CreatePortal";
import useCard from "@/hooks/useCard";
export type Progress = "unlearned" | "learned" | "learning";
export type Filter = "all" | Progress;

export default function StudyComponent({ params }: { params: string }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Content[]>([]);
  const [showModal, setShowModal] = useState(false);
  const { data: card, isLoading, error } = useCard(params);
  return (
    <section className="grid grid-cols-[4fr_11fr]">
      {card && (
        <>
          <LearningCardDetail
            card={card}
            isLoading={isLoading}
            error={error}
            filter={filter}
            selected={selected}
            modify={(filter: Filter) => setFilter(filter)}
            handleShowModal={() => setShowModal(true)}
          />
          <LearningCardContent
            content={card.content}
            isLoading={isLoading}
            error={error}
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
