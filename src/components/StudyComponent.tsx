"use client";
import React, { useEffect } from "react";
import LearningCardDetail from "./LearningCardDetail";
import LearningCardContent from "./LearningCardContent";

export default function StudyComponent({ params }: { params: string }) {
  useEffect(() => {
    fetch("/api/study", {
      method: "POST",
      body: JSON.stringify({ cardId: params }),
    });
  }, [params]);

  return (
    <section className="flex">
      <LearningCardDetail params={params} />
      <LearningCardContent params={params} />
    </section>
  );
}
