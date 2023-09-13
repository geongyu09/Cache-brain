"use client";
import React, { useEffect, useState } from "react";
import LearningCardDetail from "./LearningCardDetail";
import LearningCardContent from "./LearningCardContent";
import { Content } from "@/model/learningCard";
import CreatePortal from "./CreatePortal";

type Process = "unlearned" | "learned" | "learning";
export type Filter = "all" | Process;

export default function StudyComponent({ params }: { params: string }) {
  const MAKE_NEW_LEARNINGCARD = "/api/study";
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Content[]>([]);

  useEffect(() => {
    fetch(MAKE_NEW_LEARNINGCARD, {
      method: "POST",
      body: JSON.stringify({ cardId: params }),
    });
  }, [params]);

  return (
    <section className="grid grid-cols-[4fr_11fr]">
      <LearningCardDetail
        params={params}
        filter={filter}
        modify={(filter: Filter) => setFilter(filter)}
        selected={selected}
      />
      <LearningCardContent
        params={params}
        filter={filter}
        selected={selected}
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
      <CreatePortal />
    </section>
  );
}
