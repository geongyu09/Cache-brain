"use client";
import React, { useEffect } from "react";
import LearningCardDetail from "./LearningCardDetail";
import LearningCardContent from "./LearningCardContent";

export default function StudyComponent({ params }: { params: string }) {
  const MAKE_NEW_LEARNINGCARD = "/api/study";
  useEffect(() => {
    fetch(MAKE_NEW_LEARNINGCARD, {
      method: "POST",
      body: JSON.stringify({ cardId: params }),
    });
  }, [params]);

  return (
    <section className="grid grid-cols-[4fr_11fr]">
      <LearningCardDetail params={params} />
      <LearningCardContent params={params} />
    </section>
  );
}
