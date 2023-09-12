"use client";
import { LearningCardContent } from "@/model/learningCard";
import React from "react";
import useSWR from "swr";
import ContentList from "./ContentList";

export default function LearningCardContent({ params }: { params: string }) {
  const GET_CONTENT_URL = `/api/study/${params}`;
  const { data, isLoading, error } =
    useSWR<LearningCardContent>(GET_CONTENT_URL);

  const learned = data?.content.filter((item) => {
    if (item.process == 2) return item;
  });
  const learning =
    data?.content.filter((item) => {
      if (item.process == 2) return item;
    }) || [];
  const unlearned =
    data?.content.filter((item) => {
      if (item.process == 2) return item;
    }) || [];

  return (
    <section className="w-full overflow-y-auto h-screen px-10 pt-4 pb-[70px]">
      {data && (
        <ul className="h-full lg:overflow-auto">
          <ContentList title="learned" learned={learned} />
          <ContentList title="learning" learned={learning} />
          <ContentList title="unlearned" learned={unlearned} />
        </ul>
      )}
    </section>
  );
}
