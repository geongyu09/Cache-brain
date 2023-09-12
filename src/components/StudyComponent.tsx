"use client";
import React, { useEffect, useState } from "react";
import LearningCardDetail from "./LearningCardDetail";
import LearningCardContent from "./LearningCardContent";

type Process = "unlearned" | "learned" | "learning";
export type Filter = "all" | Process;

export default function StudyComponent({ params }: { params: string }) {
  const MAKE_NEW_LEARNINGCARD = "/api/study";
  const [filter, setFilter] = useState<Filter>("all");

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
      />
      <LearningCardContent params={params} filter={filter} />
    </section>
  );
}
